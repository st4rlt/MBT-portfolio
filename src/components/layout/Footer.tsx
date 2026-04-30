import Link from "next/link";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight mb-4 inline-block">
            MBT<span className="text-[var(--color-mbt-gold)]">.</span>
          </Link>
          <p className="text-gray-400 max-w-sm mt-4">
            Empowering professionals through mastering English and communication. Based in Tunisia, serving globally.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About Mariem</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-medium mb-6">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mariem-ben-tanfous%F0%9F%9A%80-960572220/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-mbt-gold)] transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:Mariembentanfous1512@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-mbt-gold)] transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/mariembjbt/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-mbt-gold)] transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mariem Ben Tanfous. All rights reserved.</p>
      </div>
    </footer>
  );
}
