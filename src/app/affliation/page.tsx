"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";


const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    },
    hover: {
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        }
    }
};

// First 6 members from governing council
const featuredMembers = [
    {
        id: 'G1',
        name: 'Ms. Gayatri Chauhan',
        designation: [
            'Founder and CEO, BuzzOnEarth',
            'President, Gaia The Earth Foundation',
        ],
        affiliation: 'Executive President, India MUN',
    },
    {
        id: 'G2',
        name: 'Mr. Ovais Sarmad',
        designation: [
            'Former Deputy Executive Secretary',
            'United Nations Framework Convention on Climate Change',
        ],
        affiliation: 'UNFCCC',
    },
    {
        id: 'G3',
        name: 'Hon\'ble Mr. Suresh Prabhu',
        designation: [
            'Parliamentarian, Minister and Chancellor',
            'Prime Minister\'s Sherpa for G20 Summit (2014 - 2015)',
        ],
        affiliation: 'Government of India',
    },
    {
        id: 'G4',
        name: 'Mr. Erik Solheim',
        designation: [
            'Norwegian Diplomat, Peace Negotiator',
            'Former Executive Director, United Nations Environment Program',
        ],
        affiliation: 'UNEP',
    },
    {
        id: 'G5',
        name: 'Dr. Jagdish N. Seth',
        designation: [
            'Padma Bhushan Awardee 2020',
            'Charles H. Kellstadt Professor of Business',
        ],
        affiliation: 'Emory University',
    },
    {
        id: 'G6',
        name: 'Dr. Shakila T. Shamsu',
        designation: [
            'Former OSD (New Education Policy)',
            'Department of Higher Education, MoE',
        ],
        affiliation: 'Government of India',
    },
];



