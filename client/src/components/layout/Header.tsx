import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../App';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openInfluencerModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <Globe className="w-6 h-6 text-gold group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-display font-semibold text-xl tracking-wide text-cream">
            LiveBuy Local
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('#how-it-works')}
            className="text-sm font-medium text-cream/70 hover:text-gold transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollToSection('#markets')}
            className="text-sm font-medium text-cream/70 hover:text-gold transition-colors"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection('#live-now')}
            className="flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-gold transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-live-red"></span>
            </span>
            Live Now
          </button>
          <button
            onClick={openInfluencerModal}
            className="px-5 py-2 text-sm font-semibold rounded-full border border-white/20 hover:border-gold hover:text-gold transition-all text-cream"
          >
            Join as Influencer
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="text-lg py-2 border-b border-white/5 text-left text-cream hover:text-gold transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('#markets')}
                className="text-lg py-2 border-b border-white/5 text-left text-cream hover:text-gold transition-colors"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('#live-now')}
                className="text-lg py-2 flex items-center gap-2 text-live-red text-left"
              >
                <span className="h-2 w-2 rounded-full bg-live-red"></span> Live Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openInfluencerModal();
                }}
                className="w-full mt-4 px-5 py-3 text-sm font-semibold rounded-full bg-gold text-navy"
              >
                Join as Influencer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
