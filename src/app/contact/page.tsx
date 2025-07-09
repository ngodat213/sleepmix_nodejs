import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl font-bold text-white mb-12 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
          CONTACT
        </h1>
        
        <div className="text-2xl text-gray-300 font-light mb-24">
          For any enquiries, or just to<br />
          say hello, get in touch<br />
          and contact us.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="text-[#6C5DD3] mb-4">New projects</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">General inquiries</h2>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3] resize-none"
              />
            </div>

            <button className="bg-[#6C5DD3] text-white px-8 py-3 text-sm font-light rounded-full hover:bg-[#8677E5] transition-all duration-300">
              Send Message
            </button>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-[#6C5DD3] mb-4">Address</h2>
              <p className="text-gray-300">48A Road 494, Phuoc Long A, Thu Duc District, Ho Chi Minh City</p>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">My Email</h2>
              <Link 
                href="mailto:ngodat.it213@gmail.com" 
                className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
              >
                ngodat.it213@gmail.com
              </Link>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4">Follow us</h2>
              <div className="space-x-6">
                <Link 
                  href="https://github.com/ngodat213" 
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  Github
                </Link>
                <Link 
                  href="https://www.facebook.com/ngodat213" 
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  Facebook
                </Link>
                <Link 
                  href="https://linkedin.com/in/ngodat213" 
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 