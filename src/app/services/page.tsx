import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Presentation, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services | Mariem Ben Tanfous",
  description: "Explore services offered by Mariem Ben Tanfous: Academic Teaching, Corporate Training, and Event Hosting.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "teaching",
      icon: BookOpen,
      title: "Academic Teaching",
      subtitle: "Shaping the minds of tomorrow.",
      description: "With extensive experience in higher education, I deliver rigorous, engaging, and innovative university-level English instruction. My academic approach focuses not only on linguistic mastery but also on critical thinking and cultural understanding.",
      valueProps: [
        "Advanced English Literature & Linguistics",
        "Curriculum Development & Innovation",
        "Mentorship and Academic Guidance",
        "Interactive & Student-Centered Methodology"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "training",
      icon: Users,
      title: "Corporate Training",
      subtitle: "Equipping professionals for global success.",
      description: "In today's globalized economy, effective communication is non-negotiable. I design and execute customized business English and executive communication training programs that yield measurable results for multinational corporations and ambitious professionals.",
      valueProps: [
        "Executive Communication & Presentation Skills",
        "Business English Proficiency",
        "Cross-Cultural Corporate Communication",
        "Customized Team Workshops"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "events",
      icon: Presentation,
      title: "Event Hosting & Moderation",
      subtitle: "Bringing sophistication and seamless flow to your events.",
      description: "An event's success hinges on its flow and energy. As a professional event host, I bring poise, articulation, and dynamic engagement to conferences, panels, and corporate ceremonies, ensuring your audience remains captivated from start to finish.",
      valueProps: [
        "Bilingual Hosting (English & Arabic/French)",
        "Panel Moderation & Interviewing",
        "Corporate Ceremonies & Galas",
        "Speaker Introductions & Transitions"
      ],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <FadeIn className="mb-24 text-center max-w-3xl mx-auto px-6">
        <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
          What I Do
        </span>
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Services & Expertise</h1>
        <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto mb-8" />
        <p className="text-xl text-gray-600 font-light">
          Delivering excellence across academia, corporate environments, and high-profile events.
        </p>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-32">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              <SlideUp className={`relative aspect-[4/3] w-full ${service.reverse ? 'md:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-[var(--color-mbt-beige)] -z-10 ${service.reverse ? '-translate-x-4' : 'translate-x-4'} translate-y-4`} />
                <div className="relative h-full w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SlideUp>

              <SlideUp delay={0.2} className={`${service.reverse ? 'md:order-1' : ''}`}>
                <service.icon className="w-10 h-10 text-[var(--color-mbt-gold)] mb-6" />
                <h2 className="font-serif text-4xl mb-2">{service.title}</h2>
                <h3 className="text-xl text-[var(--color-mbt-gold)] mb-6 font-serif italic">{service.subtitle}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="font-medium text-black uppercase tracking-wider text-sm">Value Proposition</h4>
                  <ul className="space-y-3">
                    {service.valueProps.map((prop, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-mbt-gold)] shrink-0 mr-3 mt-0.5" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/contact?subject=${encodeURIComponent(service.title)}`}>
                  <Button variant="outline" className="group">
                    Inquire About {service.title}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </SlideUp>
            </div>
          </section>
        ))}
      </div>

      {/* Global CTA */}
      <section className="mt-32 py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl mb-6">Not sure which service fits your needs?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Let's have a conversation. I offer tailored solutions designed to meet your specific objectives.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-10">Schedule a Consultation</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
