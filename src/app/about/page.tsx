import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import Image from "next/image";

export const metadata = {
  title: "About Mariem Ben Tanfous",
  description: "Learn more about Mariem Ben Tanfous, her journey, mission, and core values.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
            About Me
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">My Journey</h1>
          <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto" />
        </FadeIn>

        {/* Biography Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <SlideUp className="relative aspect-[4/5] w-full">
            <div className="absolute inset-0 bg-[var(--color-mbt-beige)] translate-x-4 translate-y-4 -z-10" />
            <div className="relative h-full w-full bg-gray-200">
              <img
                src="/mbt-photo1.jpg"
                alt="Mariem Ben Tanfous Portrait"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </SlideUp>
          
          <SlideUp delay={0.2} className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I am Mariem Ben Tanfous, an English Professor, Corporate Trainer, Entrepreneur, and Event Host based in Tunisia. For over a decade, I have dedicated my career to the transformative power of language and communication.
            </p>
            <p>
              My journey began in the academic halls, where teaching English became more than just conveying grammar—it became about opening doors to global opportunities for my students. Witnessing their growth ignited a passion in me to expand my impact beyond the university.
            </p>
            <p>
              This drive led me to co-found the Oxford Language Center, a hub where language meets practical application. Through this venture, I began partnering with corporate clients, translating academic rigor into actionable business communication strategies.
            </p>
            <p>
              Today, whether I am lecturing, training executives, or moderating high-profile events, my core philosophy remains unchanged: effective communication is the cornerstone of leadership and connection.
            </p>
          </SlideUp>
        </div>

        {/* Mission & Values */}
        <div className="bg-black text-white p-12 md:p-20 -mx-6 md:mx-0 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-mbt-gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          
          <FadeIn>
            <h2 className="font-serif text-4xl mb-12 text-center">Mission & Values</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <SlideUp delay={0.1}>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-mbt-gold)]">Empowerment</h3>
              <p className="text-gray-400">Equipping individuals with the linguistic and communicational tools they need to take charge of their personal and professional narratives.</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-mbt-gold)]">Excellence</h3>
              <p className="text-gray-400">Maintaining the highest academic and professional standards in every training session, lecture, and hosted event.</p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <h3 className="font-serif text-2xl mb-4 text-[var(--color-mbt-gold)]">Connection</h3>
              <p className="text-gray-400">Fostering genuine understanding across cultures and industries through the mastery of the English language.</p>
            </SlideUp>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl mb-12 text-center">Professional Milestones</h2>
          </FadeIn>

          <div className="space-y-12 border-l border-[var(--color-mbt-gold)]/30 ml-4 md:ml-0 md:border-l-0">
            {[
              {
                year: "2025 - Present",
                title: "President",
                org: "CIFE NextGen",
                desc: "An initiative focused on empowering women freelancers and entrepreneurs."
              },
              {
                year: "2022 - Present",
                title: "English Trainer",
                org: "PwC Tunisia",
                desc: "A leading global professional services provides comprehensive audit, tax, and advisory services to help organizations build trust"
              },
              {
                year: "2018 - Present",
                title: "University Professor",
                org: "IHEC Carthage",
                desc: "Delivering advanced English literature and linguistics courses to students."
              },
              {
                year: "2015 - Present",
                title: "Co-founder & Manager",
                org: "Oxford Language Center",
                desc: "A dedicated hub providing academic English support and modern language courses."
              }
            ].map((item, i) => (
              <SlideUp key={i} delay={i * 0.1} className="relative pl-8 md:pl-0 md:flex md:gap-12">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-mbt-gold)] md:hidden" />
                
                <div className="md:w-1/4 md:text-right shrink-0">
                  <span className="text-[var(--color-mbt-gold)] font-medium tracking-wide">{item.year}</span>
                </div>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block relative w-px">
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-mbt-gold)]" />
                  <div className="absolute left-1/2 top-2 bottom-[-48px] -translate-x-1/2 w-px bg-[var(--color-mbt-gold)]/30" />
                </div>

                <div className="md:w-3/4 pb-8 md:pb-0">
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-medium mb-3">{item.org}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
