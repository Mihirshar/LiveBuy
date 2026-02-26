import { motion } from 'framer-motion';
import {
  TrendingUp,
  Package,
  DollarSign,
  Clock,
  MapPin,
  ArrowUpRight,
  Calendar,
} from 'lucide-react';
import { LiveBadge } from '../ui';

const stats = [
  {
    label: 'Active Trip',
    value: 'Tokyo, Japan',
    subtext: 'Day 3 of 7',
    icon: MapPin,
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    trend: null,
  },
  {
    label: 'Next Live',
    value: '2h 30m',
    subtext: 'Shibuya Market',
    icon: Clock,
    color: 'text-live-red',
    bgColor: 'bg-live-red/10',
    trend: null,
  },
  {
    label: 'Pending Orders',
    value: '12',
    subtext: '$1,847 value',
    icon: Package,
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    trend: '+3 today',
  },
  {
    label: 'Total Earned',
    value: '$4,280',
    subtext: 'This trip',
    icon: DollarSign,
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    trend: '+12%',
  },
];

const recentOrders = [
  { id: 'ORD-7821', product: 'Vintage Kimono', buyer: 'Sarah M.', price: '$340', status: 'paid' },
  { id: 'ORD-7820', product: 'Japanese Tea Set', buyer: 'Mike R.', price: '$180', status: 'collected' },
  { id: 'ORD-7819', product: 'Ceramic Bowl Set', buyer: 'Emma L.', price: '$95', status: 'shipped' },
  { id: 'ORD-7818', product: 'Silk Scarf', buyer: 'John D.', price: '$120', status: 'paid' },
];

const upcomingStops = [
  { city: 'Shibuya', time: 'Today, 3:00 PM', market: 'Shibuya 109 Vintage', isLive: true },
  { city: 'Harajuku', time: 'Tomorrow, 10:00 AM', market: 'Takeshita Street', isLive: false },
  { city: 'Asakusa', time: 'Mar 3, 2:00 PM', market: 'Nakamise Shopping', isLive: false },
];

export function OverviewSection() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold text-cream">
            Welcome back, Yuki 👋
          </h1>
          <p className="text-cream/50 mt-1">
            Here's what's happening with your trip
          </p>
        </div>
        <div className="flex items-center gap-3">
          <LiveBadge size="md" />
          <span className="text-sm text-cream/70">847 viewers waiting</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              {stat.trend && (
                <span className="flex items-center gap-1 text-xs text-teal font-mono">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </span>
              )}
            </div>
            <p className="text-sm text-cream/50 mb-1">{stat.label}</p>
            <p className="font-heading text-xl font-bold text-cream">{stat.value}</p>
            <p className="text-xs text-cream/40 mt-1 font-mono">{stat.subtext}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-lg font-semibold text-cream">Recent Orders</h2>
            <button className="text-sm text-teal hover:text-teal/80 flex items-center gap-1">
              View all <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-cream truncate">{order.product}</p>
                  <p className="text-xs text-cream/50 font-mono">{order.id} • {order.buyer}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium text-cream">{order.price}</p>
                  <span className={`
                    text-xs px-2 py-0.5 rounded-full font-mono
                    ${order.status === 'paid' ? 'bg-gold/20 text-gold' : ''}
                    ${order.status === 'collected' ? 'bg-teal/20 text-teal' : ''}
                    ${order.status === 'shipped' ? 'bg-live-red/20 text-live-red' : ''}
                  `}>
                    {order.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Stops */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-lg font-semibold text-cream">Trip Schedule</h2>
            <Calendar className="w-5 h-5 text-cream/40" />
          </div>
          <div className="space-y-4">
            {upcomingStops.map((stop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`
                  p-4 rounded-xl border
                  ${stop.isLive
                    ? 'bg-live-red/10 border-live-red/30'
                    : 'bg-white/5 border-white/5'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇯🇵</span>
                    <span className="font-heading font-semibold text-cream">{stop.city}</span>
                  </div>
                  {stop.isLive && <LiveBadge size="sm" />}
                </div>
                <p className="text-sm text-cream/70">{stop.market}</p>
                <p className="text-xs text-cream/40 font-mono mt-2">{stop.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Earnings Chart Placeholder */}
      <div className="mt-6 bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-lg font-semibold text-cream">Earnings This Trip</h2>
          <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-cream/70 focus:outline-none focus:border-teal/50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This trip</option>
          </select>
        </div>
        <div className="h-48 flex items-end justify-between gap-2">
          {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-teal to-teal/50 rounded-t-lg relative group"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 rounded text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ${Math.round(height * 10)}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-cream/40 font-mono">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;
