import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/2300031788cseh1@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Error sending message.');
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all duration-300 placeholder-transparent";
  const labelClasses = "absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-neon-blue peer-valid:-top-6 peer-valid:text-xs peer-valid:text-neon-blue";

  return (
    <div className="min-h-screen py-20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 space-y-8">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a href="mailto:2300031788cseh1@gmail.com" className="text-lg font-medium hover:text-neon-blue transition-colors">
                    2300031788cseh1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-black transition-all duration-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a href="tel:+919618833899" className="text-lg font-medium hover:text-neon-purple transition-colors">
                    +91-9618833899
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-lg font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-display font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/PeddintiPraneeth759" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 hover:text-neon-blue transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={24} />
                </a>
                <a href="mailto:2300031788cseh1@gmail.com" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 hover:text-neon-blue transition-all duration-300 hover:-translate-y-1" title="Contact via Email">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className={`${inputClasses} peer`}
                  placeholder=" "
                />
                <label htmlFor="name" className={labelClasses}>Name</label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className={`${inputClasses} peer`}
                  placeholder=" "
                />
                <label htmlFor="email" className={labelClasses}>Email</label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  className={`${inputClasses} peer resize-none`}
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className={labelClasses}>Message</label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  status === 'sending' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:shadow-neon-blue/25'
                }`}
              >
                <FaPaperPlane /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
