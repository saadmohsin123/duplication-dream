interface MissionBarProps {
  reversed?: boolean;
}

const MissionBar = ({ reversed = false }: MissionBarProps) => {
  const focusTrustFinish = (
    <div className="flex items-center gap-5 max-md:gap-3">
      <span className="font-oswald text-white/90 text-[14px] max-md:text-[12px] tracking-[4px] uppercase font-medium whitespace-nowrap">Focus</span>
      <span className="text-white/40 text-[20px]">•</span>
      <span className="font-oswald text-white/90 text-[14px] max-md:text-[12px] tracking-[4px] uppercase font-medium whitespace-nowrap">Trust</span>
      <span className="text-white/40 text-[20px]">•</span>
      <span className="font-oswald text-white/90 text-[14px] max-md:text-[12px] tracking-[4px] uppercase font-medium whitespace-nowrap">Finish</span>
    </div>
  );
  const mission = (
    <span className="font-oswald text-white/90 text-[14px] max-md:text-[11px] tracking-[4px] max-md:tracking-[2px] uppercase font-medium text-center">Every athlete needs fuel. Every kid deserves it.</span>
  );

  return (
    <div className="bg-red py-[22px] px-[60px] flex items-center justify-center gap-11 overflow-hidden max-md:flex-col max-md:gap-2 max-md:px-6 max-md:py-4">
      {reversed ? mission : focusTrustFinish}
      <span className="text-white/40 text-[20px] max-md:hidden">|</span>
      {reversed ? focusTrustFinish : mission}
    </div>
  );
};

export default MissionBar;
