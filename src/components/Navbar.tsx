import { useState, useEffect } from "react";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const Navbar = ({ activeTab, onTabChange, onScrollTo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleNav = (action: () => void) => {
    setMobileOpen(false);
    action();
  };

  const navBtn = (label: string, tab: string, isActive: boolean, onClick: () => void) => (
    <li key={label}>
      <button
        onClick={() => handleNav(onClick)}
        className={`font-oswald text-[13px] tracking-[2px] uppercase font-normal px-4 py-2 border-b-2 transition-colors duration-200 bg-transparent cursor-pointer -mb-[3px] ${
          isActive ? "text-white border-red" : "text-white/75 border-transparent hover:text-gold"
        }`}
      >
        {label}
      </button>
    </li>
  );

  const mobileNavBtn = (label: string, onClick: () => void, isActive = false) => (
    <li>
      <button
        onClick={() => handleNav(onClick)}
        className={`font-oswald text-[16px] tracking-[2px] uppercase font-normal py-3 w-full text-left bg-transparent cursor-pointer border-none border-b border-white/10 transition-colors ${
          isActive ? "text-red" : "text-white/80 hover:text-gold"
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 max-md:px-4 h-[72px] border-b-[3px] border-red transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,23,41,0.97)" : "hsl(213,68%,10%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="flex items-center gap-[14px] cursor-pointer" onClick={() => handleNav(() => onTabChange("home"))}>
          <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center font-bebas text-white text-[16px] tracking-[1px] flex-shrink-0">
            FTF
          </div>
          <div>
            <div className="font-bebas text-white text-[20px] tracking-[2px] leading-tight">Fuel Their Future</div>
            <div className="font-oswald text-gold text-[9px] tracking-[3px] uppercase font-light">Focus • Trust • Finish</div>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className="flex items-center gap-[6px] list-none max-lg:hidden">
          {navBtn("Home", "home", activeTab === "home", () => onTabChange("home"))}
          {navBtn("Our Founder", "lennon", activeTab === "lennon", () => onTabChange("lennon"))}
          {navBtn("Daniel Fells", "daniel", activeTab === "daniel", () => onTabChange("daniel"))}
          {navBtn("Speaking", "home", false, () => { onTabChange("home"); setTimeout(() => onScrollTo("speaking"), 150); })}
          {navBtn("Partners", "home", false, () => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); })}
          <li>
            <button
              onClick={() => handleNav(() => { onTabChange("home"); setTimeout(() => onScrollTo("contact"), 150); })}
              className="font-oswald text-[13px] tracking-[2px] uppercase font-semibold px-[22px] py-[10px] bg-red text-white border-none cursor-pointer hover:bg-red-dark transition-colors"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-[999] lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-[72px] right-0 bottom-0 w-[280px] bg-navy-dark z-[1001] lg:hidden transition-transform duration-300 border-l border-white/10 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="list-none p-6 flex flex-col gap-1">
          {mobileNavBtn("Home", () => onTabChange("home"), activeTab === "home")}
          {mobileNavBtn("Our Founder", () => onTabChange("lennon"), activeTab === "lennon")}
          {mobileNavBtn("Daniel Fells", () => onTabChange("daniel"), activeTab === "daniel")}
          {mobileNavBtn("Speaking", () => { onTabChange("home"); setTimeout(() => onScrollTo("speaking"), 150); })}
          {mobileNavBtn("Partners", () => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); })}
          <li className="mt-4">
            <button
              onClick={() => handleNav(() => { onTabChange("home"); setTimeout(() => onScrollTo("contact"), 150); })}
              className="font-oswald text-[14px] tracking-[2px] uppercase font-semibold px-6 py-3 bg-red text-white border-none cursor-pointer hover:bg-red-dark transition-colors w-full"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
