import { Routes, Route } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="m-0 p-0">
      <LandingPageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Routes>
      </LandingPageLayout>
    </div>
  );
}

export default App;
