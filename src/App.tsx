import { Routes, Route, useLocation } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import TeamPage from "./pages/TeamPage";
import CasesPage from "./pages/CasesPage";
import { useEffect } from "react";
import ServicesPage from "./pages/ServicesPage";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="m-0 p-0">
      <LandingPageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="team" element={<TeamPage />} />
        </Routes>
      </LandingPageLayout>
    </div>
  );
}

export default App;
