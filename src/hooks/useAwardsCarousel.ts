import { useState, useEffect, useCallback, useRef } from 'react';

interface Delegate {
  name: string;
  school: string;
  award: string;
}

export const useAwardsCarousel = (
  delegates: Delegate[],
  rowIndex: number,
  scrollSpeed: number = 50 // pixels per second
) => {
  const [position, setPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const cardWidth = 300;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const totalWidth = delegates.length * itemWidth;

  const isReverse = rowIndex % 2 === 1;

  useEffect(() => {
    if (!isAutoPlaying || delegates.length === 0) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      const moveDistance = (scrollSpeed * deltaTime) / 1000;

      setPosition(prev => {
        let newPosition;
        if (isReverse) {
          newPosition = prev + moveDistance;
          if (newPosition >= totalWidth) {
            return newPosition - totalWidth;
          }
        } else {
          newPosition = prev - moveDistance;
          if (newPosition <= -totalWidth) {
            return newPosition + totalWidth;
          }
        }
        return newPosition;
      });

      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isAutoPlaying, isReverse, scrollSpeed, delegates.length, totalWidth]);

  useEffect(() => {
    if (isReverse && position === 0 && delegates.length > 0) {
      setPosition(-totalWidth / 3);
    }
  }, [isReverse, delegates.length, totalWidth, position]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    setPosition(prev => {
      const effectiveDirection = isReverse
        ? (direction === 'left' ? 'right' : 'left')
        : direction;

      const newPosition = effectiveDirection === 'left'
        ? prev + itemWidth
        : prev - itemWidth;

      if (Math.abs(newPosition) >= totalWidth) return 0;
      if (newPosition > 0) return -totalWidth + itemWidth;

      return newPosition;
    });
  }, [totalWidth, itemWidth, isReverse]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
    lastTimeRef.current = 0;
  };

  return {
    position,
    scroll,
    pauseAutoPlay,
    resumeAutoPlay,
    cardWidth,
    gap,
    totalWidth,
    isReverse,
    rowIndex,
  };
};
