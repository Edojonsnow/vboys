import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";
import { IconTarget, IconUsers, IconSparkles } from "@tabler/icons-react";

const AboutCard = ({ icon, title, description }) => (
  <div className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-yellow/30 transition-colors duration-300">
    <div className="w-12 h-12 bg-neon-yellow/10 rounded-full flex items-center justify-center mb-6 text-neon-yellow">
      {icon}
    </div>
    <h3 className="text-white font-outfit font-bold text-xl mb-3 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-400 font-light leading-relaxed">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Nav />
      <AboutHero />
      
      {/* Main Story Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold leading-tight">
              What started as a <span className="text-neon-yellow">party</span> became a <span className="text-purple-400">movement</span>.
            </h2>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                What started in 2020 as an invite-only new year party to celebrate
                the clients and collaborators of our parent company, Ladder, Lex &
                Booker has evolved into one of the most remarkable experience
                curators out of Nigeria.
              </p>
              <p>
                We literally put everything on the line to make every experience
                one to remember for life; live or virtual, independent or in
                collaboration with a brand, there’s no party like a Vogue Boys
                party!
              </p>
              <p className="border-l-4 border-neon-yellow pl-6 py-2 italic text-white/80">
                "Wanna discuss ideas, partnerships, recruitment or just what you
                had for dinner last night? Give us a shout!"
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex-1 relative h-[500px] w-full lg:w-auto">
             <div className="absolute top-0 right-0 w-3/4 h-3/4 animate-pulse-glow z-10">
                <Image
                  src="/recap.png"
                  alt="Party Recap"
                  fill
                  className="object-cover rounded-3xl border border-white/10"
                />
             </div>
             <div className="absolute bottom-0 left-0 w-2/3 h-2/3 grayscale hover:grayscale-0 transition-all duration-500 z-20">
                 <Image
                  src="/soakers.png"
                  alt="Vibes"
                  fill
                  className="object-cover rounded-3xl border border-white/10"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-deep-purple/20 py-24 relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutCard 
                icon={<IconSparkles size={24} />}
                title="The Experience"
                description="We don't just host events; we curate memories. Every detail is designed to immerse you in the moment."
            />
             <AboutCard 
                icon={<IconUsers size={24} />}
                title="The Community"
                description="A diverse collective of creatives, party-goers, and dreamers united by the rhythm of the night."
            />
             <AboutCard 
                icon={<IconTarget size={24} />}
                title="The Vision"
                description="To redefine nightlife culture in Nigeria and beyond, setting new standards for entertainment."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
