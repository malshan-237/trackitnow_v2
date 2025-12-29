import React from 'react';
import { Satellite, Cpu, Wifi, Cloud, Monitor, ArrowRight, ShieldCheck, Lock, Signal, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">How TrackItNow Works</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, reliable, and efficient tracking process from satellite to screen.
          </p>
        </div>
      </div>

      {/* Step Flow */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Satellite, title: "1. Signal", desc: "GPS module receives signals from satellites." },
                { icon: Cpu, title: "2. Process", desc: "Microcontroller processes coordinates." },
                { icon: Wifi, title: "3. Transmit", desc: "Data sent via GSM network." },
                { icon: Cloud, title: "4. Store", desc: "Cloud server securely stores data." },
                { icon: Monitor, title: "5. Display", desc: "Live tracking on your dashboard." },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center group hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors border border-slate-100">
                    <step.icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Diagram */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-12">Technical Data Flow</h2>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-w-[600px]">
                {/* Hardware Block */}
                <div className="flex flex-col gap-2 p-4 border-2 border-slate-200 rounded-lg bg-slate-50">
                    <div className="font-bold text-slate-700 mb-2">Vehicle Hardware</div>
                    <div className="flex gap-2">
                        <div className="bg-blue-100 p-2 rounded text-xs font-bold text-blue-800">GPS</div>
                        <div className="bg-blue-100 p-2 rounded text-xs font-bold text-blue-800">Sensors</div>
                    </div>
                    <div className="text-center my-1">⬇</div>
                    <div className="bg-slate-200 p-2 rounded text-sm font-bold border border-slate-300">Controller (ESP32)</div>
                    <div className="text-center my-1">⬇</div>
                    <div className="bg-green-100 p-2 rounded text-sm font-bold text-green-800 border border-green-200">GSM Module</div>
                </div>

                <ArrowRight className="text-slate-400 hidden md:block" size={32} />
                <div className="md:hidden text-slate-400 rotate-90 my-2"><ArrowRight size={32} /></div>

                {/* Cloud Block */}
                <div className="flex flex-col justify-center items-center p-6 border-2 border-dashed border-accent/50 rounded-full w-48 h-48 bg-accent/5">
                    <Cloud size={48} className="text-accent mb-2" />
                    <div className="font-bold text-slate-800">Cloud Server</div>
                    <div className="text-xs text-slate-500">Database & API</div>
                </div>

                <ArrowRight className="text-slate-400 hidden md:block" size={32} />
                <div className="md:hidden text-slate-400 rotate-90 my-2"><ArrowRight size={32} /></div>

                {/* Client Block */}
                <div className="flex flex-col gap-4 p-4 border-2 border-slate-200 rounded-lg bg-slate-50">
                    <div className="font-bold text-slate-700">Client Side</div>
                    <div className="bg-white border border-slate-200 p-3 rounded shadow-sm flex items-center gap-2">
                        <Monitor size={20} className="text-slate-500"/> Web Dashboard
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded shadow-sm flex items-center gap-2">
                        <Smartphone size={20} className="text-slate-500"/> Mobile App
                    </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Security & Reliability</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                    <Lock size={48} className="text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Encrypted Transmission</h3>
                    <p className="text-slate-600">All data sent from the device to the cloud is encrypted to prevent interception.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <ShieldCheck size={48} className="text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
                    <p className="text-slate-600">Industry-standard authentication ensures only you have access to your dashboard.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Signal size={48} className="text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2">Reliable Connectivity</h3>
                    <p className="text-slate-600">Auto-reconnect features ensure data is buffered and sent even in low coverage areas.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;