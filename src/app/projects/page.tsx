import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Globe, Building2, Award } from "lucide-react";

export const metadata = {
  title: "Projects & Achievements | Mariem Ben Tanfous",
  description: "Discover the Oxford Language Center, corporate collaborations, and key milestones.",
};

export default function ProjectsPage() {
  const collaborations = [
    {
      company: "Global Tech Solutions",
      role: "Corporate English Training Program",
      desc: "Designed and delivered a 6-month intensive business communication program for the executive team, improving cross-border negotiation outcomes."
    },
    {
      company: "International Edu Summit",
      role: "Lead Moderator",
      desc: "Hosted a 3-day conference featuring 50+ speakers from around the world, ensuring smooth transitions and engaging Q&A sessions."
    },
    {
      company: "Ministry of Higher Education",
      role: "Curriculum Consultant",
      desc: "Collaborated on updating the English language curriculum for business schools, integrating modern pedagogical approaches."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <FadeIn className="mb-24 text-center max-w-3xl mx-auto px-6">
        <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
          Portfolio
        </span>
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Projects & Impact</h1>
        <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto mb-8" />
        <p className="text-xl text-gray-600 font-light">
          A showcase of entrepreneurial ventures, corporate partnerships, and academic milestones.
        </p>
      </FadeIn>

      {/* Oxford Language Center Spotlight */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="bg-black text-white rounded-none overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-mbt-gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <Globe className="w-12 h-12 text-[var(--color-mbt-gold)] mb-8" />
            <h2 className="font-serif text-4xl mb-4">Oxford Language Center</h2>
            <h3 className="text-xl text-gray-400 mb-6 font-light">Co-Founder & Director</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Founded with the vision to bridge the gap between academic English and real-world application. The Oxford Language Center is a premier institution in Tunisia offering specialized language training, test preparation, and corporate communication workshops. 
            </p>
            <ul className="space-y-3 mb-10 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--color-mbt-gold)] rounded-full" />
                Over 5,000+ students certified
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--color-mbt-gold)] rounded-full" />
                Partnerships with 20+ multinational corporations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--color-mbt-gold)] rounded-full" />
                State-of-the-art communicative methodologies
              </li>
            </ul>
            <Link href="https://oxford-lc.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-[var(--color-mbt-gold)] text-[var(--color-mbt-gold)] hover:bg-[var(--color-mbt-gold)] hover:text-white">
                Visit Website
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1964&auto=format&fit=crop" 
              alt="Oxford Language Center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-[var(--color-mbt-beige)] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="text-[var(--color-mbt-gold)]" size={28} />
            <h2 className="font-serif text-3xl">Notable Collaborations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <SlideUp key={index} delay={index * 0.1} className="bg-white p-8 border-t-2 border-transparent hover:border-[var(--color-mbt-gold)] transition-all shadow-sm">
                <h3 className="font-serif text-2xl mb-2">{collab.company}</h3>
                <p className="text-[var(--color-mbt-gold)] font-medium text-sm tracking-wider uppercase mb-6">{collab.role}</p>
                <p className="text-gray-600 leading-relaxed">{collab.desc}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="text-[var(--color-mbt-gold)]" size={28} />
          <h2 className="font-serif text-3xl text-center">Impact by the Numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "50+", label: "Corporate Clients" },
            { number: "100+", label: "Events Hosted" },
            { number: "5k+", label: "Students Trained" }
          ].map((stat, index) => (
            <SlideUp key={index} delay={index * 0.1} className="p-6">
              <div className="font-serif text-5xl md:text-6xl text-[var(--color-mbt-gold)] mb-4">{stat.number}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
            </SlideUp>
          ))}
        </div>
      </section>
    </div>
  );
}
