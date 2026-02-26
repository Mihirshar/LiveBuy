import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Package } from 'lucide-react';

interface Market {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  productCount: number;
  image: string;
  description: string;
  featured?: boolean;
}

const markets: Market[] = [
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    productCount: 342,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    description: 'Vintage fashion, electronics, anime collectibles',
    featured: true,
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    productCount: 287,
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
    description: 'Ceramics, spices, Turkish carpets',
  },
  {
    id: 'marrakech',
    city: 'Marrakech',
    country: 'Morocco',
    countryCode: 'MA',
    productCount: 198,
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&h=600&fit=crop',
    description: 'Leather goods, textiles, argan products',
  },
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    productCount: 256,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    description: 'Antiques, art, luxury vintage',
    featured: true,
  },
  {
    id: 'bali',
    city: 'Bali',
    country: 'Indonesia',
    countryCode: 'ID',
    productCount: 176,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
    description: 'Silver jewelry, wood carvings, batik',
  },
];

const countryFlags: Record<string, string> = {
  JP: '🇯🇵',
  TR: '🇹🇷',
  MA: '🇲🇦',
  FR: '🇫🇷',
  ID: '🇮🇩',
};

function MarketCard({ market, index }: { market: Market; index: number }) {
  const isFeatured = market.featured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`
        relative group cursor-globe overflow-hidden rounded-2xl
        ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={market.image}
          alt={market.city}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-end p-6 ${isFeatured ? 'md:p-8' : ''}`}>
        {/* Flag */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="text-4xl mb-3"
        >
          {countryFlags[market.countryCode]}
        </motion.span>

        {/* City & Country */}
        <h3 className={`font-display font-bold text-cream ${isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
          {market.city}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-cream/70">
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">{market.country}</span>
        </div>

        {/* Description */}
        <p className={`font-body text-cream/60 mt-2 ${isFeatured ? 'text-base' : 'text-sm'}`}>
          {market.description}
        </p>

        {/* Product count */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/20 backdrop-blur-sm rounded-full">
            <Package className="w-4 h-4 text-gold" />
            <span className="font-mono text-sm text-gold font-medium">
              {market.productCount} products
            </span>
          </div>
        </div>

        {/* Hover overlay with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-navy/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gold text-navy font-heading font-semibold rounded-xl shadow-warm"
          >
            Explore {market.city}
          </motion.button>
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function FeaturedMarkets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="markets"
      ref={ref}
      className="py-24 md:py-32 bg-navy-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-gold uppercase tracking-widest">
            Destinations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4">
            Featured Markets
          </h2>
          <p className="font-body text-lg text-cream/60 mt-4 max-w-2xl mx-auto">
            Discover authentic products from the world's most vibrant markets and bazaars
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[180px]">
          {markets.map((market, index) => (
            <MarketCard key={market.id} market={market} index={index} />
          ))}
        </div>

        {/* View All Markets CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold/30 rounded-2xl text-cream font-heading font-semibold hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-globe"
          >
            <span>Explore All 15 Countries</span>
            <span className="text-gold">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-navy to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  );
}

export default FeaturedMarkets;
