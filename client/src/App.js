import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import Header from "./components/header";
import { ROUTES } from "./utils/routes";
import DownloadBar from "./components/download";
import Cookies from "./components/cookies";
import Footer from "./pages/footer";

const excludes = [
  "/email/microsoft",
  "/email/gmail",
  "/email/yahoo",
  "/email/aol",
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!excludes.includes(location.pathname) && (
        <>
          <DownloadBar />
          <Header />
        </>
      )}

      {ROUTES.map((route, idx) => (
        <Route
          key={idx}
          exact
          {...route}
        />
      ))}

      {!excludes.includes(location.pathname) && (
        <>
          <Footer />
          <Cookies />
        </>
      )}
    </>
  );
}

export default App;
