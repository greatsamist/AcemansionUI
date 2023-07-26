import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingPageLayout;
