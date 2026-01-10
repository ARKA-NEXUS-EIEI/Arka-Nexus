import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

// import arka_logo from "@/assets/images/logos/arka_Nexus.png";
// import training from "@/assets/images/training.png";
// import energy from "@/assets/images/energy_audit.png";
// import harmonic from "@/assets/images/harmonic_audit.jpg";
// import solar from "@/assets/images/solar.jpg";
// import vibration from "@/assets/images/vibration.jpg";

const serviceImages: Record<string, string> = {
//   'energy-audit': energy,
//   'power-quality': 'https://5.imimg.com/data5/FL/OW/EJ/SELLER-18659820/power-quality-analysis-services-500x500.jpg',
//   'harmonic-study': harmonic,
//   'solar-panel-study': solar,
//   'thermal-study': 'https://th.bing.com/th/id/OIP.Ydng70W3djzKrcksUbF13AHaEr?rs=1&pid=ImgDetMain',
//   'vibration-audit': vibration,
//   'safety-audit': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
//   'training': training,
};

const services = [
  { title: 'Energy Audit', link: '/energy-audit', image: serviceImages['energy-audit'] },
  { title: 'Power Quality Audit', link: '/power-quality', image: serviceImages['power-quality'] },
  { title: 'Harmonic Audit', link: '/harmonic-study', image: serviceImages['harmonic-study'] },
  { title: 'Solar Plant Audit', link: '/solar-panel-study', image: serviceImages['solar-panel-study'] },
  { title: 'Thermal Study', link: '/thermal-study', image: serviceImages['thermal-study'] },
  { title: 'Vibration Audit', link: '/vibration-audit', image: serviceImages['vibration-audit'] },
  { title: 'Industrial Safety Audit', link: '/industrial-safety-audit', image: serviceImages['safety-audit'] },
  { title: 'Industrial Training Program', link: '/industrial-training', image: serviceImages['training'] }
];

const aboutItems = [
  { title: 'Vision & Mission', link: '/about#vision' },
  { title: 'Objectives', link: '/about#objectives' },
  { title: 'Our Team', link: '/about#team' },
  { title: 'USPs', link: '/about#usps' },
  { title: 'Core Values', link: '/about#values' },
];

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const location = useLocation();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && target && !target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);


  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b 
      ${isScrolled
        ? 'h-nav-h-scroll bg-neutral-offWhite shadow-lg'
        : 'h-nav-h bg-neutral-offWhite backdrop-blur-md border-neutral-border'}`}>
      <div className="max-w-arka mx-auto px-safe-x flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center z-[1001]">
          <motion.img
            // src={arka_logo}
            alt="Arka Nexus Logo"
            className={`transition-all duration-300 ${isScrolled ? 'h-[55px]' : 'h-[65px]'}`}
            whileHover={{ scale: 1.02 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-[1401px]:flex items-center gap-8">
          <ul className="flex items-center gap-dropdown-gap list-none m-0 p-0">
            <li>
              <Link to="/" className={`flex items-center gap-2 px-4 py-3 rounded-nav-link text-nav-link transition-all
                ${location.pathname === '/'
                  ? 'text-brand-primary font-semibold'
                  : 'text-neutral-textMain hover:text-brand-primary hover:bg-brand-light'}`}>
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative group">
              <Link
                to="/about"
                className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium"
              >
                About Us
                <svg className="transition-transform duration-300 group-hover:rotate-180" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 bg-white rounded-dropdown shadow-dropdown p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {aboutItems.map((item, index) => (
                  <HashLink key={index} to={item.link} className="block p-3 text-dropdown-link text-neutral-textMain hover:bg-brand-light hover:text-brand-primary rounded-md transition-all font-medium">
                    {item.title}
                  </HashLink>
                ))}
              </div>
            </li>

            {/* Services Mega Menu */}
            <li
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link hover:text-brand-primary font-medium"
              >
                Our Services
                <svg className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-mega-menu-w max-w-mega 
                  bg-white rounded-mega shadow-mega p-8 border border-neutral-border z-[1002]">
                  <div className="grid grid-cols-4 gap-card-gap">
                    {services.map((service, index) => (
                      <div key={index} className="group rounded-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative h-[140px] overflow-hidden rounded-card mb-3">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg" />
                          <Link to={service.link} className="absolute inset-0 flex items-center justify-center 
                         opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-white font-semibold text-sm px-4 py-2 bg-brand-secondary backdrop-blur-sm rounded-md">View Details</span>
                          </Link>
                        </div>
                        <Link to={service.link} className="text-dropdown-link font-semibold text-neutral-textMain leading-tight transition-colors hover:text-brand-primary">
                          {service.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <HashLink to="/#clients" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Valuable Clients
              </HashLink>
            </li>

            <li>
              <HashLink to="/instruments" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Instruments Used
              </HashLink>
            </li>

            {/* <li>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                Projects
              </Link>
            </li> */}

            <li>
              <HashLink to="/snap-shot" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Snap Shots
              </HashLink>
            </li>
          </ul>

          {/* Contact Button */}
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white px-7 py-3 rounded-button font-semibold shadow-button text-sm"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="min-[1401px]:hidden flex flex-col gap-1.5 p-2 z-[1100] relative pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation(); // Prevents click from bubbling to the nav
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 w-full h-screen bg-white transition-transform duration-500 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>

              {/* Mobile About */}
              <li className="mobile-dropdown">
                <button
                  className="mobile-dropdown-toggle about-toggle"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  About Us
                  <svg className={`dropdown-icon ${isAboutDropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {isAboutDropdownOpen && (
                  <div className="mobile-dropdown-content">
                    {aboutItems.map((item, index) => (
                      <HashLink
                        key={index}
                        to={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </HashLink>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Services */}
              <li className="mobile-dropdown">
                <div className="mobile-dropdown-header">
                  {/* Clicking text navigates to /services */}
                  <Link
                    to="/services"
                    className="mobile-dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>

                  {/* Clicking the arrow toggles the dropdown */}
                  <button
                    className="mobile-dropdown-toggle"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    aria-label="Toggle Services Dropdown"
                  >
                    <svg
                      className={`dropdown-icon ${isServicesDropdownOpen ? 'open' : ''}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                {isServicesDropdownOpen && (
                  <div className="mobile-dropdown-content">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>


              <li>
                <HashLink to="/#clients" onClick={() => setIsMobileMenuOpen(false)}>
                  Valuable Clients
                </HashLink>
              </li>

              <li>
                <HashLink to="/instruments" onClick={() => setIsMobileMenuOpen(false)}>
                  Instruments Used
                </HashLink>
              </li>

              {/* <li>
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </Link>
              </li> */}

              <li>
                <Link to="/snap-shot" onClick={() => setIsMobileMenuOpen(false)}>
                  Snap Shots
                </Link>
              </li>

              <li>
                <button
                  className="mobile-contact-btn"
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;