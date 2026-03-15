import FadeUp from "../components/FadeUp";
import MissionBar from "../components/MissionBar";
import ftfLogo from "@/assets/ftf-logo.png";
import lennonImg from "@/assets/lennon-action.jpg";
import danielImg from "@/assets/daniel-portrait.jpg";
import danielAction1 from "@/assets/daniel-action-1.jpg";
import danielAction2 from "@/assets/daniel-action-2.jpg";
import danielAction3 from "@/assets/daniel-action-3.jpg";

interface HomePageProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const HomePage = ({ onTabChange, onScrollTo }: HomePageProps) => {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen bg-navy-dark flex items-center relative overflow-hidden pt-[72px]">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 80px)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        <div className="absolute -right-[100px] -top-[100px] w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,16,46,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-[2] max-w-[1200px] mx-auto px-[60px] py-20 grid grid-cols-2 gap-[60px] items-center w-full max-md:grid-cols-1 max-md:px-6 max-md:text-center">
          <div>
            <div className="font-oswald text-gold text-[12px] tracking-[4px] uppercase font-normal mb-5 flex items-center gap-3 max-md:justify-center">
              <span className="block w-10 h-[2px] bg-red" />
              Bay Area, CA &nbsp;|&nbsp; Serving Nationwide
            </div>
            <h1 className="font-bebas text-white leading-[0.95] tracking-[1px] mb-7" style={{ fontSize: "clamp(52px, 7vw, 86px)" }}>
              Every Athlete<br />Needs Fuel.<span className="text-red block">Every Kid<br />Deserves It.</span>
            </h1>
            <p className="text-white/[0.72] text-[17px] leading-[1.75] font-light max-w-[500px] mb-11">
              Fuel Their Future empowers student-athletes to lead the fight against food insecurity — connecting elite athletic performance with equitable food access for all children.
            </p>
            <div className="pt-11 border-t border-white/10 mt-11">
              <div className="font-bebas text-red leading-[0.85] tracking-[-1px]" style={{ fontSize: "clamp(72px, 10vw, 120px)" }}>1 in 5</div>
              <div className="font-oswald text-white/70 text-[18px] tracking-[2px] uppercase font-light mt-[14px] max-w-[420px] leading-[1.5]">
                Children in the U.S. face food insecurity — including the student-athletes in your community.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center max-md:hidden">
            <div className="w-[380px] h-[380px] rounded-full border border-white/[0.08] flex items-center justify-center relative animate-spin-slow">
              <div className="absolute -inset-6 rounded-full border border-red/20 animate-spin-ring" />
              <img src={ftfLogo} alt="FTF Logo" className="w-[300px] h-[300px] object-contain animate-spin-slow-reverse" />
            </div>
          </div>
        </div>
      </section>

      <MissionBar />

