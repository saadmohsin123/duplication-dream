import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import LennonPage from "./LennonPage";
import DanielPage from "./DanielPage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} onScrollTo={handleScrollTo} />
      {activeTab === "home" && <HomePage onTabChange={handleTabChange} onScrollTo={handleScrollTo} />}
      {activeTab === "lennon" && <LennonPage onTabChange={handleTabChange} onScrollTo={handleScrollTo} />}
      {activeTab === "daniel" && <DanielPage onTabChange={handleTabChange} onScrollTo={handleScrollTo} />}
      <Footer onTabChange={handleTabChange} onScrollTo={handleScrollTo} />
    </>
  );
};

export default Index;
