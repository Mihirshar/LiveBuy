import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Video, ShoppingBag, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Plane,
    title: 'Influencers Explore',
    description: 'Verified creators travel to hidden markets, artisan workshops, and local boutiques you\'d never find on your own.',
    benefit: 'Access exclusive finds',
    color: 'text-teal',
    bgColor: 'bg-teal/10',
  },
  {
    icon: Video,
    title: 'You Watch Live',
    description: 'Join real-time streams. Ask questions, request close-ups, and watch them negotiate prices — like being there yourself.',
    benefit: 'Interactive shopping',
    color: 'text-live-red',
    bgColor: 'bg-live-red/10',
  },
  {
    icon: ShoppingBag,
    title: 'Buy & Receive',
    description: 'One tap to purchase. We handle customs, shipping, and delivery. Your authentic find arrives in 7-14 days.',
    benefit: 'Hassle-free delivery',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-navy relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-sm text-gold uppercase tracking-widest">
            Simple as 1-2-3
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4">
            Shop Global Markets<br className="hidden sm:block" /> From Your Couch
          </h2>
          <p className="font-body text-lg text-cream/60 mt-4 max-w-2xl mx-auto">
            No passport needed. No language barriers. No customs headaches.<br />
            Just authentic products from around the world, delivered to you.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-gold/50 to-transparent origin-left"
                  />
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                </div>
              )}

              {/* Step Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-navy-light border border-white/5 rounded-2xl p-8 h-full group"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold text-navy font-heading font-bold text-sm rounded-full flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-cream/60 leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${step.color}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {step.benefit}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="flex -space-x-2">
              {['🇯🇵', '🇹🇷', '🇲🇦', '🇫🇷', '🇮🇩'].map((flag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="w-8 h-8 rounded-full bg-navy-light border-2 border-navy flex items-center justify-center text-lg"
                >
                  {flag}
                </motion.span>
              ))}
            </div>
            <span className="text-cream/70 font-body text-sm">
              Active in <span className="text-gold font-semibold">15+ countries</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
