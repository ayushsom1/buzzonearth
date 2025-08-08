
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
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
>
  {/* Background Pattern - UN Globe Style */}
  <div className="absolute inset-0 z-0">
    {/* Background Image */}
    <Image
      src="/images/ranking/r2.webp"
      alt="Conference Background"
      fill
      className="object-cover object-center"
      priority
      sizes="100vw"
    /> 
  </div>

  {/* Content */}
  <div className="container px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-5xl mx-auto"
    >
      <motion.h2
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 text-white"
      >
        Global Schools Ranking
      </motion.h2>

      {/* Date */}
      <motion.div
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20">
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl font-light">
            <Calendar className="w-6 h-6 md:w-8 md:h-8" />
            <span>2025</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>    

      <section className="max-w-7xl mx-auto py-16 px-4">
              <motion.div
  className="relative py-12 p-4 md:p-12 rounded-3xl overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/ranking/r2.webp"
      alt="Background"
      fill
      className="object-cover rounded-3xl"
      priority
    />
    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/80 via-[#002e41]/80 to-black/80 rounded-3xl" />
  </div>
  <h2 className="text-3xl md:text-4xl font-bold text-[#1774d1] mb-8 text-center">
    The Global Schools Awards
  </h2>
  <div className="space-y-6">
    <div className="flex items-start space-x-4 text-justify">
      <div>
        <p className="text-[#1774d1] text-sm">
          are awarded to <span className="text-white font-bold">making a profound and lasting impact across the key pillars of 21st-century education —</span> including Educational Leadership & Innovation, Climate Action & Sustainability, SDG Integration, Youth Empowerment, and Community Engagement.
        </p>
        <p className="text-white text-sm py-6">
          We honor extraordinary institutions that are not only educating students — <b>but transforming lives, communities, and the world.</b>
        </p>
        <p className="text-white text-sm">
          <span className="text-[#1774d1] font-bold">These are the schools rewriting the narrative of future education:<br/></span>
          Where <b>climate action</b> meets <b>leadership</b> | Where <b>diplomacy</b> meets <b>innovation</b> | Where <b>students rise as global leaders, innovators and changemakers.</b>
        </p>
        <Image
                src="/images/prizes/p4.webp"
                alt="Global Schools Awards for Institutions"
                width={100}
                height={100}
                className="mx-auto mt-8 rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </div>
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

            <h2 className="text-3xl md:text-4xl font-bold text-[#00737b] mb-2">
                The Global Schools Awards
              </h2>
              <p className="text-lg text-[#1774d1] mb-8">A Global Distinction for Future-Ready Schools</p>
          
            
            
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "MOST TRANSFORMATIVE SCHOOL OF THE YEAR",
                  description: "Awarded to the institution demonstrating outstanding leadership across sustainability, innovation, inclusion, and global education. A beacon of 21st-century learning and leadership.",
                  image: "/images/prizes/p6.webp",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "EXCELLENCE IN EDUCATIONAL INNOVATION",
                  description: "Recognizes an institution redefining education — through Innovation integration, entrepreneurship programs, design thinking, or blended learning models that prepare students for tomorrow’s world.",
                  image: "/images/prizes/p7.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "EXCELLENCE IN CLIMATE ACTION & REGENERATION",
                  description: "Awarded to the school that has made exceptional efforts in environmental stewardship, ecosystem restoration, and integrating climate literacy into their curriculum and campus operations.",
                  image: "/images/prizes/p6.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "GLOBAL CITIZENSHIP & SDG INTEGRATION AWARD",
                  description: "Honoring institutions that actively align their curriculum, student activities, and school culture with the UN Sustainable Development Goals — creating changemakers for global good.",
                  image: "/images/prizes/p7.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "LEADERSHIP & YOUTH EMPOWERMENT SCHOOL OF THE YEAR",
                  description: "Recognizes schools that nurture student leadership, voice, and agency through clubs, summits, innovation labs, and global forums — making students the center of purpose-driven learning.",
                  image: "/images/prizes/p6.webp",
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
                    
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 1 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="py-6 px-4 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-300/30 to-black backdrop-blur-md flex items-center justify-center relative shadow-lg border border-yellow-300/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-15 h-15 relative">
  <Image
    src="/images/prizes/p5.webp" // Replace with your logo path
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
                    </motion.div>

                    {/* Award rep */}
                    <h3 className="text-white text-xs mt-2 font-semibold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">GLOBAL SCHOOLS</h3>
                    <h1 className="text-[#FFD34F] text-4xl mt-[-3] font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">AWARD</h1>

                    

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center py-2 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Global Schools Award Badge */}
                    <div className="bg-gradient-to-r from-[#b68500] via-[#fde47f] to-[#b68500] backdrop-blur-sm px-2 py-1/2 rounded-full mt-4 border-[2.5px] border-[#fde47f]">
                      <p className="text-black text-[10px] font-semibold tracking-wide">Global Schools Summit | Dec,25</p>
                    </div>

                    {/* Divider line */}
                    <div className="w-30 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full m-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-2 leading-relaxed text-xs flex-grow">{award.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "DIPLOMACY & GLOBAL DIALOGUE EXCELLENCE AWARD",
                  description: "Awarded to schools advancing global understanding through MUNs, exchanges, policy dialogues, and youth diplomacy — instilling values of peace, collaboration, and intercultural learning.",
                  image: "/images/prizes/p7.webp",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "CAMPUS SUSTAINABILITY INITIATIVE",
                  description: "Celebrates a unique, student-led or school-driven project that solved a local environmental or social issue through creativity, research, and practical action.",
                  image: "/images/prizes/p6.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "EXCELLENCE IN COMMUNITY IMPACT & SOCIAL EQUITY",
                  description: "Recognizes schools that empower local communities through outreach programs, rural development efforts, and equity-based education initiatives — demonstrating grassroots leadership.",
                  image: "/images/prizes/p7.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "CURRICULAR INTEGRATION- GLOBAL LEARNING & PURPOSE",
                  description: "For schools that embed values like sustainability, ethics, systems thinking, and real-world problem solving into core academics — going beyond textbooks to shape responsible citizens.",
                  image: "/images/prizes/p6.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "India MUNx HOST SCHOOL OF THE YEAR AWARD",
                  description: "Presented to the school that delivered the most impactful, inclusive, and well-executed India MUNx or affiliated student summit — becoming a national model of youth engagement and event leadership.",
                  image: "/images/prizes/p7.webp",
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
                    height: '462px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 1 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="py-6 px-4 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-300/30 to-black backdrop-blur-md flex items-center justify-center relative shadow-lg border border-yellow-300/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-15 h-15 relative">
  <Image
    src="/images/prizes/p5.webp" // Replace with your logo path
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
                    </motion.div>

                    {/* Award rep */}
                    <h3 className="text-white text-xs mt-2 font-semibold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">GLOBAL SCHOOLS</h3>
                    <h1 className="text-[#FFD34F] text-4xl mt-[-3] font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">AWARD</h1>

                    

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center py-2 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Global Schools Award Badge */}
                    <div className="bg-gradient-to-r from-[#b68500] via-[#fde47f] to-[#b68500] backdrop-blur-sm px-2 py-1/2 rounded-full mt-4 border-[2.5px] border-[#fde47f]">
                      <p className="text-black text-[10px] font-semibold tracking-wide">Global Schools Summit | Dec,25</p>
                    </div>

                    {/* Divider line */}
                    <div className="w-30 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full m-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-2 leading-relaxed text-xs flex-grow">{award.description}</p>

                    
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#860503] mb-4">
                Global Schools Principal & Leadership Awards
              </h2>
              <p className="text-lg text-gray-500">Recognizing Visionary School Leaders Building the Future of Education</p>
            </motion.div>
            
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "BEST PRINCIPAL IN HOLISTIC STUDENT DEVELOPMENT",
                  description: "For exemplary leadership in guiding schools toward innovation, global alignment, and student empowerment.",
                  image: "/images/prizes/p8.webp",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "UN SDG PIONEER IN IMPACTFUL EDUCATION AWARD",
                  description: "Honors school leaders who are at the forefront of aligning education with the United Nations Sustainable Development Goals (SDGs).",
                  image: "/images/prizes/p8.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "LEGACY IN EDUCATIONAL IMPACT AWARD",
                  description: "Recognizing leadership behind programs creating measurable change in communities and the environment.",
                  image: "/images/prizes/p8.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "ENTREPRENEURSHIP IN EDUCATION EXCELLENCE AWARD",
                  description: "Awarded to school leaders championing entrepreneurial ecosystems and real-world ventures within the school community.",
                  image: "/images/prizes/p8.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "PIONEERING INNOVATION IN SCHOOL LEADERSHIP",
                  description: "For embracing new learning models, technology, and student-led initiatives at a school-wide level.",
                  image: "/images/prizes/p8.webp",
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
                    height: '435px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 1 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="py-6 px-4 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-300/30 to-black backdrop-blur-md flex items-center justify-center relative shadow-lg border border-yellow-300/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-15 h-15 relative">
  <Image
    src="/images/prizes/p5.webp" // Replace with your logo path
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
                    </motion.div>

                    {/* Award rep */}
                    <h3 className="text-white text-xs mt-2 font-semibold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">GLOBAL SCHOOLS</h3>
                    <h3 className="text-white text-xs font-thin tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">PRINCIPALS</h3>
                    <h1 className="text-[#FFD34F] text-4xl mt-[-3] font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">AWARD</h1>

                    

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center py-2 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Global Schools Award Badge */}
                    <div className="bg-gradient-to-r from-[#b68500] via-[#fde47f] to-[#b68500] backdrop-blur-sm px-2 py-1/2 rounded-full mt-2 border-[2.5px] border-[#fde47f]">
                      <p className="text-black text-[10px] font-semibold tracking-wide">Global Schools Summit | Dec,25</p>
                    </div>

                    {/* Divider line */}
                    <div className="w-30 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full m-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-2 leading-relaxed text-xs flex-grow">{award.description}</p>

                    
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Global Schools Educator Awards
              </h2>
              <p className="text-lg text-gray-500">Honoring Educators Shaping the Minds That Will Shape the World</p>
            </motion.div>
            
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "ECO- LEADERSHIP EDUCATOR AWARD",
                  description: "For educators championing climate consciousness, sustainability, and nature-based learning.",
                  image: "/images/prizes/p9.webp",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "INNOVATION IN TEACHING AWARD",
                  description: "Awarded to teachers implementing creative, interdisciplinary, or tech-powered pedagogy.",
                  image: "/images/prizes/p9.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "LEADERSHIP FOR IMPACT AWARD",
                  description: "For teachers leading purpose-driven learning and fostering leadership in their classrooms.",
                  image: "/images/prizes/p9.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "BEST ACADEMIC COORDINATOR IMUN",
                  description: "Recognizing educators mentoring high-impact student clubs, projects, or changemaker campaigns.",
                  image: "/images/prizes/p9.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "GLOBAL CURRICULUM CHAMPION AWARD",
                  description: "For seamlessly integrating SDGs, global issues, and intercultural understanding into the curriculum.",
                  image: "/images/prizes/p9.webp",
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
                    height: '400px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 1 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="py-6 px-4 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-300/30 to-black backdrop-blur-md flex items-center justify-center relative shadow-lg border border-yellow-300/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-15 h-15 relative">
  <Image
    src="/images/prizes/p5.webp" // Replace with your logo path
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
                    </motion.div>

                    {/* Award rep */}
                    <h3 className="text-white text-xs mt-2 font-semibold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">GLOBAL SCHOOLS</h3>
                    <h3 className="text-white text-xs font-thin tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">EDUCATORS</h3>
                    <h1 className="text-[#FFD34F] text-4xl mt-[-3] font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">AWARD</h1>

                    

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center py-2 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Global Schools Award Badge */}
                    <div className="bg-gradient-to-r from-[#b68500] via-[#fde47f] to-[#b68500] backdrop-blur-sm px-2 py-1/2 rounded-full mt-4 border-[2.5px] border-[#fde47f]">
                      <p className="text-black text-[10px] font-semibold tracking-wide">Global Schools Summit | Dec,25</p>
                    </div>

                    {/* Divider line */}
                    <div className="w-30 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full m-4"></div>

                    {/* Award description */}
                    <p className="text-white/90 text-center mb-2 leading-relaxed text-xs flex-grow">{award.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* STUDENT Awards - Similar structure */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Global Schools Student Excellence Awards
              </h2>
              <p className="text-lg text-gray-500">Recognizing Young Leaders, Ambassadors Innovators & Changemakers</p>
            </motion.div>
            
            <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 justify-items-center">
              {[
                {
                  title: "STUDENT OF THE YEAR 2025",
                  description: "Awarded to a student leading bold initiatives that create real-world impact in sustainability, innovation, or social change.",
                  image: "/images/prizes/p10.webp",
                  icon: "/images/awards/trophy-icon.webp"
                },
                {
                  title: "BEST DELEGATE INDIA MUN 2025",
                  description: "Awarded to the best delegate of the year for excellence in MUNs, public speaking, and cross-border youth diplomacy.",
                  image: "/images/prizes/p10.webp", 
                  gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(101, 163, 13, 0.8) 100%)",
                  icon: "/images/awards/innovation-icon.webp"
                },
                {
                  title: "BEST CAMPUS AMBASSADOR AWARD",
                  description: "Outstanding leadership in advancing Mission Prakriti through impactful environmental action, restoration drives, and student-led campaigns.",
                  image: "/images/prizes/p10.webp",
                  gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)",
                  icon: "/images/awards/climate-icon.webp"
                },
                {
                  title: "STUDENT INNOVATOR OF THE YEAR",
                  description: "Awarded to student for developing a tech, design, or entrepreneurial solution addressing global problems & SDG challenges.",
                  image: "/images/prizes/p10.webp",
                  gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 88, 12, 0.8) 100%)",
                  icon: "/images/awards/global-icon.webp"
                },
                {
                  title: "YOUTH LEADERSHIP AWARD",
                  description: "For outstanding participation and leadership across India MUN platforms like YLP, Hackathons, and leadership summits.",
                  image: "/images/prizes/p10.webp",
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
                    height: '430px',
                  }}
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      priority
                      style={{ objectFit: 'cover', opacity: 1 }}
                      className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    {/* Sparkle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-amber-200/10"></div>
                  </div>

                  {/* Card content */}
                  <div className="py-6 px-4 flex flex-col items-center h-full relative z-20">
                    {/* Award icon */}
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-300/30 to-black backdrop-blur-md flex items-center justify-center relative shadow-lg border border-yellow-300/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-15 h-15 relative">
  <Image
    src="/images/prizes/p5.webp" // Replace with your logo path
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
                    </motion.div>

                    {/* Award rep */}
                    <h3 className="text-white text-xs mt-2 font-semibold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">GLOBAL SCHOOLS</h3>
                    <h3 className="text-white text-xs font-thin tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">STUDENTS</h3>
                    <h1 className="text-[#FFD34F] text-4xl mt-[-3] font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">AWARD</h1>

                    

                    {/* Award title */}
                    <h3 className="text-lg font-bold text-white text-center py-4 drop-shadow-md leading-tight">{award.title}</h3>

                    {/* Global Schools Award Badge */}
                    <div className="bg-gradient-to-r from-[#b68500] via-[#fde47f] to-[#b68500] backdrop-blur-sm px-2 py-1/2 rounded-full mt-4 border-[2.5px] border-[#fde47f]">
                      <p className="text-black text-[10px] font-semibold tracking-wide">Global Schools Summit | Dec,25</p>
                    </div>

                    {/* Divider line */}
                    <div className="w-30 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full m-4"></div>

                    {/* Award description */}
                    <p className="text-black/50 text-center mb-2 leading-relaxed text-xs flex-grow">{award.description}</p>

                    
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Educator Awards - Similar structure */}
          {/* <motion.div 
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
          </motion.div> */}

          {/* Student Excellence Awards - Similar structure */}
          {/* <motion.div 
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
          </motion.div> */}
        </div>
      </section>



