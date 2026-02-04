'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCardsPerPage } from '@/hooks/use-cards-per-page';

export type Partner = { src: string; alt: string };

type PartnersCarouselProps = {
  partners: Partner[];
};

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const cardsPerPage = useCardsPerPage('partners');
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(partners.length / cardsPerPage));
  const clampedPage = Math.min(currentPage, totalPages - 1);
  const startIndex = clampedPage * cardsPerPage;
  // Wrap: each slide shows full cardsPerPage by taking from start and filling from beginning
  const visible = Array.from({ length: cardsPerPage }, (_, i) =>
    partners[(startIndex + i) % partners.length]
  );

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const goNext = useCallback(() => {
    setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [goNext]);

  const goPrev = useCallback(() => {
    setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }, [totalPages]);

  if (!partners.length) return null;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="flex items-center gap-3 sm:gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full shrink-0 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
          onClick={goPrev}
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={clampedPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center"
            >
              {visible.map((partner, index) => (
                <div
                  key={`${clampedPage}-${index}-${partner.src}`}
                  className="w-full max-w-[100px] sm:max-w-[120px]"
                >
                  <div className="bg-white dark:bg-background rounded-lg p-2 sm:p-3 lg:p-4 shadow-md transition-all duration-300">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={60}
                      className="w-full h-8 sm:h-10 lg:h-12 object-contain grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full shrink-0 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
          onClick={goNext}
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
