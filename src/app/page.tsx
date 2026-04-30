import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BookOpen, Presentation, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-mbt-beige)] pt-20">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SlideUp delay={0.2}>
            <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-6 block">
              Elevating Communication & Leadership
            </span>
          </SlideUp>
          
          <SlideUp delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-black mb-6 leading-tight">
              Mariem Ben Tanfous
            </h1>
          </SlideUp>

          <SlideUp delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 font-light">
              English Professor <span className="mx-2 text-[var(--color-mbt-gold)]">•</span> 
              Corporate Trainer <span className="mx-2 text-[var(--color-mbt-gold)]">•</span> 
              Entrepreneur <span className="mx-2 text-[var(--color-mbt-gold)]">•</span> 
              Event Host
            </p>
          </SlideUp>

          <SlideUp delay={0.8} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Work With Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Profile
              </Button>
            </Link>
          </SlideUp>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              Transforming Potential into Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience bridging academia and the corporate world, I specialize in empowering individuals and organizations to master the art of communication. Whether in a university lecture hall, a corporate boardroom, or on stage hosting international events, my mission is to inspire, educate, and elevate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Areas of Expertise</h2>
            <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: BookOpen,
                title: "Academic Teaching",
                desc: "Shaping the minds of tomorrow through rigorous, engaging, and innovative university-level English instruction.",
                href: "/services#teaching"
              },
              {
                icon: Users,
                title: "Corporate Training",
                desc: "Equipping professionals and executives with high-impact business English and communication skills.",
                href: "/services#training"
              },
              {
                icon: Presentation,
                title: "Event Hosting",
                desc: "Bringing sophistication, energy, and seamless moderation to conferences, panels, and corporate events.",
                href: "/services#events"
              }
            ].map((item, i) => (
              <SlideUp key={item.title} delay={i * 0.2} className="bg-white/5 p-8 border border-white/10 hover:border-[var(--color-mbt-gold)]/50 transition-colors group">
                <item.icon className="w-12 h-12 text-[var(--color-mbt-gold)] mb-6" />
                <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-mbt-gold)] transition-colors">{item.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <Link href={item.href} className="inline-flex items-center text-sm font-medium tracking-wide uppercase hover:text-[var(--color-mbt-gold)] transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[var(--color-mbt-beige)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-mbt-gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready to elevate your communication?</h2>
            <p className="text-xl text-gray-600 mb-10">Let's discuss how we can work together to achieve your goals.</p>
            <Link href="/contact">
              <Button size="lg" className="px-12">Get in Touch</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
