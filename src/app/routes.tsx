
import AboutPage from "../modules/about/pages/AboutPage";
import HomePage from "../modules/home/pages/HomePage";
import InstrumentsPage from "../modules/instruments/pages/InstrumentsPage";
import ServicesLandingPage from "../modules/services/pages/ServiceLandingPage";
import ServicesPage from "../modules/services/pages/ServicePage";
import SnapshotsPage from "../modules/snapshots/pages/SnapshotsPage";
import MainLayout from "../shared/layout/MainLayout";
import NotFoundPage from "../shared/not-found/NotFoundPage";

import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesLandingPage /> },
      { path: "services/:slug", element: <ServicesPage /> },
      { path: "instruments", element: <InstrumentsPage /> },
      { path: "snapshots", element: <SnapshotsPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
