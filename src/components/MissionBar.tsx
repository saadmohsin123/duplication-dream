const MissionBar = () => (
  <div className="bg-red py-[22px] px-[60px] flex items-center justify-center gap-11 overflow-hidden max-md:flex-col max-md:gap-[10px] max-md:px-6">
    <span className="font-oswald text-white/90 text-[14px] tracking-[4px] uppercase font-medium whitespace-nowrap">Focus</span>
    <span className="text-white/40 text-[20px] max-md:hidden">•</span>
    <span className="font-oswald text-white/90 text-[14px] tracking-[4px] uppercase font-medium whitespace-nowrap">Trust</span>
    <span className="text-white/40 text-[20px] max-md:hidden">•</span>
    <span className="font-oswald text-white/90 text-[14px] tracking-[4px] uppercase font-medium whitespace-nowrap">Finish</span>
    <span className="text-white/40 text-[20px] max-md:hidden">|</span>
    <span className="font-oswald text-white/90 text-[14px] tracking-[4px] uppercase font-medium whitespace-nowrap">Every athlete needs fuel. Every kid deserves it.</span>
  </div>
);

export default MissionBar;
