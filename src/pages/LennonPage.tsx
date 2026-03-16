import FadeUp from "../components/FadeUp";
import MissionBar from "../components/MissionBar";
import lennonImg from "@/assets/lennon-portrait.jpg";
import { useFounders } from "@/hooks/useFounders";

interface LennonPageProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const LennonPage = ({ onTabChange, onScrollTo }: LennonPageProps) => {
  const { founders } = useFounders();
  const founder = founders.find(f => f.slug === 'lennon');

  const name = founder?.name || 'Lennon Fells';
  const role = founder?.homepage_role_label || 'Founder & CEO, Fuel Their Future';
  const tagline = founder?.page_tagline || 'Fuel Their Future — Our Founder';
  const heroText = founder?.page_hero_text || "At 14, he's already changing communities. The young visionary who saw a gap no one was closing — and decided to close it himself.";
  const stats = founder?.stats || [
    { num: "14", label: "Years Old" },
    { num: "2", label: "Varsity Sports" },
    { num: "20%", label: "Profits Donated" },
    { num: "500+", label: "Volunteer Hours" },
  ];
  const storyBlocks = founder?.story_blocks || [];
  const quotes = founder?.quotes || [];
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  return (
    <div>
      {/* PAGE HERO */}
      <div className="bg-navy-dark pt-[140px] pb-20 px-[60px] relative overflow-hidden max-md:pt-[120px] max-md:pb-[60px] max-md:px-6">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <div className="font-oswald text-gold text-[12px] tracking-[4px] uppercase font-normal mb-4 flex items-center gap-3">
            <span className="block w-10 h-[2px] bg-red" />
            {tagline}
          </div>
          <h1 className="font-bebas text-white leading-[0.92] tracking-[1px]" style={{ fontSize: "clamp(52px, 7vw, 90px)" }}>
            {firstName}<br /><span className="text-red">{lastName}</span>
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] font-light max-w-[600px] mt-5">
            {heroText}
          </p>
        </div>
      </div>

      <MissionBar reversed />

      {/* BODY */}
      <section className="bg-cream py-20 pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[60px] grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 md:gap-20 items-start max-md:px-6">
          {/* LEFT - Photo & Stats */}
          <FadeUp className="sticky top-24 max-md:static">
            <div className="relative">
              <div className="absolute top-5 -left-[18px] right-[18px] -bottom-[18px] bg-navy z-0" />
              <div className="absolute -top-2 left-2 -right-2 bottom-2 border-[3px] border-red z-[2] pointer-events-none" />
              <img src={founder?.image_url || lennonImg} alt={name} className="w-full block relative z-[1]" />
            </div>
            <div className="mt-12 bg-navy p-7">
              <div className="font-oswald text-gold text-[10px] tracking-[3px] uppercase font-normal mb-[14px]">Quick Facts</div>
              {stats.map(stat => (
                <div key={stat.label} className="flex justify-between items-center py-[10px] border-b border-white/[0.08] last:border-none">
                  <span className="font-bebas text-red text-[28px]">{stat.num}</span>
                  <span className="font-oswald text-white/60 text-[11px] tracking-[1px] uppercase font-light text-right max-w-[160px] leading-[1.4]">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT - Story */}
          <div>
            <div className="font-bebas text-[48px] md:text-[72px] text-navy leading-[0.9] mb-[6px]">{name}</div>
            <div className="font-oswald text-red text-[13px] tracking-[3px] uppercase font-medium mb-8">{role}</div>

            {storyBlocks.map((block, i) => (
              <div key={i}>
                {/* Insert quote after first story block */}
                {i === 1 && quotes[0] && (
                  <FadeUp>
                    <div className="bg-navy p-[32px_36px] my-8 relative overflow-hidden">
                      <div className="absolute -top-10 left-[10px] font-bebas text-[200px] text-white/[0.04] leading-none">"</div>
                      <p className="text-white text-[20px] leading-[1.65] italic font-light relative z-[1]">
                        "{quotes[0].text}"
                      </p>
                    </div>
                  </FadeUp>
                )}
                <StoryBlock label={block.label} title={block.title}>
                  {block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </StoryBlock>
              </div>
            ))}

            {storyBlocks.length === 0 && (
              <p className="text-[16px] leading-[1.9] text-[#444] font-light">{founder?.bio || ''}</p>
            )}

            <FadeUp>
              <div className="bg-red p-9 my-8">
                <h4 className="font-bebas text-white text-[26px] tracking-[1px] mb-[10px]">From Inspiration to Action</h4>
                <p className="text-white/85 text-[15px] leading-[1.75] font-light">
                  After spending time watching youth basketball at the Boys & Girls Club Peninsula, Lennon was moved by what he saw — talented young athletes competing hard, without the nutritional foundation they needed to truly perform. Fuel Their Future was built to change that.
                </p>
              </div>
            </FadeUp>

            <FadeUp className="mt-4 flex gap-4 flex-wrap">
              <button onClick={() => { onTabChange("home"); setTimeout(() => onScrollTo("contact"), 150); }} className="bg-red text-white px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-red hover:bg-red-dark hover:border-red-dark transition-all cursor-pointer">
                Contact Us
              </button>
              <button onClick={() => { onTabChange("home"); setTimeout(() => onScrollTo("partners"), 150); }} className="bg-navy text-white px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-navy hover:bg-navy-mid transition-all cursor-pointer">
                Partner With Us
              </button>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
};

const StoryBlock = ({ label, title, children }: { label: string; title: string; children: React.ReactNode }) => (
  <FadeUp className="mb-12">
    <div className="font-bebas text-[13px] tracking-[4px] uppercase text-red mb-3 flex items-center gap-[10px]">
      {label} <span className="flex-1 h-px bg-red/25" />
    </div>
    <h3 className="font-bebas text-[34px] text-navy tracking-[1px] mb-[14px] leading-[1.1]">{title}</h3>
    <div className="[&>p]:text-[16px] [&>p]:leading-[1.9] [&>p]:text-[#444] [&>p]:font-light [&>p]:mb-[14px]">
      {children}
    </div>
  </FadeUp>
);

export default LennonPage;
