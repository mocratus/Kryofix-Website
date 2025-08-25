import Image from 'next/image';

interface OptimizedIconProps {
  name: 'whatsapp' | 'whatsapp-white' | 'email' | 'location';
  size?: number;
  className?: string;
  alt: string;
}

export default function OptimizedIcon({ name, size = 24, className = '', alt }: OptimizedIconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      priority={name === 'whatsapp'} // Priorizar WhatsApp por ser más usado
    />
  );
}
