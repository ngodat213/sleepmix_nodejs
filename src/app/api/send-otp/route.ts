import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { adminDb } from '@/lib/firebase-admin';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if user exists in Firestore
    const userSnapshot = await adminDb.collection('users')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (userSnapshot.empty) {
      return NextResponse.json(
        { error: 'Email not found' },
        { status: 404 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const timestamp = Date.now();

    // Hash OTP
    const hashedOtp = crypto
      .createHash('sha256')
      .update(otp)
      .digest('hex');

    // Store hashed OTP in Firestore with 5 minutes expiration
    await adminDb.collection('otps').doc(email).set({
      hashedOtp,
      timestamp,
      expiresAt: timestamp + 5 * 60 * 1000 // 5 minutes
    });

    // Send email using Resend
    await resend.emails.send({
      from: 'SleepMix <noreply@sleepmix.app>',
      to: email,
      subject: 'Account Deletion OTP',
      html: `
        <h2>Account Deletion Request</h2>
        <p>Your OTP for account deletion is: <strong>${otp}</strong></p>
        <p>This code will expire in 5 minutes.</p>
        <p>If you did not request to delete your account, please ignore this email.</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
} 