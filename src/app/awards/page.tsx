
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Users, Trophy, Star, CheckCircle } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

export default function GlobalSchoolsAwards() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/5"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-6"
                variants={fadeInUp}
              >
                <Trophy className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-800 font-semibold">Global Recognition</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                variants={fadeInUp}
              >
                <span className="text-amber-600">Recognizing</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Visionary Institutions
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Driving Educational <br /> Transformation
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 mb-10"
                variants={fadeInUp}
              >
                A Global Distinction for Future-Ready Schools
              </motion.p>


            </motion.div>

            {/* Right Content - Award Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/images/awards/main-trophy.webp"
                  alt="Global Schools Awards Trophy"
                  width={400}
                  height={500}
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
                The Global Schools Awards
              </h2>
              <div className="max-w-5xl mx-auto">
                <p className="text-lg text-left text-gray-300 mb-4">
                  are awarded to institutions making a profound and lasting impact across the key pillars of 21st-century education — including
                  Educational Leadership & Innovation, Climate Action & Sustainability, SDG Integration, Youth Empowerment, and Community
                  Engagement.
                </p>
                <p className="text-lg text-left text-gray-300 mb-4">
                  We honor extraordinary institutions that are not only educating students — but transforming lives, communities, and the world.
                </p>
                <p className="text-lg text-left text-gray-300 mb-2">
                  These are the schools rewriting the narrative of future education:
                </p>
                <p className="text-lg text-left text-blue-300 font-medium">
                  Where climate action meets leadership | Where diplomacy meets innovation | Where students rise as global leaders, innovators
                  and changemakers.
                </p>
              </div>

              <Image
                src="/images/awards/institutions.webp"
                alt="Global Schools Awards for Institutions"
                width={80}
                height={60}
                className="mx-auto mt-8 rounded-xl shadow-2xl"
              />
            </motion.div>

            </motion.div>

      </section>

      {/* Awards Categories Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          {/* Institutional Awards */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                The Global Schools Awards
              </h2>
              <p className="text-lg text-gray-900 mb-8">Recognizing Visionary School Leaders Building the Future of Education</p>
          
            
            
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "MOST TRANSFORMATIVE SCHOOL OF THE YEAR",
                  description: "Awarded to the institution demonstrating outstanding leadership through sustainability, innovation, inclusion, and global education. A beacon of 21st-century learning and leadership.",
                  image: "/images/awards/award-bg-1.webp",
                  gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "MOST INNOVATIVE SCHOOL PROGRAM",
                  description: "Recognizes a school that has redefined how education is delivered — through innovation integration, entrepreneurship programs, design thinking, or blended learning models that prepare students for tomorrow's world.",
                  image: "/images/awards/award-bg-2.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "EXCELLENCE IN CLIMATE ACTION & REGENERATION",
                  description: "Awarded to the school that has made exceptional efforts in environmental stewardship, ecosystem restoration, and integrating climate literacy into their curriculum and campus operations.",
                  image: "/images/awards/award-bg-3.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "GLOBAL CITIZENSHIP & SDG INTEGRATION AWARD",
                  description: "Honoring institutions that actively align their curriculum, student activities, and school culture with the UN Sustainable Development Goals — creating changemakers for global good.",
                  image: "/images/awards/award-bg-4.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "LEADERSHIP & YOUTH EMPOWERMENT SCHOOL OF THE YEAR",
                  description: "Recognizes schools that nurture student leadership, voice, and agency through clubs, summits, innovation labs, and global forums — making students the center of purpose-driven learning.",
                  image: "/images/awards/award-bg-5.webp",
                  gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)",
                  icon: "/images/awards/leadership-icon.webp"
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
                  className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 relative"
                  style={{
                    width: '250px',
                    height: '460px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full" style={{ background: award.gradient }}></div>
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 0.3 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 backdrop-blur-md flex items-center justify-center mb-6 relative shadow-lg border border-yellow-300/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="text-4xl">🏆</div>
                    </motion.div>

                    {/* Global Schools Award Badge */}
                    <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-yellow-300/30">
                      <p className="text-yellow-200 text-xs font-semibold tracking-wide">GLOBAL SCHOOLS AWARD</p>
                    </div>

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center mb-4 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Divider line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full mb-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-8 leading-relaxed text-sm flex-grow">{award.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "MOST TRANSFORMATIVE SCHOOL OF THE YEAR",
                  description: "Awarded to the institution demonstrating outstanding leadership through sustainability, innovation, inclusion, and global education. A beacon of 21st-century learning and leadership.",
                  image: "/images/awards/award-bg-1.webp",
                  gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "MOST INNOVATIVE SCHOOL PROGRAM",
                  description: "Recognizes a school that has redefined how education is delivered — through innovation integration, entrepreneurship programs, design thinking, or blended learning models that prepare students for tomorrow's world.",
                  image: "/images/awards/award-bg-2.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "EXCELLENCE IN CLIMATE ACTION & REGENERATION",
                  description: "Awarded to the school that has made exceptional efforts in environmental stewardship, ecosystem restoration, and integrating climate literacy into their curriculum and campus operations.",
                  image: "/images/awards/award-bg-3.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "GLOBAL CITIZENSHIP & SDG INTEGRATION AWARD",
                  description: "Honoring institutions that actively align their curriculum, student activities, and school culture with the UN Sustainable Development Goals — creating changemakers for global good.",
                  image: "/images/awards/award-bg-4.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "LEADERSHIP & YOUTH EMPOWERMENT SCHOOL OF THE YEAR",
                  description: "Recognizes schools that nurture student leadership, voice, and agency through clubs, summits, innovation labs, and global forums — making students the center of purpose-driven learning.",
                  image: "/images/awards/award-bg-5.webp",
                  gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)",
                  icon: "/images/awards/leadership-icon.webp"
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
                  className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 relative"
                  style={{
                    width: '250px',
                    height: '460px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full" style={{ background: award.gradient }}></div>
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 0.3 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 backdrop-blur-md flex items-center justify-center mb-6 relative shadow-lg border border-yellow-300/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="text-4xl">🏆</div>
                    </motion.div>

                    {/* Global Schools Award Badge */}
                    <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-yellow-300/30">
                      <p className="text-yellow-200 text-xs font-semibold tracking-wide">GLOBAL SCHOOLS AWARD</p>
                    </div>

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center mb-4 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Divider line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full mb-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-8 leading-relaxed text-sm flex-grow">{award.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Principal & Leadership Awards */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">
                Global Schools Principal & Leadership Awards
              </h2>
              <p className="text-lg text-gray-300">Recognizing Visionary School Leaders Building the Future of Education</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "Principal of the Year",
                  description: "Outstanding educational leadership and vision",
                  gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(185, 28, 28, 0.8) 100%)"
                },
                {
                  title: "Educational Innovation Leader", 
                  description: "Pioneering innovative teaching methodologies",
                  gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(190, 24, 93, 0.8) 100%)"
                },
                {
                  title: "Sustainability Champion",
                  description: "Leading environmental and sustainable practices",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)"
                },
                {
                  title: "Community Impact Leader",
                  description: "Exceptional community engagement and partnerships",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)"
                },
                {
                  title: "Digital Transformation Leader",
                  description: "Excellence in digital education integration",
                  gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)"
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(239, 68, 68, 0.4)' }}
                  className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 relative"
                  style={{
                    width: '280px',
                    height: '400px',
                  }}
                >
                  {/* Background with gradient */}
                  <div className="absolute inset-0 w-full h-full z-0" style={{ background: award.gradient }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-200/10 via-transparent to-pink-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col items-center h-full relative z-20 justify-center">
                    {/* Leadership icon */}
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Award title */}
                    <h3 className="text-xl font-bold text-white text-center mb-4 drop-shadow-md">{award.title}</h3>
                    
                    {/* Description */}
                    <p className="text-white/90 text-center text-sm mb-6">{award.description}</p>

                    {/* Apply button */}
                    <Button
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
                    >
                      Nominate Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Educator Awards - Similar structure */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                Global Schools Educator Awards
              </h2>
              <p className="text-lg text-gray-300">Honoring Educators Shaping the Minds That Will Shape the World</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                "Outstanding Teaching Excellence",
                "Innovation in Pedagogy",
                "Climate Education Champion", 
                "Student Mentorship Excellence",
                "Digital Learning Pioneer"
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(34, 197, 94, 0.4)' }}
                  className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 relative"
                  style={{
                    width: '280px',
                    height: '350px',
                    background: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/10 via-transparent to-emerald-200/10"></div>
                  
                  <div className="p-6 flex flex-col items-center h-full relative z-20 justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white text-center mb-4 drop-shadow-md">{award}</h3>
                    <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Student Excellence Awards - Similar structure */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
                Global Schools Student Excellence Awards
              </h2>
              <p className="text-lg text-gray-300">Recognizing Young Leaders, Ambassadors, Innovators & Changemakers</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "Student Changemaker Award",
                  description: "For leading impactful initiatives in sustainability or social transformation"
                },
                {
                  title: "Young Diplomat Award", 
                  description: "Excellence in MUNs, public speaking, and youth diplomacy"
                },
                {
                  title: "Climate Action Leader Award",
                  description: "Leadership in environmental action and restoration projects"
                },
                {
                  title: "Innovation & Entrepreneurship Award",
                  description: "Developing solutions addressing SDG challenges"
                },
                {
                  title: "Outstanding MUN Participation Award",
                  description: "Excellence across India MUN platforms and leadership summits"
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(168, 85, 247, 0.4)' }}
                  className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 relative"
                  style={{
                    width: '280px',
                    height: '420px',
                    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-indigo-200/10"></div>
                  
                  <div className="p-6 flex flex-col items-center h-full relative z-20 justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Trophy className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white text-center mb-3 drop-shadow-md leading-tight">{award.title}</h3>
                    <p className="text-white/90 text-center text-sm mb-4">{award.description}</p>
                    <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Awards Timeline
            </h2>
            <p className="text-lg text-gray-600">Key Dates to Watch</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                {
                  date: "October 2025",
                  title: "Nominations Open",
                  description: "Application portal opens for all award categories"
                },
                {
                  date: "November 2025", 
                  title: "Jury Review & Finalists Announced",
                  description: "Expert panel reviews submissions and announces finalists"
                },
                {
                  date: "December 2025",
                  title: "Winners Celebrated",
                  description: "Awards ceremony at the Global Schools Summit & Awards Gala"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="font-bold text-blue-600 text-lg mb-2">{item.date}</h3>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Mark of <span className="text-amber-600">Global Impact</span>
            </h2>
            <p className="text-lg text-gray-600">Why Winning Matters</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Global Recognition",
                description: "Position your institution among India's most transformative schools"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Validation", 
                description: "Recognition by UN-aligned experts and international dignitaries"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Media Spotlight",
                description: "Featured across prestigious platforms and influential networks"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Summit Recognition",
                description: "Celebrated at the Global Schools Summit & Awards Gala"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Directory Listing",
                description: "Showcased in the India MUN Global Schools Directory"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Annual Impact Report",
                description: "Featured stories in India MUN's Annual Impact Report"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your School. Your Impact. On the World Stage.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              The Global Schools Awards aren't just accolades — they are symbols of bold vision, deep commitment, and real-world change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Become a Global Member School
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg">
                Download Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}