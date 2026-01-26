import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import ContactModal from "../contact/ContactModal";

import Navbar from "./Navbar";

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <header style={{ position: "relative", overflow: "hidden" }}>
        <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      </header>
      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal onClose={() => setIsContactModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
