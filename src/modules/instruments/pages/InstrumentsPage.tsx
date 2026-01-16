import { useInstrumentsPage } from "../hooks/useInstrumentsPage";
import InstrumentsHero from "../sections/InstrumentsHero";
import InstrumentsGrid from "../sections/InstrumentsGrid";
import InstrumentsGallery from "../sections/InstrumentsGallery";
import "./instruments.css";

const InstrumentsPage = () => {
  const { data, visible, scrollProgress } = useInstrumentsPage();

  if (!data) return <p className="p-8 text-center text-white">Loading...</p>;

  return (
    // Replaced .instruments-page with Tailwind
    <div className="relative pb-8 text-white">
      
      {/* Scroll progress bar - Refactored to Tailwind */}
      <div
        className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-[#f97316] to-[#eaaf2f] transition-[width] duration-150 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />

      <InstrumentsHero
        title={data.title}
        intro={data.intro}
        image={data.images}
        visible={visible.hero}
      />

      <InstrumentsGrid
        instruments={data.instruments}
        visible={visible.instruments}
      />

      {data.images?.length > 1 && (
        <InstrumentsGallery
          images={data.images}
          visible={visible.gallery}
        />
      )}
    </div>
  );
};

export default InstrumentsPage;