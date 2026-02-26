import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Wallet, Package, MessageCircle } from 'lucide-react';

const trustSignals = [
  {
    icon: ShieldCheck,
    title: 'Verified Influencers',
    description: 'Every influencer is KYC verified with identity checks, social proof validation, and community ratings.',
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    borderColor: 'border-teal/20',
  },
  {
    icon: Wallet,
    title: 'Escrow Payments',
    description: 'Your payment is held securely until the product is delivered. Full refund guarantee if anything goes wrong.',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    borderColor: 'border-gold/20',
  },
  {
    icon: Package,
    title: 'Customs Handled',
    description: 'We handle all import duties, customs paperwork, and international shipping logistics for you.',
    color: 'text-live-red',
    bgColor: 'bg-live-red/10',
    borderColor: 'border-live-red/20',
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Talk directly with influencers during live streams. Ask questions, request close-ups, negotiate prices.',
    color: 'text-cream',
    bgColor: 'bg-cream/10',
    borderColor: 'border-cream/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function WhyItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4A853 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-gold uppercase tracking-widest">
            Trust & Safety
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4">
            Why It Works
          </h2>
          <p className="font-body text-lg text-cream/60 mt-4 max-w-2xl mx-auto">
            Built-in protections that make cross-border shopping safe and seamless
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                relative p-6 rounded-2xl
                bg-navy-light border ${signal.borderColor}
                group cursor-globe
              `}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${signal.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <signal.icon className={`w-7 h-7 ${signal.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-cream mb-2">
                {signal.title}
              </h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                {signal.description}
              </p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl ${signal.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl -z-10`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '99.2%', label: 'Delivery Success' },
              { value: '<48h', label: 'Avg. Response Time' },
              { value: '$0', label: 'Hidden Fees' },
              { value: '4.9★', label: 'Platform Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-cream/50 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyItWorks;
