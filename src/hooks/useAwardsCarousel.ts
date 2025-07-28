import { useState, useEffect, useCallback } from 'react';

interface Delegate {
  name: string;
  school: string;
  award: string;
}

export const useAwardsCarousel = (delegates: Delegate[], isReverse: boolean = false) => {
  const [position, setPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const cardWidth = 300; // Width of each card
  const gap = 24; // Gap between cards (6 * 4 = 24px)
  const itemWidth = cardWidth + gap;
  const totalWidth = delegates.length * itemWidth;

  const scroll = useCallback((direction: 'left' | 'right') => {
    setPosition(prev => {
      // Adjust direction based on isReverse
      const effectiveDirection = isReverse ? (direction === 'left' ? 'right' : 'left') : direction;
      const newPosition = effectiveDirection === 'left' 
        ? prev + itemWidth
        : prev - itemWidth;

      // When scrolling right and reaching the end
      if (Math.abs(newPosition) >= totalWidth) {
        return 0;
      }

      // When scrolling left and reaching the start
      if (newPosition > 0) {
        return -totalWidth + itemWidth;
      }

      return newPosition;
    });
  }, [totalWidth, itemWidth, isReverse]);

  // Auto scroll effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        // Auto scroll in opposite direction if isReverse is true
        scroll(isReverse ? 'left' : 'right');
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, scroll, isReverse]);

  // Reset position when reaching the end
  useEffect(() => {
    if (Math.abs(position) >= totalWidth) {
      setPosition(0);
    }
  }, [position, totalWidth]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return {
    position,
    scroll,
    pauseAutoPlay,
    resumeAutoPlay,
    cardWidth,
    gap,
    totalWidth,
    isReverse
  };
}; 