      {/* FRAMEWORK */}
      <section className="bg-navy py-[100px] relative overflow-hidden">
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-bebas text-[380px] text-white/[0.025] tracking-[-20px] leading-none pointer-events-none">FTF</div>
        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Our Framework <span className="block w-10 h-[2px]" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <h2 className="font-bebas text-white leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              The FTF Framework™
            </h2>
            <p className="text-white/60 text-[17px] leading-[1.75] font-light max-w-[600px]">
              Three pillars. One standard. Built for athletes, students, executives, and leaders at every level.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-[2px] mt-[60px] max-md:grid-cols-1">
              {[
                { bg: "bg-navy-mid", letter: "F", title: "Focus", body: "Know where you're going. We help athletes and organizations direct their energy toward what matters most — eliminating distraction and building clarity of purpose." },
                { bg: "bg-red", letter: "T", title: "Trust", body: "Believe in the process. High-performing teams are built on trust — in each other, in the system, and in the mission. With it, teams execute when it matters most." },
                { bg: "bg-[#1a5c2a]", letter: "F", title: "Finish", body: "Execute. Every time. The world rewards finishers — not starters. We develop people who complete what they commit to, on the field and beyond it." },
              ].map((card) => (
                <div key={card.title} className={`${card.bg} p-[56px_44px] relative overflow-hidden max-md:p-8`}>
                  <div className="font-bebas text-[110px] leading-[0.85] text-white/[0.12] absolute top-5 right-5">{card.letter}</div>
                  <h3 className="font-bebas text-[48px] text-white tracking-[2px] mb-[14px] relative z-[1]">{card.title}</h3>
                  <p className="text-white/[0.78] text-[15px] leading-[1.8] font-light relative z-[1]">{card.body}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="bg-cream py-[100px] relative overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, hsl(var(--red)), hsl(var(--gold)), hsl(var(--red)))" }} />
        {/* Decorative circles */}
        <div className="absolute top-[60px] left-[60px] w-[120px] h-[120px] border-2 border-red/[0.12] rounded-full pointer-events-none" />
        <div className="absolute top-[40px] left-[40px] w-[160px] h-[160px] border border-red/[0.07] rounded-full pointer-events-none" />
        <div className="absolute bottom-[60px] right-[60px] w-[200px] h-[200px] border-2 border-navy/[0.08] rounded-full pointer-events-none" />
        <div className="absolute bottom-[30px] right-[30px] w-[260px] h-[260px] border border-navy/[0.05] rounded-full pointer-events-none" />
        {/* Background FTF text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[300px] text-navy/[0.03] tracking-[-10px] leading-none pointer-events-none whitespace-nowrap">FTF</div>

        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-red text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3 justify-center">
              Meet the Founder <span className="block w-10 h-[2px] bg-red" />
            </div>
            <h2 className="font-bebas text-navy leading-none tracking-[1px] mb-5 text-center" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Meet the Founder.
            </h2>
            <p className="text-[17px] leading-[1.8] text-[#555] font-light max-w-[620px] mt-[14px] text-center mx-auto">
              Fuel Their Future was built by a 14-year-old who saw a gap no one was closing — and decided to close it himself.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="max-w-[500px] mx-auto mt-14">
              <div
                onClick={() => onTabChange("lennon")}
                className="bg-white relative overflow-hidden transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-[6px]"
                style={{ boxShadow: "0 24px 60px rgba(13,34,64,0.15)", border: "1px solid rgba(200,16,46,0.1)" }}
              >
                <div className="h-[6px] bg-navy" />
                <div className="w-full aspect-[4/5] overflow-hidden bg-navy">
                  <img src={lennonImg} alt="Lennon Fells" className="w-full h-full object-cover object-top transition-transform duration-400 hover:scale-[1.04]" style={{ filter: "grayscale(10%)" }} />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="font-oswald text-red text-[10px] tracking-[3px] uppercase font-medium mb-[6px]">Founder & Visionary</div>
                  <div className="font-bebas text-[34px] text-navy tracking-[1px] leading-none mb-3">Lennon Fells</div>
                  <p className="text-[14px] leading-[1.7] text-[#555] font-light flex-1">
                    At 14, Lennon Fells is building a movement that connects athletic performance with food equity — proving that student-athletes can be the most powerful force for community change.
                  </p>
                  <span className="inline-flex items-center gap-2 font-oswald text-red text-[12px] tracking-[2px] uppercase font-semibold mt-5 hover:gap-[14px] transition-all">
                    Read His Story →
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
          {/* Quote below card */}
          <FadeUp>
            <div className="text-center mt-12 pt-10 border-t border-navy/10">
              <div className="inline-flex items-center gap-5">
                <div className="w-[60px] h-px bg-red" />
                <p className="font-serif text-[18px] text-[#666] italic font-light max-w-[520px] leading-[1.7]">
                  "At 14, he's already proving that the next generation of leaders doesn't wait to be asked."
                </p>
                <div className="w-[60px] h-px bg-red" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="bg-navy-dark py-[100px] relative">
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red to-transparent" />
        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              What We Offer <span className="block w-10 h-[2px]" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <h2 className="font-bebas text-white leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Speaking Engagements
            </h2>
            <p className="text-white/[0.58] text-[17px] font-light max-w-[580px] leading-[1.75] mt-[14px]">
              High-impact, one-time speaking engagements for schools, sports organizations, and corporations — powered by a decade of NFL experience and a mission that matters.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-6 mt-[60px] max-md:grid-cols-1">
              {[
                {
                  icon: "🏫", title: "School Assemblies & K–12 Events", num: "01",
                  body: "Daniel speaks directly to students about performance, nutrition, and the responsibility to serve their communities. High-energy and impactful — built to move students from inspiration to action.",
                  topics: ["Focus, Trust, Finish — the student-athlete mindset", "Why nutrition is your #1 performance tool", "Community leadership and giving back", "Resilience through adversity"]
                },
                {
                  icon: "🏈", title: "Sports Teams & Athletic Organizations", num: "02",
                  body: "From youth leagues to college programs, Daniel delivers the inside story of what it takes to compete at the highest level — and how nutrition, teamwork, and mental toughness create champions.",
                  topics: ["Building a winning team culture", "Elite nutrition for performance", "Mental preparation and pressure management", "The path from youth sports to the pros"]
                },
                {
                  icon: "🏢", title: "Corporate Keynotes & Leadership Events", num: "03",
                  body: "What the NFL taught Daniel about accountability, trust, and execution translates directly to the boardroom. A powerful keynote that leaves every leader rethinking what it means to perform and serve.",
                  topics: ["Building a winning culture — the NFL playbook", "Accountability and execution under pressure", "Purpose-driven leadership", "Fuel to Win — performance and equity"]
                },
              ].map((card) => (
                <div key={card.num} className="border border-white/[0.09] p-[44px_34px] relative overflow-hidden bg-white/[0.02] transition-all duration-300 hover:border-red hover:-translate-y-[6px] hover:bg-red/[0.05] max-md:p-8">
                  <div className="font-bebas text-[70px] text-white/[0.05] absolute top-[10px] right-4 leading-none">{card.num}</div>
                  <div className="w-[50px] h-[50px] bg-red flex items-center justify-center mb-6 text-[22px]">{card.icon}</div>
                  <h3 className="font-bebas text-[28px] text-white tracking-[1px] mb-3 leading-[1.1]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-white/[0.62] font-light mb-5">{card.body}</p>
                  <ul className="list-none mb-6">
                    {card.topics.map(t => (
                      <li key={t} className="font-oswald text-white/45 text-[12px] py-[6px] border-b border-white/[0.06] flex gap-2">
                        <span className="text-red text-[10px] flex-shrink-0">—</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp>
            <div className="mt-[60px] p-[44px_48px] bg-red/10 border border-red/25 flex justify-between items-center gap-8 flex-wrap max-md:p-6 max-md:flex-col">
              <div>
                <h3 className="font-bebas text-white text-[30px] tracking-[1px] mb-[6px]">Ready to bring Daniel Fells to your next event?</h3>
                <p className="text-white/55 text-[15px] font-light mt-[6px]">
                  We work with school districts, sports organizations, corporations, and community events nationwide.
                </p>
              </div>
              <button onClick={() => onScrollTo("contact")} className="bg-white text-navy px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-white hover:bg-red hover:border-red hover:text-white transition-all cursor-pointer whitespace-nowrap">
                Check Availability
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* DANIEL FELLS SPOTLIGHT */}
      <section className="bg-navy-dark py-[100px] relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        <div className="absolute -right-[60px] top-1/2 -translate-y-1/2 font-bebas text-[320px] text-white/[0.025] leading-none pointer-events-none tracking-[-10px]">#86</div>
        <div className="max-w-[1200px] mx-auto px-[60px] relative z-[1] max-md:px-6">
          <FadeUp>
            <div className="grid items-center max-md:grid-cols-1" style={{ gridTemplateColumns: "380px 1fr", gap: "80px" }}>
              {/* LEFT — Photo + Action photos */}
              <div className="relative">
                <div className="relative">
                  <div className="absolute top-5 -left-[18px] right-[18px] -bottom-[18px] bg-navy z-0" />
                  <div className="absolute -top-2 left-2 -right-2 bottom-2 border-[3px] border-red z-[2] pointer-events-none" />
                  <img src={danielImg} alt="Daniel Fells" className="w-full block relative z-[1]" />
                  <div className="absolute bottom-[7.5rem] -right-[6px] bg-red text-white p-[18px_24px] z-[3] text-center">
                    <span className="font-bebas text-[44px] leading-none block">10</span>
                    <span className="font-oswald text-[10px] tracking-[2px] uppercase opacity-85 font-light">NFL Seasons</span>
                  </div>
                </div>
                {/* Action photos */}
                <div className="grid grid-cols-3 gap-[6px] mt-12">
                  <div className="aspect-[4/3] overflow-hidden"><img src={danielAction1} alt="Daniel Fells NFL action" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-400" /></div>
                  <div className="aspect-[4/3] overflow-hidden"><img src={danielAction2} alt="Daniel Fells NFL action" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-400" /></div>
                  <div className="aspect-[4/3] overflow-hidden"><img src={danielAction3} alt="Daniel Fells NFL action" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-400" /></div>
                </div>
              </div>

              {/* RIGHT — Content */}
              <div>
                <div className="font-oswald text-white/40 text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3">
                  Our Lead Speaker <span className="block w-10 h-[2px] bg-white/20" />
                </div>
                <div className="font-bebas text-white leading-[0.9] tracking-[1px] mb-2" style={{ fontSize: "clamp(52px, 6vw, 80px)" }}>
                  Daniel<br />Fells
                </div>
                <div className="font-oswald text-red text-[13px] tracking-[3px] uppercase font-medium mb-7">
                  #86 • Tight End • 10 NFL Seasons • 2015 Ed Block Courage Award Winner
                </div>

                <div className="border-l-4 border-red pl-6 mb-7">
                  <p className="text-white text-[20px] leading-[1.6] italic font-light">
                    "A father and son building something together — to serve other people's children. That's the story. That's the mission."
                  </p>
                </div>

                <p className="text-white/[0.68] text-[16px] leading-[1.9] font-light mb-4">
                  Daniel Fells spent 10 seasons competing as a Tight End in the NFL — across seven teams, earning his place on every roster through relentless preparation, physical resilience, and an uncompromising standard. Today, he channels that decade of experience into something bigger than football.
                </p>
                <p className="text-white/[0.68] text-[16px] leading-[1.9] font-light mb-8">
                  As Lead Speaker and NFL Ambassador for Fuel Their Future, Daniel brings elite credibility and authentic community voice to every stage — connecting the performance world with the people who need it most.
                </p>

                {/* Stats bar */}
                <div className="grid grid-cols-4 gap-[2px] mb-8">
                  <div className="bg-white/[0.05] p-[16px_12px] text-center border-t-[3px] border-red">
                    <div className="font-bebas text-red text-[32px] leading-none">10</div>
                    <div className="font-oswald text-white/50 text-[10px] tracking-[1.5px] uppercase mt-1 font-light">NFL Seasons</div>
                  </div>
                  <div className="bg-white/[0.05] p-[16px_12px] text-center border-t-[3px] border-red">
                    <div className="font-bebas text-red text-[32px] leading-none">7</div>
                    <div className="font-oswald text-white/50 text-[10px] tracking-[1.5px] uppercase mt-1 font-light">NFL Teams</div>
                  </div>
                  <div className="bg-white/[0.05] p-[16px_12px] text-center border-t-[3px] border-gold">
                    <div className="font-bebas text-gold text-[18px] leading-[1.1] mt-[6px]">2015</div>
                    <div className="font-oswald text-white/50 text-[10px] tracking-[1px] uppercase mt-1 font-light">Ed Block Courage Award</div>
                  </div>
                </div>

                <button
                  onClick={() => onTabChange("daniel")}
                  className="bg-red text-white px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-red hover:bg-red-dark hover:border-red-dark transition-all cursor-pointer hover:-translate-y-[2px]"
                >
                  Read Daniel's Full Story →
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-red py-20 px-[60px] relative overflow-hidden max-md:px-6">
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 font-bebas text-[280px] text-white/[0.05] tracking-[-10px] leading-none pointer-events-none">IMPACT</div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[60px] relative z-[1] max-md:grid-cols-1">
          {[
            { num: "13M", label: "Children in America struggle with food insecurity" },
            { num: "42M+", label: "Americans — including millions of student-athletes — go hungry" },
            { num: "100%", label: "Of elite athletes credit nutrition as a top performance factor" },
          ].map(stat => (
            <FadeUp key={stat.num} className="text-center">
              <div className="font-bebas text-[96px] text-white leading-[0.9] tracking-[-2px]">{stat.num}</div>
              <div className="font-oswald text-white/[0.78] text-[13px] tracking-[2px] uppercase font-light mt-3 max-w-[200px] mx-auto leading-[1.5]">{stat.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-red text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3">
              Partnership Opportunities <span className="block w-10 h-[2px] bg-red" />
            </div>
            <h2 className="font-bebas text-navy leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Let's Build<br />Something Together
            </h2>
            <p className="text-[17px] leading-[1.8] text-[#555] font-light max-w-[600px] mt-[14px]">
              We're seeking mission-aligned partners who believe every child deserves the fuel to compete, learn, and thrive.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-5 my-14 max-md:grid-cols-1">
              {[
                { icon: "🏫", title: "School Districts", body: "Bring Daniel Fells to your students for assemblies and athlete development events. We partner with district administrators to create lasting impact at scale." },
                { icon: "🤝", title: "Corporate Sponsors", body: "Align your brand with a movement connecting athletic excellence to social equity. Sponsorship opportunities for speaking tours, community events, and youth programming." },
                { icon: "🌎", title: "Community Organizations", body: "Partner with us to expand food access for children in your community. That community-first spirit drives every partnership we pursue." },
                { icon: "🏟️", title: "Sports Organizations", body: "Youth leagues, college programs, and professional teams — bring NFL-level perspective and a purpose-driven mission to your athletes, coaches, and staff." },
                { icon: "🥗", title: "Food & Nutrition Brands", body: "Connect your products to a message that resonates. Fuel Their Future bridges elite athletic nutrition and food equity advocacy in a unique and powerful way." },
                { icon: "📱", title: "Media & Content Partners", body: "Daniel Fells has a story worth telling — 10 NFL seasons, a family-built mission, and a message that changes lives. We welcome media and podcast collaboration." },
              ].map(card => (
                <div key={card.title} className="bg-gray-light border-t-4 border-navy p-[36px_28px] transition-all duration-200 hover:border-red hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]">
                  <span className="text-[34px] mb-4 block">{card.icon}</span>
                  <h3 className="font-bebas text-[26px] text-navy tracking-[1px] mb-[10px]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-[#666] font-light">{card.body}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp>
            <div className="bg-navy p-[52px] flex justify-between items-center gap-10 flex-wrap max-md:p-6 max-md:flex-col">
              <div>
                <h3 className="font-bebas text-[36px] text-white tracking-[1px] mb-2">Become a Fuel Their Future Partner</h3>
                <p className="text-white/60 text-[15px] font-light leading-[1.7] max-w-[500px]">
                  Every conversation we have is one step closer to a child getting the fuel they need to succeed.
                </p>
              </div>
              <button onClick={() => onScrollTo("contact")} className="bg-white text-navy px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-white hover:bg-red hover:border-red hover:text-white transition-all cursor-pointer whitespace-nowrap">
                Start a Conversation
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navy py-[100px] relative">
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-red" />
        <div className="max-w-[1200px] mx-auto px-[60px] grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Get in Touch <span className="block w-10 h-[2px]" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <h2 className="font-bebas text-[60px] text-white leading-none tracking-[1px] mb-[18px]">
              Let's Build<br /><span className="text-red">Something<br />Together.</span>
            </h2>
            <p className="text-white/[0.62] text-[16px] leading-[1.8] font-light max-w-[460px] mt-4">
              Whether you're a school district, a sports organization, a corporation, or a community partner — we're ready to work with you.
            </p>
            <div className="flex flex-col gap-[14px] mt-8">
              {[
                { icon: "✉", text: "info@fueltheirfuture.com" },
                { icon: "🌐", text: "www.fueltheirfuture.com" },
                { icon: "📍", text: "Bay Area, CA — Programs Available Nationwide" },
              ].map(d => (
                <div key={d.text} className="flex items-center gap-[14px] font-oswald text-white/[0.78] text-[14px]">
                  <div className="w-[38px] h-[38px] bg-red flex items-center justify-center text-[15px] flex-shrink-0">{d.icon}</div>
                  {d.text}
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-col gap-[14px]">
              <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Name</label>
                  <input placeholder="Your full name" className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Organization</label>
                  <input placeholder="School, company, org" className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Email</label>
                  <input type="email" placeholder="your@email.com" className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Phone</label>
                  <input type="tel" placeholder="(555) 000-0000" className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif" />
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">How can we help?</label>
                <select className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors font-serif">
                  <option value="" className="bg-navy">Select an option</option>
                  <option className="bg-navy">School Assembly / K–12 Event</option>
                  <option className="bg-navy">Sports Team / Athletic Organization</option>
                  <option className="bg-navy">Corporate Keynote / Leadership Event</option>
                  <option className="bg-navy">Partnership Opportunity</option>
                  <option className="bg-navy">Community Food Program</option>
                  <option className="bg-navy">Media / Press Inquiry</option>
                  <option className="bg-navy">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Tell us about your event</label>
                <textarea className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors resize-y min-h-[110px] font-serif" placeholder="Event details, audience size, date, and goals..." />
              </div>
              <button
                onClick={() => alert("Thank you! We will be in touch at info@fueltheirfuture.com shortly.")}
                className="bg-red text-white py-[17px] px-9 font-oswald text-[15px] tracking-[2px] uppercase font-semibold border-none cursor-pointer hover:bg-red-dark transition-colors w-full"
              >
                Send Message →
              </button>
              <p className="text-white/30 text-[11px] text-center font-oswald tracking-[1px] mt-2">
                Every conversation is one step closer to a child getting the fuel they need to succeed.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
