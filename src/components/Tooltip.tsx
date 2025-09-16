'use client';

import { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export default function Tooltip({ 
  content, 
  children, 
  position = 'top',
  className = '' 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si es dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  // Cerrar tooltip al hacer click fuera
  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible]);

  const getPositionClasses = () => {
    const baseClasses = isMobile
      ? 'absolute z-50 px-4 py-3 text-sm text-white bg-gray-900 rounded-lg shadow-xl max-w-sm border border-gray-700'
      : 'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs';

    // En móvil, siempre mostrar arriba para mejor visibilidad
    if (isMobile) {
      return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-3`;
    }

    switch (position) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
      case 'bottom':
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-2`;
      case 'left':
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-2`;
      case 'right':
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-2`;
      default:
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
    }
  };

  const getArrowClasses = () => {
    const baseArrow = 'absolute w-2 h-2 bg-gray-900 transform rotate-45';

    // En móvil, siempre flecha hacia abajo (tooltip arriba)
    if (isMobile) {
      return `${baseArrow} top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
    }

    switch (position) {
      case 'top':
        return `${baseArrow} top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
      case 'bottom':
        return `${baseArrow} bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2`;
      case 'left':
        return `${baseArrow} left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2`;
      case 'right':
        return `${baseArrow} right-full top-1/2 transform -translate-y-1/2 translate-x-1/2`;
      default:
        return `${baseArrow} top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        ref={triggerRef}
        onMouseEnter={!isMobile ? showTooltip : undefined}
        onMouseLeave={!isMobile ? hideTooltip : undefined}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        className="cursor-help touch-manipulation"
        style={{
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={getPositionClasses()}
          style={{
            animation: 'fadeIn 0.2s ease-in-out',
          }}
        >
          {content}
          <div className={getArrowClasses()}></div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
