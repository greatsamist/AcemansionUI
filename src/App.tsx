import { Routes, Route } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="m-0 p-0">
      <LandingPageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </LandingPageLayout>
    </div>
  );
}

export default App;
