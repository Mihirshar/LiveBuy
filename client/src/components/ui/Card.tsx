import { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  grain?: boolean;
  className?: string;
}

const variantStyles = {
  default: `
    bg-navy-light
    border border-white/5
  `,
  elevated: `
    bg-navy-light
    shadow-card
    border border-white/5
  `,
  outlined: `
    bg-transparent
    border-2 border-gold/20
  `,
  glass: `
    bg-white/5 backdrop-blur-md
    border border-white/10
  `,
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hover = true,
      grain = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? {
                y: -4,
                transition: { duration: 0.3, ease: 'easeOut' },
              }
            : undefined
        }
        className={`
          relative rounded-2xl overflow-hidden
          transition-shadow duration-300
          ${variantStyles[variant]}
          ${hover ? 'hover:shadow-card-hover cursor-globe' : ''}
          ${grain ? 'card-grain' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export function CardHeader({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 pt-2 pb-6 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
