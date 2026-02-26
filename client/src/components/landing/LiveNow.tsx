import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Clock } from 'lucide-react';
import { LiveBadge, LocationTag } from '../ui';

interface LiveStream {
  id: string;
  influencer: {
    name: string;
    avatar: string;
  };
  location: {
    city: string;
    countryCode: string;
  };
  category: string;
  viewerCount: number;
  isLive: boolean;
  scheduledTime?: string;
  thumbnail: string;
}

const mockLiveStreams: LiveStream[] = [
  {
    id: '1',
    influencer: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    },
    location: { city: 'Tokyo', countryCode: 'JP' },
    category: 'Vintage Fashion',
    viewerCount: 1247,
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    influencer: {
      name: 'Elif Yilmaz',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    location: { city: 'Istanbul', countryCode: 'TR' },
    category: 'Ceramics & Crafts',
    viewerCount: 892,
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    influencer: {
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    location: { city: 'Paris', countryCode: 'FR' },
    category: 'Antiques',
    viewerCount: 634,
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    influencer: {
      name: 'Fatima Benali',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
    },
    location: { city: 'Marrakech', countryCode: 'MA' },
    category: 'Textiles & Rugs',
    viewerCount: 0,
    isLive: false,
    scheduledTime: '2:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    influencer: {
      name: 'Made Wijaya',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    location: { city: 'Bali', countryCode: 'ID' },
    category: 'Silver Jewelry',
    viewerCount: 0,
    isLive: false,
    scheduledTime: '4:30 PM',
    thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    influencer: {
      name: 'Marco Rossi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    location: { city: 'Florence', countryCode: 'IT' },
    category: 'Leather Goods',
    viewerCount: 0,
    isLive: false,
    scheduledTime: '6:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    influencer: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    },
    location: { city: 'Jaipur', countryCode: 'IN' },
    category: 'Gemstones',
    viewerCount: 1089,
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    influencer: {
      name: 'Min-jun Kim',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    },
    location: { city: 'Seoul', countryCode: 'KR' },
    category: 'K-Beauty',
    viewerCount: 2341,
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
  },
];

function LiveStreamCard({ stream, index }: { stream: LiveStream; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="flex-shrink-0 w-72 md:w-80 cursor-globe group"
    >
      <div className="relative bg-navy-light rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold/30 transition-colors duration-300">
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={stream.thumbnail}
            alt={`${stream.influencer.name}'s stream`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent" />
          
          {/* Live/Upcoming Badge */}
          <div className="absolute top-3 left-3">
            {stream.isLive ? (
              <LiveBadge size="sm" />
            ) : (
              <div className="flex items-center gap-1 px-2 py-1 bg-navy/80 backdrop-blur-sm rounded-full text-xs font-mono text-cream/80">
                <Clock className="w-3 h-3" />
                <span>{stream.scheduledTime}</span>
              </div>
            )}
          </div>

          {/* Viewer count */}
          {stream.isLive && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-navy/80 backdrop-blur-sm rounded-full text-xs font-mono text-cream/80">
              <Eye className="w-3 h-3" />
              <span>{stream.viewerCount.toLocaleString()}</span>
            </div>
          )}

          {/* Category tag */}
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-xs font-medium text-gold">
              {stream.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative">
              <img
                src={stream.influencer.avatar}
                alt={stream.influencer.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-navy-light"
              />
              {stream.isLive && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-live-red rounded-full border-2 border-navy-light" />
              )}
            </div>

            {/* Name & Location */}
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-semibold text-cream truncate">
                {stream.influencer.name}
              </h4>
              <LocationTag
                city={stream.location.city}
                countryCode={stream.location.countryCode}
                size="sm"
                className="mt-1"
              />
            </div>
          </div>

          {/* Join button on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto' }}
            className="overflow-hidden"
          >
            <button className="w-full mt-4 py-2 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold-light transition-colors">
              {stream.isLive ? 'Join Live' : 'Set Reminder'}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function LiveNow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const liveStreams = mockLiveStreams.filter((s) => s.isLive);
  const upcomingStreams = mockLiveStreams.filter((s) => !s.isLive);

  return (
    <section
      id="live-now"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LiveBadge size="md" />
              <span className="font-mono text-sm text-cream/60">
                {liveStreams.length} streams active
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Live Right Now
            </h2>
            <p className="font-body text-lg text-cream/60 mt-2">
              Join influencers shopping in real-time around the world
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="mt-4 md:mt-0 text-gold font-medium flex items-center gap-2 cursor-globe"
          >
            View all streams
            <span>→</span>
          </motion.button>
        </motion.div>

        {/* Live Streams - Horizontal Scroll */}
        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4"
          drag="x"
          dragConstraints={containerRef}
          style={{ cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {liveStreams.map((stream, index) => (
            <LiveStreamCard key={stream.id} stream={stream} index={index} />
          ))}
        </motion.div>

        {/* Upcoming Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-5 h-5 text-cream/60" />
            <h3 className="font-heading text-2xl font-bold text-cream">
              Coming Up Today
            </h3>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {upcomingStreams.map((stream, index) => (
              <LiveStreamCard
                key={stream.id}
                stream={stream}
                index={index + liveStreams.length}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-live-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

export default LiveNow;
