import { Database, Activity, Thermometer, Zap, Wind, Settings, Search, Music } from 'lucide-react';
import "../pages/instruments.css";

export default function InstrumentsGrid( { instruments, visible }: { instruments: string[]; visible: boolean }) {

    const iconPool = [Database, Activity, Thermometer, Zap, Wind, Settings, Search, Music];

    return (
        <section className="flex flex-col items-center justify-center max-w-[1200px] mx-auto py-6 md:py-10 px-4 text-center" data-animate id="instruments">
  <div className="w-full">
    {/* Optional Title */}
    {/* <h2 className={`text-[28px] font-bold text-[#f7c07a] mb-5 ${visible ? 'slide-up' : ''}`}>Instruments Used</h2> */}

    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 md:gap-5 max-w-[1000px] mx-auto justify-items-center">
      {instruments.map((item, idx) => {
        const Icon = iconPool[idx % iconPool.length] || Database;
        return (
          <div
            key={idx}
            className={`group relative w-full max-w-[280px] md:max-w-[310px] bg-gradient-to-b from-white/[0.04] to-white/[0.02] 
              rounded-card p-3 md:p-4 flex items-center gap-3 shadow-[0_8px_24px_rgba(4,8,24,0.5)] 
              overflow-hidden transition-all duration-300 border-l-[3px] border-orange-500/90 
              hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] 
              ${visible ? 'fade-in' : ''}`}
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#eaaf2f1f] to-[#f973161f] text-orange-500 flex-shrink-0">
              <Icon size={20} />
            </div>
            <div className="text-left">
              <h3 className="m-0 text-body-sm text-white leading-tight">
                {item}
              </h3>
            </div>
            {/* Subtle card highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.01] pointer-events-none" />
          </div>
        );
      })}
    </div>
  </div>
</section>
    );
}