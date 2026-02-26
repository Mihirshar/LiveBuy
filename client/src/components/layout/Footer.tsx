import { motion } from 'framer-motion';
import { Globe, Instagram, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  platform: {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Live Now', href: '#live-now' },
      { label: 'Featured Markets', href: '#markets' },
      { label: 'Pricing', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  influencers: {
    title: 'For Influencers',
    links: [
      { label: 'Join as Creator', href: '#join' },
      { label: 'Creator Dashboard', href: '#' },
      { label: 'Earnings Calculator', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Creator Guidelines', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Shipping Info', href: '#' },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-light border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 cursor-globe"
              whileHover={{ scale: 1.02 }}
            >
              <Globe className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl font-bold text-cream">
                LiveBuy<span className="text-gold">Local</span>
              </span>
            </motion.a>
            
            <p className="font-body text-cream/60 mt-4 text-sm leading-relaxed max-w-xs">
              The global livestream shopping platform connecting you to authentic 
              local products through traveling influencers.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-mono text-xs text-gold uppercase tracking-wider mb-3">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-navy border border-white/10 rounded-lg text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gold text-navy rounded-lg font-semibold text-sm"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-heading font-semibold text-cream mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="font-body text-sm text-cream/60 hover:text-gold transition-colors cursor-globe"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-mono text-xs text-cream/40">
              © {currentYear} LiveBuy Local. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-gold/10 transition-colors cursor-globe"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Language/Currency */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm font-mono transition-colors">
                <span>🌐</span>
                <span>English</span>
              </button>
              <button className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm font-mono transition-colors">
                <span>💵</span>
                <span>USD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
