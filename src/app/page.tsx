"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, User, School, Building2 } from "lucide-react";
import { useRef } from "react";
import { useState, useEffect } from "react";


// Animation variants for fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Animation variants for buttons
const buttonHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Animation variants for cards
const cardHover = {
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

export default function Home() {
  // Create refs for sections that need scroll-based animations
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRefs = {
    partners: useRef(null),
    about: useRef(null),
    collaborate: useRef(null),
    news: useRef(null),
    testimonials: useRef(null)
  };

  // State for dropdowns in Collaborate section
  const [openDropdown, setOpenDropdown] = useState({
    individuals: true,
    schools: true,
    corporates: true
  });

  type DropdownKey = 'individuals' | 'schools' | 'corporates';

  const toggleDropdown = (dropdown: DropdownKey) => {
    setOpenDropdown(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };
const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    const totalSlides = 12; // x7 to x18
    const maxSlide = Math.max(0, totalSlides - slidesToShow);

    // Responsive slides per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    // Auto-play functionality (optional)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => {
                if (prev >= maxSlide) {
                    return 0; // Reset to beginning
                }
                return prev + 1;
            });
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [maxSlide]);

    const questions = [
  "DO YOU WONDER WHAT YOU AS AN INDIVIDUAL CAN DO?",
  "Can your ideas spark real change in the world?",
  "Do you want to solve the planet’s biggest challenges?",
  "Are you ready to lead with purpose & impact?",
];

