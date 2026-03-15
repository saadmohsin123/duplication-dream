import FadeUp from "../components/FadeUp";
import MissionBar from "../components/MissionBar";
import danielImg from "@/assets/daniel-portrait.jpg";

interface DanielPageProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const DanielPage = ({ onTabChange, onScrollTo }: DanielPageProps) => {
  return (
    <div>
      {/* PAGE HERO */}
      <div className="bg-navy-dark pt-[140px] pb-20 px-[60px] relative overflow-hidden max-md:pt-[120px] max-md:pb-[60px] max-md:px-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        <div className="max-w-[1200px] mx-auto relative z-[1]">
          <div className="font-oswald text-gold text-[12px] tracking-[4px] uppercase font-normal mb-4 flex items-center gap-3">
            <span className="block w-10 h-[2px] bg-red" />
            Fuel Their Future — Lead Speaker & NFL Ambassador
          </div>
          <h1
            className="font-bebas text-white leading-[0.92] tracking-[1px]"
            style={{ fontSize: "clamp(52px, 7vw, 90px)" }}
          >
            Daniel
            <br />
            <span className="text-red">Fells</span>
          </h1>
          <p className="text-white/65 text-[18px] leading-[1.75] font-light max-w-[600px] mt-5">
            10 seasons. 7 NFL teams. One mission. When Daniel Fells walks into a room, everything changes.
          </p>
        </div>
      </div>

      <MissionBar />

      {/* BODY */}
      <section className="bg-cream py-20 pb-[100px]">
        <div
          className="max-w-[1200px] mx-auto px-[60px] grid gap-20 items-start max-md:px-6 max-md:gap-10 max-md:grid-cols-1"
          style={{ gridTemplateColumns: "400px 1fr" }}
        >
          {/* LEFT */}
          <FadeUp className="sticky top-24 max-md:static">
            <div className="relative">
              <div className="absolute top-5 -left-[18px] right-[18px] -bottom-[18px] bg-navy z-0" />
              <div className="absolute -top-2 left-2 -right-2 bottom-2 border-[3px] border-red z-[2] pointer-events-none" />
              <img
                src={danielImg}
                alt="Daniel Fells"
                className="w-full block relative z-[1]"
                style={{ filter: "grayscale(10%)" }}
              />
              <div className="absolute bottom[0rem] -right-[6px] bg-red text-white p-[18px_24px] z-[3] text-center">
                <span className="font-bebas text-[44px] leading-none block">10</span>
                <span className="font-oswald text-[10px] tracking-[2px] uppercase opacity-85 font-light">
                  NFL Seasons
                </span>
              </div>
            </div>
            <div className="mt-12 bg-navy p-7">
              <div className="font-oswald text-gold text-[10px] tracking-[3px] uppercase font-normal mb-[14px]">
                Career Highlights
              </div>
              {[
                { num: "10", label: "NFL Seasons" },
                { num: "7", label: "NFL Teams" },
                { num: "100+", label: "NFL Games Played" },
                { num: "∞", label: "Lives Impacted" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center py-[10px] border-b border-white/[0.08] last:border-none"
                >
                  <span className="font-bebas text-red text-[28px]">{stat.num}</span>
                  <span className="font-oswald text-white/60 text-[11px] tracking-[1px] uppercase font-light text-right max-w-[160px] leading-[1.4]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT */}
          <div>
            <div className="font-bebas text-[72px] text-navy leading-[0.9] mb-[6px]">Daniel Fells</div>
            <div className="font-oswald text-red text-[13px] tracking-[3px] uppercase font-medium mb-8">
              Lead Speaker & NFL Ambassador
            </div>

            <StoryBlock label="The Player" title="A Decade in the NFL">
              <p>
                Daniel Fells spent 10 seasons in the NFL as a tight end, playing for seven franchises and earning the
                respect of teammates, coaches, and fans at every stop. From practice squads to primetime, Daniel built
                his career on preparation, resilience, and relentless work ethic.
              </p>
            </StoryBlock>

            <FadeUp>
              <div className="grid grid-cols-2 gap-2 my-5 max-md:grid-cols-1">
                {[
                  "Atlanta Falcons '05–06",
                  "St. Louis Rams '06–08",
                  "Denver Broncos '08–09",
                  "Seattle Seahawks '09",
                  "Kansas City Chiefs '09–10",
                  "New England Patriots '12–13",
                  "New York Giants '14–15",
                ].map((team) => (
                  <div
                    key={team}
                    className="bg-navy text-white p-[12px_16px] font-oswald text-[12px] tracking-[1px] uppercase font-normal flex items-center gap-2"
                  >
                    <span className="text-red text-[9px]">▸</span> {team}
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <p className="mt-4 text-[16px] leading-[1.9] text-[#444] font-light mb-[14px]">
                Playing for seven different franchises — each with a different system, coaching staff, and culture —
                gave Daniel a perspective on adaptability, trust, and performance that few people in the world possess.
                He didn't just survive the transitions. He thrived through them.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="border-l-4 border-red pl-6 my-7">
                <p className="text-[20px] leading-[1.6] text-navy italic font-normal">
                  "A father and son building something together — to serve other people's children. That's the story.
                  That's the mission."
                </p>
              </div>
            </FadeUp>

            <StoryBlock label="The Mission" title="From the Field to the Community">
              <p>
                Today, Daniel channels that decade of NFL experience into something bigger than football. As Lead
                Speaker and NFL Ambassador for Fuel Their Future, he brings elite-level credibility, personal
                resilience, and authentic community voice to every speaking engagement, school assembly, and corporate
                event he delivers.
              </p>
              <p>
                He connects the dots between what athletes eat, how they perform, and why every child — regardless of
                their zip code — deserves access to the nutrition that makes performance possible. It's not just a
                message. It's his life's experience, on every stage.
              </p>
            </StoryBlock>

            <FadeUp>
              <div className="bg-navy p-9 my-8">
                <h3 className="font-bebas text-white text-[28px] tracking-[1px] mb-5">Speaking Topics</h3>
                {[
                  {
                    title: "For Schools & Student-Athletes",
                    body: '"Focus, Trust, Finish" — The performance mindset that took me from the practice field to the NFL — and how every student-athlete can build it. Includes nutrition, resilience, and community responsibility.',
                  },
                  {
                    title: "For Sports Teams & Organizations",
                    body: '"What It Takes" — The inside story of competing across 7 NFL teams. Building winning culture, mental preparation, elite nutrition, and what separates good athletes from great ones.',
                  },
                  {
                    title: "For Corporate Audiences",
                    body: '"Building a Winning Culture" — What the NFL taught me about accountability, trust, and what separates good teams from great ones. Purpose-driven leadership with a performance edge.',
                  },
                ].map((topic) => (
                  <div
                    key={topic.title}
                    className="border border-white/10 p-[20px_24px] mb-3 last:mb-0 bg-white/[0.03]"
                  >
                    <div className="font-oswald text-gold text-[13px] tracking-[2px] uppercase font-medium mb-[6px]">
                      {topic.title}
                    </div>
                    <p className="text-white/65 text-[14px] leading-[1.65] font-light">{topic.body}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="bg-red p-[52px] mt-10 flex justify-between items-center gap-10 flex-wrap max-md:p-6 max-md:flex-col">
                <div>
                  <h3 className="font-bebas text-white text-[40px] tracking-[1px] mb-2">Book Daniel Fells</h3>
                  <p className="text-white/80 text-[15px] font-light leading-[1.6] max-w-[460px]">
                    We work with school districts, sports organizations, corporations, youth leagues, and community
                    events. Contact us to check availability and discuss your specific goals.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onTabChange("home");
                    setTimeout(() => onScrollTo("contact"), 150);
                  }}
                  className="bg-white text-navy px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-white hover:bg-red hover:border-red hover:text-white transition-all cursor-pointer whitespace-nowrap"
                >
                  Check Availability
                </button>
              </div>
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

export default DanielPage;
