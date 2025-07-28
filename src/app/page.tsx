"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, User, School, Building2 } from "lucide-react";
import { useRef, useState } from "react";

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
            className="text-xl md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light text-blue-500"
          >
            Nurturing future sustainability leaders
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
        className="py-28 bg-gradient-to-b from-black to-[#002e41] text-white relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#071426] to-[#112c4c] opacity-95"></div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
            <div className="w-full">
              <h1 className="text-2xl md:text-3xl font-bold mb-8">ABOUT INDIA MUN</h1>
              <p className="text-sm md:text-lg text-blue-100 leading-relaxed mb-6">
                India MUN (launched on October 24, 2020 on international UN Day), a collaborative endeavor by Gaia The Earth Foundation and BuzzOnEarth, is a pioneering global
                institution dedicated to empowering young minds for climate action, leadership, innovation, and entrepreneurship. As the official partner of the UN Decade on
                Ecosystem Restoration — jointly led by UNEP and UNFCCC — India MUN stands at the forefront of educational transformation.
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
            </div>
          </div>
        </div>
      </motion.section>

      {/* Global Schools Section */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1875d1] text-4xl md:text-5xl font-bold mb-8">
            Global Schools for Climate Action,<br />
            Leadership & Innovation
          </h2>
          <p className="text-base md:text-lg text-black max-w-5xl mx-auto">
            Empowering schools and transforming education for global climate action, leadership and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">"Global Recognition for Schools Driving Change."</h3>
              <p className="text-sm md:text-base text-black mb-8">
                Join the prestigious network and position your school at the forefront of future education.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#1875d1] text-lg md:text-xl">Get Certified:</span>
              <Link href="/affiliate">
                <Button className="bg-[#1875d1] hover:bg-[#1875d1]/90 text-white text-sm md:text-base px-8 py-3 rounded-xl">
                  Affiliate Now
                </Button>
              </Link>
            </div>

            <div className="max-w-2xl bg-white rounded-md shadow-sm border border-gray-100 p-1 md:p-3">
              <h3 className="text-lg md:text-xl font-bold mb-6">Registrations open for</h3>

              <div className="flex items-center gap-6 mb-6">
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
                  <h4 className="text-base md:text-lg font-bold mb-2">City Representatives</h4>
                  <p className="text-sm md:text-base text-[#1875d1]">Best School from every city</p>
                </div>
              </div>

              <p className="text-sm md:text-base font-medium">
                Nominate your school to represent your city on the national and global stage.
              </p>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[450px]">
              <Image
                src="/images/home_page/h4.webp"
                alt="GSCA Platinum Badge"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schools Gallery Section - Medium height */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Inspiring School Participation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Schools across India are already making a difference through our programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { num: 7, name: "DPS, Raipur" },
              { num: 8, name: "Presidency School, RT Nagar" },
              { num: 5, name: "Birla Open Minds" },
              { num: 6, name: "Kalvi International" }
            ].map((item) => (
              <div key={item.num} className="group relative w-full rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`/images/home_page/h${item.num}.webp`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-md">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-medium text-gray-800 mb-6">Your school could be the next success story</p>
          </div>
        </div>
      </section>

      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1875d1] p-4">
          India MUN Student Programs
        </h2>

      </div>
      {/* India MUN Student Programs Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex flex-col items-center justify-between text-white text-center">

          <div className="">
            <h3 className="text-md md:text-lg font-medium">Dear EarthGeeks</h3>
          </div>

          <div className="">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                This is your <span className="text-[#FFD700]">moment</span>. This is your <span className="text-[#FFD700]">movement</span>.
              </h3>
              <p className="text-3xl md:text-4xl italic font-light">
                And it begins with you.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col items-center ">
              <p className="text-md md:text-lg">
                Join <span className="font-bold">India</span> Model <span className="font-bold">United Nations</span>.
              </p>

              <p className="text-md md:text-lg max-w-4xl">
                Where 600 Million* young leaders, innovators and changemakers
              </p>

              <div className="flex flex-wrap justify-center gap-x-6 text-[#FFD700] text-md md:text-lg font-medium">
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
              India's first Model United Nations conference on Climate is a challenging and competitive platform for students to debate and analyse some of the world's most pressing climate problems. As delegates representing different countries and agencies, students will gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
            </p>
          </div>
        </div>

        {/* Welcome letter section */}
        <div className="min-h-[620px] max-w-7xl mx-auto mt-15 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 border-2 rounded-xl mb-8 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Welcome letter by the President, India MUN</h3>
            <p className="text-gray-700 text-sm md:text-base">
              <b>Dear Young Leaders, Esteemed Educators, and Honored Guests,</b>
              <br /><br />
              It is with immense joy and great anticipation that I welcome you to the National India Model United Nations Conference 2025. As the Founder and Executive President of India MUN, I am deeply inspired by the bright young minds gathering from all corners of our diverse nation. Your enthusiasm and dedication to addressing and taking action on the critical issues surrounding climate change and sustainability fill me with hope and confidence for our future.
              <br /><br />
              India is a young country, with more than 50% of our population under the age of 25. This youthful demographic is our greatest asset. I firmly believe in the power of youth to drive change, innovate, and lead with passion and purpose. The energy, creativity, and resilience that you bring to the table are exactly what we need to tackle the pressing challenges of our time.
              <br /><br />
              I envision the youth of our country as torchbearers in solving global challenges. Instead of adopting a victim mindset, I urge you to embrace an action mindset. Rise above the challenges not only for your own good but for the betterment of society, nature, and our planet at large. Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow.
              <br /><br />
              Let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.
              <br /><br />
              Welcome to the <b>National India MUN Conference 2025.</b>
              <br /><br />
              Yours sincerely,
              <br />
              <br />
              <b>Gayatri Chauhan, Founder and Executive President, India Model United Nations</b>
            </p>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src="/images/programs/S21.webp"
                alt="India MUN President"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <Button size="lg" className="h-auto py-2 bg-blue-500 cursor-pointer hover:bg-blue-700 w-full md:w-auto font-bold text-lg">
            India MUN National Climate <br /> Conference 2024
          </Button>
          <div className="h-16 w-0.5 bg-gray-300"></div>
          <Button size="lg" className="h-auto py-2 bg-blue-500 cursor-pointer hover:bg-blue-700 w-full md:w-auto font-bold text-lg">
            India MUN Climate <br /> Conferences 2025
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
                  src="/images/programs/s7.webp"
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
                    An immersive, experiential leadership development program curated by industry leaders to help you <span className="font-semibold">become the best version of yourself</span>, build essential life skills, and grow into a confident, purpose-driven leader ready to shape the future.
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
                    Connecting them with UN programs on ecosystem restoration.
                  </h3>
                  <p className="text-sm text-gray-700">
                    A transformative learning and leadership program designed to empower young individuals by helping them develop a care for nature, creative persuasion for the right causes, leadership skills, a resilient mindset, a collaborative approach, and environmental stewardship.
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">It is not just a program—it's a movement</span> that equips students with the knowledge, skills, and opportunities to take meaningful action toward <span className="font-semibold">restoring our ecosystems</span>.
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
                  src="/images/programs/s9.webp"
                  alt="Climate Hackathon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-row gap-16">
                <div className="flex flex-col items-center justify-center min-w-[250px] text-center">
                  <h2 className="text-xl font-bold mb-2 text-center">CLIMATE HACKATHON</h2>
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
                    India's Largest Climate Hackathon
                  </h3>
                  <p className="text-sm text-gray-700">
                    Join this creative but intense hackathon for university students to find <span className="font-semibold">solutions to some of the most pressing issues created by climate change</span> that Indian businesses and communities face. The solutions, possibly various combinations of tech products, policy evaluations, market models, business plans, new designs and product innovations, will help you hone your creativity and offer new directions for climate action.
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
              Through India MUN, BuzzOnEarth, or Gaia Foundation across various programs and initiatives.
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
 <section className="py-15 bg-gray-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-12">
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#4686d8] ">Join</h2>
                <p className="text-md text-white ml-2">a generation rising with purpose, power, and possibility.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#4686d8] ">Create</h2>
                <p className="text-md text-white ml-2">solutions for our planet's most pressing challenges.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#4686d8] ">Network</h2>
                <p className="text-md text-white ml-2">connect with like-minded friends who act and lead.</p>
              </div>
              
              <div className="flex items-end">
                <h2 className="text-4xl font-bold text-[#4686d8] ">Become</h2>
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
            <h2 className="text-5xl font-bold text-[#4686d8] mb-4">Collaborate</h2>
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
                      <Link href="/programs/forest-ambassador" className="block text-gray-800 hover:text-[#4686d8]">
                        Young Forest Ambassador Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/youth-leadership" className="block text-gray-800 hover:text-[#4686d8]">
                        Youth Leadership Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/mun-conferences" className="block text-gray-800 hover:text-[#4686d8]">
                        MUN Conferences
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/climate-hackathons" className="block text-gray-800 hover:text-[#4686d8]">
                        Climate Hackathons
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/climate-clubs" className="block text-gray-800 hover:text-[#4686d8]">
                        Climate Clubs
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" className="block text-gray-800 hover:text-[#4686d8]">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link href="/internships" className="block text-gray-800 hover:text-[#4686d8]">
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
                      <Link href="/schools/global-affiliation" className="block text-gray-800 hover:text-[#4686d8]">
                        Global Schools Affiliation (Get Certified)
                      </Link>
                    </li>
                    <li>
                      <Link href="/schools/global-accreditation" className="block text-gray-800 hover:text-[#4686d8]">
                        Global Schools Accreditation
                      </Link>
                    </li>
                    <li>
                      <Link href="/schools/city-representatives" className="block text-gray-800 hover:text-[#4686d8]">
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
                      <Link href="/partners/hackathon" className="block text-gray-800 hover:text-[#4686d8]">
                        Hackathon Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/mun-conference" className="block text-gray-800 hover:text-[#4686d8]">
                        MUN Conference Partners
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners/programs" className="block text-gray-800 hover:text-[#4686d8]">
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
                  <Link href="/news/climate-change-wake-up" className="hover:text-[#4686d8]">
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
                  <Button className="bg-[#4686d8] hover:bg-[#4686d8]/90 text-white">
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
                    <Button className="bg-[#4686d8] hover:bg-[#4686d8]/90 text-white">
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
            <h2 className="text-5xl font-bold text-[#4686d8] mb-3">Blogs</h2>
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
                <Link href="/blogs/climate-chronicles" className="text-[#4686d8] hover:underline">
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
                <Link href="/blogs/understanding-climate" className="text-[#4686d8] hover:underline">
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
                <Link href="/blogs/importance-of-climate" className="text-[#4686d8] hover:underline">
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
            <h2 className="text-7xl md:text-8xl font-bold text-center  tracking-wider" style={{ 
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
          <h2 className="text-5xl font-bold text-center text-[#4686d8] mb-16">Testimonials</h2>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto mb-20 border border-gray-200 rounded-lg p-8">
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


      {/* Eighth Section - Founding Partners */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#1875d1]">FOUNDING PARTNERS</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 mb-12 leading-relaxed">
              India MUN is a joint initiative of <b>BuzzOnEarth</b> and <b>Gaia The Earth Foundation</b>, the organizations that are
              committed to sustainability and regeneration.
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
