'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0F0A1F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#6C5DD3] to-[#8677E5] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <div className="text-2xl text-gray-300 font-light space-y-2">
            <p>Have a project in mind?</p>
            <p>Want to collaborate?</p>
            <p>Just want to say hi?</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[#6C5DD3] mb-6 text-xl">Send a Message</h2>
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                  placeholder="Your email"
                />
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3]"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#6C5DD3] resize-none"
                  placeholder="Your message"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6C5DD3] text-white px-8 py-3 rounded-full hover:bg-[#8677E5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-[#6C5DD3] mb-4 text-xl">Location</h2>
              <p className="text-gray-300">Gia Lai City, Vietnam</p>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4 text-xl">Email</h2>
              <a 
                href="mailto:ngodat213@gmail.com"
                className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
              >
                ngodat213@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-[#6C5DD3] mb-4 text-xl">Follow Me</h2>
              <div className="space-x-6">
                <a 
                  href="https://github.com/ngodat213" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ngodat213" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.facebook.com/ngodat213" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#6C5DD3] transition-all duration-300"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 