import React, { useEffect, useState } from 'react';
import { Navigation } from 'lucide-react';

interface MapSimulationProps {
  className?: string;
  active?: boolean;
}

const MapSimulation: React.FC<MapSimulationProps> = ({ className, active = true }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [path, setPath] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        // Simple random walk simulation
        const dx = (Math.random() - 0.5) * 4;
        const dy = (Math.random() - 0.5) * 4;
        
        let newX = prev.x + dx;
        let newY = prev.y + dy;

        // Keep bounds
        if (newX < 10) newX = 10;
        if (newX > 90) newX = 90;
        if (newY < 10) newY = 10;
        if (newY > 90) newY = 90;

        return { x: newX, y: newY };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if(!active) return;
    setPath(prev => [...prev.slice(-20), position]);
  }, [position, active]);

  return (
    <div className={`relative overflow-hidden bg-slate-200 rounded-xl shadow-inner ${className}`}>
        {/* Map Background Pattern (Abstract) */}
        <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>
        
        {/* Roads/Lines (Static decoration) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <path d="M 0 50 Q 50 20 100 60" fill="none" stroke="#64748b" strokeWidth="2" />
            <path d="M 20 100 Q 40 50 80 0" fill="none" stroke="#64748b" strokeWidth="2" />
            <circle cx="20" cy="80" r="40" stroke="#cbd5e1" strokeWidth="1" fill="none" />
        </svg>

        {/* Trail */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline 
                points={path.map(p => `${p.x}%,${p.y}%`).join(' ')} 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2" 
                strokeDasharray="4 2"
                className="opacity-50"
            />
        </svg>

        {/* Moving Pin */}
        <div 
            className="absolute transition-all duration-[2000ms] ease-linear transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
            <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping"></div>
                <div className="bg-white p-1 rounded-full shadow-lg border-2 border-accent">
                    <Navigation size={20} className="text-accent transform rotate-45" fill="currentColor" />
                </div>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-80">
                    Vehicle 01
                </div>
            </div>
        </div>
    </div>
  );
};

export default MapSimulation;