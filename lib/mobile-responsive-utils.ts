/**
 * Mobile Responsive Utility Classes
 * 
 * Standardized Tailwind CSS classes for consistent mobile responsiveness
 * across the entire IT Support Perth website.
 */

export const MOBILE_RESPONSIVE_CLASSES = {
  // Container padding system
  CONTAINER_PADDING: {
    // Standard content sections
    DEFAULT: "px-4 sm:px-6 lg:px-8",
    // Hero sections with more breathing room
    HERO: "px-6 sm:px-8 lg:px-12",
    // Tight sections (within cards, etc.)
    COMPACT: "px-4 sm:px-6",
  },

  // Section spacing system
  SECTION_SPACING: {
    // Standard section spacing
    DEFAULT: "py-12 sm:py-16 lg:py-20",
    // Hero sections
    HERO: "py-16 sm:py-20 lg:py-24",
    // Compact sections
    COMPACT: "py-8 sm:py-12 lg:py-16",
    // Extra large sections
    LARGE: "py-20 sm:py-24 lg:py-32",
  },

  // Typography scaling system
  TYPOGRAPHY: {
    // Hero headings - better mobile scaling
    HERO_H1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    // Section headings
    SECTION_H2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    // Subsection headings
    H3: "text-xl sm:text-2xl md:text-3xl",
    // Card titles
    CARD_TITLE: "text-lg sm:text-xl md:text-2xl",
    // Body text
    BODY_LARGE: "text-lg sm:text-xl",
    BODY_DEFAULT: "text-base sm:text-lg",
    // Small text
    SMALL: "text-sm sm:text-base",
  },

  // Button and touch target optimization
  BUTTONS: {
    // Primary CTA buttons
    PRIMARY_CTA: "min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg",
    // Secondary buttons
    SECONDARY: "min-h-[48px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base",
    // Small buttons
    SMALL: "min-h-[40px] px-3 sm:px-4 py-2 text-xs sm:text-sm",
  },

  // Grid system improvements
  GRIDS: {
    // Stats/features - better mobile layout
    STATS_GRID: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
    // Two-column content
    TWO_COL: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12",
    // Three-column layout
    THREE_COL: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8",
    // Four-column layout
    FOUR_COL: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
    // Service cards
    SERVICE_CARDS: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
    // Team members
    TEAM_GRID: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8",
  },

  // Form optimization
  FORMS: {
    // Form inputs
    INPUT: "min-h-[48px] px-3 sm:px-4 py-2 sm:py-3 text-base",
    // Form buttons
    SUBMIT_BUTTON: "min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold",
  },

  // Card and component spacing
  CARDS: {
    // Card padding
    PADDING: "p-4 sm:p-6 lg:p-8",
    // Card gaps in grids
    GRID_GAP: "gap-4 sm:gap-6 lg:gap-8",
  },
} as const;

/**
 * Helper function to combine classes
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Mobile-first breakpoint utilities
 */
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

/**
 * Touch target recommendations
 */
export const TOUCH_TARGETS = {
  // Minimum recommended touch target size
  MIN_SIZE: '44px',
  // Recommended touch target size
  RECOMMENDED_SIZE: '48px',
  // Large touch targets for primary actions
  LARGE_SIZE: '56px',
} as const;

/**
 * Responsive image utilities
 */
export const RESPONSIVE_IMAGES = {
  // Standard responsive image sizes
  SIZES: {
    FULL: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    HALF: "(max-width: 768px) 100vw, 50vw",
    THIRD: "(max-width: 768px) 100vw, 33vw",
    HERO: "(max-width: 768px) 100vw, 100vw",
  },
} as const;

/**
 * Animation and interaction utilities for mobile
 */
export const MOBILE_INTERACTIONS = {
  // Hover effects that work well on mobile
  HOVER_LIFT: "transition-transform duration-300 hover:scale-105 active:scale-95",
  // Touch-friendly transitions
  TOUCH_TRANSITION: "transition-colors duration-200 active:scale-95",
  // Reduced motion for mobile performance
  REDUCED_MOTION: "motion-reduce:transform-none motion-reduce:transition-none",
} as const;

/**
 * Utility function to check if we're on mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Utility function to get responsive font size
 */
export function getResponsiveFontSize(level: keyof typeof MOBILE_RESPONSIVE_CLASSES.TYPOGRAPHY): string {
  return MOBILE_RESPONSIVE_CLASSES.TYPOGRAPHY[level];
}

/**
 * Utility function to get responsive spacing
 */
export function getResponsiveSpacing(type: keyof typeof MOBILE_RESPONSIVE_CLASSES.SECTION_SPACING): string {
  return MOBILE_RESPONSIVE_CLASSES.SECTION_SPACING[type];
}