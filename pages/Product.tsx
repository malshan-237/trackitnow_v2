import React from 'react';
import { Cpu, Server, Layout, Database, Smartphone, Lock, Activity, Map } from 'lucide-react';

const Product: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Product & Features</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            A complete tracking solution combining robust hardware with intuitive software.
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What is TrackItNow?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            TrackItNow is a state-of-the-art GPS and GSM-based tracking system designed for versatility. 
            Whether you are managing a logistics fleet or securing your personal car, our system enables you 
            to monitor vehicles in real-time using a secure, responsive web dashboard accessible from any device.
          </p>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">System Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4 text-accent">
                <Map size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">GPS Module</h3>
              <p className="text-slate-500 text-sm">Collects precise latitude and longitude coordinates from satellites.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4 text-accent">
                <Server size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">GSM Module</h3>
              <p className="text-slate-500 text-sm">Transmits location data securely to our cloud server via cellular networks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4 text-accent">
                <Layout size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Web Platform</h3>
              <p className="text-slate-500 text-sm">Displays live location, history, and analytics on a user-friendly map.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Real-Time Tracking", desc: "Watch vehicles move on the map instantly." },
              { icon: Lock, title: "Theft Detection", desc: "Automatic alerts for unauthorized movement." },
              { icon: Map, title: "Geo-Fencing", desc: "Set boundaries and get notified upon exit/entry." },
              { icon: Database, title: "History & Reports", desc: "Review past routes, speeds, and stops." },
              { icon: Smartphone, title: "Multi-Device Access", desc: "Works perfectly on mobile, tablet, and desktop." },
              { icon: Lock, title: "Secure User Login", desc: "Role-based access control for fleet managers." },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:border-accent/30 transition-colors">
                <feature.icon className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">{feature.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Software Specs */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={32} className="text-accent" />
                <h3 className="text-2xl font-bold">Hardware Specifications</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Microcontroller:</strong> ESP32 / Arduino Compatible
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>GPS Module:</strong> NEO-6M (High Precision)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Connectivity:</strong> GSM/GPRS SIM800L
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Power:</strong> Integrated Power Management with Battery Backup
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layout size={32} className="text-accent" />
                <h3 className="text-2xl font-bold">Software Specifications</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Frontend:</strong> React, Tailwind CSS
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Backend:</strong> Node.js / Cloud Functions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Database:</strong> Real-time Cloud Database
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Maps API:</strong> Google Maps / OpenStreetMap Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;