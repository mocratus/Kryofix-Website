'use client';

import { useState, useEffect } from 'react';

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Tooltip clicked!', { isMobile, isVisible }); // Debug
    setIsVisible(!isVisible);
  };

  // Cerrar tooltip al hacer click fuera (solo en móvil)
  useEffect(() => {
    if (!isMobile || !isVisible) return;

    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest('.tooltip-container')) {
        setIsVisible(false);
      }
    };

    // Usar un pequeño delay para evitar que se cierre inmediatamente
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isVisible, isMobile]);

  // Renderizar tooltip como modal en móvil, normal en desktop
  const renderTooltip = () => {
    if (!isVisible) return null;

    if (isMobile) {
      // Modal simple para móvil
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-sm mx-4 shadow-xl">
            <p className="text-gray-800 text-sm leading-relaxed">{content}</p>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-3 px-4 py-2 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      );
    }

    // Tooltip normal para desktop
    const baseClasses = 'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs';
    const positionClass = position === 'top'
      ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
      : 'top-full left-1/2 transform -translate-x-1/2 mt-2';

    return (
      <div className={`${baseClasses} ${positionClass}`}>
        {content}
        <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    );
  };

  return (
    <>
      <div className={`tooltip-container relative inline-block ${className}`}>
        <div
          onMouseEnter={!isMobile ? showTooltip : undefined}
          onMouseLeave={!isMobile ? hideTooltip : undefined}
          onClick={handleClick}
          className="cursor-help select-none"
          style={{
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
        >
          {children}
        </div>

        {/* Tooltip para desktop */}
        {!isMobile && renderTooltip()}
      </div>

      {/* Modal para móvil */}
      {isMobile && renderTooltip()}
    </>
  );
}
