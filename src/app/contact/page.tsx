"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SlideUp } from "@/components/ui/SlideUp";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[var(--color-mbt-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Let's Work Together</h1>
          <div className="w-20 h-1 bg-[var(--color-mbt-gold)] mx-auto mb-8" />
          <p className="text-xl text-gray-600 font-light">
            Whether you're looking for corporate training, a speaker for your next event, or academic collaboration, I'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info */}
          <SlideUp className="space-y-12">
            <div>
              <h3 className="font-serif text-3xl mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-mbt-beige)] rounded-full">
                    <Mail className="text-[var(--color-mbt-gold)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1">Email</h4>
                    <a href="mailto:Mariembentanfous1512@gmail.com" className="text-lg hover:text-[var(--color-mbt-gold)] transition-colors">
                      Mariembentanfous1512@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-mbt-beige)] rounded-full">
                    <Phone className="text-[var(--color-mbt-gold)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1">Phone</h4>
                    <a href="tel:+21626802555" className="text-lg hover:text-[var(--color-mbt-gold)] transition-colors">
                      +216 26 802 555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-mbt-beige)] rounded-full">
                    <MapPin className="text-[var(--color-mbt-gold)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-1">Location</h4>
                    <p className="text-lg">Tunis, Tunisia</p>
                    <p className="text-gray-500 text-sm mt-1">Available for international travel</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl mb-8">Connect Online</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mariem-ben-tanfous%F0%9F%9A%80-960572220/" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-200 hover:border-[var(--color-mbt-gold)] hover:bg-[var(--color-mbt-beige)] transition-all group">
                  <LinkedinIcon size={24} className="text-gray-600 group-hover:text-[var(--color-mbt-gold)] transition-colors" />
                </a>
                <a href="https://www.instagram.com/mariembjbt/" target="_blank" rel="noopener noreferrer" className="p-4 border border-gray-200 hover:border-[var(--color-mbt-gold)] hover:bg-[var(--color-mbt-beige)] transition-all group">
                  <InstagramIcon size={24} className="text-gray-600 group-hover:text-[var(--color-mbt-gold)] transition-colors" />
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.2}>
            <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-mbt-gold)]" />
              <h3 className="font-serif text-3xl mb-8">Send a Message</h3>

              {formStatus === "success" ? (
                <div className="bg-[var(--color-mbt-beige)] p-8 text-center py-16">
                  <div className="w-16 h-16 bg-[var(--color-mbt-gold)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl mb-2">Message Sent</h4>
                  <p className="text-gray-600">Thank you for reaching out. I will get back to you shortly.</p>
                  <Button className="mt-8" onClick={() => setFormStatus("idle")}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[var(--color-mbt-gold)] focus:ring-1 focus:ring-[var(--color-mbt-gold)] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[var(--color-mbt-gold)] focus:ring-1 focus:ring-[var(--color-mbt-gold)] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[var(--color-mbt-gold)] focus:ring-1 focus:ring-[var(--color-mbt-gold)] outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Event Hosting">Event Hosting</option>
                      <option value="Academic Collaboration">Academic Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[var(--color-mbt-gold)] focus:ring-1 focus:ring-[var(--color-mbt-gold)] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
