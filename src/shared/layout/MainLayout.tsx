import { Outlet } from "react-router-dom";

import "../../styles/globals.css";
import BackgroundDecor from "../components/background/BackgroundDecor";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function MainLayout() {
  return (
    <div className="app">
      <BackgroundDecor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
