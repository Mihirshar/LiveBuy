import { motion } from 'framer-motion';

interface LocationTagProps {
  city: string;
  countryCode: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showFlag?: boolean;
}

const countryFlags: Record<string, string> = {
  JP: '🇯🇵',
  TR: '🇹🇷',
  MA: '🇲🇦',
  FR: '🇫🇷',
  ID: '🇮🇩',
  TH: '🇹🇭',
  IN: '🇮🇳',
  IT: '🇮🇹',
  ES: '🇪🇸',
  MX: '🇲🇽',
  BR: '🇧🇷',
  KR: '🇰🇷',
  VN: '🇻🇳',
  GR: '🇬🇷',
  PT: '🇵🇹',
  AE: '🇦🇪',
  EG: '🇪🇬',
  US: '🇺🇸',
  GB: '🇬🇧',
  DE: '🇩🇪',
  CN: '🇨🇳',
  AU: '🇦🇺',
  NZ: '🇳🇿',
  SG: '🇸🇬',
  MY: '🇲🇾',
  PH: '🇵🇭',
  PE: '🇵🇪',
  CO: '🇨🇴',
  AR: '🇦🇷',
  CL: '🇨🇱',
  ZA: '🇿🇦',
  KE: '🇰🇪',
  NG: '🇳🇬',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-3 py-1 gap-1.5',
  lg: 'text-base px-4 py-1.5 gap-2',
};

export function LocationTag({
  city,
  countryCode,
  className = '',
  size = 'md',
  showFlag = true,
}: LocationTagProps) {
  const flag = countryFlags[countryCode.toUpperCase()] || '🌍';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={`
        inline-flex items-center
        bg-navy-light/80 backdrop-blur-sm
        rounded-full font-mono
        text-cream/90
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {showFlag && <span className="flex-shrink-0">{flag}</span>}
      <span className="truncate">{city}</span>
    </motion.div>
  );
}

export default LocationTag;