<section className="w-full py-5 md:mb-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-2xl lg:rounded-3xl border-2 border-gray-200 p-4 sm:p-6 bg-white h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] flex flex-col justify-center">
              {/* Content wrapper */}
              <div className="mb-4 text-justify">
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Awarded annually at the Global Schools Summit & Awards Gala, these prizes spotlight institutions shaping the next era of education — aligned with the UN Sustainable Development Goals, UN Decade on ecosystem restoration, and 21st-century learning.
                </p>
                <p className="text-sm font-bold sm:text-base text-gray-700">
                  Winning a Global Schools Awards places your institution among India's most transformative schools and signifies your school's commitment to excellence, innovation, and shaping the future of education.
                </p>
              </div>

              {/* Logo and Quote Section */}
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 lg:gap-6 items-center">
                {/* Award Logo with Hover Effect */}
                <motion.div 
                  className="flex justify-center md:justify-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 sm:w-18 sm:h-18 md:w-24 sm:h-24 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full bg-gradient-to-br from-black to-teal-900 flex items-center justify-center text-white font-bold text-center text-xs sm:text-sm p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <Image
                src="/images/prizes/p4.webp"
                alt="Global Schools Awards for Institutions"
                width={100}
                height={100}
                className="mx-auto rounded-xl shadow-2xl"
        />
                  </div>
                </motion.div>

                {/* Quote Section */}
                <div className="text-center md:text-left">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl mb-2 leading-tight">
                    A Symbol of bold <span className="font-bold">Vision</span><span className="text-[#1b66cf] font-extrabold">.</span>
                  </h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-tight">
                    A Commitment to <span className="font-bold">Transformation</span><span className="text-[#1b66cf] font-extrabold">.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Background Image with Overlay */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] rounded-lg overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/prizes/p13.webp"
                alt="Global collaboration - hands protecting Earth"
                fill
                className="object-cover"
              />
              
              {/* Animated Elements */}
              <div className="absolute inset-0">
                {/* SDG Wheel - Bottom Left */}
                <motion.div 
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60"


                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Image
                    src="/images/prizes/p14.webp" // Replace with your SDG logo image path
                    alt="SDG Wheel"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Overlay Text */}
              <div className="absolute top-8 sm:top-12 lg:top-16 left-0 right-0 flex justify-center px-4 sm:px-6 z-10">
                <div className="text-white text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mr-1">
  A Mark of
