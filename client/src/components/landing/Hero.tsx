import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useApp } from '../../App';

export function Hero() {
  const { openInfluencerModal } = useApp();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial gradient to simulate depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.08)_0%,transparent_50%)]" />

        {/* Wireframe Globe Placeholder map points - simplified aesthetic */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(var(--tw-gradient-stops))',
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/50 to-navy" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-10 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-live-red"></span>
            </span>
            Live From Tokyo, Paris, and 50+ Cities
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-cream">
            Shop the <span className="text-gold italic">World</span>, <br />
            <span className="relative inline-block">
              Live.
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-gold opacity-50"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="font-editorial text-xl md:text-3xl text-cream/80 max-w-2xl mb-12 leading-relaxed">
            Buy authentic local products from Tokyo flea markets, Paris
            boutiques, and Istanbul bazaars — through live influencer streams.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-navy font-bold rounded-full overflow-hidden relative group w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(212,168,83,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <Play className="w-5 h-5 fill-navy" />
              Watch Live Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openInfluencerModal}
              className="px-8 py-4 border border-white/20 hover:border-cream text-cream font-semibold rounded-full w-full sm:w-auto transition-colors"
            >
              Become an Influencer
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Dashboard Prototype Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative w-full aspect-square lg:aspect-video flex items-center justify-center p-2 sm:p-6"
        >
          <div className="relative w-full h-full rounded-2xl bg-navy/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden shadow-gold/20 flex flex-col">
            {/* Fake Browser header */}
            <div className="flex px-4 py-3 border-b border-white/10 bg-white/5 items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-live-red/80"></div>
              <div className="w-3 h-3 rounded-full bg-gold/80"></div>
              <div className="w-3 h-3 rounded-full bg-teal/80"></div>
              <div className="ml-4 flex-1 h-5 rounded-md bg-white/5 border border-white/10 hidden sm:block"></div>
            </div>

            {/* Dashboard body */}
            <div className="flex flex-1 p-3 sm:p-4 gap-4">
              {/* Fake Sidebar */}
              <div className="w-1/4 max-w-[80px] sm:max-w-[100px] flex flex-col gap-3">
                <div className="w-full h-8 rounded bg-white/10"></div>
                <div className="w-3/4 h-3 rounded bg-white/5"></div>
                <div className="w-5/6 h-3 rounded bg-white/5"></div>
                <div className="w-2/3 h-3 rounded bg-white/5"></div>
                <div className="mt-auto w-full h-8 rounded border border-transparent hover:border-live-red/50 transition-colors"></div>
              </div>

              {/* Main dashboard content */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Stat boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gold/20 mb-2"></div>
                    <div className="h-3 sm:h-4 w-12 bg-white/80 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-teal/60 rounded hidden sm:block"></div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-live-red/20 mb-2"></div>
                    <div className="h-3 sm:h-4 w-12 bg-white/80 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-teal/60 rounded hidden sm:block"></div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/5 p-3 rounded-xl border border-white/5 border-gold/30 shadow-[0_0_15px_rgba(212,168,83,0.1)] hidden sm:block"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-navy rounded-sm"></div>
                    </div>
                    <div className="h-4 w-16 bg-white rounded mb-1"></div>
                    <div className="h-2 w-12 bg-gold/80 rounded"></div>
                  </motion.div>
                </div>

                {/* Bar Chart / Feed */}
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                  <div className="h-2 sm:h-3 w-1/4 bg-white/20 rounded mb-4"></div>

                  {/* Animated Bars */}
                  <div className="absolute bottom-0 left-4 right-4 h-[60%] flex items-end justify-between gap-1 sm:gap-2">
                    {[40, 70, 45, 90, 60, 85, 55].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.8 + i * 0.1,
                          type: 'spring',
                        }}
                        className={`w-full rounded-t-sm ${
                          i === 3
                            ? 'bg-gold shadow-[0_0_10px_rgba(212,168,83,0.5)]'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Overlay Element (Live Notification) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.5, delay: 1.5 },
              }}
              className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 bg-navy border border-white/20 p-2 sm:p-3 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-live-red"></span>
              </div>
              <div>
                <div className="text-white text-[10px] sm:text-xs font-bold">
                  New Order!
                </div>
                <div className="text-cream/60 text-[8px] sm:text-[10px]">
                  Tokyo Market • $145
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-cream/50 uppercase">
          Discover
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

export default Hero;
