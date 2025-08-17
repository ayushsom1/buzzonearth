'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutUsContent() {
  const sectionRefs = {
    partners: useRef(null),
    about: useRef(null),
    collaborate: useRef(null),
    news: useRef(null),
    testimonials: useRef(null)
  };
  // Refs for journey items
  const journeyRef = useRef<HTMLDivElement>(null);
  const journeyItems = useRef<HTMLElement[]>([]);

  // Add custom CSS for journey animations
  useEffect(() => {
    // Add styles for active journey item
    const style = document.createElement('style');
    style.textContent = `
      .journey-item {
        transition: all 0.5s ease;
      }
      .journey-active {
        transform: scale(1.03);
      }
      .journey-active h3 {
        color: #1875d1;
        font-weight: bold;
      }
      .journey-active .bg-white {
        box-shadow: 0 10px 25px rgba(24, 117, 209, 0.2);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Initialize animation on client-side only
  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const initAnimation = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Clear any existing refs
      journeyItems.current = [];

      // Exit if journeyRef is not available
      if (!journeyRef.current) return;

      // Get all journey item elements
      const items = document.querySelectorAll<HTMLElement>('.journey-item');
      const markers = document.querySelectorAll<HTMLElement>('.timeline-marker');

      // Create a timeline for the journey section
      const journeyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          onUpdate: (self) => {
            // Highlight the active item based on scroll progress
            const progress = self.progress;
            const itemCount = items.length;

            // Calculate which item should be active based on progress
            const activeIndex = Math.min(Math.floor(progress * itemCount), itemCount - 1);

            // Add/remove active class from items
            items.forEach((item, index) => {
              if (index === activeIndex) {
                item.classList.add('journey-active');
              } else {
                item.classList.remove('journey-active');
              }
            });
          }
        }
      });

      // Add progress bar animation to the timeline
      const progressBar = document.querySelector<HTMLElement>('.journey-progress');
      if (progressBar) {
        // Set initial state
        gsap.set(progressBar, {
          scaleY: 0,
          transformOrigin: 'top center'
        });

        // Add to timeline
        journeyTimeline.to(progressBar, {
          scaleY: 1,
          duration: 1,
          ease: "power1.inOut"
        });
      }

      // Add marker animations at specific points in the timeline
      markers.forEach((marker, index) => {
        const progress = index / (markers.length - 1);

        // Set initial state
        gsap.set(marker, {
          backgroundColor: '#e5e7eb',
          scale: 1
        });

        // Add to timeline at the appropriate progress point
        journeyTimeline.to(marker, {
          backgroundColor: '#1875d1',
          boxShadow: '0 0 15px rgba(24, 117, 209, 0.5)',
          scale: 1.4,
          duration: 0.2,
          ease: "back.out(1.7)"
        }, progress);
      });

      // Individual item animations (these are separate from the timeline)
      items.forEach((item) => {
        // Store refs
        journeyItems.current.push(item);

        // Initial state (invisible)
        gsap.set(item, {
          opacity: 0,
          y: 50
        });

        // Create animation
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        });
      });
    };

    initAnimation();

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  // Add animation for the marker pulse effect
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Add animation for pulsing effect to timeline markers when they activate
      const addPulseAnimation = async () => {
        const { gsap } = await import('gsap');

        // Setup animation for each timeline marker pulse
        document.querySelectorAll('.timeline-marker').forEach((marker) => {
          // Add pulse element if it doesn't exist
          if (!marker.querySelector('.timeline-pulse')) {
            const pulseElement = document.createElement('div');
            pulseElement.className = 'timeline-pulse absolute inset-0 bg-blue-200 rounded-full opacity-0 scale-0 transform';
            marker.appendChild(pulseElement);
          }

          marker.addEventListener('transitionend', (e: Event) => {
            // Safely cast to TransitionEvent to access the propertyName
            const transitionEvent = e as TransitionEvent;
            if (transitionEvent.propertyName === 'background-color' &&
              window.getComputedStyle(marker).backgroundColor !== 'rgb(229, 231, 235)') {
              // Only add pulsing when marker is activated (blue)
              const pulse = marker.querySelector('.timeline-pulse');
              if (pulse) {
                gsap.to(pulse, {
                  opacity: 0.6,
                  scale: 2,
                  duration: 1.5,
                  repeat: -1,
                  ease: "power1.inOut",
                  yoyo: true
                });
              }
            }
          });
        });
      };

      addPulseAnimation();
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* First Section - About India MUN */}
      <motion.section
        ref={sectionRefs.about}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-28 bg-gradient-to-b from-black to-[#002e41] text-white relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#002e41] opacity-95"></div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-9xl mx-auto">
            <div className="w-full">
              <h1 className="text-[#1775d0] text-4xl md:text-5xl font-bold mb-8">ABOUT INDIA MUN</h1>

              <p className="text-sm md:text-lg text-blue-100 leading-relaxed mb-6">
                Empowering Youth. Fueling Innovation. Regenerating Earth.
              </p>
              <p className="text-sm md:text-lg text-blue-100 leading-relaxed mb-6">
                India MUN, a collaborative endeavor by Gaia The Earth Foundation and BuzzOnEarth, is a pioneering global institution dedicated to empowering young minds for climate action, leadership, and innovation. Sharing deep foundations with organizations such as the United Nations Environment Programme, the United Nations Global Innovation Hub, the United Nations Framework Convention on Climate Change, NASA, ISRO, AICTE and several IITs, India MUN operates at the confluence of global policy, innovation, and education.
              </p>
              <p className="text-sm md:text-lg text-blue-100 leading-relaxed mb-8">
                As an initiative shaped alongside Gaia The Earth Foundation — India’s Actor for the UN Decade on Ecosystem Restoration 2021–2030, jointly led by UNEP and FAO — India MUN stands at the forefront of educational transformation, deeply aligned with global sustainability goals.
              </p>
              <p className="text-sm md:text-lg text-blue-100 leading-relaxed mb-8">
                At its core, India MUN is the vanguard of climate-conscious education and a catalyst for future-ready education — one that integrates environmental stewardship
                with bold leadership, creative innovation, and real-world problem-solving. We believe in harnessing the collective power of the largest youth constituency in the
                world to transform them into a dynamic network of future sustainability leaders, innovators, and changemakers of tomorrow.
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-12">
                A forum for future sustainability leaders
              </h2>
              <div className="flex justify-center">
                <Image
                  src="/images/home_page/h2.webp"
                  alt="India MUN Logo"
                  width={180}
                  height={180}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#1775d0]">
                CLIMATE ACTION. LEADERSHIP. INNOVATION. DIPLOMACY. ENTREPRENEURSHIP. REGENERATION. SDGs.
              </h2>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Second Section - Key Stats */}
      <section className="py-28 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center text-[#1875d1]">OUR JOURNEY</h2>

          <div className="relative" ref={journeyRef}>
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:transform md:-translate-x-1/2">
              {/* Progress indicator that fills on scroll */}
              <div className="journey-progress absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-400 via-[#1875d1] to-blue-600 w-full shadow-[0_0_10px_rgba(24,117,209,0.5)]"></div>
            </div>

            <div className="space-y-8 md:space-y-16 lg:space-y-24">
              {/* Launch Day */}
              <div className="flex flex-col md:flex-row items-start md:items-center group journey-item">
                <div className="w-full md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 ml-16 md:ml-0">
                  <h3 className="text-lg md:text-xl font-normal text-[#1875d1] mb-2">October 24</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light">India MUN Launch - United Nations Day</p>
                </div>
                <div className="flex items-center justify-center w-12 md:w-16 z-10 mb-4 md:mb-0 order-1 md:order-2 absolute left-0 md:relative">
                  <div className="bg-white p-2 md:p-3 rounded-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500 relative">
                    <div className="timeline-marker absolute w-3 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                    <Image src="/images/about_us/A1.webp" alt="Launch Day" width={20} height={20} className="md:w-[30px] md:h-[30px] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
              </div>

              {/* Goals */}
              <div className="flex flex-col md:flex-row items-start md:items-center group journey-item">
                <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 hidden md:block"></div>
                <div className="flex items-center justify-center w-12 md:w-16 z-10 mb-4 md:mb-0 order-1 md:order-2 absolute left-0 md:relative">
                  <div className="bg-white p-2 md:p-3 rounded-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500 relative">
                    <div className="timeline-marker absolute w-3 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                    <Image src="/images/about_us/A2.webp" alt="Goals" width={20} height={20} className="md:w-[30px] md:h-[30px] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 order-3 ml-16 md:ml-0">
                  <h3 className="text-lg md:text-xl font-normal text-[#1875d1] mb-2">Goals</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light">Set by UNFCCC and UNEP</p>
                </div>
              </div>

              {/* Focusing */}
              <div className="flex flex-col md:flex-row items-start md:items-center group journey-item">
                <div className="w-full md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 ml-16 md:ml-0">
                  <h3 className="text-lg md:text-xl font-normal text-[#1875d1] mb-2">Focusing</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light">On Climate Change & Innovation</p>
                </div>
                <div className="flex items-center justify-center w-12 md:w-16 z-10 mb-4 md:mb-0 order-1 md:order-2 absolute left-0 md:relative">
                  <div className="bg-white p-2 md:p-3 rounded-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500 relative">
                    <div className="timeline-marker absolute w-3 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                    <Image src="/images/about_us/A3.webp" alt="Focus" width={20} height={20} className="md:w-[30px] md:h-[30px] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
              </div>

              {/* Uniting */}
              <div className="flex flex-col md:flex-row items-start md:items-center group journey-item">
                <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 hidden md:block"></div>
                <div className="flex items-center justify-center w-12 md:w-16 z-10 mb-4 md:mb-0 order-1 md:order-2 absolute left-0 md:relative">
                  <div className="bg-white p-2 md:p-3 rounded-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500 relative">
                    <div className="timeline-marker absolute w-3 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                    <Image src="/images/about_us/A4.webp" alt="Unite" width={20} height={20} className="md:w-[30px] md:h-[30px] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 order-3 ml-16 md:ml-0">
                  <h3 className="text-lg md:text-xl font-normal text-[#1875d1] mb-2">Uniting</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light">Young Leaders, Innovators & Changemakers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/about_us/A5.webp"
                alt="Our Vision Illustration"
                width={700}
                height={600}
                className="rounded-lg w-full h-auto max-h-[600px] object-contain"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold sm:mb-6 text-[#1875d1]">
                VISION
              </h2>
              <p className="text-base sm:text-sm lg:text-lg text-black leading-relaxed">
                India MUN envisions a world where every student becomes a powerful force for positive change.
                Aligned with the Decade of Action – United Nations Sustainable Development Goals, we redefine
                education to empower youth as architects of a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Fourth Section - Mission */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r pt-4 from-[#000000] to-[#002e41] opacity-95">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center">

            {/* Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/about_us/A6.webp"
                alt="Our Mission Illustration"
                width={900}
                height={600}
                className="rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-[#1875d1]">
                MISSION
              </h2>
              <p className="text-base sm:text-sm lg:text-lg text-white leading-relaxed">
                At the core of India MUN is a mission to transform
                young minds into dynamic sustainability leaders.
                We go beyond activism, offering climate-positive
                programs that empower students to be catalysts
                for real-world change.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Fifth Section - Values */}
      <section className="py-15 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-5xl font-semibold mb-16 text-center text-[#1875d1]">VALUES</h2>

          {/* Flex wrapper to center last row */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Youth Empowerment",
                description: "We place young people at the heart of everything we do — nurturing their voice, vision, and capacity to lead. Through real-world programs, we empower students to become innovators, changemakers, and global citizens.",
                icon: "👥"
              },
              {
                title: "Sustainability & Climate Responsibility",
                description: "We are committed to embedding sustainability into education and action — cultivating environmentally responsible mindsets and championing the UN Sustainable Development Goals at every level.",
                icon: "🌱"
              },
              {
                title: "Leadership for the 21st Century",
                description: "We believe education must develop courageous, ethical, and visionary leaders. Our programs are designed to foster leadership grounded in purpose, impact, and global awareness.",
                icon: "🚀"
              },
              {
                title: "Innovation & Future Readiness",
                description: "In a rapidly changing world, we promote innovation as a mindset — encouraging creative thinking, problem-solving, and resilience building to equip learners for the challenges of tomorrow.",
                icon: "💡"
              },
              {
                title: "Global Collaboration & Inclusion",
                description: "We value global partnerships and diverse perspectives. By building a connected, inclusive network of institutions, educators, and youth leaders, we work collectively toward a just and resilient future.",
                icon: "🌍"
              },
              {
                title: "Integrity and Transparency",
                description: "We uphold the highest standards of integrity, ensuring openness, accountability, and trust in all our initiatives and relationships.",
                icon: "⚖️"
              },
              {
                title: "Excellence in Education",
                description: "We are committed to delivering transformational learning experiences that combine academic rigor with real-world relevance — empowering educators and students alike to lead with insight and impact.",
                icon: "📚"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-[45%] lg:w-[30%]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#1875d1]">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixth Section - What Can Youth Do */}
      <section className="w-full min-h-[600px] py-16 relative flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/S33.webp"
            alt="Impact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Make it 1 column for mobile/tablet, 3 only for big screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* Left Column with Images */}
            <div className="flex flex-col gap-6 col-span-1 items-center lg:items-stretch">
              <div className="relative w-full max-w-[300px] h-48 sm:h-56 lg:h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/images/programs/S34.webp"
                  alt="Impact Image 1"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative w-full max-w-[300px] h-48 sm:h-56 lg:h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/images/programs/S35.webp"
                  alt="Impact Image 2"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column with Text */}
            <div className="text-white col-span-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                WHAT CAN YOU(th) DO?
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-justify">
                <p>
                  With over <b>600 million young people</b>, India is the youngest country in the world. Therefore, in the years to come, no country will produce more leaders than India. The climate crisis, which the IPCC [Intergovernmental Panel on Climate Change] says has intensified, spread and in some cases, caused irreversible damage – <b>will impact the youth and their future generations the most</b> — the stakes couldn't be higher.
                </p>
                <p>
                  Global bodies have not been able to move the needle as yet.
                </p>
                <p>
                  Every small step taken by millions of young Indians can create a ripple effect with global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Action Framework Section */}
      <section className="relative overflow-hidden">
        {/* Gradient strip background */}
        <div className="relative">


          <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-16 mt-8 relative">
            {/* Impactful Typography */}
            <div className="flex flex-wrap justify-center items-center mb-5 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl  mx-3 transform transition-transform hover:scale-105">COLLABORATE.</h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl mx-3 transform transition-transform hover:scale-105">BRAINSTORM.</h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl  mx-3 transform transition-transform hover:scale-105">ACT.</h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mx-3 transform transition-transform hover:scale-105"><b>LEAD.</b></h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mx-3 transform transition-transform hover:scale-105">CHANGE.</h2>
            </div>

            {/* Main illustration */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <Image
                src="/images/about_us/A7.svg"
                alt="Action Framework Illustration"
                width={1000}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#000000] via-[#002e41] to-black text-white">


        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join us in creating a sustainable future!</h2>
          <p className="text-lg mb-12 max-w-5xl mx-auto leading-relaxed">
            Be part of India’s growing movement for climate action, innovation, and leadership — shaping a nation that thrives on sustainability, equality, and prosperity, and securing a sustainable future for generations to come.
          </p>
          <h2 className="text-3xl font-bold mb-8">One planet. One youth. One unstoppable force for change.</h2>

          <div className="flex justify-center space-x-6">
            <a
              href="/get-involved"
              className="inline-block bg-white text-[#1875d1] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-[#1875d1] transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Eighth Section - Founding Partners */}
      <section className="py-16 bg-white">
        <motion.div
          className="relative z-10 max-w-4xl mx-auto py-12 rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/about_us/A8.webp"
            alt="Action Framework Illustration"
            width={400}
            height={0} // height auto
            className="h-auto w-auto rounded-2xl"
          />
        </motion.div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#1875d1]">FOUNDING PARTNERS</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 mb-12 leading-relaxed">
              India MUN is a collaborative endeavor by  <b>BuzzOnEarth</b> and <b>Gaia The Earth Foundation</b>, the organizations that are
              committed to sustainability, innovation and regeneration.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Image
                  src="/images/logos/p2.webp"
                  alt="BuzzOnEarth Logo"
                  width={200}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Image
                  src="/images/logos/p1.webp"
                  alt="Gaia The Earth Foundation Logo"
                  width={200}
                  height={100}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 