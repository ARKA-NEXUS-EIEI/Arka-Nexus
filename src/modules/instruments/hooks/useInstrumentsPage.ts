import { useEffect, useRef, useState } from "react";
import { getInstruments } from "../../../core/services/sanity/instruments.service";

export const useInstrumentsPage = () => {
  const [data, setData] = useState<any>(null);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    getInstruments().then(setData);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(v => ({ ...v, [entry.target.id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { data, visible, scrollProgress };
};
