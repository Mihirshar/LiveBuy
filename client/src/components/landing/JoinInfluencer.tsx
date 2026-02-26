import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, Globe, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { useApp } from '../../App';

const stats = [
  {
    icon: DollarSign,
    value: '$2,400',
    label: 'Avg. Earnings per Trip',
    color: 'text-gold',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries Active',
    color: 'text-teal',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Global Buyers',
    color: 'text-live-red',
  },
  {
    icon: TrendingUp,
    value: '340%',
    label: 'Creator Growth YoY',
    color: 'text-cream',
  },
];

const benefits = [
  'Monetize your travel adventures',
  'Zero upfront costs — we handle logistics',
  'Build a global audience of buyers',
  'Flexible schedule, work from anywhere',
  'Earn commissions on every sale',
  'Access to exclusive market partnerships',
];

export function JoinInfluencer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { openInfluencerModal } = useApp();

  return (
    <section
      id="join"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-teal rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="font-mono text-sm text-gold">Now Recruiting</span>
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
              Turn Your Travels Into{' '}
              <span className="text-gradient-gold">Income</span>
            </h2>

            <p className="font-body text-lg text-cream/70 mt-6 leading-relaxed">
              Join our network of traveling influencers and earn money by showcasing 
              authentic local products to a global audience. No inventory, no shipping 
              hassles — just you, your camera, and the world's best markets.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-cream/80"
                >
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="font-body">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={openInfluencerModal}
              >
                Apply to Join
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-navy-light/50 backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-colors cursor-globe"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <div className={`font-heading text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-cream/50 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-gold/5 via-transparent to-gold/5 border border-gold/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop"
              alt="Testimonial"
              className="w-20 h-20 rounded-full object-cover border-2 border-gold/30"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="font-editorial text-xl md:text-2xl text-cream italic leading-relaxed">
                "I made $3,200 in my first month just by going live from the markets I was 
                already visiting. It's like getting paid to travel."
              </p>
              <div className="mt-4">
                <span className="font-heading font-semibold text-cream">Yuki Tanaka</span>
                <span className="text-cream/50 mx-2">•</span>
                <span className="font-mono text-sm text-gold">Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JoinInfluencer;
