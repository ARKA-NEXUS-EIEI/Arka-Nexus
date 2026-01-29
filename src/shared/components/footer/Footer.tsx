import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import arka_logo from "@/assets/images/logos/arka_Nexus.png";
import { getFooterData } from "../../../core/services/sanity/footer.service";
import { useServiceRegistry } from "../../../core/hooks/useServiceRegistry";
import { SERVICE_FOOTER_ICONS } from "../../../modules/services/config/serviceIcons";

type ContactDetails = {
  emails?: string[];
  phoneNumbers?: string[];
  address?: string;
};

export default function Footer() {
  const [contact, setContact] = useState<ContactDetails | null>(null);
  const { services, loading } = useServiceRegistry();

  useEffect(() => {
    getFooterData().then(setContact).catch(console.error);
  }, []);

  if (!contact || loading) return null;

  return (
    <footer className="bg-brand-primary-blue px-0 pb-0 pt-10">
      <div className="mx-auto mb-8 grid max-w-arka grid-cols-1 gap-8 px-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_2fr]">
        {/* Brand Section */}
        <div className="flex flex-col md:items-start lg:items-center">

          {/* Logo */}
          <Link to="/" className="mb-4">
            <motion.img
              className="h-[60px] rounded-md bg-neutral-white p-1"
              src={arka_logo}
              alt="Arka Nexus Logo"
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Tagline */}
          <p className="mb-5 text-body font-semibold leading-relaxed text-neutral-textMuted md:text-left lg:text-center">
            Engineering Intelligence Empowering Industry
          </p>

          {/* Social Media Links */}
          <div className="flex gap-3">
            <motion.a
              href="https://www.linkedin.com/company/arka-nexus/"
              whileHover={{ scale: 1.2 }}
              className="text-h3 text-neutral-textMuted transition-colors hover:text-brand-primary"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-h3 text-neutral-textMuted transition-colors hover:text-brand-primary"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
          </div>

          {/* UDYAM Number */} 
          <div className="text-body-sm text-neutral-textMuted md:text-left lg:text-center mt-4"> 
            UDYAM No: UDYAM-TN-12-0166609 
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-h3 font-bold uppercase tracking-wide text-brand-primary lg:text-center">
            Links
          </h3>
          <ul className="list-none space-y-2 p-0">
            {["Home", "About", "Services", "Research"].map((link) => (
              <li key={link} className="md:text-left lg:text-center">
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-body-sm text-neutral-textMuted transition-colors hover:text-brand-primary"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-h3 font-bold uppercase tracking-wide text-brand-primary">
            Services
          </h3>
          <ul className="list-none space-y-3 p-0">
            {services.map(service => {
              const icon = SERVICE_FOOTER_ICONS[service.slug]
              if (!icon) return null

              return (
                <li key={service.slug} className="group flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="flex-shrink-0 text-brand-primary transition-transform group-hover:scale-110"
                  >
                    {icon}
                  </svg>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-body-sm text-neutral-textMuted transition-colors hover:text-brand-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              )
            })}
          </ul>

        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-h3 font-bold uppercase tracking-wide text-brand-primary">
            Contact Info
          </h3>
          <ul className="list-none space-y-4 p-0 text-body-sm">
            {contact.emails?.map((email, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="mt-1 text-brand-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="break-all text-body-sm text-neutral-textMuted">
                  {email}
                </span>
              </li>
            ))}

            {contact.phoneNumbers?.map((num, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="mt-1 text-brand-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="break-all text-body-sm text-neutral-textMuted">
                  {num}
                </span>
              </li>
            ))}

            {contact.address && (
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 text-brand-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-body-sm text-neutral-textMuted">
                  {contact.address}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-border bg-black/10 py-6">
        <p className="text-center text-body-sm text-neutral-textMuted">
          © 2025 Arka Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
