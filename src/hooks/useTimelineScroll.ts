import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useTimelineScroll = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const timelinePointsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const points = timelinePointsRef.current?.children;

    if (!timeline || !points) return;

    // Animate the timeline line drawing
    gsap.fromTo(
      timeline,
      {
        scaleY: 0,
        transformOrigin: 'top center',
      },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: timeline,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    // Animate each timeline point and its content
    Array.from(points).forEach((point) => {
      const content = (point as HTMLElement).querySelector('.timeline-content');
      const dot = (point as HTMLElement).querySelector('.timeline-circle');

      gsap.set([content, dot], { opacity: 0, y: 20 });

      gsap.to([content, dot], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: point as Element,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { timelineRef, timelinePointsRef };
}; 