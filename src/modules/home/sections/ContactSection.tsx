import ContactForm from "../../../shared/components/contact/components/ContactForm";
import AN from '@/assets/videos/AN.mp4';
import { getHomeContent } from "../providers/home.provider";
import type { HomeContent } from "../content/home.content";
import { useEffect, useState } from "react";

export default function ContactSection() {
    const [content, setContent] = useState<HomeContent | null>(null);

    // Fetch content
    useEffect(() => {
        getHomeContent().then(setContent);
    }, []);

    if (!content) return null;

    return (
        <section className="min-h-screen p-4 md:p-10">  { /* bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] */ }
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 box-border">
                
                {/* Contact Left */}
                <div className="flex-1 bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-[#f1f5f9] flex flex-col justify-center">
                    
                    {/* Video Container */}
                    <div className="flex justify-center mb-6 overflow-hidden">
                        <video
                            className="w-full max-w-[400px] h-auto mb-6 block object-contain outline-none border-none bg-white"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={AN} type="video/mp4" />
                        </video>
                    </div>

                    <h2 className="text-3xl md:text-[2rem] mb-6 text-brand-primary font-bold leading-[1.1] tracking-tight text-center">
                        {content.contact.title}
                    </h2>
                    
                    <p className="text-[1.07rem] text-neutral-textMain leading-[1.7] mb-8 text-center">
                        {content.contact.description}
                    </p>

                    <ul className="space-y-0">
                        {content.contact.services.map((service, index) => (
                            <li key={index} className="py-3 text-neutral-textMain text-[1.05rem] flex items-center leading-relaxed">
                                <span className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-xs font-bold text-brand-dark">
                                    ✓
                                </span>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Right */}
                <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#f1f5f9] flex items-center justify-center">
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}