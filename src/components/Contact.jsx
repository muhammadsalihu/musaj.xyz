import React, { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 text-blue-600 flex items-center hover:text-blue-500 transition"
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </button>
          
          <h1 className="text-4xl font-bold text-white mb-8">
            Let's Work <span className="text-blue-600">Together</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white py-4 rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-400 mb-6">
                  Feel free to reach out with any questions about my services, availability, or if you have a project in mind.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <p className="text-blue-600">contact@musaj.xyz</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                    <p className="text-gray-400">New York, USA</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Availability</h4>
                    <p className="text-gray-400">Mon-Fri: 9am-5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What services do you offer?</h4>
                <p className="text-gray-400">I specialize in Python development, particularly Django backends, ML models with PyTorch, and custom Python solutions for various business needs.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What is your typical turnaround time?</h4>
                <p className="text-gray-400">Depending on project complexity, most backend services take 2-4 weeks, while ML model development ranges from 1-3 weeks.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Do you offer ongoing maintenance?</h4>
                <p className="text-gray-400">Yes, I provide maintenance packages for all completed projects to ensure everything continues to run smoothly.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">How do we get started?</h4>
                <p className="text-gray-400">Send me a message through this form with your project details, and I'll get back to you within 24 hours to discuss next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;