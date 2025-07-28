import { motion } from 'framer-motion';
import { useAwardsCarousel } from '@/hooks/useAwardsCarousel';

interface Delegate {
  name: string;
  school: string;
  award: string;
}

interface AwardsCarouselProps {
  delegates: Delegate[];
  isReverse?: boolean;
}

export const AwardsCarousel: React.FC<AwardsCarouselProps> = ({ delegates, isReverse = false }) => {
  const { position, scroll, pauseAutoPlay, resumeAutoPlay, cardWidth, gap, totalWidth } = useAwardsCarousel(delegates, isReverse);

  // Create a duplicated array for infinite loop effect
  const duplicatedDelegates = [...delegates, ...delegates, ...delegates];

  return (
    <div 
      className="relative"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: position }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 20,
            restDelta: 0.01 
          }}
          style={{ 
            paddingLeft: gap, 
            paddingRight: gap,
            width: `${totalWidth * 3}px` // Triple the width for three sets of items
          }}
        >
          {duplicatedDelegates.map((delegate, index) => (
            <motion.div
              key={`${delegate.name}-${index}`}
              className="bg-gradient-to-br from-gray-100 to-white rounded-xl p-6 shadow-lg text-center"
              style={{ 
                minWidth: cardWidth,
                maxWidth: cardWidth
              }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <h4 className="text-lg font-semibold mb-2">{delegate.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{delegate.school}</p>
              <p className="font-bold text-blue-600">{delegate.award}</p>
              <p className="text-sm text-gray-700">AWARD</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white z-10"
        onClick={() => scroll(isReverse ? 'right' : 'left')}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white z-10"
        onClick={() => scroll(isReverse ? 'left' : 'right')}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Add gradient overlays for smooth edge fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}; 