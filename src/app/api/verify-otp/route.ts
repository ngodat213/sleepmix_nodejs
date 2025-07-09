import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { otp, email } = await request.json();

    if (!otp || !email) {
      return NextResponse.json(
        { error: 'OTP and email are required' },
        { status: 400 }
      );
    }

    // Get stored OTP data
    const otpDoc = await adminDb.collection('otps').doc(email).get();
    const otpData = otpDoc.data();

    if (!otpData) {
      return NextResponse.json(
        { error: 'No OTP found for this email' },
        { status: 404 }
      );
    }

    const now = Date.now();

    // Check if OTP is expired
    if (now > otpData.expiresAt) {
      await adminDb.collection('otps').doc(email).delete();
      return NextResponse.json(
        { error: 'OTP has expired' },
        { status: 400 }
      );
    }

    // Hash the provided OTP for comparison
    const hashedInputOtp = crypto
      .createHash('sha256')
      .update(otp)
      .digest('hex');

    // Verify OTP
    if (hashedInputOtp !== otpData.hashedOtp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Delete the used OTP
    await adminDb.collection('otps').doc(email).delete();

    // Delete user document from Firestore
    await adminDb.collection('users').where('email', '==', email).limit(1).get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs[0].ref.delete();
        }
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
} 