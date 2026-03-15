import FadeUp from "../components/FadeUp";
import MissionBar from "../components/MissionBar";
import lennonImg from "@/assets/lennon-portrait.jpg";

interface LennonPageProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const LennonPage = ({ onTabChange, onScrollTo }: LennonPageProps) => {
  return (
    <div>
      {/* PAGE HERO */}
      <div className="bg-navy-dark pt-[140px] pb-20 px-[60px] relative overflow-hidden max-md:pt-[120px] max-md:pb-[60px] max-md:px-6">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <div className="font-oswald text-gold text-[12px] tracking-[4px] uppercase font-normal mb-4 flex items-center gap-3">
            <span className="block w-10 h-[2px] bg-red" />
            Fuel Their Future — Our Founder
          </div>
          <h1 className="font-bebas text-white leading-[0.92] tracking-[1px]" style={{ fontSize: "clamp(52px, 7vw, 90px)" }}>
            Lennon<br /><span className="text-red">Fells</span>
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] font-light max-w-[600px] mt-5">
            At 14, he's already changing communities. The young visionary who saw a gap no one was closing — and decided to close it himself.
          </p>
        </div>
      </div>

      <MissionBar />

      {/* BODY */}
      <section className="bg-cream py-20 pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-[60px] grid gap-20 items-start max-md:px-6 max-md:gap-10" style={{ gridTemplateColumns: "400px 1fr" }}>
          {/* LEFT - Photo & Stats */}
          <FadeUp className="sticky top-24 max-md:static">
            <div className="relative">
              <div className="absolute top-5 -left-[18px] right-[18px] -bottom-[18px] bg-navy z-0" />
              <div className="absolute -top-2 left-2 -right-2 bottom-2 border-[3px] border-red z-[2] pointer-events-none" />
              <img src={lennonImg} alt="Lennon Fells" className="w-full block relative z-[1]" />
            </div>
            <div className="mt-12 bg-navy p-7">
              <div className="font-oswald text-gold text-[10px] tracking-[3px] uppercase font-normal mb-[14px]">Quick Facts</div>
              {[
                { num: "14", label: "Years Old" },
                { num: "2", label: "Varsity Sports" },
                { num: "20%", label: "Profits Donated" },
                { num: "500+", label: "Volunteer Hours" },
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center py-[10px] border-b border-white/[0.08] last:border-none">
                  <span className="font-bebas text-red text-[28px]">{stat.num}</span>
                  <span className="font-oswald text-white/60 text-[11px] tracking-[1px] uppercase font-light text-right max-w-[160px] leading-[1.4]">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT - Story */}
          <div>
            <div className="font-bebas text-[72px] text-navy leading-[0.9] mb-[6px]">Lennon Fells</div>
            <div className="font-oswald text-red text-[13px] tracking-[3px] uppercase font-medium mb-8">Founder & CEO, Fuel Their Future</div>

            <StoryBlock label="Origin Story" title="From the Sidelines to the Front Lines">
              <p>Lennon Fells didn't wait for someone to fix the problem. At 14 years old, the high school freshman from the San Francisco Bay Area looked around his community — at the young athletes he played with and against — and saw something most adults overlooked: kids who were competing at high levels but going home to empty kitchens.</p>
              <p>That's when he founded Fuel Their Future.</p>
            </StoryBlock>

            <FadeUp>
              <div className="bg-navy p-[32px_36px] my-8 relative overflow-hidden">
                <div className="absolute -top-10 left-[10px] font-bebas text-[200px] text-white/[0.04] leading-none">"</div>
                <p className="text-white text-[20px] leading-[1.65] italic font-light relative z-[1]">
                  "I kept hearing about food insecurity as a statistic. But when I saw kids I knew — athletes I competed against — struggling to eat after practice, it stopped being a number. It became personal."
                </p>
              </div>
            </FadeUp>

            <StoryBlock label="The Entrepreneur" title="Building With Purpose">
              <p>In 4th grade, Lennon launched <strong>Lennon's Sweetpop</strong> — a dessert-flavored popcorn business with a built-in social mission. From day one, he committed 20% of all profits to the Samaritan House, a local organization providing under-served families with essential resources.</p>
            </StoryBlock>

            <StoryBlock label="Hands-On Service" title="Seeing the Need Firsthand">
              <p>Through YMSL, Lennon volunteers across a range of philanthropies — but his focus has always gravitated toward programs fighting food insecurity. He doesn't just give from a distance. He shows up.</p>
              <ul className="list-none my-5 flex flex-col gap-3">
                {[
                  { bold: "Self Help for the Elderly (San Mateo)", desc: "Regularly delivers fresh and frozen lunches to elderly and underserved residents." },
                  { bold: "Hillsborough Harvest Garden", desc: "Volunteers at the community garden that donates fresh produce directly to the Samaritan House." },
                  { bold: "Boys & Girls Club Peninsula, East Palo Alto", desc: "Assists with Second Harvest Food Bank grocery and produce box distribution." },
                ].map(item => (
                  <li key={item.bold} className="flex gap-[14px] items-start text-[15px] leading-[1.6] text-[#444] font-light">
                    <span className="text-red text-[12px] flex-shrink-0 mt-[3px]">▸</span>
                    <span><strong>{item.bold}</strong> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </StoryBlock>

            <StoryBlock label="The Athlete" title="Competing at Two Sports">
              <p>Lennon competes in football and basketball, and knows firsthand how vital proper nutrition is for performance, recovery, and longevity as an athlete.</p>
              <div className="grid grid-cols-2 gap-4 my-5 max-w-[280px]">
                {[{ icon: "🏈", label: "Football" }, { icon: "🏀", label: "Basketball" }].map(s => (
                  <div key={s.label} className="bg-navy text-white p-4 text-center">
                    <span className="text-[28px] block mb-2">{s.icon}</span>
                    <div className="font-oswald text-[14px] tracking-[2px] uppercase font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </StoryBlock>

            <FadeUp>
              <div className="bg-red p-9 my-8">
                <h4 className="font-bebas text-white text-[26px] tracking-[1px] mb-[10px]">From Inspiration to Action</h4>
                <p className="text-white/85 text-[15px] leading-[1.75] font-light">
                  After spending time watching youth basketball at the Boys & Girls Club Peninsula, Lennon was moved by what he saw — talented young athletes competing hard, without the nutritional foundation they needed to truly perform. Fuel Their Future was built to change that.
                </p>
              </div>
            </FadeUp>

            <StoryBlock label="The Vision" title="Student-Athletes Leading the Way">
              <p>Lennon's organizing belief — the idea at the heart of Fuel Their Future — is that student-athletes shouldn't just be recipients of food equity efforts. They should be leading them. They understand the connection between nutrition and performance better than anyone.</p>
              <p>That's the mission. That's Lennon's story.</p>
            </StoryBlock>

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