const [questionIndex, setQuestionIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setQuestionIndex((prev) => (prev + 1) % questions.length);
  }, 3000); // Change every 3 seconds
  return () => clearInterval(timer);
}, []);


  return (
    <div className="flex flex-col">
      {/* Hero Section - Full viewport height */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[82vh] flex items-start justify-center overflow-hidden"
      >
        {/* Background Images with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/home_page/H1a.webp"
              alt="Sustainability background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Mobile Background */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/home_page/h1b.webp"
              alt="Sustainability background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 " />
        </div>

        <div className="flex flex-col px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-5xl leading-tight tracking-wider text-black"
          >
            FROM ACTIVISM TOWARDS ACTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light text-[#1b66cf]"
          >
            <b>NURTURING FUTURE SUSTAINABILITY LEADERS</b>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
          </motion.div>
        </div>
      </motion.section>

      {/* Logo String Section */}
      <section className="py-5 bg-white flex justify-center h-auto">
        <div className="container px-4">
          {/* First Row */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mb-5 items-center">
            {[1, 10, 11, 12, 3, 4, 5, 6, 7, 18, 19, 2].map((num) => (
              <div key={num} className="flex justify-center">
                <Image
                  src={`/images/logos/p${num}.webp`}
                  alt={`Partner ${num}`}
                  width={200}
                  height={180}
                  className=" "
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 items-center">
            {[8, 9, 13, 14, 16, 17, 22, 23, 24, 25, 26, 38].map((num) => (
              <div key={num} className="flex justify-center">
                <Image
                  src={`/images/logos/p${num}.webp`}
                  alt={`Partner ${num}`}
                  width={200}
                  height={180}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Generous height for content */}
      <motion.section
        ref={sectionRefs.about}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-black to-[#002e41] text-white relative overflow-hidden"
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

      {/* Global Schools Section */}
     <section className="pt-15 container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-[#1775d0] text-4xl md:text-5xl font-bold mb-8">
      Global Schools for Climate Action,<br />
      Leadership & Innovation
    </h2>
    <p className="text-base md:text-lg text-black max-w-5xl mx-auto">
      Empowering Schools. Elevating Educators. Transforming Education.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
    {/* Right side - Image (mobile first order) */}
    <div className="order-1 lg:order-2 flex justify-center">
      <motion.div
  className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-full lg:h-[500px]"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
>
  <Image
    src="/images/accred/l3.webp"
    alt="GSCA Platinum Badge"
    fill
    className="object-contain"
  />
</motion.div>
    </div>

    {/* Left side - Content */}
    <div className="order-2 lg:order-1 lg:col-span-2 space-y-8">
  <div className="text-center lg:text-left">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      "Global Recognition for Schools Driving Change."
    </h3>
    <p className="text-sm md:text-base font-bold mb-4 text-black">
      A Prestigious Alliance of Visionary Institutions Shaping the Future of Education.
    </p>
    <p className="text-sm md:text-base text-black">
      Join a global movement of pioneering schools championing climate action, leadership, innovation, entrepreneurship, diplomacy, regeneration and SDG-aligned learning.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
    <span className="text-[#1875d1] text-lg md:text-xl">Get Certified:</span>
    <Link href="/affiliate">
      <Button className="bg-[#1875d1] hover:bg-[#1875d1]/90 text-white text-sm md:text-base px-8 py-3 rounded-xl">
        Affiliate Now
      </Button>
    </Link>
  </div>

  <motion.div
  whileHover={{ scale: 1.03, boxShadow: "0px 6px 20px rgba(0,0,0,0.1)" }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className="max-w-2xl bg-white rounded-md shadow-sm border border-gray-100 p-5 md:p-6"
>
  <h3 className="text-lg md:text-xl font-bold mb-6">Registrations open for</h3>

  <div className="flex flex-wrap items-center gap-6 mb-6">
    <div className="h-16 w-16 md:h-20 md:w-20 relative">
      <Image
        src="/images/home_page/h2.webp"
        alt="UN Style Logo"
        fill
        className="object-contain"
      />
    </div>
    <div className="h-16 md:h-20 w-0.5 bg-gray-300"></div>
    <div className="flex flex-col">
      <Image
        src="/images/home_page/h3.webp"
        alt="UN Style Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
    <div className="h-16 md:h-20 w-0.5 bg-gray-300"></div>
    <div>
      <h4 className="text-base md:text-lg font-bold mb-1">Global Schools -</h4>
      <h4 className="text-base md:text-lg font-bold mb-2">
        City Representatives
      </h4>
      <p className="text-sm md:text-base text-[#1875d1]">
        Best School from every city
      </p>
    </div>
  </div>

  <p className="text-sm md:text-base font-medium">
    Nominate your school to represent your city on the national and global
    stage.
  </p>
</motion.div>
</div>

  </div>
</section>


      {/* Small Images Section */}
                 <section className="py-5 bg-gray-10">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap justify-center items-center gap-6">
      {[2, 3, 4, 5, 6].map((num) => (
        <motion.div
          key={num}
          className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={`/images/affiliation/x${num}.png`}
            alt={`Small Image ${num}`}
            fill
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Schools Gallery Section - Medium height */}
       <section className="py-12 bg-gray-10">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                          {/* Header */}
                          <div className="text-center mb-8">
                              <h2 className="text-3xl font-bold text-[#1875d1] mb-4">
                                  A Celebrated Network of Future-Focused Institutions Shaping Global Education
                              </h2>
                              <p className="text-gray-600">
                                  Our Prestigious institutions leading educational transformation
                              </p>
                          </div>
      
                          {/* Carousel Container */}
                          <div className="relative max-w-9xl mx-auto">
  <div className="overflow-hidden rounded-lg">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
    >
      {[
        { num: 7, label: "Delhi Public School, Raipur, Chhattisgarh" },
        { num: 8, label: "Presidency School, RT Nagar, Banaglore" },
        { num: 9, label: "Birla Open Minds, Hyderabad" },
        { num: 10, label: "Kalvi Inernational Public School, Tamil Nadu" },
        { num: 11, label: "Hopetown Girls' School, Uttrakhand" },
        { num: 12, label: "Dalhousie Public School, Dalhousie, Himachal Pradesh" },
        { num: 13, label: "St. Karen's High School,Patna " },
        { num: 14, label: "Miles Bronson Residential School, Assam" },
        { num: 15, label: "Silver Bells Public School, Gujarat " },
        { num: 16, label: "Shiksha Valley School, Dibrugarh" },
        { num: 17, label: "Goldenbee Global School, Vibgyour, Bangalore South" },
        { num: 18, label: "Nosegay Public School, Sri Ganganagar" },
        { num: 19, label: "Future-Ready Education Leader" },
      ].map(({ num, label }) => (
        <div
          key={num}
          className="flex-shrink-0 px-2"
          style={{ width: `${100 / slidesToShow}%` }}
        >
          <div className="group relative w-full rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={`/images/affiliation/x${num}.webp`}
                alt={label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1875d1] rounded-full p-2 shadow-lg transition-all duration-200 z-10"
    disabled={currentSlide === 0}
  >
    <ChevronLeft className="w-6 h-6" />
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1875d1] rounded-full p-2 shadow-lg transition-all duration-200 z-10"
    disabled={currentSlide >= maxSlide}
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</div>

      
                          {/* Dots Indicator */}
                          <div className="flex justify-center mt-6 space-x-2">
                              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                  <button
                                      key={index}
                                      onClick={() => setCurrentSlide(index)}
                                      className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index
                                              ? 'bg-[#1875d1] scale-110'
                                              : 'bg-gray-300 hover:bg-gray-400'
                                          }`}
                                  />
                              ))}
                          </div>
                          <div className="text-center mb-8">
                              <h2 className="text-2xl font-bold text-[#000000] mb-4">
                                  Your school could be the next success story!
                              </h2>
                        
                          </div>
                      </div>
                  </section>

      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1875d1] p-4">
          India MUN Student Programs
        </h2>

      </div>
      {/* India MUN Student Programs Section */}
      <section className="relative h-[700px] flex justify-center items-center">
        {/* Background Image */}
        <div className="inset-0">
          <Image
            src="/images/home_page/h9.webp"
            alt="Students silhouette at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>


        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-50 min-h-screen flex flex-col items-center justify-between text-white text-center">

          <div className="">
            <h3 className="text-md md:text-lg font-medium">Dear EarthGeeks,</h3>
          </div>

          <div className="">
            <div className="">
              <div className="overflow-hidden h-[50px] md:h-[60px] flex items-center">
  <AnimatePresence mode="wait">
    <motion.h3
      key={questionIndex}
      className="text-2xl md:text-3xl lg:text-4xl font-bold"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {questions[questionIndex]}
    </motion.h3>
  </AnimatePresence>
</div>

            
            </div>
          </div>

          <div className="">
            <div className="flex flex-col items-center ">
              <p className="text-md md:text-lg">
                Join <span className="font-bold">India</span> Model <span className="font-bold">United Nations</span>.
              </p>

              <p className="text-md md:text-lg max-w-4xl">
                Where young leaders, innovators and changemakers
              </p>

              <div className="flex flex-wrap justify-center gap-x-4 text-[#FFD700] text-md md:text-lg font-medium">
                <span>MEET</span>
                <span>|</span>
                <span>LEARN</span>
                <span>|</span>
                <span>BRAINSTORM</span>
                <span>|</span>
                <span>ACT</span>
              </div>

              <p className="text-lg md:text-xl">
                on our planet's most pressing problems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* India MUN National Climate Conference Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              India MUN National Climate Conference
            </h2>
            <h3 className="text-md md:text-lg text-[#1875d1] mb-8">
              The only MUN which is India's MUN and represents India internationally
            </h3>

            <p className="text-md md:text-lg text-gray-800 leading-relaxed max-w-7xl mx-auto">
              India’s first and largest MUN conference focused entirely on Climate Action and Biodiversity as the core themes. A challenging and competitive platform for students to debate and analyse some of the world’s most pressing climate problems. As delegates representing different countries and agencies, students gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
            </p>
          </div>
        </div>

       
        

        
      </section>

<section className="pb-16 bg-white">
  {/* Welcome letter section */}
  <div className="min-h-[620px] max-w-7xl mx-auto border-2 rounded-xl overflow-hidden">
    <div className="p-4 md:p-8">
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">
            Letter by the Executive President, India MUN
          </h3>

          {/* Full content always visible */}
          <div className="text-gray-700 text-xs text-justify">
            <p>
              <b>Dear Young Leaders, Esteemed Educators, and Honored Guests,</b>
              <br /><br />
              It is with immense joy and great anticipation that I welcome you
              to the India Model United Nations Platform. As the Founder and
              Executive President of India MUN, I am deeply inspired by the
              bright young minds gathering from all corners of our diverse
              nation for this annual national conference each year. These
              students’ enthusiasm and dedication to addressing and taking
              action on the critical issues surrounding climate change and
              sustainability fill me with hope and confidence for our future.
              <br /><br />
              India is a young country, with more than 50% of our population
              under the age of 25. This youthful demographic is our greatest
              asset. I firmly believe in the power of youth to drive change,
              innovate, and lead with passion and purpose. The energy,
              creativity, and resilience that you bring to the table are exactly
              what we need to tackle the pressing challenges of our time.
              <br /><br />
              I envision the youth of our country as torchbearers in solving
              global challenges. Instead of adopting a victim mindset, I urge
              you to embrace an action mindset. Rise above the challenges not
              only for your own good but for the betterment of society,
              nature, and our planet at large. Your participation in this
              conference is a testament to your dedication to the cause and
              your willingness to step up as leaders of tomorrow.
              <br /><br />
              Let us remember that every discussion, every debate, and every
              decision made here has the potential to impact our planet
              positively. Let us be bold in our aspirations, decisive in our
              actions, and unwavering in our commitment to a sustainable future.
              <br /><br />
              Welcome to the <b>National India MUN Conference 2025</b>.
              <br /><br />
              Yours sincerely,
              <br /><br />
              <b>
                Gayatri Chauhan,
                <br />
                Founder and Executive President,
                <br />
                India Model United Nations
              </b>
            </p>
          </div>
        </div>

        {/* Image for mobile */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full hover:-translate-y-2">
            <div className="relative w-full pb-[140%] hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/programs/S21.webp"
                alt="India MUN President"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">
                Ms. Gayatri Chauhan
              </h3>
              <div className="space-y-1.5 mt-2">
                <p className="text-xs text-gray-600">
                  Founder and CEO, BuzzOnEarth
                  <br />
                  President, Gaia The Earth Foundation
                </p>
                <p className="text-md text-[#1774d1] font-bold mt-3">
                  (Executive President, India MUN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="py-8 text-xl md:text-2xl font-bold mb-4">
            Letter by the Executive President, India MUN
          </h3>

          <div className="text-gray-700 text-sm text-justify">
            <p>
              <b>Dear Young Leaders, Esteemed Educators, and Honored Guests,</b>
              <br /><br />
              It is with immense joy and great anticipation that I welcome you
              to the India Model United Nations Platform. As the Founder and
              Executive President of India MUN, I am deeply inspired by the
              bright young minds gathering from all corners of our diverse
              nation for this annual national conference each year. These
              students’ enthusiasm and dedication to addressing and taking
              action on the critical issues surrounding climate change and
              sustainability fill me with hope and confidence for our future.
              <br /><br />
              India is a young country, with more than 50% of our population
              under the age of 25. This youthful demographic is our greatest
              asset. I firmly believe in the power of youth to drive change,
              innovate, and lead with passion and purpose. The energy,
              creativity, and resilience that you bring to the table are exactly
              what we need to tackle the pressing challenges of our time.
              <br /><br />
              I envision the youth of our country as torchbearers in solving
              global challenges. Instead of adopting a victim mindset, I urge
              you to embrace an action mindset. Rise above the challenges not
              only for your own good but for the betterment of society,
              nature, and our planet at large. Your participation in this
              conference is a testament to your dedication to the cause and
              your willingness to step up as leaders of tomorrow.
              <br /><br />
              Let us remember that every discussion, every debate, and every
              decision made here has the potential to impact our planet
              positively. Let us be bold in our aspirations, decisive in our
              actions, and unwavering in our commitment to a sustainable future.
              <br /><br />
              Welcome to the <b>National India MUN Conference 2025</b>.
              <br /><br />
              Yours sincerely,
              <br /><br />
              <b>
                Gayatri Chauhan,
                <br />
                Founder and Executive President,
                <br />
                India Model United Nations
              </b>
            </p>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full hover:-translate-y-2">
            <div className="relative w-full pb-[140%] hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/programs/S21.webp"
                alt="India MUN President"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">
                Ms. Gayatri Chauhan
              </h3>
              <div className="space-y-1.5 mt-2">
                <p className="text-xs text-gray-600">
                  Founder and CEO, BuzzOnEarth
                  <br />
                  President, Gaia The Earth Foundation
                </p>
                <p className="text-md text-[#1774d1] font-bold mt-3">
                  (Executive President, India MUN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      
      <section className="w-full md:mb-8 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[430px] lg:h-96">
                        {/* Left side - Image with overlay text */}
                        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-full">
                            <div className="relative h-full rounded-lg overflow-hidden">
                                <Image
                                    src="/images/conference25/z1.webp"
                                    alt="Global collaboration - hands protecting Earth"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay text at bottom */}
                                
                            </div>
                        </div>
            
                        {/* Right side - Quote Content */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-6">
                            <div className="relative w-full max-w-2xl rounded-2xl lg:rounded-3xl border-2 border-gray-200 p-4 sm:p-6 bg-white">
                                {/* Logo/Image at top */}
                                <div className="flex justify-left mb-4">
                                    <Image
                                        src="/images/affiliation/x51.webp"
                                        alt="Global collaboration logo"
                                        width={60}
                                        height={30}
                                        className="object-contain sm:w-20 sm:h-20 lg:w-24 lg:h-18"
                                    />
                                </div>
                                
                                <div className="text-center lg:text-left">
                                    <h2 className="text-3xl md:text-4xl text-gray-800 mb-8 leading-tight">
                        Behold the power
                        of <b>the largest youth
                        population{" "} </b><br />
                        <span className="text-[#1875d1] font-bold ">in the world.</span>
                      </h2>
      
                      <div className="mb-8">
                        <p className="text-xl text-gray-700">
                          INDIA’S YOUTH FOR CLIMATE ACTION
                        </p>
                      </div>
      
                                    
                                    {/* Keywords section */}
                                    <div className="mb-4">
                                        <p className="text-sm sm:text-base text-gray-700 italic">
                                            CLIMATE ACTION. LEADERSHIP. DIPLOMACY.  INNOVATION. GLOBAL EXPOSURE. COMMUNITY IMPACT.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 py-8 bg-white">
  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
    {/* Button 1 */}
    <Button
      size="lg"
      className="h-auto py-3 px-6 bg-[#1875d1] cursor-pointer hover:bg-blue-700 w-full lg:w-auto font-bold text-lg text-white text-center"
    >
      India MUN National Climate Conference 2024
    </Button>

    {/* Divider — horizontal for stacked, vertical for large */}
    <div className="w-full h-0.5 bg-gray-300 lg:w-0.5 lg:h-12"></div>

    {/* Button 2 */}
    <Button
      size="lg"
      className="h-auto py-3 px-6 bg-[#1875d1] cursor-pointer hover:bg-blue-700 w-full lg:w-auto font-bold text-lg text-white text-center"
    >
      India MUN Climate Conferences 2025
    </Button>
  </div>
</section>


      {/* Other Student Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Youth Leadership Program */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-4 items-center mb-20">
            <div className="md:col-span-3">
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image
                  src="/images/programs/S7.webp"
                  alt="Youth Leadership Program"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-row gap-16">
                <div className="flex flex-col items-center justify-center min-w-[250px] text-center">
                  <h2 className="text-xl font-bold mb-2 text-center">YOUTH LEADERSHIP <br /> PROGRAM</h2>
                  <p className="text-sm mb-2">Registrations Open!</p>
                  <Button className="bg-[#1875d1] text-white px-6 py-2">
                    Enroll Now
                  </Button>
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-lg font-semibold text-[#1875d1]">
                    India's most powerful leadership program for the YOUTH.
                  </h3>
                  <p className="text-sm text-gray-700">
                    An immersive, experiential leadership development program curated by industry leaders to help you <span className="font-semibold">become the best version of yourself, build essential life skills, and grow into a confident, purpose-driven leader</span> ready to shape the future.
                  </p>
                  <p className="text-sm text-gray-700">
                    We believe in <span className="font-semibold">unlocking the boundless potential within every young person</span>. This transformative journey is designed to equip young leaders with the mindset, skills to excel in your chosen field, and purpose to lead with impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Young Forest Ambassador Program */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-4 items-center mb-20">
            <div className="md:col-span-3">
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image
                  src="/images/programs/S6.webp"
                  alt="Young Forest Ambassador"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-row gap-16">
                <div className="flex flex-col items-center justify-center min-w-[250px] text-center">
                  <h2 className="text-xl font-bold mb-2 text-center">INDIA'S YOUNG<br />FOREST<br />AMBASSADOR</h2>
                  <p className="text-sm mb-2">Registrations Open!</p>
                  <Button className="bg-[#1875d1] text-white px-6 py-2">
                    Enroll Now
                  </Button>
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-lg font-semibold text-[#1875d1]">
                    Connecting passionate youth with United Nations ecosystem restoration initiatives.
                  </h3>
                  <p className="text-sm text-gray-700">
                    This is a transformative learning and leadership program designed to empower young individuals, inspire them to take action, and help them understand the importance of nature and forests for our planet and all living species. It nurtures creative persuasion for vital causes, resilient leadership skills, a collaborative mindset, and environmental stewardship.
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">More than a program, IYFA empowers the next generation with the knowledge, skills, and opportunities to restore our planet—turning inspiration into action for a sustainable future.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Hackathon */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3">
              <div className="relative w-[200px] h-[200px] mx-auto">
                <Image
                  src="/images/home_page/h50.webp"
                  alt="Climate Hackathon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-row gap-16">
                <div className="flex flex-col items-center justify-center min-w-[250px] text-center">
                  <h2 className="text-xl font-bold mb-2 text-center">BuzzOnEarth <br />INDIA<br />HACKATHON</h2>
                  <div className="flex gap-4 items-center mb-2">
                    <div>
                      <p className="text-sm">BIH 2024</p>
                      <Button variant="outline" className="border-[#1875d1] text-[#1875d1] px-6 py-2">
                        View Results
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm">BIH 2025</p>
                      <p className="text-xs text-gray-500">(Coming Soon)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-lg font-semibold text-[#1875d1]">
                    India's Largest Climate Hackathon.
                  </h3>
                  <p className="text-sm text-gray-700">
                    Find solutions to some of the most pressing climate and sustainability challenges that Indian businesses and communities face. Give wings to your creativity and ideas and develop innovative solutions that can be deployed. The solutions, possibly various combinations of tech products, policy evaluations, market models, business plans, new designs and product innovations, will help you hone your creativity and offer new directions for climate action & sustainability.
                  </p>
                  <p className="text-sm text-gray-700">
                    This is an Open Innovation Student category in which students can give ideas against the pre-defined Problem Statements across themes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Partners/Logos Section (Main) - Medium height with generous spacing */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-24 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1875d1] mb-4">Our Associates & Partners</h2>
          </div>

          {/* Founding Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-gray-700 text-center mb-8">Founding Partners</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="bg-white rounded-lg p-8 flex items-center justify-center h-40 w-80 relative">
                <Image
                  src="/images/logos/p1.webp"
                  alt="BuzzOnEarth"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="bg-white rounded-lg p-8 flex items-center justify-center h-40 w-80 relative">
                <Image
                  src="/images/logos/p2.webp"
                  alt="Gaia The Earth Foundation"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Network Partners */}
          <div>
            <h3 className="text-2xl font-medium text-gray-700 text-center mb-6">Our Network of Associates & Partners</h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Through India MUN, BuzzOnEarth, or Gaia The Earth Foundation across various programs and initiatives.
            </p>

            {/* Logo Carousel */}
            <div className="relative overflow-hidden py-8">
              <div className="flex space-x-10  animate-carousel">
                {[...Array(2)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex space-x-10">
                    {[3, 4, 5, 6, 7, 18, 19, 2].map((num) => (
                      <div
                        key={`${groupIndex}-${num}`}
                        className="flex-shrink-0 h-25 w-50 bg-white rounded-md flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-sm relative"
                      >
                        <Image
                          src={`/images/logos/p${num}.webp`}
                          alt={`Partner ${num}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>



 {/* Youth Movement Section - styled like image */}
 <section className="py-15 bg-gradient-to-b from-black to-[#002e41] text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-12">
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#1774d1] ">Join</h2>
                <p className="text-md text-white ml-2">a generation rising with purpose, power, and possibility.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#1774d1] ">Create</h2>
                <p className="text-md text-white ml-2">solutions for our planet's most pressing challenges.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#1774d1] ">Network</h2>
                <p className="text-md text-white ml-2">& connect with like-minded friends who act and lead.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#1774d1] ">Become</h2>
                <p className="text-md text-white ml-2">a force for change — a sustainability leader the world needs.</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  alt="Youth climate activists sitting on courthouse steps with protest signs"
                  src="/images/home_page/h10.webp"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Collaborate Section - Medium height with balanced spacing */}
      <motion.section
        ref={sectionRefs.collaborate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-24 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1774d1] mb-4">Collaborate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"Partnerships for a sustainable future"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Individuals Column */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4 cursor-pointer" onClick={() => toggleDropdown('individuals')}>
                <div className="bg-yellow-200 rounded-full p-4 mr-4">
                  <Image
                    src="/images/home_page/h11.webp"
                    alt="Individual icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">Individuals</h3>
                <button className="ml-2 rounded-full border border-gray-400 p-1">
                  {openDropdown.individuals ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {openDropdown.individuals && (
                <div className="bg-gray-100 rounded-lg p-6 w-full">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/programs/forest-ambassador" className="block text-gray-800 hover:text-[#1774d1]">
                        Young Forest Ambassador Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/youth-leadership" className="block text-gray-800 hover:text-[#1774d1]">
                        Youth Leadership Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/mun-conferences" className="block text-gray-800 hover:text-[#1774d1]">
                        MUN Conferences
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/climate-hackathons" className="block text-gray-800 hover:text-[#1774d1]">
                        Climate Hackathons
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/climate-clubs" className="block text-gray-800 hover:text-[#1774d1]">
                        Climate Clubs
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" className="block text-gray-800 hover:text-[#1774d1]">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link href="/internships" className="block text-gray-800 hover:text-[#1774d1]">
                        Internships
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Schools/Colleges Column */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4 cursor-pointer" onClick={() => toggleDropdown('schools')}>
                <div className="flex mr-4">
                  <Image
                    src="/images/home_page/h12.webp"
                    alt="School icon"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">Schools/Colleges</h3>
                <button className="ml-2 rounded-full border border-gray-400 p-1">
                  {openDropdown.schools ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {openDropdown.schools && (
                <div className="bg-gray-100 rounded-lg p-6 w-full">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/schools/global-affiliation" className="block text-gray-800 hover:text-[#1774d1]">
                        Global Schools Affiliation (Get Certified)
                      </Link>
                    </li>
                    <li>
                      <Link href="/schools/global-accreditation" className="block text-gray-800 hover:text-[#1774d1]">
                        Global Schools Accreditation
                      </Link>
                    </li>
                    <li>
                      <Link href="/schools/city-representatives" className="block text-gray-800 hover:text-[#1774d1]">
                        City Representatives
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Corporates Column */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4 cursor-pointer" onClick={() => toggleDropdown('corporates')}>
                <div className="bg-purple-200 rounded-full p-4 mr-4">
                  <Image
                    src="/images/home_page/h13.webp"
                    alt="Corporate icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">Corporates</h3>
                <button className="ml-2 rounded-full border border-gray-400 p-1">
                  {openDropdown.corporates ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              
              {openDropdown.corporates && (
                <div className="bg-gray-100 rounded-lg p-6 w-full">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/partners/hackathon" className="block text-gray-800 hover:text-[#1774d1]">
                        Hackathon Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/mun-conference" className="block text-gray-800 hover:text-[#1774d1]">
                        MUN Conference Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/programs" className="block text-gray-800 hover:text-[#1774d1]">
                        Programs Partners
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* News and Events Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* News Column */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-black mb-8">News</h2>
              
              <div className="mb-6">
                <div className="relative h-[250px] w-full mb-6">
                  <Image
                    src="/images/home_page/h14.webp"
                    alt="Climate change news illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  <Link href="/news/climate-change-wake-up" className="hover:text-[#1774d1]">
                    Climate change: What will wake us up?
                  </Link>
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  Our house is on fire and yet, we snooze with astounding nonchalance
                </p>
                
                <p className="text-gray-700 text-sm mb-6">
                  Climate crisis is right here, staring in our face, as if giving us one last warning to put our act together RIGHT NOW! No matter how much "blah" happens around the world, the honest evidence of the underlying inaction is the prevailing reluctance of adequate investments and capital allocation for climate action
                </p>
                
                <Link href="/news/climate-change-wake-up">
                  <Button className="bg-[#1774d1] hover:bg-[#1774d1]/90 text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Events Column */}
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h2 className="text-4xl font-bold mb-8">Events</h2>
              
              <div className="relative">
                {/* Event Carousel */}
                <div className="mb-6">
                  <div className="relative h-[300px] w-full mb-6">
                    <Image
                      src="/images/home_page/h15.webp"
                      alt="BuzzOnEarth India Hackathon 2024"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
                    <button className="bg-white/20 p-2 rounded-full">
                      <ChevronLeft className="text-white w-5 h-5" />
                    </button>
                    <button className="bg-white/20 p-2 rounded-full">
                      <ChevronRight className="text-white w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    India's Largest Climate Innovation Hackathon, held at IIT Kanpur in 2024
                  </h3>
                  <p className="text-gray-300 mb-4">
                    and powered by Intel, saw <span className="font-bold">2000+ young innovators developing cutting-edge climate solutions.</span> With participation from 23 states and 3 union territories...
                  </p>
                  
                  <Link href="/events/climate-hackathon-2024">
                    <Button className="bg-[#1774d1] hover:bg-[#1774d1]/90 text-white">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Blogs Section */}
       <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1774d1] mb-3">Blogs</h2>
            <p className="text-xl text-gray-600">by our Students</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Climate Chronicles</h3>
              <p className="text-gray-600 text-center mb-4">
                Hello everyone! We all know about climate change and how our environment is being affected by our actions, but what can we do to stop this from happening and maybe even reverse it? In this post, I'll be sharing practical steps you can take on a personal level to help our planet, along with some actions I've taken myself I'm Aanyaa ...
              </p>
              <div className="text-center">
                <Link href="/blogs/climate-chronicles" className="text-[#1774d1] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Understanding Climate...</h3>
              <p className="text-gray-600 text-center mb-4">
                So, first of all, we should know what climate action is: Climate action refers to efforts and initiatives taken to mitigate the effects of climate change and adapt to its impacts. Here's a comprehensive overview of climate action, including its importance, key strategies, global agreements, and ways individuals can contribute Now that we ...
              </p>
              <div className="text-center">
                <Link href="/blogs/understanding-climate" className="text-[#1774d1] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">The Importance of Climate ...</h3>
              <p className="text-gray-600 text-center mb-4">
                In our modern world, one of the most important resources is that of nature, as elements such as fossil fuels, agriculture, and other components derived from nature make up a major part of the world. In 2023, despite all the deforestation and destruction of nature, agriculture still held a 4% share of global GDP, and fossil fuels held an 8% share. However...
              </p>
              <div className="text-center">
                <Link href="/blogs/importance-of-climate" className="text-[#1774d1] hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Action Now Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Main Title with Ocean Background */}
          <div className="mb-1">
            <h2 className="text-7xl md:text-8xl font-extrabold text-center  tracking-wider" style={{ 
              backgroundImage: "url('/images/home_page/h18.webp')", 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "bottom"
            }}>
              CLIMATE ACTION NOW!
            </h2>
          </div>
        </div>
          
        {/* Eye-shaped Visual - Full Width */}
        <div className="w-full mb-16">
          <div className="relative w-full aspect-[2/1]">
            <Image
              src="/images/home_page/h16.webp"
              alt="Climate action visual showing contrast between barren land and lush landscape"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
          
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Obama Quote */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
              We are the first generation to feel the impact of climate change and the last generation that can do something about it.
            </p>
            <p className="text-lg text-gray-600 italic">
              - BARACK OBAMA
            </p>
          </div>
        </div>
      </section>

      {/* Action and Impact Section */}
     
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-center flex-col items-center">
          <h2 className="text-5xl font-bold text-center text-[#1774d1] mb-16">Testimonials</h2>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-7xl mx-auto mb-20 border border-gray-200 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile Image and Info */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/member/G2.webp"
                    alt="Mr Ovais Sarmad"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1774d1] mb-1">Mr Ovais Sarmad</h3>
                <p className="text-gray-700 mb-1">Former Deputy Executive Secretary</p>
                <p className="text-gray-700 mb-2">United Nations Framework Convention on Climate Change</p>
                <p className="text-[#1774d1]">(UNFCCC)</p>
              </div>
              
              {/* Quote */}
              <div className="relative">
                <div className="text-8xl text-[#1774d1] absolute -top-10 left-0">"</div>
                <div className="pl-8 pr-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I am delighted to witness the remarkable impact of India MUN's climate action initiatives. Their commitment to empowering India's youth for climate action is truly commendable. As a former Deputy Executive Secretary of UNFCCC, I am pleased to see India MUN providing a dynamic platform for students to engage in real-world problem-solving and policy advocacy. The level of knowledge, diplomacy, and leadership demonstrated by the participating students is a testament to India MUN's dedication to fostering the next generation of climate leaders. I wholeheartedly endorse India MUN's efforts and encourage educational institutions to seek affiliation with this transformative organization.
                  </p>
                </div>
                <div className="text-8xl text-[#1774d1] absolute -bottom-16 right-0">"</div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute top-1/2 -translate-y-1/2 -left-5 bg-white rounded-full p-2 shadow-lg">
              <ChevronLeft className="w-6 h-6 text-[#1774d1]" />
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white rounded-full p-2 shadow-lg">
              <ChevronRight className="w-6 h-6 text-[#1774d1]" />
            </button>
          </div>
          
          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 mb-8 gap-4 ">
            {/* Video 1 */}
            <div>
              <div className="aspect-video  mb-4 relative">
                <iframe 
                  src="https://www.youtube.com/embed/iuQaLltyGvw" 
                  title="Mr. Suresh Prabhu Video Testimonial"
                  className="w-full h-full absolute"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src="/images/member/G3.webp"
                    alt="Mr Suresh Prabhu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Mr Suresh Prabhu,</h3>
                  <p className="text-gray-700 text-sm">Parliamentarian, Minister and Chancellor</p>
                  <p className="text-gray-700 text-sm">Prime Minister's Sherpa for G20 Summit (2014 - 2015)</p>
                  <p className="text-[#1774d1] text-sm">(Government of India)</p>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div>
              <div className="aspect-video  mb-4 relative">
                <iframe 
                  src="https://www.youtube.com/embed/rxrsdAerFfk" 
                  title="India MUN at COP28 Dubai"
                  className="w-full h-full absolute"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-[#1774d1]">
                  <Image
                    src="/images/home_page/h17.webp"
                    alt="COP28 Dubai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">India MUN at COP28 Dubai</h3>
                  <p className="text-gray-700 text-sm">Ovais Sarmad, Former Deputy Executive Secretary,</p>
                  <p className="text-gray-700 text-sm">United Nations Framework Convention on Climate Change</p>
                  <p className="text-[#1774d1] text-sm">(UNFCCC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Eighth Section - Founding Partners */}
      <section className="py-20 bg-white">
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
