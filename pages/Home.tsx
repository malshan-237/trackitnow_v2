import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Globe, Bell, CheckCircle, ArrowRight } from 'lucide-react';
import MapSimulation from '../components/MapSimulation';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                TrackItNow <br/>
                <span className="text-accent">Smart Vehicle Tracking System</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Real-time GPS tracking, theft prevention, and intelligent monitoring for vehicles and assets. Stay connected to what moves you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo" className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:-translate-y-1">
                  View Live Demo
                </Link>
                <Link to="/product" className="px-8 py-3 bg-white text-slate-700 font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] w-full bg-slate-100 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
               <MapSimulation className="w-full h-full" />
               {/* Overlay Content */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Current Status</p>
                    <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Active Tracking
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Speed</p>
                    <p className="text-lg font-bold text-slate-900">64 km/h</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Everything You Need</h2>
            <p className="mt-4 text-slate-600">Complete control over your fleet and personal vehicles.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-lg flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Tracking</h3>
              <p className="text-slate-600">See exact vehicle positions on the map with live updates every few seconds.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Anti-Theft Alerts</h3>
              <p className="text-slate-600">Receive instant SMS and app notifications if your vehicle moves unexpectedly.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Geo-Fencing</h3>
              <p className="text-slate-600">Create custom safe zones and get notified when vehicles enter or exit.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Bell size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Dashboard</h3>
              <p className="text-slate-600">Access historical data, reports, and real-time status from anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TrackItNow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://picsum.photos/600/400?grayscale" 
                  alt="Reliable Technology" 
                  className="rounded-2xl shadow-xl z-10 relative"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl z-0"></div>
             </div>
             <div className="order-1 lg:order-2 mb-12 lg:mb-0">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose TrackItNow?</h2>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <CheckCircle className="text-accent flex-shrink-0" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900">Reliability & Accuracy</h4>
                     <p className="text-slate-600 text-sm">Engineered with high-grade GPS modules for precise location tracking within meters.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle className="text-accent flex-shrink-0" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900">Easy Installation</h4>
                     <p className="text-slate-600 text-sm">Plug-and-play hardware that integrates seamlessly with any vehicle type.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle className="text-accent flex-shrink-0" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900">Secure Data</h4>
                     <p className="text-slate-600 text-sm">End-to-end encryption ensures your location data remains private and secure.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take control of your vehicle security today</h2>
          <p className="text-slate-400 mb-10 text-lg">Join thousands of users who trust TrackItNow for their peace of mind.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-lg">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;