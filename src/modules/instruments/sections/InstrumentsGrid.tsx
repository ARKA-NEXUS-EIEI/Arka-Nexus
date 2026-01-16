import { Database, Activity, Thermometer, Zap, Wind, Settings, Search, Music } from 'lucide-react';
import "../pages/instruments.css";

export default function InstrumentsGrid( { instruments, visible }: { instruments: string[]; visible: boolean }) {

    const iconPool = [Database, Activity, Thermometer, Zap, Wind, Settings, Search, Music];

    return (
        <section className="flex flex-col items-center justify-center max-w-[1200px] mx-auto py-8 px-5 text-center" data-animate id="instruments">
  <div className="w-full">
    {/* Optional Title */}
    {/* <h2 className={`text-[28px] font-bold text-[#f7c07a] mb-5 ${visible ? 'slide-up' : ''}`}>Instruments Used</h2> */}

    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px] max-w-[980px] mx-auto justify-items-center">
      {instruments.map((item, idx) => {
        const Icon = iconPool[idx % iconPool.length] || Database;
        return (
          <div
            key={idx}
            className={`group relative w-full max-w-[320px] bg-gradient-to-b from-white/[0.03] to-white/[0.02] rounded-[14px] p-[18px] flex items-center gap-3.5 shadow-[0_10px_30px_rgba(4,8,24,0.6)] overflow-hidden transition-all duration-300 border-l-4 border-orange-500/90 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_22px_50px_rgba(0,0,0,0.6)] ${visible ? 'fade-in' : ''}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#eaaf2f1f] to-[#f973161f] text-[22px] text-[#f97316] flex-shrink-0">
              <Icon size={24} />
            </div>
            <div className="text-left">
              <h3 className="m-0 text-[15px] md:text-base text-white font-bold">{item}</h3>
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