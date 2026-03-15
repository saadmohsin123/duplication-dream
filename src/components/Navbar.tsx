import { useState, useEffect } from "react";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const Navbar = ({ activeTab, onTabChange, onScrollTo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBtn = (label: string, tab: string, isActive: boolean, onClick: () => void) => (
    <li key={label}>
      <button
        onClick={onClick}
        className={`font-oswald text-[13px] tracking-[2px] uppercase font-normal px-4 py-2 border-b-2 transition-colors duration-200 bg-transparent cursor-pointer -mb-[3px] ${
          isActive ? "text-white border-red" : "text-white/75 border-transparent hover:text-gold"
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 h-[72px] border-b-[3px] border-red transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,23,41,0.97)" : "hsl(213,68%,10%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="flex items-center gap-[14px] cursor-pointer" onClick={() => onTabChange("home")}>
        <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center font-bebas text-white text-[16px] tracking-[1px] flex-shrink-0">
          FTF
        </div>
        <div>
          <div className="font-bebas text-white text-[20px] tracking-[2px] leading-tight">Fuel Their Future</div>
          <div className="font-oswald text-gold text-[9px] tracking-[3px] uppercase font-light">Focus • Trust • Finish</div>
        </div>
      </div>
      <ul className="flex items-center gap-[6px] list-none max-lg:hidden">
        {navBtn("Home", "home", activeTab === "home", () => onTabChange("home"))}
        {navBtn("Our Founder", "lennon", activeTab === "lennon", () => onTabChange("lennon"))}
        {navBtn("Daniel Fells", "daniel", activeTab === "daniel", () => onTabChange("daniel"))}
        {navBtn("Speaking", "home", false, () => { onTabChange("home"); setTimeout(() => onScrollTo("speaking"), 150); })}
        {navBtn("Partners", "home", false, () => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); })}
        <li>
          <button
            onClick={() => { onTabChange("home"); setTimeout(() => onScrollTo("contact"), 150); }}
            className="font-oswald text-[13px] tracking-[2px] uppercase font-semibold px-[22px] py-[10px] bg-red text-white border-none cursor-pointer hover:bg-red-dark transition-colors"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