</span>
<span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Global Impact
</span>

                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="w-full py-5 md:mb-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 min-h-[430px] lg:h-96">
                  {/* Left side - Image with overlay text */}
                  <div className="w-full lg:w-1/2">
            <div className="relative h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] rounded-lg overflow-hidden">
                          <Image
                              src="/images/prizes/p12.webp"
                              alt="Global collaboration - hands protecting Earth"
                              fill
                              className="object-cover"
                          />
                          {/* Overlay text at bottom */}
                          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
  <div className="bg-black/50 text-white p-4 sm:p-6 rounded-xl shadow-lg max-w-3xl text-center">
                                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">Global Recognition &<br/> Media Visibility</h1>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
      
                  {/* Right side - Quote Content */}
                  <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-2xl lg:rounded-3xl border-2 border-gray-200 p-4 sm:p-6 bg-white h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] flex flex-col justify-center">
              {/* Content wrapper */}
              <div className="text-black space-y-4">
                          
                            <h3 className="text-xl font-bold mb-6">
                                Be Seen, Celebrated, and Remembered on the World Stage
                            </h3>

                            <p className="text-sm mb-6 text-justify">
                                Winners of the Global Schools Prizes are spotlighted across prestigious platforms and influential networks:
                            </p>

                            <div className="space-y-3">
                                
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">Spotlight at the Global Schools Summit</p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Featured in India MUN’s National & Global Media Campaigns
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">Covered in the BoE Impact Report & UN-aligned publications</p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Recognized on international forums alongside education leaders
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Showcased in the India MUN Global Schools Directory
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full mt-1.5 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            Highlighted across our high-reach social media channels and newsletters
                                        </p>
                                    </div>
                                </div>
                            </div>

                            

                            <p className="text-md font-bold mb-6">
                                Winning a Global Schools Prize amplifies your institution’s story — showcasing your leadership to parents, partners, and policymakers.
                            </p>
                        </div>            
            </div>
          </div>
              </div>
          </div>
          
      </section>

     

