import React, { useState, useEffect } from 'react';
import MapSimulation from '../components/MapSimulation';
import { Truck, Shield, Clock, Wifi } from 'lucide-react';

const Demo: React.FC = () => {
  const [stats, setStats] = useState({
    speed: 60,
    lat: 40.7128,
    lng: -74.0060,
    signal: 'Strong'
  });

  // Simulate changing data
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        speed: Math.max(0, Math.min(120, prev.speed + (Math.random() - 0.5) * 10)),
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001,
        signal: Math.random() > 0.1 ? 'Strong' : 'Moderate'
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Live Demo</h1>
          <p className="text-sm text-slate-500">Monitoring Vehicle ID: <span className="font-mono text-accent">TRK-8821X</span></p>
        </div>
        <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
            </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-grow overflow-hidden bg-slate-100">
        
        {/* Main Map Area */}
        <div className="flex-grow relative bg-slate-200 h-[50vh] lg:h-auto">
            <MapSimulation className="w-full h-full" />
            
            {/* Overlay Controls */}
            <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg flex flex-col gap-2">
               <button className="p-2 hover:bg-slate-100 rounded text-slate-600" title="Zoom In">+</button>
               <button className="p-2 hover:bg-slate-100 rounded text-slate-600" title="Zoom Out">-</button>
            </div>
        </div>

        {/* Sidebar / Info Panel */}
        <div className="w-full lg:w-96 bg-white border-l border-slate-200 overflow-y-auto z-10">
            <div className="p-6 space-y-6">
                
                {/* Real-time Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Current Speed</p>
                        <p className="text-2xl font-mono font-bold text-slate-800">{stats.speed.toFixed(1)} <span className="text-sm font-sans text-slate-400">km/h</span></p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Network</p>
                        <div className="flex items-center gap-2 mt-1">
                            <Wifi size={20} className="text-green-500" />
                            <p className="font-bold text-slate-800">{stats.signal}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Location Coordinates</p>
                    <div className="font-mono text-sm bg-slate-900 text-green-400 p-3 rounded-lg">
                        LAT: {stats.lat.toFixed(6)}<br/>
                        LNG: {stats.lng.toFixed(6)}
                    </div>
                </div>

                <hr className="border-slate-100" />

                {/* Use Cases List */}
                <div>
                    <h3 className="font-bold text-slate-900 mb-4">Applications</h3>
                    <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Shield size={16} /></div>
                            <div>
                                <h4 className="text-sm font-bold">Personal Security</h4>
                                <p className="text-xs text-slate-500">Prevent theft and monitor family vehicle safety.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-start">
                            <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Truck size={16} /></div>
                            <div>
                                <h4 className="text-sm font-bold">Fleet Management</h4>
                                <p className="text-xs text-slate-500">Optimize routes and fuel usage for business logistics.</p>
                            </div>
                        </div>
                         <div className="flex gap-3 items-start">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Clock size={16} /></div>
                            <div>
                                <h4 className="text-sm font-bold">Rental Tracking</h4>
                                <p className="text-xs text-slate-500">Monitor usage time and location boundaries for rentals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;