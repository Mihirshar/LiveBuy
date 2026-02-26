import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Settings,
  Copy,
  Check,
  Plus,
  Eye,
  MessageCircle,
} from 'lucide-react';
import { Button, LiveBadge } from '../ui';

const mockProducts = [
  { id: 1, name: 'Vintage Kimono', price: '$340', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=100&h=100&fit=crop', stock: 1 },
  { id: 2, name: 'Japanese Tea Set', price: '$180', image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=100&h=100&fit=crop', stock: 3 },
  { id: 3, name: 'Ceramic Bowl Set', price: '$95', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=100&h=100&fit=crop', stock: 5 },
  { id: 4, name: 'Silk Scarf', price: '$120', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop', stock: 2 },
];

const mockChat = [
  { user: 'Sarah M.', message: 'Can you show the back of the kimono?', time: '2m ago' },
  { user: 'Mike R.', message: 'What size is it?', time: '1m ago' },
  { user: 'Emma L.', message: '😍 Beautiful!', time: 'Just now' },
];

export function GoLiveSection() {
  const [isLive, setIsLive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false);
  const [activeProducts, setActiveProducts] = useState<number[]>([1, 2]);

  const streamKey = 'rtmp://live.livebuy.local/stream/yuki-tanaka-2024';

  const copyStreamKey = () => {
    navigator.clipboard.writeText(streamKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const toggleProduct = (id: number) => {
    setActiveProducts(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-2xl lg:text-3xl font-bold text-cream">
            Go Live
          </h1>
          <p className="text-cream/50 mt-1">
            Start broadcasting to your audience
          </p>
        </div>
        {isLive && (
          <div className="flex items-center gap-4">
            <LiveBadge size="lg" />
            <div className="flex items-center gap-2 text-cream/70">
              <Eye className="w-4 h-4" />
              <span className="font-mono">1,247</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Stream Preview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Preview */}
          <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-[#0a0a0a] relative flex items-center justify-center">
              {isVideoOn ? (
                <img
                  src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1280&h=720&fit=crop"
                  alt="Stream preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <VideoOff className="w-16 h-16 text-cream/20 mx-auto mb-4" />
                  <p className="text-cream/40">Camera is off</p>
                </div>
              )}
              
              {/* Live indicator overlay */}
              {isLive && (
                <div className="absolute top-4 left-4">
                  <LiveBadge size="lg" />
                </div>
              )}

              {/* Viewer count overlay */}
              {isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                  <Eye className="w-4 h-4 text-cream" />
                  <span className="text-sm font-mono text-cream">1,247</span>
                </div>
              )}

              {/* Controls overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isMuted ? 'bg-live-red' : 'bg-white/20 backdrop-blur-sm'}
                  `}
                >
                  {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${!isVideoOn ? 'bg-live-red' : 'bg-white/20 backdrop-blur-sm'}
                  `}
                >
                  {isVideoOn ? <Video className="w-5 h-5 text-white" /> : <VideoOff className="w-5 h-5 text-white" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Settings className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Stream Info */}
            <div className="p-4 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <label className="text-xs text-cream/50 font-mono uppercase tracking-wider">Stream Key</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="flex-1 px-3 py-2 bg-black/30 rounded-lg text-sm text-cream/70 font-mono truncate">
                      {streamKey}
                    </code>
                    <button
                      onClick={copyStreamKey}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {copiedKey ? (
                        <Check className="w-5 h-5 text-teal" />
                      ) : (
                        <Copy className="w-5 h-5 text-cream/50" />
                      )}
                    </button>
                  </div>
                </div>
                <Button
                  variant={isLive ? 'danger' : 'primary'}
                  size="lg"
                  onClick={() => setIsLive(!isLive)}
                  className={isLive ? 'bg-live-red hover:bg-live-red/90' : ''}
                >
                  {isLive ? 'End Stream' : 'Start Broadcast'}
                </Button>
              </div>
            </div>
          </div>

          {/* Product Queue */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-lg font-semibold text-cream">
                Active Products ({activeProducts.length})
              </h2>
              <button className="text-sm text-teal hover:text-teal/80 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockProducts.map((product) => {
                const isActive = activeProducts.includes(product.id);
                return (
                  <motion.div
                    key={product.id}
                    layout
                    onClick={() => toggleProduct(product.id)}
                    className={`
                      flex-shrink-0 w-32 p-3 rounded-xl cursor-pointer transition-all
                      ${isActive
                        ? 'bg-teal/20 border-2 border-teal'
                        : 'bg-white/5 border-2 border-transparent hover:border-white/10'
                      }
                    `}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square rounded-lg object-cover mb-2"
                    />
                    <p className="text-sm font-medium text-cream truncate">{product.name}</p>
                    <p className="text-xs text-cream/50 font-mono">{product.price}</p>
                    <p className="text-xs text-cream/40 mt-1">Stock: {product.stock}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-white/5 border border-white/5 rounded-2xl flex flex-col h-[600px]">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-cream/50" />
              <h2 className="font-heading font-semibold text-cream">Live Chat</h2>
            </div>
            <span className="text-xs text-cream/40 font-mono">23 chatting</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {mockChat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center text-xs font-bold text-navy">
                    {msg.user[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-cream">{msg.user}</span>
                      <span className="text-xs text-cream/40">{msg.time}</span>
                    </div>
                    <p className="text-sm text-cream/70 mt-0.5">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="p-4 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-teal/50"
              />
              <button className="px-4 py-2 bg-teal rounded-xl text-white font-medium hover:bg-teal/90 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoLiveSection;
