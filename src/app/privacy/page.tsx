export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F0A1F]">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Privacy Policy – SleepMix
            </h1>
            <p className="text-gray-300 mb-12">Last updated: July 6, 2025</p>
            
            <div className="space-y-12 text-gray-300">
              <p className="mb-8">
                SleepMix ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our Android application available on Google Play Store.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following personal information when you use certain features of the app:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Profile picture</li>
                  <li>In-app activity data (such as usage behavior and feature interaction)</li>
                  <li>Device information (device type, operating system version, unique device identifiers)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Collect Data</h2>
                <p className="mb-4">We collect data when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use specific features within the app (such as listening to sounds, selecting playlists)</li>
                  <li>View or interact with ads or in-app purchases</li>
                  <li>Grant permissions to the app (such as notification)</li>
                  <li>Contact our support team</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
                <p className="mb-4">Your information is used for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To analyze user behavior and improve the app experience</li>
                  <li>To send notifications about new content or features</li>
                  <li>To personalize advertising content</li>
                  <li>To display ads and track their effectiveness</li>
                  <li>To manage user purchases and subscription access</li>
                  <li>To respond to your support requests and feedback</li>
                  <li>To prevent fraud and ensure app security</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Data Sharing</h2>
                <p className="mb-4">We may share limited data with third-party service providers that help us operate and improve the app, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Firebase (Google LLC): used for analytics, cloud storage, and push notifications</li>
                  <li>Google AdMob (Google LLC): used to serve advertisements and deliver personalized ads based on your app usage and behavior</li>
                  <li>Google Analytics for Firebase: used to analyze user behavior, measure session time, detect crashes, and improve app performance. Analytics data is collected in an anonymized form and does not include personally identifiable information</li>
                  <li>Google Play Services: used for app functionality and security</li>
                </ul>
                <p className="mt-4">
                  These service providers are bound by their respective privacy policies and data processing agreements to protect your information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">5. User Rights</h2>
                <p className="mb-4">Under applicable data protection laws, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Restrict or object to data processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Opt out of personalized ads by adjusting your device settings:
                    <ul className="list-disc pl-6 mt-2">
                      <li>On Android: go to Settings → Google → Ads → "Opt out of Ads Personalization"</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided in the Contact Us section.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Storage and Security</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data is securely stored using Firebase and Cloudinary</li>
                  <li>We implement technical and organizational measures to protect your data from unauthorized access or modification</li>
                  <li>Data is retained only as long as necessary for the purposes described in this policy</li>
                  <li>We use industry-standard encryption for data transmission</li>
                  <li>Regular security audits and updates are performed</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Children's Privacy</h2>
                <p className="mb-4">
                  SleepMix is intended for users aged 3 years and older. We comply with the Children's Online Privacy Protection Act (COPPA) and similar regulations worldwide.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not knowingly collect personal information from children under 13 without verifiable parental consent</li>
                  <li>Parents/guardians can review, delete, or refuse further collection of their child's information</li>
                  <li>Child-specific content is designed to avoid collecting unnecessary personal information</li>
                  <li>Advertising to children is limited and age-appropriate</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Policy Updates</h2>
                <p className="mb-4">
                  We may update this Privacy Policy to reflect changes in app functionality, legal obligations, or service providers. When we make material changes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We will notify you through the app or by email</li>
                  <li>The "Last updated" date at the top of this policy will be revised</li>
                  <li>You may be asked to review and accept the updated policy</li>
                  <li>Continued use of the app after changes constitutes acceptance</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
                <p className="mb-4">If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:</p>
                <ul className="list-none space-y-2">
                  <li>Email: <a href="mailto:ngodat.it213@gmail.com" className="text-blue-400 hover:text-blue-300">ngodat.it213@gmail.com</a></li>
                  <li>Address: Thu Duc City, Ho Chi Minh City, Vietnam</li>
                  <li>Developer Name: Ngo Van Tien Dat</li>
                </ul>
                <p className="mt-4">
                  We will respond to your request within a reasonable timeframe and in accordance with applicable data protection laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">10. In-App Purchases and Payments</h2>
                <p className="mb-4">
                  SleepMix may offer in-app purchases (IAP) to unlock premium features or content. All transactions are processed securely through Google Play Billing.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processing is handled entirely by Google Play</li>
                  <li>We do not collect or store your payment details</li>
                  <li>Purchase history and subscription status are stored for functionality</li>
                  <li>Refunds are handled through Google Play's refund policy</li>
                  <li>Subscription management is available in your Google Play account settings</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-white">11. Compliance with Laws</h2>
                <p className="mb-4">
                  This Privacy Policy complies with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Play Developer Program Policies</li>
                  <li>General Data Protection Regulation (GDPR)</li>
                  <li>California Consumer Privacy Act (CCPA)</li>
                  <li>Children's Online Privacy Protection Act (COPPA)</li>
                  <li>Other applicable privacy and data protection laws</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 