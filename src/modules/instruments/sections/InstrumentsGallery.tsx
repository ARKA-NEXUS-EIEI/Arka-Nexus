import { urlFor } from "../../../core/services/client";
import "../pages/instruments.css";

export default function InstrumentsGallery({ images, visible }: { images: any[]; visible: boolean }) {
    return (
        <section className="py-8 px-5" data-animate id="gallery">
            <div className="max-w-[1100px] mx-auto">
                <h2 className={`text-[28px] font-bold text-[#f7c07a] mb-10 text-center ${visible ? 'slide-up' : ''}`}>
                    Gallery
                </h2>

                {/* Flexbox container centers items regardless of count */}
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {images.slice(1, 7).map((img, i) => (
                        <div
                            key={i}
                            className={`
                                relative rounded-xl overflow-hidden 
                                shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
                                transition-all duration-300 hover:scale-105 
                                w-[240px] h-[160px] flex-shrink-0 
                                ${visible ? 'scale-in' : ''}
                            `}
                            style={{ animationDelay: `${i * 70}ms` }}
                        >
                            <img 
                                src={urlFor(img).width(600).url()} 
                                alt={`instrument-${i}`} 
                                className="w-full h-full object-cover" // Changed to object-cover to fill the small container nicely
                            />
                            {/* Subtle dark overlay to match your screenshot's aesthetic */}
                            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}