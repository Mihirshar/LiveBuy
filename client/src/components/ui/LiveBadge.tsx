import { motion } from 'framer-motion';

interface LiveBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const sizeStyles = {
  sm: {
    container: 'px-2 py-0.5 text-xs gap-1',
    dot: 'w-1.5 h-1.5',
  },
  md: {
    container: 'px-3 py-1 text-sm gap-1.5',
    dot: 'w-2 h-2',
  },
  lg: {
    container: 'px-4 py-1.5 text-base gap-2',
    dot: 'w-2.5 h-2.5',
  },
};

export function LiveBadge({ size = 'md', className = '', showText = true }: LiveBadgeProps) {
  const styles = sizeStyles[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center
        bg-live-red/90 backdrop-blur-sm
        rounded-full font-heading font-semibold tracking-wider
        text-white uppercase
        ${styles.container}
        ${className}
      `}
    >
      <motion.span
        className={`
          ${styles.dot}
          bg-white rounded-full
        `}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {showText && <span>Live</span>}
    </motion.div>
  );
}

export default LiveBadge;
