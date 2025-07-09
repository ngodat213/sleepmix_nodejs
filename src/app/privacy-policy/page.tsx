export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F0A1F]">
      <div className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Privacy Policy – SleepMix
            </h1>
            
            <div className="space-y-8">
              <p className="text-gray-300">
                Last updated: July 6, 2025
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                <p className="text-gray-300">
                  SleepMix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you use our mobile application and related services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
                <p className="text-gray-300">
                  We may collect the following personal information when you use our app:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Email address</li>
                  <li>Device information</li>
                  <li>Usage data (e.g., app interactions, preferences)</li>
                  <li>Sleep-related data and preferences</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">2. How We Collect Data</h2>
                <p className="text-gray-300">
                  We collect information in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Directly from you when you provide it</li>
                  <li>Automatically through the app while you use it</li>
                  <li>From third-party services with your consent</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@sleepmix.app" className="text-blue-400 hover:text-blue-300">
                    privacy@sleepmix.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 