export default function GlobalSchoolsPage() {

    // Animation variants for fade-in
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const [activeTab, setActiveTab] = useState('affiliation');

    {/* Add this logic inside your component before the return statement */ }
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

    return (
        <main>
            {/* Global Schools Section */}
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
                          
                      </div>
                  </section>

          


            <section className="bg-gradient-to-r pt-4 from-[#000000] to-[#002e41] opacity-95">
                <div className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#1875d1] text-4xl md:text-5xl mb-8">
                        Your school could be the next success story!
                    </h2>
                    </div>
                </div>

                <div className="container px-4 sm:px-4 lg:px-3 mx-auto pb-16">
    <div className="flex flex-col lg:flex-row-reverse items-right">
        <div className="py-6">
            <Image
                src="/images/affiliation/x75.webp"
                alt="Our Mission Illustration"
                width={700}
                height={600}
                className="rounded-lg"
            />
        </div>
        <div className="lg:w-1/2 lg:pr-12">
            <p className="text-sm text-white text-justify leading-relaxed">
                We celebrate schools not only as centers of learning, but as <b>launchpads for leadership, innovation, and global impact.</b>
            </p>
            <p className="py-5 text-sm text-white text-justify leading-relaxed">
                We <b>
                    provide schools with an unparalleled platform to showcase your school’s vision, amplify your leadership, and gain national & global recognition.
                </b>
            </p>
            <p className="text-sm py-5 text-white text-justify leading-relaxed">
                <b>The Global Schools Affiliation</b> represents a comprehensive transformation of your school’s identity, impact, and international standing. It is a <b>prestigious recognition of your commitment to global education values</b> — from sustainability and leadership to innovation and inclusion.
            </p>
            <p className="text-sm py-5 text-white text-justify leading-relaxed">
                On affiliation, you become a <span className="text-[#1b66cf]">Global Member School </span>and join a <b>prestigious alliance of changemaking institutions</b> — committed to nurturing the next generation of global leaders, innovators & ambassadors.
            </p>
        </div>
    </div>
</div>

            </section>

            {/* Empowering Schools Section */}
            <section className="pt-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Image */}
                        <div className="md:w-1/2">
                        <h2 className="text-5xl font-bold mb-8">We Empower Schools Through:</h2>
                            <div className="py-16 relative w-full aspect-square">
                                <Image
                                    src="/images/affiliation/x24.webp"
                                    alt="Empowering Schools Illustration"
                                    width={600}
                                height={600}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Accordions */}
                        <div className="md:w-1/2">

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Official Certificate & Global Member Badge
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        A prestigious recognition and symbol of your school’s distinguished standing and commitment to global education values — sustainability, leadership, innovation, and inclusion — proudly showcased through an official certificate signed by UN dignitaries & Global leaders, and digital Global Member badge that instantly signal your affiliation with a globally respected movement shaping the future of education.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Schools Ranking
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Recognizing schools across India for excellence in climate action, leadership, and innovation. Be ranked among the nation's top transformative institutions.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Student Programs & Curriculum Access.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Access to international educational programs and curriculum resources designed to foster global citizenship and environmental awareness.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Prestigious Prizes & Global Recognition.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Opportunities for schools and students to win awards and gain international recognition for their environmental initiatives and leadership.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Schools Summit.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Participate in our annual summit where schools showcase their achievements and connect with global education leaders.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Representation at India's Biggest Model UN Conferences
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Exclusive opportunities for students to represent their schools at prestigious Model UN conferences across India.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Path to Global Accreditation.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Support and guidance for schools seeking international accreditation and recognition.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        India MUNx Events.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Special access to India MUNx events, workshops, and training sessions for students and educators.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-9">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Exclusive Representation at UN COP and Global Events.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Selected schools get the opportunity to send representatives to UN Climate Change Conferences and other global environmental events.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Force Section */}
            {/* Global Force Section */}
<section className="w-full py-5 md:mb-8 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[430px] lg:h-96">
            {/* Left side - Image with overlay text */}
            <div className="w-full lg:w-1/2">
                <div className="relative h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] rounded-lg overflow-hidden">
                    <Image
                        src="/images/affiliation/x25.webp"
                        alt="Global collaboration - hands protecting Earth"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay text at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                        <div className="text-white">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Every student deserves an education that empowers them to lead, solve, innovate and transform.</h3>
                            <p className="text-sm sm:text-base opacity-90 line-clamp-3">
                                Every educator deserves a platform that uplifts their vision and amplifies their impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Quote Content */}
            <div className="w-full lg:w-1/2">
                <div className="relative w-full rounded-2xl lg:rounded-3xl border-2 border-gray-200 p-4 sm:p-6 bg-white h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] flex flex-col justify-center">
                    {/* Logo/Image at top */}
                    <div className="flex justify-left mb-4">
                        <Image
                            src="/images/affiliation/x51.webp"
                            alt="Global collaboration logo"
                            width={60}
                            height={60}
                            className="object-contain sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                    </div>
                    
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl text-gray-800 mb-4 sm:mb-6 leading-tight">
                            We're not just building a network.<br className="hidden sm:block" /> 
                            <span className="sm:hidden"> </span>We're cultivating a{" "}
                            <b>global force</b> for{" "}
                            <b>educational transformation.</b>
                        </h2>
                        
                        {/* Keywords section */}
                        <div className="mb-4 py-5">
                            <p className="text-sm sm:text-base text-gray-700 italic">
                                CLIMATE ACTION. LEADERSHIP. INNOVATION.<br />
                                DIPLOMACY. ENTREPRENEURSHIP. REGENERATION. SDGs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="py-16 text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                A <b>Prestigious Alliance</b> of<span className="text-[#1774d1]"><b> Visionary Institutions</b></span> <br/>shaping the <b>Future of Education</b><span className="text-[#0066FF]">.</span>
              </h2>
            </motion.div>
</section>


            <section className="py-8 sm:py-12 lg:py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                What Sets Us Apart?
            </h2>
        </div>

        <div className="space-y-8 lg:space-y-12">
            {/* First Row */}
            <div className="space-y-8 lg:space-y-12">
  {/* First Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
    {[
      "Highly influential and effective Governing council",
      "Strong network of mentors and guides for students to unleash their best potential",
      "Global Certifications co-signed by UN Dignitaries and global leaders",
      " Network of top 1% Schools",
      "Focus on inculcating spirit of innovation, entrepreneurship, leadership and regeneration"
    ].map((text, index) => (
      <div
        key={index}
        className="bg-gradient-to-r from-green-200 via-teal-200 to-teal-300 p-[px] rounded-full p-[5px] rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        <div className="group flex items-center justify-center text-center 
                        min-h-[160px] min-w-[160px] sm:min-h-[180px] sm:min-w-[180px] lg:min-h-[200px] lg:min-w-[200px]
                        rounded-full bg-white p-4 sm:p-6 font-medium">
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-[#1774d1] transition-colors duration-300">
            {text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Timeline Points */}
       

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
    {[
      "Exposure to essential life skills. Experiential learning on diverse topics",
      "The only MUN focused on Climate and Biodiversity as core themes",
      "Direct linkage with UNEP ,UN Decade on Ecosystem Restoration, UNFCCC & UN Global Innovation Hub",
      "Unique opportunity to represent India at UN COP & Global Events",
      "Access to top institutions like IITs, IIMs, Ashoka University, Amrita University, ISB & so on"
    ].map((text, index) => (
      <div
        key={index}
        className="bg-gradient-to-r from-green-200 via-teal-200 to-teal-300 p-[px] rounded-full p-[5px] rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        <div className="group flex items-center justify-center text-center 
                        min-h-[160px] min-w-[160px] sm:min-h-[180px] sm:min-w-[180px] lg:min-h-[200px] lg:min-w-[200px]
                        rounded-full bg-white p-4 sm:p-6 font-medium">
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed group-hover:text-[#1774d1] transition-colors duration-300">
            {text}
          </p>
        </div>
      </div>
    ))}
  </div>
        </div>

        {/* Call to Action */}
        
    </div>
</section>

<section className="py-16 bg-gradient-to-r from-[#000000] to-[#002e41] opacity-95">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Unite - Empower - Act
                        </h2>
                        <p className="text-white text-sm max-w-7xl mx-auto">
                            Global Schools Affiliation, an initiative aligned with the Decade of Action - United Nations Sustainable Development Goals , is more than a network — it’s a global movement to reimagine education for a climate-conscious, innovation-driven, future-ready world. 
                        </p>
                    </div>

                    {/* Two Column Content */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Quote marks */}
                            <div className="text-[#4A90E2] text-6xl font-bold mb-4">"</div>
                            <div className="text-sm  text-[#4A90E2] text-justify space-y-4">
                                <p className="text-sm leading-relaxed">
                                    <span className="text-[#4A90E2]">India MUN</span> — a distinguished global institution uniting and empowering schools, educators, and young minds for climate action, leadership, innovation, and regeneration — provides a transformative platform to turn ideas into action.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    Sharing deep foundations with organizations such as the United Nations Environment Programme, the United Nations Global Innovation Hub, the United Nations Framework Convention on Climate Change, NASA, ISRO, AICTE and several IITs,<b> India MUN operates at the confluence of global policy, innovation, and education.</b>
                                </p>
                                <p className="text-sm leading-relaxed">
                                    As an initiative shaped alongside <b>Gaia The Earth Foundation</b> — India’s Actor for the UN Decade on Ecosystem Restoration 2021–2030, jointly led by UNEP and FAO — India MUN stands at the forefront of educational transformation, deeply aligned with global sustainability goals.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    At its core, India MUN is the vanguard of climate-conscious education and a catalyst for future-ready learning — one that integrates environmental stewardship with bold leadership, creative innovation, and real-world problem-solving.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Quote marks */}
                            <div className="text-white text-6xl font-bold mb-4">"</div>
                            <div className="text-white text-justify space-y-4">
                                <p className="text-sm leading-relaxed">
                                    By affiliating with India MUN, your school becomes part of a prestigious alliance of changemaking institutions — united in a shared commitment to shape the future through climate action, innovation, and educational leadership.  This prestigious alliance opens doors to global opportunities, UN-aligned programs,  and events, and a community of forward-thinking educators and institutions.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    Affiliation offers an unparalleled platform to showcase your school’s impact, elevate your global profile, and lead transformative change in education — across sustainability, leadership, innovation and 21st-century learning.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    Together, let's embark on a rewarding journey of climate action, leadership and innovation, crafting a world that thrives and prospers for generations to come. 
                                </p>
                                <p className="text-sm leading-relaxed font-semibold">
                                    India MUN Secretariat is committed to providing our affiliated schools with extensive support and resources, expert-led training, and dedicated guidance for both educators and students — ensuring your school thrives at every step.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {/* Centered Statement */}
                    <div className="text-center mb-12">
                        <p className="text-white text-lg font-semibold max-w-9xl mx-auto">
                            We believe in harnessing the collective power of the largest youth constituency in the world to transform them into a dynamic network of future sustainability leaders, innovators, and changemakers of tomorrow.
                        </p>
                    </div>

                    {/* UN Logo */}
                    <div className="flex justify-center mb-12">
                        <div className="relative w-24 h-24">
                            <Image
                                src="/images/home_page/h2.webp"
                                alt="UN Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-12 py-4 text-lg font-semibold rounded-xl min-w-[200px]">
                            Download Brochure
                        </Button>
                        <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-12 py-4 text-lg font-semibold rounded-xl min-w-[200px]">
                            Affiliate Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Building a Thriving School Culture Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Building a Thriving School Culture
                        </h2>
                    </div>

                    {/* Three Images */}
                    <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
                        {/* Image 1 */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm aspect-square">
                                <Image
                                    src="/images/affiliation/x26.webp"
                                    alt="Institutional Excellence"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm aspect-square">
                                <Image
                                    src="/images/affiliation/x27.webp"
                                    alt="Educator Empowerment"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm aspect-square">
                                <Image
                                    src="/images/affiliation/x28.webp"
                                    alt="Student Transformation"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive Image Section */}
            <section className="w-full relative">

                <div className="">
                    <Image
                        src="/images/affiliation/x29.webp"
                        alt="Desktop Program Image"
                        width={1920}
                        height={1080}
                        className="w-full"
                    />
                </div>
            </section>

            {/* Unite - Empower - Act Section */}

            {/* Affiliation Benefits Section */}


            <section className="bg-white py-16">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                {/* Header */}
                                <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1875d1] mb-4">
                            Affiliation Benefits
                        </h2>
                        <h2 className="text-4xl md:text-3xl text-black mb-6">
                            For <span className="font-bold">lnstitutions</span><span className="text-[#4686d8]">.</span> For <span className="font-bold">Educators</span><span className="text-[#4686d8]">.</span> For <span className="font-bold">Students</span><span className="text-[#4686d8]">.</span>
                        
                        </h2>
                    </div>
            
                                {/* Benefits Grid with Accordions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                                    {/* Benefit Item 1 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w5.webp"
                                                        alt="Global Schools Affiliation Certificate"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Global Schools Affiliation Certificate
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Receive an official certificate recognizing your school's commitment to global education excellence.
                                                This prestigious document validates your institution's dedication to 21st-century learning principles.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Benefit Item 2 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-2" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w6.webp"
                                                        alt="Global Schools Ranking"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Global Schools Ranking
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Get featured in our comprehensive global schools ranking system based on sustainability, innovation, and impact.
                                                Gain visibility among parents, students, and educational stakeholders worldwide.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Benefit Item 3 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-3" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w7.webp"
                                                        alt="Digital Badge & Branding Assets"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Digital Badge & Branding Assets
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Access high-quality digital badges and branding materials for your website, marketing, and communications.
                                                Enhance your school's visual identity with internationally recognized certification marks.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Benefit Item 4 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-4" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w8.webp"
                                                        alt="GSCA & GSLI Accreditation"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        GSCA & GSLI Accreditation
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Achieve specialized accreditation through Global Schools for Climate Action and Global Schools Leadership Initiative.
                                                Join an elite network of schools driving positive environmental and social change.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Benefit Item 5 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-5" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w9.webp"
                                                        alt="Recognition & Awards"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Recognition & Awards
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Participate in annual Global Schools Awards recognizing excellence in education, innovation, and sustainability.
                                                Gain media coverage and recognition from educational leaders worldwide.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Benefit Item 6 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-6" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w10.webp"
                                                        alt="Access to Support & Resources"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Access to Support & Resources
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Get access to exclusive educational resources, curriculum guides, and implementation frameworks.
                                                Connect with a global community of educators sharing best practices and innovative solutions.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Continue with remaining items - Row 2 */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-7" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w11.webp"
                                                        alt="Global Schools Summit"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Global Schools Summit
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Participate in exclusive annual summits bringing together global educational leaders and innovators.
                                                Present your school's achievements and initiatives to an international audience.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-8" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w12.webp"
                                                        alt="Professional Development for Educators"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Professional Development for Educators
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Provide your teachers with world-class professional development opportunities and certifications.
                                                Empower your educators to become catalysts of transformation in their classrooms.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-9" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w13.webp"
                                                        alt="Enhanced Reputation"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Enhanced Reputation
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Elevate your school's reputation as a forward-thinking institution committed to global excellence.
                                                Stand out in the competitive educational landscape with internationally recognized certification.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-10" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w14.webp"
                                                        alt="Host Your Own MUN"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Host Your Own MUN
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Get support and resources to host your own Model United Nations conferences and diplomatic events.
                                                Build partnerships with other schools and create meaningful learning experiences.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-11" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w15.webp"
                                                        alt="Greater Student Engagement"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        Greater Student Engagement
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Implement innovative programs and activities that significantly boost student engagement and motivation.
                                                Foster a culture of active participation and leadership among your student community.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-12" className="border rounded-lg">
                                            <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <Image
                                                        src="/images/whyApply/w16.webp"
                                                        alt="City Representative Recognition"
                                                        width={48}
                                                        height={48}
                                                        className="w-30 h-30 object-contain"
                                                    />
                                                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                        City Representative Recognition
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                Become the official Global Schools representative for your city or region.
                                                Gain recognition as a hub for educational excellence and community leadership.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
            
                                    {/* Continue with items 13-18 (w17-w22) */}
                                    {[
                                        { num: 17, title: "Global Schools Network Directory", desc: "Get listed in our comprehensive directory accessible to parents, students, and educational partners worldwide. Connect with a global network of like-minded educational institutions." },
                                        { num: 18, title: "Networking and Collaborations", desc: "Build meaningful partnerships with schools, organizations, and institutions around the world. Share resources and best practices with a global community of educators." },
                                        { num: 19, title: "Global Exposure", desc: "Showcase your school's achievements and initiatives on international platforms and media. Gain visibility among international educational leaders and stakeholders." },
                                        { num: 20, title: "Community Impact", desc: "Implement programs that create positive impact in your local and global communities. Build partnerships with NGOs and community organizations for greater impact." },
                                        { num: 21, title: "Innovative Teaching", desc: "Access cutting-edge teaching methodologies and educational technologies. Stay at the forefront of educational innovation and best practices." },
                                        { num: 22, title: "Climate and Innovation Clubs", desc: "Establish specialized clubs focused on climate action, sustainability, and innovation. Foster entrepreneurial thinking and environmental stewardship among young learners." },
                                    ].map((item, index) => (
                                        <Accordion key={item.num} type="single" collapsible className="w-full">
                                            <AccordionItem value={`item-${item.num}`} className="border rounded-lg">
                                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                                    <div className="flex flex-col items-center space-y-2 text-center">
                                                        <Image
                                                            src={`/images/whyApply/w${item.num}.webp`}
                                                            alt={item.title}
                                                            width={48}
                                                            height={48}
                                                            className="w-30 h-30 object-contain"
                                                        />
                                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                                    {item.desc}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                            {/* Affiliate Now Button */}
                    <div className="text-center py-10">
                        <Button className="bg-[#1875d1] hover:bg-[#1875d1]/90 text-white px-12 py-4 text-lg font-semibold rounded-xl">
                            Explore all Affiliation Benefits
                        </Button>
                    </div>
                        </section>

            {/* Affiliation Structure & Recognition Pathways Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#4686d8] mb-4">
                            Affiliation Structure & Recognition Pathways
                        </h2>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-6">
                        <div className="flex bg-white rounded-full p-1 shadow-lg">
                            <button
                                onClick={() => setActiveTab('affiliation')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'affiliation'
                                    ? 'bg-gray-800 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                Global Schools Affiliation
                            </button>
                            <button
                                onClick={() => setActiveTab('onboarding')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'onboarding'
                                    ? 'bg-gray-800 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                Official Onboarding Kit
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="max-w-8xl mx-auto">
                        {activeTab === 'affiliation' && (
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left side - Badge Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-100 h-100">
                                            <Image
                                                src="/images/affiliation/x30.png"
                                                alt="Global Schools Affiliation Badge"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Right side - Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl py-6 font-bold text-gray-800 mb-3">
                                            Global Schools Affiliation
                                        </h3>

                                        <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#4686d8]">
                                            <p className="text-sm font-semibold text-gray-800">
                                                "Global Recognition for Schools Driving Change"
                                            </p>
                                        </div>

                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            The Global Schools Affiliation represents a comprehensive transformation of your
                                            school's identity, impact, and international standing.
                                        </p>

                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            This isn't just a certification—<span className="font-semibold">it's a transformation</span>. It offers direction, insight, and a
                                            powerful partnership that elevates your school culture and educational leadership. A
                                            prestigious recognition of your commitment to global education values — from
                                            sustainability and leadership to innovation and inclusion.
                                        </p>

                                        <div className="bg-blue-50 p-4 rounded-lg space-y-1">
                                            <p className="text-sm text-gray-800">
                                                <span className="font-semibold">Affiliation fee (Global Member School):</span> INR 25,000 + GST
                                            </p>
                                            <p className="text-sm text-gray-800">
                                                <span className="font-semibold">Renewal:</span> INR 15,000 + GST/year
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                <span className="font-semibold">All affiliated schools can nominate themselves for City Representative status and apply
                                                    for Accreditation (Silver, Gold, Platinum).</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom section */}
                                <div className="mt-8 text-center">
                                    <p className="text-sm text-gray-700 leading-relaxed max-w-6xl mx-auto mb-6">
                                        The future of education is being written today by institutions bold enough to lead. Your school has the opportunity
                                        to be recognized not just locally, but nationally and internationally, as a beacon of educational excellence and transformation.
                                    </p>

                                    <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-3 text-sm font-semibold rounded-xl">
                                        Affiliate Now
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'onboarding' && (
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Global Member School - Official Onboarding Kit
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Affiliated Institutions access to globally recognized programs,
                                                exclusive branding assets, national & global visibility and
                                                leadership pathways for students and educators, and membership
                                                in a National & Global Movement —as part of India's most
                                                respected education network committed to nurturing the next
                                                generation of global leaders, innovators & ambassadors.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-bold text-[#1774d1] mb-4">
                                                Official Onboarding Kit -
                                            </h4>

                                            <div className="space-y-3">
                                                <div>
                                                    <h5 className="text-sm font-semibold text-gray-800">Global Affiliation Certificate –</h5>
                                                    <p className="text-xs text-gray-600">(E-certificate signed by UN dignitaries)</p>
                                                </div>

                                                <div>
                                                    <h5 className="text-sm font-semibold text-gray-800">Framed Affiliation Plaque –</h5>
                                                    <p className="text-xs text-gray-600">Delivered post-onboarding (Optional AddOn)</p>
                                                </div>

                                                <div>
                                                    <h5 className="text-sm font-semibold text-gray-800">Digital Badge –</h5>
                                                    <p className="text-xs text-gray-600">Showcase your affiliation across your website, brochures, and campaigns.</p>
                                                </div>

                                                <div>
                                                    <h5 className="text-sm font-semibold text-gray-800">Media Toolkit –</h5>
                                                    <p className="text-xs text-gray-600">Includes a press release template, branding assets, and promotional materials to announce your affiliation.</p>
                                                </div>
                                                <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Marketing Pack –</h5>
                                            <p className="text-xs text-gray-600">Ready-to-use designs for social media, co-branded posters, certificates, and more.</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">School Listing –</h5>
                                            <p className="text-xs text-gray-600">in the National Global Schools Network Directory</p>
                                        </div>

                                        
                                                
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-3">
                                        
<div>
                                            <h5 className="text-sm font-semibold text-gray-800">Access to India MUNx Resources –</h5>
                                            <p className="text-xs text-gray-600">Complete support to host Model UNs, Hackathons, Innovation Tank, Sustainability Fests, and more.</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Eligibility for Awards & Ranking –</h5>
                                            <p className="text-xs text-gray-600">Automatically considered for Global Schools Ranking and prestigious prizes.</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Innovation & Climate Club Guidelines –</h5>
                                            <p className="text-xs text-gray-600">Forms and toolkits to initiate youth-led activities.</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Nomination Form for City Representative Recognition.</h5>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Global Schools Handbook –</h5>
                                            <p className="text-xs text-gray-600">Step-by-step guide to opportunities, timelines, and implementation</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Affiliation Charter / MoU –</h5>
                                            <p className="text-xs text-gray-600">(For City Representatives and Accredited Institutions)</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Educators Workshop Invitations –</h5>
                                            <p className="text-xs text-gray-600">All educators receive access to our expert peer-led workshops and thought leadership webinars.</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Hosting Rights Confirmation –</h5>
                                            <p className="text-xs text-gray-600">Authorization to host India MUNx and city-level interschool events</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Program Access Manual –</h5>
                                            <p className="text-xs text-gray-600">Navigate all India MUN flagship programs with ease</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Invitation to Global Schools Summit –</h5>
                                            <p className="text-xs text-gray-600">An exclusive gathering of top schools, thought leaders, and global partners</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* City Representatives Section */}
            <section className="py-16 bg-gradient-to-r from-[#000000] to-[#002e41] opacity-95">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Content */}
                        <div className="text-white space-y-4">
                            <h2 className="text-3xl font-bold text-[#1b66cf] mb-4">
                                City Representatives
                            </h2>

                            <h3 className="text-xl font-medium mb-6">
                                Your School. Your City. A Leadership Role.
                            </h3>

                            <p className="text-sm mb-6 text-justify">
                                Affiliated schools have the exclusive opportunity to be nominated for the esteemed role of City
                                Representative — a position that marks your institution as a regional leader in educational
                                transformation.
                            </p>

                            <div className="space-y-3">
                                <h4 className="text-base text-[#4A90E2]">City Representatives:</h4>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">Serve as the official face of India MUN in their city.</p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Host and lead flagship student programs: MUNx Conferences, Hackathons, Leadership Summits,
                                            SDG Events.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">Represent their city in key national forums and global platforms</p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Gain priority access to flagship initiatives, leadership councils, strategic partnerships and speaking
                                            opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1a2332] p-4 rounded-lg mt-6">
                                <p className="text-sm text-justify">
                                    <b>City Representatives are spotlight institutions who becomes the face of educational transformation
                                    in their region — shaping local ecosystems for climate action, innovation, and youth leadership.</b>
                                </p>
                            </div>

                            <p className="text-sm text-[#4A90E2] mt-6">
                                Be the force that elevates your city's voice on a national and global stage.
                            </p>
                        </div>

                        {/* Right side - Badge Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-lg aspect-square">
                                <Image
                                    src="/images/affiliation/x31.webp"
                                    alt="City Representative Badge - Spotlight Institutions"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsive Image Section */}
            <section className="w-full relative">
  <div className="max-w-[1200px] mx-auto">
    <Image
      src="/images/affiliation/x32.webp"
      alt="Desktop Program Image"
      width={1200}
      height={675} // 16:9 ratio for 1200px width
      className="w-full h-auto"
    />
  </div>
</section>


            {/* The Vision Behind the Global Schools Affiliation Section */}
            <section className="max-w-7xl mx-auto py-16 px-4">
                <div className="bg-gray-30 rounded-3xl border-2 border-gray-200 p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-[#4686d8] mb-4">
                            The Vision Behind the Global Schools Affiliation
                        </h2>
                        <p className="text-lg text-gray-800">
                            Uniting Institutions Bold Enough to Shape the Future of Education
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 text-justify">
                        <p className="text-sm text-gray-800 font-bold">
                            The Global Schools Affiliation is built on a powerful belief — that the future of education will be led by bold, collaborative, purpose-driven institutions.
                        </p>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            This prestigious affiliation is designed to bring together <span className="font-bold">visionary schools</span> that are redefining what it means to educate in the 21st century — integrating <span className="font-bold">climate action, global citizenship, SDG learning, innovation, diplomacy, and leadership development</span> into the very fabric of their institution, also are courageous enough to evolve — and collaborative enough to uplift others along the way.
                        </p>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            This initiative by India MUN is more than a recognition — it is an invitation to be part of a national and international alliance of schools that are leading education with purpose, innovation, and impact.
                        </p>

                        {/* Why We Exist Section */}
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4">Why We Exist:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Celebrate institutions leading the transformation of education in India and beyond with purpose, courage, and global vision</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Give schools the <span className="font-bold">visibility, tools, and global platforms</span> to create measurable change</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Build a network where best practices, resources, and leadership flow freely</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Embed sustainability, leadership, and innovation into everyday learning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Empower educators as catalysts for change</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black">•</span>
                                    <span className="text-sm text-gray-700">Nurture students as changemakers, innovators and future global leaders</span>
                                </li>
                            </ul>
                        </div>

                        {/* Through the Affiliation Section */}
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4">Through the Global Schools Affiliation, institutions gain:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700"><span className="font-bold">National & Global Visibility</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700">Recognition by <span className="font-bold">global leaders, UN-aligned experts and dignitaries</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700">Access to <span className="font-bold">Globally recognized programs and certifications</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700"><span className="font-bold">Unparalleled leadership opportunities</span> for educators and students</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700">International recognition and branding as a changemaking institution</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8]">🔹</span>
                                    <span className="text-sm text-gray-700">Access to a <span className="font-bold">powerful ecosystem</span> of like-minded schools, experts, and global partners.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Eligibility Section */}
                        <div className="bg-gray-50 p-4 rounded-lg mt-8">
                            <p className="text-sm text-gray-700">
                                Eligibility for <span className="font-bold">- City Representative roles, Global Schools Ranking, Platinum-Level Accreditation, Global Schools Awards, Global Schools Summit, Representation at India’s Biggest MUN Conference (India MUN National Conferences) and Innovation Hackathons.</span>
                            </p>
                        </div>

                        {/* Transformation Section */}
                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-[#4686d8] mb-4">
                                Not Just an Affiliation — A Transformation
                            </h3>

                            <div className="space-y-3">
                                <p className="text-sm text-gray-700">This is not simply about joining a network.</p>
                                <p className="text-sm text-gray-700">It is about stepping into a role of national and global leadership —</p>
                                <p className="text-sm text-gray-700">To inspire, innovate, empower, and educate for a better future.</p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-10">
                            <h4 className="text-lg font-bold text-gray-800">
                                Join the movement of schools rewriting the future of education — together.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>


            {/* Become A Global Member School Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-black mb-6">
                            BECOME A <span className="font-extrabold">GLOBAL MEMBER SCHOOL</span><span className="text-[#4686d8]">.</span><br />
                           GET  <span className="font-bold">CERTIFIED</span><span className="text-[#4686d8]">.</span>
                        </h2>

                        {/* Affiliate Now Button */}
                        <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-12 py-4 text-lg font-semibold rounded-xl mt-8">
                            Affiliate Now
                        </Button>
                    </div>

                    {/* Three Cards Section */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                        {/* Global Schools Prizes Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Global Schools Awards
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-4">
                        <div className="relative w-40 h-40">
                            <Image
                                src="/images/affiliation/x33.webp"
                                alt="UN Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                            <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-2 text-sm font-medium rounded-lg">
                                Learn More
                            </Button>
                        </div>

                        {/* Global Schools Ranking Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Global Schools Ranking
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-4">
                        <div className="relative w-40 h-40">
                            <Image
                                src="/images/affiliation/x34.webp"
                                alt="UN Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                            <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-2 text-sm font-medium rounded-lg">
                                Learn More
                            </Button>
                        </div>

                        {/* Global Schools Summit Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Global Schools Summit
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-4">
                        <div className="relative w-40 h-40">
                            <Image
                                src="/images/affiliation/x35.webp"
                                alt="UN Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                            <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-2 text-sm font-medium rounded-lg">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governing Council Showcase Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1875d1]">Our Governing Council</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Led by distinguished global leaders, UN experts, and educational leaders committed to transforming education for climate action and innovation.
                        </p>
                        <div className="w-24 h-2 bg-[#1875d1] mx-auto rounded-full mt-6"></div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        variants={staggerContainer}
                    >
                        {featuredMembers.map(member => (
                            <motion.div
                                key={member.id}
                                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <motion.div
                                    className="relative w-full pb-[140%]"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={`/images/member/${member.id}.webp`}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16vw"
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                                <motion.div
                                    className="p-4 space-y-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <h3 className="text-sm font-bold text-gray-800">{member.name}</h3>
                                    <div className="space-y-1">
                                        {member.designation.slice(0, 2).map((line, index) => (
                                            <p key={index} className="text-xs text-gray-600 line-clamp-1">
                                                {line}
                                            </p>
                                        ))}
                                        <p className="text-xs text-[#1875d1] font-medium mt-2">
                                            ({member.affiliation})
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Button className="bg-[#1875d1] hover:bg-[#1875d1]/90 text-white px-8 py-3 text-base font-semibold rounded-xl">
                            View All Council Members
                        </Button>
                    </motion.div>
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
                        <h3 className="text-2xl font-bold text-gray-700 text-center mb-8">Founding Partners</h3>
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
                        <h3 className="text-2xl font-bold text-gray-700 text-center mb-6">Our Network of Associates & Partners</h3>
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

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-center flex-col items-center">
                    <h2 className="text-5xl font-bold text-center text-[#4686d8] mb-16">Testimonials</h2>

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
                                <h3 className="text-2xl font-bold text-[#4686d8] mb-1">Mr Ovais Sarmad</h3>
                                <p className="text-gray-700 mb-1">Former Deputy Executive Secretary</p>
                                <p className="text-gray-700 mb-2">United Nations Framework Convention on Climate Change</p>
                                <p className="text-[#4686d8]">(UNFCCC)</p>
                            </div>

                            {/* Quote */}
                            <div className="relative">
                                <div className="text-8xl text-[#4686d8] absolute -top-10 left-0">"</div>
                                <div className="pl-8 pr-8">
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        I am delighted to witness the remarkable impact of India MUN's climate action initiatives. Their commitment to empowering India's youth for climate action is truly commendable. As a former Deputy Executive Secretary of UNFCCC, I am pleased to see India MUN providing a dynamic platform for students to engage in real-world problem-solving and policy advocacy. The level of knowledge, diplomacy, and leadership demonstrated by the participating students is a testament to India MUN's dedication to fostering the next generation of climate leaders. I wholeheartedly endorse India MUN's efforts and encourage educational institutions to seek affiliation with this transformative organization.
                                    </p>
                                </div>
                                <div className="text-8xl text-[#4686d8] absolute -bottom-16 right-0">"</div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button className="absolute top-1/2 -translate-y-1/2 -left-5 bg-white rounded-full p-2 shadow-lg">
                            <ChevronLeft className="w-6 h-6 text-[#4686d8]" />
                        </button>
                        <button className="absolute top-1/2 -translate-y-1/2 -right-5 bg-white rounded-full p-2 shadow-lg">
                            <ChevronRight className="w-6 h-6 text-[#4686d8]" />
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
                                    <p className="text-[#4686d8] text-sm">(Government of India)</p>
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
                                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-[#4686d8]">
                                    <Image
                                        src="/images/member/G2.webp"
                                        alt="COP28 Dubai"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">India MUN at COP28 Dubai</h3>
                                    <p className="text-gray-700 text-sm">Ovais Sarmad, Former Deputy Executive Secretary,</p>
                                    <p className="text-gray-700 text-sm">United Nations Framework Convention on Climate Change</p>
                                    <p className="text-[#4686d8] text-sm">(UNFCCC)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </main>
    );
}