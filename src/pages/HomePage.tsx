import FadeUp from "../components/FadeUp";
import MissionBar from "../components/MissionBar";
import ftfLogo from "@/assets/ftf-logo.png";
import lennonImg from "@/assets/lennon-portrait.jpg";

interface HomePageProps {
  onTabChange: (tab: string) => void;
  onScrollTo: (id: string) => void;
}

const HomePage = ({ onTabChange, onScrollTo }: HomePageProps) => {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen bg-navy-dark flex items-center relative overflow-hidden pt-[72px]">
        {/* Background pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 80px)" }} />
        {/* Left stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red to-red-dark" />
        {/* Glow */}
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
            <div className="font-oswald text-red text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Our Framework <span className="block w-10 h-[2px]" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <h2 className="font-bebas text-white leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Focus. Trust. Finish.
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-[2px] mt-[60px] max-md:grid-cols-1">
              {[
                { bg: "bg-navy-mid", letter: "F", title: "FOCUS", body: "We start by narrowing in — identifying the communities, teams, and programs where the need is greatest. Every resource, every meal, and every volunteer is directed with precision." },
                { bg: "bg-red", letter: "T", title: "TRUST", body: "We build authentic relationships with coaches, families, and athletes. Trust is earned through consistency — showing up, delivering, and following through every single time." },
                { bg: "bg-[#1a5c2a]", letter: "F", title: "FINISH", body: "We don't start what we can't finish. Every initiative has a measurable outcome. Every meal is accounted for. Every athlete knows someone showed up for them — start to finish." },
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

      {/* LEADERSHIP - Single Card for Lennon */}
      <section className="bg-cream py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-red text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3">
              Leadership <span className="block w-10 h-[2px] bg-red" />
            </div>
            <h2 className="font-bebas text-navy leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Meet Our Founder
            </h2>
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
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="bg-navy-dark py-[100px] relative">
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red to-transparent" />
        <div className="max-w-[1200px] mx-auto px-[60px] max-md:px-6">
          <FadeUp>
            <div className="font-oswald text-[11px] tracking-[4px] uppercase font-medium mb-[14px] flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Speaking & Events <span className="block w-10 h-[2px]" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
            <h2 className="font-bebas text-white leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              Ignite Your Audience
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-6 mt-[60px] max-md:grid-cols-1">
              {[
                {
                  icon: "🎤", title: "School Assemblies", num: "01",
                  body: "High-energy programs designed for K–12 that connect nutrition, athletics, and leadership.",
                  topics: ["Nutrition & Athletic Performance", "Leadership Through Service", "Building Community"]
                },
                {
                  icon: "🏟", title: "Sports Organizations", num: "02",
                  body: "Custom presentations for youth leagues, athletic departments, and sports nonprofits.",
                  topics: ["Food Equity in Youth Sports", "Athlete-Led Service Models", "Team Culture & Nutrition"]
                },
                {
                  icon: "🎯", title: "Corporate & Community", num: "03",
                  body: "Keynotes and panel discussions for companies, conferences, and community organizations.",
                  topics: ["Purpose-Driven Leadership", "Youth Entrepreneurship", "CSR & Community Impact"]
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
                <h3 className="font-bebas text-white text-[28px] tracking-[1px] mb-2">Bring Fuel Their Future to Your Event</h3>
                <p className="text-white/60 text-[15px] font-light leading-[1.7] max-w-[500px]">
                  Whether it's a school assembly, athletic banquet, or corporate conference — we deliver messages that move people to act.
                </p>
              </div>
              <button onClick={() => onScrollTo("contact")} className="bg-red text-white px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-red hover:bg-red-dark hover:border-red-dark transition-all cursor-pointer whitespace-nowrap">
                Book a Speaker →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-red py-20 px-[60px] relative overflow-hidden max-md:px-6">
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 font-bebas text-[280px] text-white/[0.05] tracking-[-10px] leading-none pointer-events-none">IMPACT</div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[60px] relative z-[1] max-md:grid-cols-1">
          {[
            { num: "10K+", label: "Meals & Snacks Provided to Student-Athletes" },
            { num: "50+", label: "Schools & Youth Programs Served" },
            { num: "100%", label: "Volunteer-Driven, Student-Athlete Led" },
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
              Partners <span className="block w-10 h-[2px] bg-red" />
            </div>
            <h2 className="font-bebas text-navy leading-none tracking-[1px] mb-5" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
              How You Can Partner
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-3 gap-5 my-14 max-md:grid-cols-1">
              {[
                { icon: "🏫", title: "Schools & Districts", body: "Integrate Fuel Their Future into your wellness or athletics program. We provide turnkey assemblies, food drives, and student-athlete leadership workshops." },
                { icon: "🏢", title: "Corporate Sponsors", body: "Align your brand with youth empowerment and food equity. Sponsorship packages include event naming rights, co-branded content, and employee engagement opportunities." },
                { icon: "🤝", title: "Community Organizations", body: "Partner with us to expand food access in your community. We work with food banks, youth leagues, and civic groups to maximize impact." },
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
                <h3 className="font-bebas text-[36px] text-white tracking-[1px] mb-2">Ready to Make an Impact?</h3>
                <p className="text-white/60 text-[15px] font-light leading-[1.7] max-w-[500px]">
                  Every partnership brings us closer to a world where no student-athlete goes hungry. Let's build something that matters — together.
                </p>
              </div>
              <button onClick={() => onScrollTo("contact")} className="bg-white text-navy px-9 py-4 font-oswald text-[14px] tracking-[2px] uppercase font-semibold border-2 border-white hover:bg-red hover:border-red hover:text-white transition-all cursor-pointer whitespace-nowrap">
                Become a Partner →
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
            <h2 className="font-bebas text-[60px] text-white leading-none tracking-[1px] mb-[18px]">
              Let's Build<br /><span className="text-red">Together.</span>
            </h2>
            <p className="text-white/60 text-[16px] leading-[1.75] font-light max-w-[460px]">
              Whether you're a school, a sponsor, or a community leader — we want to hear from you. Every conversation is one step closer to a child getting the fuel they need.
            </p>
            <div className="flex flex-col gap-[14px] mt-8">
              {[
                { icon: "📧", text: "info@fueltheirfuture.com" },
                { icon: "🌐", text: "www.fueltheirfuture.com" },
                { icon: "📍", text: "Bay Area, California" },
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
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">First Name</label>
                  <input className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors" />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Last Name</label>
                  <input className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Email</label>
                  <input type="email" className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors" />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">Organization</label>
                  <input className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-oswald text-white/45 text-[10px] tracking-[2px] uppercase">How can we help?</label>
                <select className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors">
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
                <textarea className="bg-white/[0.07] border border-white/[0.13] text-white px-4 py-[13px] text-[15px] outline-none focus:border-red transition-colors resize-y min-h-[110px]" placeholder="Event details, audience size, date, and goals..." />
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
