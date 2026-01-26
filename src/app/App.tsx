import { useRoutes } from "react-router-dom";

import ScrollToTop from "../core/routing/ScrollToTop";

import { routes } from "./routes";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <ScrollToTop />
      {element}
    </>
  );
}
