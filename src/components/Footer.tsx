import { useSiteContent } from "@/hooks/useSiteContent";

interface FooterProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const Footer = ({ onTabChange, onScrollTo }: FooterProps) => {
  const { content } = useSiteContent();
  const showTM = content?.show_trademarks ?? false;

  return (
  <footer className="bg-navy-dark border-t border-white/[0.07] p-[60px] max-md:p-6">
    <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr] gap-[60px] mb-11 max-md:grid-cols-1 max-md:gap-8">
      <div>
        <div className="font-bebas text-[30px] text-white tracking-[2px]">Fuel Their Future</div>
        <div className="font-oswald text-gold text-[10px] tracking-[3px] uppercase font-light mb-[18px]">Focus • Trust • Finish</div>
        <p className="text-[13px] text-white/40 leading-[1.75] font-light max-w-[300px]">
          A family-built organization empowering student-athletes to lead the fight against food insecurity. Bay Area, CA — serving communities nationwide.
        </p>
      </div>
      <div>
        <div className="font-oswald text-white text-[12px] tracking-[3px] uppercase font-medium mb-5 pb-[10px] border-b border-white/10">Navigate</div>
        <ul className="list-none flex flex-col gap-[10px]">
          {[
            { label: "Home", action: () => onTabChange("home") },
            { label: "Founder - Lennon Fells", action: () => onTabChange("lennon") },
            { label: "Daniel Fells", action: () => onTabChange("daniel") },
            { label: "Speaking Engagements", action: () => { onTabChange("home"); setTimeout(() => onScrollTo("speaking"), 150); } },
            { label: "Partnerships", action: () => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); } },
          ].map(item => (
            <li key={item.label}>
              <button onClick={item.action} className="font-oswald text-white/45 bg-transparent border-none cursor-pointer text-[13px] tracking-[0.5px] hover:text-gold transition-colors text-left p-0">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-oswald text-white text-[12px] tracking-[3px] uppercase font-medium mb-5 pb-[10px] border-b border-white/10">Contact</div>
        <ul className="list-none flex flex-col gap-[10px]">
          <li><a href="mailto:info@fueltheirfuture.com" className="font-oswald text-white/45 no-underline text-[13px] tracking-[0.5px] hover:text-gold transition-colors">info@fueltheirfuture.com</a></li>
          <li><a href="https://www.fueltheirfuture.com" className="font-oswald text-white/45 no-underline text-[13px] tracking-[0.5px] hover:text-gold transition-colors">www.fueltheirfuture.com</a></li>
          <li>
            <button onClick={() => { onTabChange("home"); setTimeout(() => onScrollTo("contact"), 150); }} className="font-oswald text-white/45 bg-transparent border-none cursor-pointer text-[13px] tracking-[0.5px] hover:text-gold transition-colors text-left p-0">
              Get in Touch
            </button>
          </li>
          <li>
            <button onClick={() => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); }} className="font-oswald text-white/45 bg-transparent border-none cursor-pointer text-[13px] tracking-[0.5px] hover:text-gold transition-colors text-left p-0">
              Become a Partner
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto pt-[22px] border-t border-white/[0.07] flex justify-between items-center max-md:flex-col max-md:gap-[10px] max-md:text-center">
      <div className="font-oswald text-white/[0.28] text-[12px]">© 2026 Fuel Their Future LLC. All rights reserved.</div>
      <div className="font-oswald text-white/20 text-[11px] tracking-[2px] italic">Every athlete needs fuel. Every kid deserves it.</div>
    </div>
  </footer>
);

export default Footer;
