'use client';

import { useState, useEffect } from 'react';

/**
 * Preset 'default': 1 (mobile), 2 (tablet md), 3 (desktop lg).
 * Preset 'partners': 3 (mobile), 4 (tablet md), 5 (desktop lg).
 * Matches Tailwind: default < 768px, md >= 768px, lg >= 1024px.
 */
export function useCardsPerPage(preset: 'default' | 'partners' = 'default'): number {
  const defaultInitial = preset === 'partners' ? 3 : 1;
  const [cardsPerPage, setCardsPerPage] = useState(defaultInitial);
  useEffect(() => {
    const update = () => {
      if (typeof window === 'undefined') return;
      const isLg = window.matchMedia('(min-width: 1024px)').matches;
      const isMd = window.matchMedia('(min-width: 768px)').matches;
      if (preset === 'partners') {
        setCardsPerPage(isLg ? 5 : isMd ? 4 : 3);
      } else {
        setCardsPerPage(isLg ? 3 : isMd ? 2 : 1);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [preset]);
  return cardsPerPage;
}
