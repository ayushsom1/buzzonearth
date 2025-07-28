import { useState, useCallback, useMemo, useEffect } from 'react';

export const carouselImages = [
  {
    src: '/images/programs/S20.webp',
    alt: 'Mr. Ovais Sarmad speaking at India MUN 2024'
  },
  {
    src: '/images/programs/S12.webp',
    alt: 'India MUN National Climate Conference 2024'
  },
  {
    src: '/images/programs/S17.webp',
    alt: 'Conference Panel Discussion'
  }
];

const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

export const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visibleImages = useMemo(() => {
    const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    
    return {
      previous: carouselImages[prevIndex],
      current: carouselImages[currentIndex],
      next: carouselImages[nextIndex]
    };
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return {
    visibleImages,
    nextSlide,
    previousSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  };
}; 