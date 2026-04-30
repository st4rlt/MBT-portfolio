"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ───────────────────────────────────────────
   LinkedIn Embed – profile card + recent activity CTA
   ─────────────────────────────────────────── */
export function LinkedInEmbed({ profileUrl }: { profileUrl: string }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const linkedinHighlights = [
    {
      icon: "🎤",
      title: "Public Speaking & Event Hosting",
      description:
        "Keynote speaker and event host for major corporate events, summits, and conferences across MENA.",
      tag: "Featured",
    },
    {
      icon: "📚",
      title: "University Professor & Trainer",
      description:
        "Teaching and training professionals in corporate communication, leadership, and linguistic diversity.",
      tag: "Education",
    },
    {
      icon: "🚀",
      title: "Entrepreneurship & Brand Building",
      description:
        "Building personal brands and helping entrepreneurs craft their story with impact and authenticity.",
      tag: "Business",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#004182] p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/30 overflow-hidden bg-white/20 flex-shrink-0">
            <img
              src="https://scontent.cdninstagram.com/v/t51.2885-19/369851214_1301301937192032_376296549126150438_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=cCmR4kZ0xs0Q7kNvwHO2DAW&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_Af1N9ki7eGG4-Gzi3ziM4NlpTWrkmidZ2ZnAFOFlj3ZUHA&oe=69F940D3"
              alt="Mariem Ben Tanfous"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left text-white flex-1">
            <h3 className="text-2xl md:text-3xl font-serif mb-2">
              Mariem Ben Tanfous 🚀
            </h3>
            <p className="text-white/80 text-lg mb-4">
              Professor | Corporate Trainer | Entrepreneur | Event Host
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href={profileUrl}
                target="_blank"
                className="inline-flex items-center gap-2 bg-white text-[#0A66C2] font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn Profile
              </Link>
              <Link
                href={`${profileUrl}recent-activity/all/`}
                target="_blank"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                View Recent Posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {linkedinHighlights.map((item, index) => (
          <Link
            key={index}
            href={profileUrl}
            target="_blank"
            className="group"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-500 h-full ${
                hoveredCard === index
                  ? "border-[#0A66C2]/40 bg-[#0A66C2]/5 shadow-lg shadow-[#0A66C2]/10 -translate-y-1"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0A66C2]/5 to-transparent rounded-bl-full" />

              <span className="inline-block bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {item.tag}
              </span>

              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#0A66C2] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-[#0A66C2] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read more on LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   Instagram Embed – profile grid with real embed attempt
   ─────────────────────────────────────────── */
export function InstagramEmbed({
  username,
  profileUrl,
}: {
  username: string;
  profileUrl: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Instagram-styled gradient colors for visual appeal
  const gradients = [
    "from-purple-500 via-pink-500 to-orange-400",
    "from-blue-500 via-purple-500 to-pink-500",
    "from-orange-400 via-red-500 to-pink-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-pink-500 via-purple-600 to-blue-500",
    "from-teal-400 via-blue-500 to-purple-600",
  ];

  const instagramStats = [
    { label: "Posts", value: "241" },
    { label: "Followers", value: "1,096" },
    { label: "Following", value: "1,705" },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-[2px]">
        <div className="bg-black rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image with Instagram ring */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]">
                <div className="w-full h-full rounded-full border-[3px] border-black overflow-hidden">
                  <img
                    src="https://scontent.cdninstagram.com/v/t51.2885-19/369851214_1301301937192032_376296549126150438_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=cCmR4kZ0xs0Q7kNvwHO2DAW&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_Af1N9ki7eGG4-Gzi3ziM4NlpTWrkmidZ2ZnAFOFlj3ZUHA&oe=69F940D3"
                    alt={`@${username}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <h3 className="text-2xl font-light text-white">
                  @{username}
                </h3>
              </div>
              <p className="text-white/60 mb-5">Mariem Ben Tanfous</p>

              {/* Stats */}
              <div className="flex gap-8 justify-center md:justify-start mb-6">
                {instagramStats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <span className="text-white font-bold text-lg">
                      {stat.value}
                    </span>
                    <span className="text-white/50 text-sm ml-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={profileUrl}
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold px-8 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                View Instagram Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram-style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {gradients.map((gradient, index) => (
          <Link
            key={index}
            href={profileUrl}
            target="_blank"
            className="group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative aspect-square overflow-hidden bg-gray-900 rounded-sm md:rounded-md">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="drop-shadow-lg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-white text-sm font-medium">
                  View on Instagram
                </span>
              </div>

              {/* Decorative content to make it look like post previews */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-xl`}
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-40">
                <div className="w-5 h-5 rounded-full bg-white/20" />
                <div className="h-2 w-16 rounded-full bg-white/10" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More CTA */}
      <div className="text-center pt-4">
        <Link
          href={profileUrl}
          target="_blank"
          className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm uppercase tracking-[0.2em]">
            View all 241 posts on Instagram
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
