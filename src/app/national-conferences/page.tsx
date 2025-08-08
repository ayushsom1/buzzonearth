"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import Link from "next/link";
import { useTimelineScroll } from '@/hooks/useTimelineScroll';
import { useCarousel, carouselImages } from '@/hooks/useCarousel';
import { AwardsCarousel } from '@/components/AwardsCarousel';

// Animation variants for fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function NationalConferences() {
  const { timelineRef, timelinePointsRef } = useTimelineScroll();
  const { visibleImages, nextSlide, previousSlide, pauseAutoPlay, resumeAutoPlay } = useCarousel();

  return (
    <div className="flex flex-col">

      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-green-900">
          <iframe
            src="https://www.youtube.com/embed/yzH6JjqwiHQ?autoplay=1&mute=0&loop=1&playlist=yzH6JjqwiHQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            title="Climate Change Video"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            "CLIMATE CHANGE"
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1774d1] mb-2">
          Get READY to redefine IMPACT
        </h1>

        <p className="text-lg mb-12">
          Brace yourself for leadership like never before.
        </p>

        <p className="text-md mb-12">
          After an unforgettable 2024 edition, we are thrilled to announce that India MUN National Conference 2025 – Chapter 1 is on the horizon.
        </p>
      </section>

      {/* Global Force Section */}

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

      <section className="bg-white py-16">
        
                            {/* UN Logo */}
                            <div className="flex justify-center mb-12">
                                <div className="relative w-50 h-24">
                                    <Image
                                        src="/images/logos/top1.webp"
                                        alt="UN Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-xl text-[#1774d1] mb-4">
              The only Model UN that truly represents India on a global stage                        </h2>
            <p className="text-base md:text-md text-gray-700 max-w-7xl mx-auto">
              India’s first and largest MUN conference focused entirely on Climate Action and Biodiversity as the core themes . A challenging and competitive platform for
              students to debate and analyse some of the world’s most pressing climate problems. As delegates representing different countries and agencies, students gain
              practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Image
            src="/images/conference25/z2.webp"
            alt="Benefits of Participation"
            width={1200}
            height={600}
            className="object-cover rounded-lg"
          />
          </div>

          {/* Benefits Grid with Accordions */}

        </div>
      </section>

      <section>
        {/* Timeline Points */}
        <div className="flex flex-wrap justify-center gap-4 items-center text-xs pb-16">
          {[
            "Highly influential and effective Governing council",
            "Strong network of mentors and guides for students to unleash their best potential",
            "Certificates signed by UN dignitaries",
            "Network of Global Schools for Climate Action, Leadership and Innovation",
            "Focus on inculcating spirit of innovation, entrepreneurship, leadership and regeneration",
            "Exposure to essential life skills. Experiential learning on diverse topics",
            "The only MUN focused on Climate and Biodiversity as core themes",
            "Direct linkage with UNEP and UNFCCC.",
            "Unique opportunity to represent India at UN COP Events."
          ].map((text, index) => (
            <div key={index} className="flex items-center justify-center w-36 h-36 rounded-full bg-white border-10 border-[#9de3e6] p-4 text-center font-medium hover:border-[#b8d638] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              {text}
            </div>
          ))}
        </div>

      </section>

      {/* Key Highlights Section */}
      <section className="max-w-7xl mx-auto py-16 flex flex-col items-center px-4 justify-center">
        <h2 className="text-4xl font-bold text-[#1774d1] text-center py-8">
          Key Highlights
        </h2>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 justify-center">
          {/* Youth-Led Dialogues */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Youth-Led Dialogues</h3>
            <p className="text-gray-700 text-sm">
              Engage in thought-provoking discussions led by young leaders driving climate action globally.
            </p>
          </div>

          {/* Innovative Solutions Showcase */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions Showcase</h3>
            <p className="text-gray-700 text-sm">
              Witness groundbreaking initiatives and solutions addressing pressing climate challenges.
            </p>
          </div>

          {/* Global Networking */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Global Networking</h3>
            <p className="text-gray-700 text-sm ">
              Connect with like-minded individuals, experts, and organizations committed to a sustainable future
            </p>
          </div>

          {/* Inspiring Keynotes */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Inspiring Keynotes</h3>
            <p className="text-gray-700 text-sm">
              Gain insights from influential speakers shaping the discourse on climate change and environmental conservation
            </p>
          </div>

          {/* Interactive Workshops */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Interactive Workshops</h3>
            <p className="text-gray-700 text-sm">
              Participate in hands-on sessions focused on
              regenerative solutions, systems thinking,
              and policy writing, equipping yourself with
              actionable knowledge and skills.    </p>
          </div>

          {/* Youth Awards Ceremony */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Leadership Forums & Expert Panels</h3>
            <p className="text-gray-700 text-sm">
              Explore the intersection of youth, climate,
              innovation, and leadership through
              moderated panels featuring voices from the
              UN, think tanks, top universities, and startups
              working in climate tech and biodiversity.            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Resolution Presentation to
              High-Level Jury</h3>
            <p className="text-gray-700 text-sm">
              Final resolutions — drafted through days of research,
              negotiation, and debate — are formally presented to an
              esteemed jury of international diplomats, global leaders
              and sustainability experts — bridging youth-driven
              climate diplomacy and global policy leadership</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Youth Awards Ceremony</h3>
            <p className="text-gray-700 text-sm">
              Outstanding delegates, speakers, and innovators are recognized through prestigious Youth Awards presented during the closing ceremony. These awards celebrate excellence in diplomacy, innovation, climate action, and social impact — spotlighting India’s next generation of global changemakers.
            </p>
          </div>
        </div>


      </section>

      {/* Climate Action, Innovation, Leadership Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        {/* Three Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Climate Protest Image */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <Image
              src="/images/conference25/z3.webp"
              alt="Climate protest sign - If not now, when? There is no Planet B"
              width={400}
              height={256}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Innovation/Ideas Image */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/conference25/z4.webp"
              alt="Innovation and ideas - lightbulb concept"
              width={400}
              height={256}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Leadership/Speaking Image */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <Image
              src="/images/conference25/z5.webp"
              alt="Leadership podium and speaking platform"
              width={400}
              height={256}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Styled Text */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-7xl text-black tracking-tight leading-tight">
            CLIMATE <b>ACTION<span className="text-[#0066FF]">.</span> INNOVATION<span className="text-[#0066FF]">.</span>
            <br />
            LEADERSHIP</b> DEVELOPMENT<b><span className="text-[#0066FF]">.</span></b>
          </h2>
        </motion.div>
      </section>

      {/* Fourth Section - Mission */}
      <section className="bg-gradient-to-r py-16 from-[#000000] to-[#002e41]">
        <div className="container px-2 sm:px-4 lg:px-3 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="">
              <Image
                src="/images/conference25/z6.webp"
                alt="Our Mission Illustration"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pr-12">
              <p className="text-md text-white leading-relaxed">
                With over <b>600 million young people</b>, India is the youngest country in the world.
                Therefore, in the years to come, no country will produce more leaders than India. The
                climate crisis, which the IPCC [Intergovernmental Panel on Climate Change] says has
                intensified, spread and in some cases, caused irreversible damage – <b>will impact the
                youth and their future generations the most</b> — the stakes couldn’t be higher.
              </p><br />
              <p className="text-md text-white leading-relaxed">Global bodies have not been able to move the needle as yet.</p>
              <br />
              <p className="text-md text-white font-bold leading-relaxed">Every small step taken by millions of young Indians can create a ripple effect with global
                impact.</p>
              <br />
              <p className="text-md text-white font-bold leading-relaxed">You’re standing at the most powerful moment in history.</p>

              <br />
              <p className="text-md text-white leading-relaxed">🌱 This is your <b>moment</b>. This is your <b>movement</b>.
                <br />And it begins with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div
          className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1774d1] mb-8 text-center">
            Why Participate: Skills & Impact Beyond the Conference
          </h2>

          <div className="space-y-6">
            {/* Communication & Public Speaking */}
            <div>
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Communication & Public Speaking</h3>
                <p className="text-gray-700 text-sm">
                  Hone your articulation, persuasion, and debate skills — in real-time, energetic diplomatic simulations.
                </p>
              </div>
            </div>

            {/* Global Citizenship & Exposure */}
            <div className="flex items-start space-x-4">
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Global Citizenship & Exposure</h3>
                <p className="text-gray-700 text-sm">
                  Step into the shoes of world leaders and understand the complexity of global governance, cooperation, and conflict resolution.
                </p>
              </div>
            </div>

            {/* Leadership Development */}
            <div className="flex items-start space-x-4">
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Leadership Development</h3>
                <p className="text-gray-700 text-sm">
                  Sharpen decision-making, collaboration, and negotiation — preparing to lead teams, communities, and initiatives.
                </p>
              </div>
            </div>

            {/* Innovation Mindset */}
            <div className="flex items-start space-x-4">
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Innovation Mindset</h3>
                <p className="text-gray-700 text-sm">
                  Tackle the world's most urgent environmental problems with creative, systems-based thinking.
                </p>
              </div>
            </div>

            {/* Real Climate Action */}
            <div className="flex items-start space-x-4">
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Real Climate Action</h3>
                <p className="text-gray-700 text-sm">
                  Go beyond theory — committee resolutions are designed to be actionable, youth-led, and aligned with the UN Sustainable Development Goals and the Decade on Ecosystem Restoration.
                </p>
              </div>
            </div>

            {/* Social Impact & Collaboration */}
            <div className="flex items-start space-x-4">
              <div className="text-[#0066FF] text-xl mt-1">◆</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Social Impact & Collaboration</h3>
                <p className="text-gray-700 text-sm">
                  Meet changemakers from across India and beyond. Learn, collaborate, and launch ideas that contribute to real-world social and environmental transformation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


{/* Our Prominent Speakers Section */}
      <section className="py-16 px-6 md:px-8 lg:px-12 max-w-[90rem] mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Prominent Speakers</h1>
          <div className="w-24 h-2 bg-[#0066FF] mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Speakers Grid - 6 cards per row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* First Row - 6 Speakers */}
          {[
            {
              id: 'G3',
              name: 'Hon\'ble Mr. Suresh Prabhu',
              designation: ['Parliamentarian, Minister and Chancellor', 'Prime Minister\'s Sherpa for G20 Summit (2014-2015)'],
              affiliation: 'Government of India'
            },
            {
              id: 'G4', 
              name: 'Mr. Erik Solheim',
              designation: ['Norwegian Diplomat, Peace Negotiator', 'Former Executive Director, UNEP'],
              affiliation: 'UNEP'
            },
            {
              id: 'G5',
              name: 'Dr. Jagdish N. Seth',
              designation: ['Padma Bhushan Awardee 2020', 'Charles H. Kellstadt Professor'],
              affiliation: 'Emory University'
            },
            {
              id: 'G6',
              name: 'Dr. Shakila T. Shamsu',
              designation: ['Former OSD (New Education Policy)', 'Department of Higher Education'],
              affiliation: 'Government of India'
            },
            {
              id: 'M5',
              name: 'Mr. B.N Ramakrishnan',
              designation: ['Joint Director', 'ISRO'],
              affiliation: 'ISRO'
            },
            {
              id: 'M6',
              name: 'Mr. Rajendra Shende',
              designation: ['Former Director', 'UNEP'],
              affiliation: 'UNEP'
            }
          ].map(speaker => (
            <motion.div 
              key={speaker.id} 
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[200px] mx-auto w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.4
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17
                }
              }}
            >
              <motion.div 
                className="relative w-full pb-[120%]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/speakers/${speaker.id.toUpperCase()}.webp`}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-black leading-tight">{speaker.name}</h3>
                <div className="space-y-1">
                  {speaker.designation.slice(0, 2).map((line, index) => (
                    <p key={index} className="text-xs text-gray-600 leading-tight">
                      {line}
                    </p>
                  ))}
                  <p className="text-xs text-[#0066FF] font-medium">
                    ({speaker.affiliation})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 6 More Speakers */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {[
            {
              id: 'M7',
              name: 'Mr. Satya S. Tripathi',
              designation: ['Secretary-General', 'GLOBAL ALLIANCE FOR A SUSTAINABLE PLANET'],
              affiliation: 'GLOBAL ALLIANCE'
            },
            {
              id: 'M8',
              name: 'Smt. Anita Karwal',
              designation: ['Secretary, Department of School Education', 'MHRD'],
              affiliation: 'MHRD'
            },
            {
              id: 'M9',
              name: 'Mr. TIM CHRISTOPHERSEN',
              designation: ['Head, Nature for Climate Branch', 'UNEP'],
              affiliation: 'UNEP'
            },
            {
              id: 'M10',
              name: 'Dr. Biswajit Saha',
              designation: ['Director, Central Institute of Secondary', 'Education(CISCE), Ministry of Education'],
              affiliation: 'Government of India'
            },
            {
              id: 'M11',
              name: 'Mr. Abhilash Misra',
              designation: ['Board of Directors, IFS Social IAS Council of India', 'Chief Executive Officer'],
              affiliation: 'IAS ACADEMY'
            },
            {
              id: 'M12',
              name: 'Ms. Liza Goldberg',
              designation: ['Lead - Google Cloud for Classroom', 'Research Scientist'],
              affiliation: 'Google'
            }
          ].map(speaker => (
            <motion.div 
              key={speaker.id} 
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[200px] mx-auto w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.4
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17
                }
              }}
            >
              <motion.div 
                className="relative w-full pb-[120%]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/speakers/${speaker.id.toUpperCase()}.webp`}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-black leading-tight">{speaker.name}</h3>
                <div className="space-y-1">
                  {speaker.designation.slice(0, 2).map((line, index) => (
                    <p key={index} className="text-xs text-gray-600 leading-tight">
                      {line}
                    </p>
                  ))}
                  <p className="text-xs text-[#0066FF] font-medium">
                    ({speaker.affiliation})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      <section className="relative p-10 flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#002e41] to-black text-white px-4 ">
        <div className="container mx-auto text-center space-y-4">
          <h2 className="py-10 text-[#3B82F6] text-2xl md:text-3xl lg:text-4xl font-bold  mx-auto leading-tight mb-10">
            This is not just a conference; it's an invitation to be part of something bigger.
          </h2>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              <b><span>India</span></b> Model <b><span>United Nations</span></b>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
              A forum for future sustainability leaders
            </p>
          </div>

          <div className="mt-12">
            <img
              src="/images/home_page/h2.webp"
              alt="UN Logo"
              className="w-32 h-32 mx-auto opacity-80"
            />
          </div>

        </div>
      </section>

      {/* Section 6: CTA for currently open programs */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Currently Open Programs</h2>
            <p className="text-xl text-gray-600">Join our transformative programs and become part of the change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Youth Leadership Program Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">

              <div className="p-8 grid grid-cols-2 gap-4 items-center">
                <div>

                  <Image
                    src="/images/programs/S7.webp"
                    alt="Youth Leadership Program Icon"
                    width={200}
                    height={200}
                    className="transform hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Youth Leadership Program</h3>
                  <p className="text-gray-600 mb-6">An immersive leadership development program designed to empower the next generation of change-makers.</p>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Young Forest Ambassador Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">

              <div className="p-8 grid grid-cols-2 gap-4 items-center">
                <div>
                  <Image
                    src="/images/programs/S6.webp"
                    alt="Young Forest Ambassador Icon"
                    width={200}
                    height={200}
                    className="transform hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Young Forest Ambassador</h3>
                  <p className="text-gray-600 mb-6">Connect with UN programs on ecosystem restoration and become a voice for our forests.</p>

                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
