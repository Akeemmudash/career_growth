import {
  Hero,
  CompaniesSection,
  WhyChooseSection,
  Form,
  CommunityLevels,
  Pricing,
  EarningPotential,
} from "../components/LandingPage";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

const LandingPage = () => {
  return (
    <div className="layout-block min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <CompaniesSection />
        <WhyChooseSection />
        <CommunityLevels />
        <Pricing />
        <EarningPotential />
        <Form />
      </main>
      <Footer />
    </div>
  );
};
export default LandingPage;
