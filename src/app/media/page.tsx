import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const LinkedinIcon = ({ className, size = 28 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className, size = 28 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export const metadata = {
  title: "Media & Social | Mariem Ben Tanfous",
  description: "View LinkedIn insights and Instagram gallery featuring Mariem Ben Tanfous.",
};

const LINKEDIN_URL = "https://www.linkedin.com/in/mariem-ben-tanfous%F0%9F%9A%80-960572220/";
const INSTAGRAM_URL = "https://www.instagram.com/mariembjbt/";

export default function MediaPage() {
  const linkedinPosts = [
    {
      title: "The GreenPrint Hackathon",
      type: "Hackathon",
      date: "View on LinkedIn",
      image: "/Screenshot 2026-04-30 182905.png"
    },
    {
      title: "Preventum Summit",
      type: "Event",
      date: "View on LinkedIn",
      image: "/Screenshot 2026-04-30 182916.png"
    },
    {
      title: "AmCham Event",
      type: "Event",
      date: "View on LinkedIn",
      image: "/Screenshot 2026-04-30 182928.png"
    }
  ];

  const instagramPosts = [
    "/Screenshot 2026-04-29 082259.png",
    "/Screenshot 2026-04-29 082320.png",
    "/Screenshot 2026-04-29 082340.png",
    "/Screenshot 2026-04-29 082354.png",
    "/Screenshot 2026-04-29 082404.png",
    "/Screenshot 2026-04-29 082423.png"
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <FadeIn className="mb-20 text-center max-w-3xl mx-auto px-6">
        <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
          Social & Media
        </span>
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Connect & Discover</h1>
        <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto mb-8" />
      </FadeIn>

      {/* Featured Appearances -> LinkedIn */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <LinkedinIcon className="text-[#0A66C2]" size={28} />
            <h2 className="font-serif text-3xl">LinkedIn Insights</h2>
          </div>
          <Link href={LINKEDIN_URL} target="_blank" className="text-sm uppercase tracking-widest hover:text-[#0A66C2] transition-colors hidden md:block">
            Connect on LinkedIn
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linkedinPosts.map((post, index) => (
            <SlideUp key={index} delay={index * 0.1} className="group cursor-pointer">
              <Link href={LINKEDIN_URL} target="_blank">
                <div className="relative aspect-video mb-6 overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium uppercase tracking-wider py-1.5 px-3 text-[#0A66C2]">
                    {post.type}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-[#0A66C2] transition-colors">{post.title}</h3>
                <p className="text-gray-500 hover:underline">{post.date}</p>
              </Link>
            </SlideUp>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href={LINKEDIN_URL} target="_blank" className="text-sm uppercase tracking-widest text-[#0A66C2]">
            Connect on LinkedIn
          </Link>
        </div>
      </section>

      {/* Visual Gallery -> Instagram */}
      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <InstagramIcon className="text-[#E1306C]" size={28} />
              <h2 className="font-serif text-3xl">Instagram Gallery</h2>
            </div>
            <Link href={INSTAGRAM_URL} target="_blank" className="text-sm uppercase tracking-widest hover:text-[#E1306C] transition-colors hidden md:block">
              Follow @mariembjbt
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {instagramPosts.map((src, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <Link href={INSTAGRAM_URL} target="_blank">
                  <div className="relative aspect-square overflow-hidden bg-gray-900 group">
                    <img 
                      src={src} 
                      alt={`Instagram Post ${index + 1}`}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <Button variant="outline" className="border-white text-white hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white transition-colors">
                        View on Instagram
                      </Button>
                    </div>
                  </div>
                </Link>
              </SlideUp>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href={INSTAGRAM_URL} target="_blank" className="text-sm uppercase tracking-widest text-[#E1306C]">
              Follow @mariembjbt
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl mb-6">Looking for a speaker or host?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Available for keynotes, panel moderation, and corporate event hosting globally.
          </p>
          <Link href="/contact?subject=Booking Inquiry">
            <Button size="lg" className="px-12">Book Mariem</Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