<section className="py-24 m-20 bg-gradient-to-br from-[#000000] to-[#002e41] text-white rounded-2xl overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-9xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Column: Bold Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Winning a<span className="text-[#5ce1e6]"> Global Schools Award </span>
          positions your institution as:
        </h2>
        
      </div>

      {/* Right Column: Checkmarked Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
  {/* Point 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/prizes/p16.webp" // Replace with your image
      alt="Leadership Icon"
      className="w-12 h-12 mb-4"
    />
    <p className="text-base lg:text-lg">
      A  recognized leader in education innovation, sustainability, and SDG integration.
    </p>
  </div>

  {/* Point 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/prizes/p16.webp" // Replace with your image
      alt="Dialogue Icon"
      className="w-12 h-12 mb-4"
    />
    <p className="text-base lg:text-lg">
      A trusted contributor to the global dialogue on youth, climate, and leadership.
    </p>
  </div>

  {/* Point 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/prizes/p16.webp" // Replace with your image
      alt="Transformation Icon"
      className="w-12 h-12 mb-4"
    />
    <p className="text-base lg:text-lg">
      A flagbearer for educational transformation in your city, state, and country.
    </p>
  </div>
</div>

    </div>
  </div>
</section>

<section className="relative py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <div className="w-full">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1774d1] mb-4">
                        A Globally Respected Evaluation Process
                    </h2>
                    <h3 className="text-base md:text-lg font-bold  mb-12">
                        Upholding the Highest Standards of Credibility and Impact.
                    </h3>
                </div>

                {/* Main Description */}
                <div className="mb-6">
                    <p className="text-sm text-justify leading-relaxed mb-4">
                        
Every nomination is reviewed through a rigorous, transparent, and merit-based evaluation process.
                    </p>
                    
                  
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                    <ul className=" space-y-1 text-sm font-bold">
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Impact-driven criteria that assess real-world transformation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Emphasis on educational excellence, innovation, sustainability, leadership, and global alignment</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Recognition is awarded solely on the basis of merit</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Complete data confidentiality and ethical standards assured</span>
                        </li>
                        
                    </ul>
                </div>

                {/* Closing Statement */}
                <div>
                    <p className=" text-md text-justify font-bold leading-relaxed">
                        This process ensures that the Global Schools Awards remain among the most respected and aspirational honors in education today.
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            
        
        </div>
    </div>
</section>

<section className="relative bg-gradient-to-br from-[#000000] to-[#002e41] py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <div className="w-full">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1774d1] mb-4">
                        The Grand Jury Panel
                    </h2>
                    <h3 className="text-base md:text-lg font-bold text-white mb-12">
                        An Esteemed Assembly of Global Education & Sustainability Leaders.
                    </h3>
                </div>

                {/* Main Description */}
                <div className="mb-6">
                    <p className="text-white text-sm text-justify leading-relaxed mb-4">
                        The <b>Global Schools Awards</b> are adjudicated by a distinguished Grand Jury comprising:
                    </p>
                    
                  
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                    <ul className="text-white space-y-1 text-md font-bold">
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Senior representatives from the United Nations and global NGOs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Education policymakers and advisors to national and state governments</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Vice Chancellors, Directors, and senior faculty from India’s leading universities and IITs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">🔹</span>
                            <span>Global thought leaders in climate action, sustainability, educational leadership, and innovation </span>
                        </li>
                        
                    </ul>
                </div>

                {/* Closing Statement */}
                <div>
                    <p className="text-gray-300 text-sm text-justify leading-relaxed">
                        "This esteemed panel brings unparalleled expertise, integrity, and international perspective to the selection process — ensuring that the most impactful institutions are honored.”
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            
        
        </div>
    </div>
</section>


      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <h2 className="text-3xl mb-12 md:text-4xl lg:text-5xl text-black leading-tight">
                      Your <b>School</b><span className="text-[#0066FF] font-bold">.</span> Your <b>Impact</b><span className="text-[#0066FF] font-bold">.</span>On the<b>World Stage</b><span className="text-[#0066FF] font-bold">.</span>
                    </h2>
                  </motion.div>
            {/* Header */}
            <div className="text-center">
                <p className="text-md">
                                The Global Schools Awards aren’t just accolades — <b>they are symbols of bold vision, deep commitment, and real-world change.</b>
                            </p>
            </div>

            <div className="text-center mb-8">
                <p className="text-md mb-6 text-[#1774d1]">
                                These prizes are more than recognition, they honor schools nurturing young leaders, innovators, and global citizens equipped for the challenges of tomorrow.
                            </p>
            </div>

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
          
            <div className="">
                <p className=" py-8 text-center text-md font-bold mb-2">
                                They're about giving schools the global visibility they deserve, and empowering them to lead the future of education.
                            </p>
            </div>
        </div>
      </section>
{/* Awards Timeline */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="max-w-4xl mx-auto px-4">
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl md:text-4xl text-[#1b66cf] mb-4">
        <b>Awards Timeline</b> (tentative)
      </h2>
      <p className="text-lg text-gray-600">Key Dates to Watch</p>
    </motion.div>

    <div className="relative">
      {/* Animated Timeline line */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 origin-top"
        initial={{ height: 0, scaleY: 0 }}
        whileInView={{ height: "100%", scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      ></motion.div>
      
      {/* Timeline items */}
      <div className="space-y-16">
        {[
          {
            date: "October 2025 —",
            title: "Nominations Open",
            description: "Application portal opens for all award categories"
          },
          {
            date: "November 2025 —", 
            title: "Jury Review & Finalists Announced",
            description: "Expert panel reviews submissions and announces finalists"
          },
          {
            date: "December 2025 —",
            title: "Winners Celebrated",
            description: "Awards ceremony at the Global Schools Summit & Awards Gala"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.8
              },
              visible: { 
                opacity: 1, 
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-bold text-black text-xl mb-2">{item.date}</h3>
                <h4 className="font-semibold text-[#1b66cf] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            </div>
            
            <div className="w-2/12 flex justify-center">
              <motion.div 
                className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.3 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.3 }}
              ></motion.div>
            </div>
            
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="max-w-7xl mx-auto py-16 px-4">
                <div className="bg-gray-30 rounded-3xl border-2 border-gray-200 p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-[#4686d8] mb-4">
                            How to Apply / Nominate
                        </h2>
                        
                    </div>

                    {/* Main Content */}
                    
                    <div className="space-y-6">
                        <p className="text-lg text-gray-800 font-bold">
                            Submission Guidelines for the 2025 Global Schools Awards:
                        </p>
<h3 className="text-base font-bold text-gray-800 mb-4"><span className="text-gray-400 mx-2 mt-1">🔹</span>October 2025 — Nominations Open </h3>
                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                          <b>The Global Schools Awards are exclusively open to institutions that are part of the India MUN Global Schools Affiliation Initiative — a prestigious alliance of changemaking institutions committed to transforming education through leadership, sustainability, and innovation.</b><br/>
                           These awards recognize excellence across Educational Leadership & Innovation, Climate Action & Sustainability, SDG Integration, Youth Empowerment, and Community Engagement — spotlighting institutions that are not only educating, but reshaping the future of learning.
                        </p>

                        {/* Why We Exist Section */}

                      
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4"><span className="text-gray-400 mx-2 mt-1">🔹</span>Who Can Apply: </h3>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Affiliated <b>Global Member Schools (K-10/12)</b> are eligible to submit nominations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Each school may nominate itself in up to two categories</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black"><b>Educator nominations</b> a may be submitted individually or by the school</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black"><b>Students nominations</b> must be submitted or endorsed by a school leader or mentor
</span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Through the Affiliation Section */}
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4"><span className="text-gray-400 mx-2 mt-1">🔹</span>Submission Requirements:</h3>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">A write-up (max 1000 words) highlighting your initiative, its impact, and alignment with the award category</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Additional materials (photos, videos, student work, etc.) must be submitted via Google Drive / Dropbox link</span>
                                </li>
                                
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Ensure file size is within 10 MB for direct uploads; larger files must be link-shared</span>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4"><span className="text-gray-400 mx-2 mt-1">🔹</span>Jury & Evaluation Process:</h3>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-2">
                                    
                                    <span className="text-sm text-black"><b>All nominations will be reviewed by a distinguished Grand Jury Panel.</b></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    
                                    <span className="text-sm text-black">All entries are scored on pre-defined, impact-driven metrics. The evaluation is merit-based, transparent, and globally benchmarked.</span>
                                </li>
                                
                                
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4"><span className="text-gray-400 mx-2 mt-1">🔹</span>Announcement & Recognition:</h3>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm font-bold text-black">Top 10 institutions in each category will be Top entries will be officially notified via email and showcased across our global platforms.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Winners will receive official trophies, certificates, and digital badges. </span>
                                </li>
                                
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">All Winners will be felicitated at the 2025 Global Schools Summit & Awards Gala</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black font-bold">•</span>
                                    <span className="text-sm text-black">Awarded schools will be featured in the India MUN Global Schools Directory, and select stories will be included in India MUN’s Annual Impact Report</span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Eligibility Section */}
                        <div className="bg-gray-50 p-4 rounded-lg mt-8">
                            <p className="text-sm text-gray-700">
                                <b>Data Privacy Note:</b> All information and materials submitted will be used solely for the purpose of the Global Schools Prizes evaluation and will remain confidential in accordance with India MUN’s data protection policy.
                            </p>
                        </div>
                      
                        {/* Call to Action */}
                        <div className="">
                            <h4 className="text-lg font-bold text-gray-800">
                                <span className="text-black font-bold">💡</span> There is no fee for nomination or evaluation. All the Global Member Schools can nominate themselves for these honors.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>


      <section className="relative bg-gradient-to-br from-[#000000] to-[#002e41] py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="text-center mb-12">
            {/* Add your image here */}
            <div className="mb-6">
    <div className="mb-6">
    <div className="grid grid-cols-3 gap-2 items-center">
        {/* Left - India MUN Logo */}
        <div className="flex justify-end">
            <img 
                src="/images/logos/indaimun logo balck.webp" 
                alt="India MUN" 
                className="w-60 h-30 object-contain"
            />
        </div>
        
        {/* Center - Main Award Image (bigger) */}
        <div className="flex justify-center">
            <img 
                src="/images/prizes/p17.webp" 
                alt="Global Schools Awards" 
                className="w-60 h-auto rounded-lg shadow-md"
            />
        </div>
        
        {/* Right - Global Schools Logo */}
        <div className="flex justify-left">
            <img 
                src="/images/logos/Global Schools Logo Black.webp" 
                alt="Global Schools" 
                className="w-70 h-30 object-contain"
            />
        </div>
    </div>
</div>
</div>
            
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold text-[#4686d8] mb-4">
                The Vision Behind the Global Schools Awards
            </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-white">
            <p className="text-lg font-bold">
                Celebrating Educational Institutions Bold Enough to Lead the Future.
            </p>
            
            
            
            <p className="text-sm leading-relaxed text-justify">
              The Global Schools Awards exist to honor institutions that are not only delivering quality education — but redefining it for a rapidly changing world. These awards are rooted in the belief that education is not just about preparing for exams — it's about preparing for life, leadership, and legacy.
            </p>

            {/* Who Can Apply Section */}
            <div className="mt-8">
                <h3 className="text-base font-bold mb-4">
                    Our core purpose is to elevate the standard of education across India and beyond by: 
                </h3>
                <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Recognizing excellence in Education, Innovation, Sustainability & Global Citizenship.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Uplifting visionary schools that serve as models for purpose-driven transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Encouraging a culture of collaboration, where best practices are shared for collective progress</span>
                    </li>
                    
                </ul>
            </div>

            {/* Submission Requirements Section */}
            <div className="mt-8">
                <p className="text-sm font-bold mb-4">
                    These prizes are exclusively open to institutions that are part of the India MUN Global Schools Affiliation Initiative — a prestigious network of changemaking schools committed to climate action, SDG integration, entrepreneurship, diplomacy, and future-ready education.
                </p>
                <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                        
                        <span className="text-sm text-[#1b66cf]">These awards are designed not just to recognize excellence, but to elevate the standards of education by fostering healthy collaboration and aspirational competition across the educational ecosystem.</span>
                    </li>
                    
                </ul>
            </div>

            {/* Jury & Evaluation Section */}
            <div className="mt-8">
                <h3 className="text-base font-bold mb-4">
                    We believe that every school has the potential to lead — and that transformation happens when institutions: 
                </h3>
                <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Adopt best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Empower their educators</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Inspire & nurture their students</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-[#1b66cf]">•</span>
                        <span className="text-sm">Collaborate for collective impact</span>
                    </li>
                    
                </ul>
            </div>

            {/* Announcement & Recognition Section */}
            <div className="mt-8">
                <p className="text-sm font-bold mb-4">
                    This is not just about recognition.<br/> It’s about uplifting every institution to do better — for their students, for society, and for the planet.
                </p>
                
            </div>

            {/* Data Privacy Section */}
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mt-8 border border-white/20">
                <p className="text-xl font-bold">
                    Because real change begins with unity, and a better future is shaped by bold leadership in education.
                </p>
            </div>
          
            
            
        </div>
    </div>
</section>


      

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
  {/* Call to Action */}
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
      BECOME A <span className="font-extrabold">GLOBAL MEMBER SCHOOL</span><span className="text-[#0066FF] font-bold">.</span><br/> <b> NOMINATE</b><span className="text-[#0066FF] font-bold">.</span> BE<b> CELEBRATED</b><span className="text-[#0066FF] font-bold">.</span>
    </h2>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <span className="text-lg md:text-xl text-[#1774d1]">Get Certified:</span>
      <button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-12 py-2 text-lg font-semibold rounded-xl min-w-[200px]">
        Affiliate Now
      </button>
    </div>
  </div>
</section>


    </div>
  );
}