
// Custom animation utility functions for the portfolio
export const ANIMATION_CONFIG = {
  standard: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  },
  slow: {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

// Utility function to create staggered animation delays
export const staggeredDelay = (index: number, baseDelay = 0.1): number => {
  return baseDelay * index;
};

// Animation variants for common components
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: ANIMATION_CONFIG.standard },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: ANIMATION_CONFIG.standard },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: ANIMATION_CONFIG.standard },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { ...ANIMATION_CONFIG.standard, duration: 0.4 } 
  },
};

// More complex animations for specific components
export const heroTextAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: staggeredDelay(i, 0.2),
      ...ANIMATION_CONFIG.standard,
    },
  }),
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
