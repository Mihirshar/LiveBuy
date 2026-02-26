import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Map,
  Video,
  Package,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronRight,
  Globe,
} from 'lucide-react';

interface NavItem {
  icon: typeof Home;
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Overview', href: '#overview', active: true },
  { icon: Map, label: 'My Trips', href: '#trips', badge: '2' },
  { icon: Video, label: 'Go Live', href: '#live' },
  { icon: Package, label: 'Orders', href: '#orders', badge: '5' },
  { icon: DollarSign, label: 'Earnings', href: '#earnings' },
  { icon: Settings, label: 'Settings', href: '#settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111318]">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#111318]/95 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center justify-between px-4 h-16">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-cream/70 hover:text-cream"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-teal" />
            <span className="font-heading font-bold text-cream">LiveBuy</span>
          </div>
          <button className="p-2 text-cream/70 hover:text-cream relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-live-red rounded-full" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64
          bg-[#0D0F12] border-r border-white/5
          transform transition-transform duration-300 lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-teal/50 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-cream block">LiveBuy</span>
              <span className="text-xs text-cream/50 font-mono">Creator Studio</span>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-cream/50 hover:text-cream"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="p-4 mx-4 mt-4 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-teal/50"
            />
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-cream truncate">Yuki Tanaka</p>
              <p className="text-xs text-cream/50 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                Tokyo, Japan
              </p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-cream/50">Rating</span>
            <span className="text-sm font-medium text-gold">4.9 ★</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <motion.button
                key={item.href}
                onClick={() => {
                  onSectionChange(item.href.replace('#', ''));
                  setIsSidebarOpen(false);
                }}
                whileHover={{ x: 4 }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-teal/10 text-teal'
                    : 'text-cream/60 hover:text-cream hover:bg-white/5'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-mono
                    ${isActive ? 'bg-teal/20 text-teal' : 'bg-white/10 text-cream/70'}
                  `}>
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-4 h-4" />}
              </motion.button>
            );
          })}
        </nav>

        {/* Go Live Button */}
        <div className="absolute bottom-24 left-4 right-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSectionChange('live')}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-live-red to-live-red/80 text-white font-heading font-semibold flex items-center justify-center gap-2 shadow-lg shadow-live-red/20"
          >
            <Video className="w-5 h-5" />
            Go Live Now
          </motion.button>
        </div>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cream/40 hover:text-cream/70 hover:bg-white/5 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
