import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import FeedbackSection from "../sections/FeedbackSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import JoinUsSection from "../sections/JoinUsSection";
import "../styles/home.css";

const HomePage = () => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "feedback", label: "Feedback" },
    { id: "how-it-works", label: "How It Works" },
    { id: "join-us", label: "Join Us" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section && !menuItems.some((item) => item.id === section)) {
      navigate("/404");
    }
  }, [location, menuItems, navigate]);

  return (
    <div className="homepage">
      <Header menuItems={menuItems} />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeedbackSection />
        <HowItWorksSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
