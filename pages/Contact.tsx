import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900">Contact TrackItNow</h1>
          <p className="mt-4 text-xl text-slate-600">Have questions? We are here to help you get started.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-fit">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Support</h3>
                  <p className="text-slate-600 mb-1">Our team typically responds within 24 hours.</p>
                  <a href="mailto:support@trackitnow.com" className="text-accent font-semibold hover:underline">support@trackitnow.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone Number</h3>
                  <p className="text-slate-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15551234567" className="text-accent font-semibold hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office Location</h3>
                  <p className="text-slate-600">
                    123 Tech Park, Innovation City,<br/>
                    Silicon Valley, CA 94000
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Map Visual */}
            <div className="mt-8 h-48 bg-slate-100 rounded-lg overflow-hidden relative">
               <img src="https://picsum.photos/600/300?grayscale&blur=2" alt="Map Location" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded shadow text-sm font-bold text-slate-700">View on Google Maps</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 mt-2">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-accent font-semibold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit Message'}
                  {!formStatus && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;