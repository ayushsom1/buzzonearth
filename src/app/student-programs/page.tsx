"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function StudentPrograms() {
    const programs = [
        {
            name: "INDIA'S YOUNG FOREST AMBASSADOR",
            heading: "Connecting passionate youth with UN programs on ecosystem restoration.",
            description: "Get ready to dive deep into nature, ignite your passion, and become a voice for our precious forests. Through our immersive program, you'll gain the skills and knowledge needed to create positive change.",
            gradient: "linear-gradient(0deg, rgba(22, 38, 41, 0.95), rgba(57, 97, 39, 0.9))",
            image: "/images/programs/S1.webp",
            icon: "/images/programs/S6.webp",
            link: "/student-programs/young-forest-ambassador-program"
        },
        {
            name: "YOUTH LEADERSHIP PROGRAM",
            heading: "India’s most powerful leadership program for the YOUTH.",
            description: "An immersive, experiential leadership development program curated by industry leaders to help you become the best version of yourself, build essential life skills, and grow into a confident, purpose-driven leader ready to shape the future.",
            gradient: "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(17, 206, 206, 0.65))",
            image: "/images/programs/S2.webp",
            icon: "/images/programs/S7.webp",
            link: "/student-programs/mun-conferences"
        },
        {
            name: "INDIA MUN National Climate Conference",
            heading: "India’s Biggest Model United Nations Conference on Climate.",
            description: "A challenging and competitive platform for students to debate and analyse some of the world’s most pressing climate problems. India’s first and largest MUN conference focused entirely on Climate Action and Biodiversity as the core themes.",
            gradient: "linear-gradient(90deg, rgba(22, 28, 41, 0.95), rgba(39, 57, 97, 0.9))",
            image: "/images/programs/S3.webp",
            icon: "/images/programs/S8.webp",
            link: "/student-programs/youth-leadership-program"
        },
        {
            name: "BuzzOnEarth INDIA HACKATHON",
            heading: "India’s Largest Climate Hackathon",
            description: "Find solutions to some of the most pressing climate and sustainability issues that Indian businesses and communities face. Give wings to your creativity and ideas and develop innovative solutions that can be deployed.",
            gradient: "linear-gradient(0deg, rgba(22, 41, 39, 0.95), rgba(39, 97, 91, 0.9))",
            image: "/images/programs/S4.webp",
            icon: "/images/programs/S9.webp",
            link: "/student-programs/climate-hackathons"
        },
        {
            name: "STEP UP YOUTHS' GOT TALENT ",
            heading: "A National Creative Platform for Climate Action.",
            description: "A national initiative to bridge the gap between awareness and action by harnessing the boundless creativity of students. YGT empowers young minds to express their thoughts, emotions, and solutions on climate change through engaging competitions.",
            gradient: "linear-gradient(90deg, hsla(44, 73%, 34%, 0.66), rgba(167, 127, 40, 0.54))",
            image: "/images/programs/S5.webp",
            icon: "/images/programs/S10.webp",
            link: "/student-programs/volunteer"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Hero Section */}
            {/* <section className="w-full pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Student Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-10">
              Empowering India's youth through transformative experiences, leadership development, and environmental action
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Apply Now
              </Button>
            </div>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section> */}

            {/* Section 1: Program Cards */}
            <section className="w-full py-20 px-4 md:px-8 bg-white relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20 L40 20 M20 0 L20 40" stroke="#000" strokeWidth="1" fill="none" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 inline-block">Discover Opportunities</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-500">Our Transformative Programs</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">Select from our diverse range of programs designed to develop leadership, environmental stewardship, and global citizenship in India's youth.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-30 lg:gap-40 justify-items-center">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-10 relative"
                                style={{
                                    width: '260px',
                                    height: '500px',
                                }}
                            >
                                {/* Background image with overlay */}
                                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full" style={{ background: program.gradient }}></div>
                                    <Image
                                        src={program.image}
                                        alt={program.name}
                                        fill
                                        priority
                                        style={{ objectFit: 'cover', opacity: 0.55 }}
                                        className="transition-transform duration-700 ease-in-out hover:scale-105 mix-blend-overlay"
                                    />
                                </div>

                                {/* Card content */}
                                <div className="p-4 flex flex-col items-center h-full relative z-20">
                                    {/* Program icon with animated highlight */}
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mb-5 relative shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-white opacity-1"></div>
                                        <Image
                                            src={program.icon}
                                            alt={`${program.name} icon`}
                                            width={50}
                                            height={50}
                                        />
                                    </motion.div>

                                    {/* Program name */}
                                    <h3 className="text-lg font-bold text-white text-center mb-3 drop-shadow-md leading-tight">{program.name}</h3>

                                    {/* Divider line */}
                                    <div className="w-12 h-1 bg-white/50 rounded-full mb-4"></div>

                                    {/* Program heading */}
                                    <h4 className="text-sm font-semibold text-white text-center mb-3 drop-shadow-sm leading-tight">{program.heading}</h4>

                                    {/* Program description */}
                                    <p className="text-white/90 text-center mb-8 leading-relaxed text-xs">{program.description}</p>

                                    {/* Glass card effect at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-25 backdrop-blur-sm bg-white/10 border-t border-white/20 p-5 flex flex-col items-center justify-center">
                                        {/* Enroll button */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full mb-3"
                                        >
                                            <Button
                                                className="w-full bg-white text-black hover:bg-blue-50 shadow-lg font-medium text-sm py-1.5"
                                            >
                                                <Link href={program.link} className="flex items-center justify-center gap-2">
                                                    Enroll Now
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                                </Link>
                                            </Button>
                                        </motion.div>

                                        <p className="text-white/90 text-[11px] font-light">
                                            Begin your journey today
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: The Next Generation of Leaders */}
            <section className="w-full py-24 bg-gradient-to-r from-[#000000] to-[#002e41] opacity-95 text-white relative overflow-hidden">
                {/* Animated particles background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>

                <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-5xl font-bold mb-8 leading-tight">The Next Generation of <span className="text-[#38b6ff]">Leaders</span></h2>
                        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-blue-100 max-w-5xl mx-auto">
                            Nurturing young minds through global programs, immersive experiences, mentorship, and real-world challenges.
                        </p>
                    </motion.div>

                    <div className="mb-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative inline-block"
                        >
                            <div className="mt-10 w-400px h-400px absolute inset-0 bg-gradient-to-r from-white-200 via-blue-200 to-white-200 rounded-full blur-2xl opacity-80 transform scale-125"></div>
                            <Image
                                src="/images/programs/s50.webp"
                                alt="INDIA MUN 2025"
                                width={350}
                                height={175}
                                className="relative z-10 mx-auto"
                            />
                        </motion.div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#38b6ff] mb-12">
                CLIMATE ACTION. LEADERSHIP. INNOVATION. DIPLOMACY. ENTREPRENEURSHIP. REGENERATION. SDGs.
              </h2>

                    {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-[500px] relative">
              <Image 
                src="/images/programs/next-gen-leaders.jpg" 
                alt="Next Generation Leaders" 
                fill
                priority
                style={{ objectFit: 'cover' }}
                className="z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4">Join Us in 2025</h3>
                <p className="text-xl mb-6 max-w-3xl">Be part of India's most prestigious youth climate action conference.</p>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">Register Your Interest</Button>
              </div>
            </div>
          </motion.div> */}
                </div>
            </section>

            {/* Section 3: Detailed Program - India MUN */}
            <section className="w-full py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8">India MUN National Climate Conference</h2>
                    <p className="text-xl text-[#1775d0] text-center mb-6">The only MUN which is India's MUN and represents India internationally.</p>
                    <p className="text-lg text-center max-w-7xl mx-auto mb-12">
                        India’s first and largest MUN conference focused entirely on Climate Action and Biodiversity as the core themes. A challenging and competitive platform for students to debate and analyse some of the world’s most pressing climate problems. As delegates representing different countries and agencies, students gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
                    </p>

                    {/* Image gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex flex-col gap-4">
                            <div className="h-100 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S12.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-48 relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/programs/S17.webp"
                                        alt="MUN Conference"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="h-48 relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/programs/S18.webp"
                                        alt="MUN Conference"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S13.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S14.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S15.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S16.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S19.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src="/images/programs/S20.webp"
                                    alt="MUN Conference"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>

            

                    

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Button size="lg" className="bg-[#1875d1] hover:bg-blue-700">
                            India MUN National Climate Conference 2024
                        </Button>
                        <Button size="lg" variant="outline" className="border-blue-600 text-[#1875d1] hover:bg-blue-50">
                            India MUN National Conferences 2025
                        </Button>
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

            {/* Young Forest Ambassador Challenge */}
            <section className="w-full min-h-[400px] md:h-[700px] py-8 md:py-16 relative flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/programs/S22.webp"
                        alt="Forest Background"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white text-center">
                    <h2 className="py-20 text-4xl md:text-5xl font-bold mb-4">India's Young Forest Ambassador Challenge</h2>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#b8d638]">Connecting Young Minds with UN programs on ecosystem restoration.</h3>
                    <p className="text-base md:text-xl max-w-7xl mx-auto mb-6 md:mb-8">
                        Get ready to dive deep into nature, ignite your passion, and become a voice for our precious forests. <br />Through our immersive program, you'll gain the skills and knowledge needed to create positive change.
                    </p>
                    <p className="py-20 text-lg md:text-xl font-bold ">Be the Voice. Be the Action. Be the Change.</p>
                </div>
            </section>

            <section className="w-full py-8 md:py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4 md:mt-8 max-w-7xl mx-auto p-4 border-2 border-blue-100 rounded-2xl">
                    <div className="col-span-1 md:col-span-3 bg-white rounded-2xl p-4 md:p-8">
                        <h3 className="text-3xl text-[#85bc0d] font-bold mb-4">A Learning Journey. A Challenge. A Movement.</h3>
                        <p className="text-lg text-gray-700">
                            This is a transformative learning and leadership program designed to empower young individuals, inspire them to take action, and help them understand the importance of nature and forests for our planet and all living species. It nurtures creative persuasion for vital causes, resilient leadership skills, a collaborative mindset, and environmental stewardship.
                            <br /><br />
                            More than a program, IYFA empowers the next generation with the knowledge, skills, and opportunities to restore our planet—turning inspiration into action for a sustainable future.
                        </p>
                    </div>
                    <div className="col-span-1 w-full md:w-[300px] bg-gradient-to-br from-white-50 to-white-100 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col items-center justify-center space-y-4 md:space-y-6 hover:shadow-2xl transition-all duration-300 border border-blue-200 mt-4 md:mt-0">
                        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Registrations Open!</p>
                        <Button
                            size="lg"
                            className="bg-[#1875d1] hover:bg-blue-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-6 md:px-10 py-4 md:py-6 text-base md:text-lg w-full"
                        >
                            Enroll Now
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full py-14 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-black-900">Building a network of Young Global <br className="hidden md:block"></br>Ambassadors for Forests & Biodiversity.🌍🏆🌿</h3>
                    <p className="text-xl">
                        <i className='text-sm'>India's Young Forest Ambassador Challenge</i></p>
                    <div className="flex items-center justify-center my-4">
                        <Image
                            src="/images/programs/S6.webp"
                            alt="Hackathon Icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </section>

            {/* Section 3 continued: Youth Leadership Program */}
            <section className="w-full h-[800px] py-16 relative flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/programs/S23.webp"
                        alt="Leadership Background"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>

                <div className="max-w-7xl h-[600px] grid grid-row mx-auto px-4 relative z-10 text-white text-center ">
                    <div>
                        <h2 className="py-16 text-6xl font-bold mb-4">Youth Leadership Program</h2>
                    </div>
                    <div>

                        <h3 className="text-2xl mb-6"><span className="text-[#0cc0df]">India's most powerful</span> <br /> <b>LEADERSHIP PROGRAM</b> <br /> <span className="text-[#0cc0df]">for the <b>YOUTH.</b></span></h3>
                    </div>
                    <p className="text-base md:text-xl max-w-7xl mx-auto mb-6 md:mb-8">
                        An immersive, experiential leadership development program curated by industry leaders to help you become the best version of yourself, build essential life skills, and grow into a confident, purpose-driven leader ready to shape the future. 
                    </p>
                    <div className="w-100 h-50 py-16 mx-auto mb-8">
                        <Image
                            src="/images/programs/S36.webp"
                            alt="Leadership Icon"
                            width={400}
                            height={200}
                        />
                    </div>


                    {/* <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Empowering youth to dream big, think smart, and lead with impact.</h3>
            <p className="text-xl mb-4">Youth Leadership Program</p>
            <div className="w-16 h-16 mx-auto">
            <Image 
            src="/images/icons/leadership-icon.svg" 
            alt="Leadership Icon" 
            width={64} 
            height={64} 
            />
            </div>
            </div> */}
                </div>
            </section>
<section className="w-full py-8 md:py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4 md:mt-8 max-w-7xl mx-auto p-4 border-2 border-blue-100 rounded-2xl">
                    <div className="col-span-1 md:col-span-3 bg-white rounded-2xl p-4 md:p-8">
                        <h3 className="text-3xl font-bold mb-4">Building World class Leaders of tomorrow.</h3>
                        <p className="text-lg text-gray-700">
                            We believe in unlocking the boundless potential within every young person. Our flagship initiative, the Youth Leadership Program, is not just a program; it's a transformative journey designed to empower young leaders with the skills, mindset and purpose needed to shape a better future and lead with impact.
                            <br /><br />
                            <b>Crafted for young visionaries ready to shape the world with purpose, clarity, and confidence.</b>
                        </p>
                    </div>
                    <div className="col-span-1 w-full md:w-[300px] bg-gradient-to-br from-white-50 to-white-100 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col items-center justify-center space-y-4 md:space-y-6 hover:shadow-2xl transition-all duration-300 border border-blue-200 mt-4 md:mt-0">
                        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Registrations Open!</p>
                        <Button
                            size="lg"
                            className="bg-[#1875d1] hover:bg-blue-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-6 md:px-10 py-4 md:py-6 text-base md:text-lg w-full"
                        >
                            Enroll Now
                        </Button>
                    </div>
                </div>
            </section>
        

            <section className="w-full py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-500">Empowering youth to</h2>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-black-900">dream big, think smart, and lead with impact.</h3>
                    
                    
                    <p>
                        <i className='text-sm'>Youth Leadership Program</i></p>
                    <div className="flex items-center justify-center my-4">
                        <Image
                            src="/images/programs/S7.webp"
                            alt="Hackathon Icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </section>



            {/* BuzzOnEarth Hackathon Section */}
            <section className="w-full min-h-[900px] md:h-[700px] py-8 md:py-16 relative flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/programs/S24.webp"
                        alt="Hackathon Background"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white text-center">
                    <h2 className="pt-24 pb-12 text-4xl md:text-5xl font-bold mb-4 md:mb-6">BuzzOnEarth INDIA <br />
                    <span className="text-5xl md:text-9xl mb-6 md:mb-8">HACKATHON</span> </h2>
                    <p className="text-lg md:text-xl max-w-7xl mx-auto mb-6 md:mb-8">
                        Find solutions to some of the most pressing climate and sustainability issues that Indian businesses and communities face. Give wings to your creativity and ideas and develop innovative solutions that can be deployed. The solutions, possibly various combinations of tech products, policy evaluations, market models, business plans, new designs and product innovations, will help you hone your creativity and offer new directions for climate action.
                    </p>
                    <p className="text-base md:text-lg max-w-7xl mx-auto mb-8 md:mb-12 text-[#0cc0df] ">
                         This is an Open Innovation Student category in which students can give ideas against the pre-defined Problem Statements across themes.
                    </p>
                    <div className="w-100 h-50 py-06 mx-auto mb-8">
                        <Image
                            src="/images/programs/S37.webp"
                            alt="largest Hackathon Icon"
                            width={400}
                            height={200}
                        />
                    </div>
                </div>
            </section>


<section className="w-full max-w-[1440px] mx-auto py-8 md:py-16 relative flex flex-col justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">

    {/* Left Image */}
    <motion.div
      className="col-span-1 md:col-span-2 relative flex justify-center items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full md:h-[500px] h-[300px] relative">
        <Image
          src="/images/programs/S25.webp"
          alt="Leadership Background"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl md:rounded-r-3xl md:rounded-l-none"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-5 rounded-xl md:rounded-r-3xl md:rounded-l-none"></div>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="col-span-1 relative flex justify-center items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full md:h-[500px] h-[300px] relative">
        <Image
          src="/images/programs/S26.webp"
          alt="Leadership Background"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-xl md:rounded-l-3xl md:rounded-r-none"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-5 rounded-xl md:rounded-l-3xl md:rounded-r-none"></div>
    </motion.div>

  </div>
</section>
        
            <section className="w-full py-8 md:py-12 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4 md:mt-8 max-w-7xl mx-auto p-4 border-2 border-blue-100 rounded-2xl">
                    <div className="col-span-1 md:col-span-3 bg-white rounded-2xl p-4 md:p-8">
                        <h3 className="text-3xl font-bold mb-4">India's Largest Climate Innovation Hackathon, BIH 24' powered by Intel, held at IIT
                                Kanpur in 2024</h3>
                        <p className="text-lg text-gray-700">
                            saw <b>2000+ young innovators developing cutting-edge climate solutions</b>.
                            The event focused on leveraging AI for sustainable development of cities, featuring a
                            panel of esteemed judges composed of industry leaders, AI experts, and sustainability
                            professionals. Intel's partnership ensured access to advanced technology, Intel's AI Stack,
                            and expert guidance, empowering participants to create impactful, AI-driven solutions.
                        </p>
                    </div>
                    <div className="col-span-1 w-full md:w-[300px] bg-gradient-to-br from-white-50 to-white-100 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col items-center justify-center space-y-4 md:space-y-6 hover:shadow-2xl transition-all duration-300 border border-blue-200 mt-4 md:mt-0">
                        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">BuzzOnEarth India Hackthon 2024</p>
                        <Button
                            size="lg"
                            className="bg-[#1875d1] hover:bg-blue-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-6 md:px-10 py-4 md:py-6 text-base md:text-lg w-full"
                        >
                            View Results
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold ">Hacking for a better future</h2>
                    <p className="text-xl">
                        <i className='text-sm'>BIH 2025 (Coming Soon) </i></p>
                    <div className="flex items-center justify-center my-4">
                        <Image
                            src="/images/programs/S9.webp"
                            alt="Hackathon Icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </section>

           

            {/* Process Section */}
            <section className="w-full min-h-[600px] md:h-[600px] py-8 md:py-16 relative flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/programs/S27.webp"
                        alt="Process Background"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="py-16 text-3xl md:text-5xl font-bold mb-4 md:mb-6">STEP UP YOUTH'S GOT TALENT</h2>
                        <h3 className="text-xl md:text-3xl font-semibold text-black mb-6 md:mb-8">A National Creative Platform for Climate Action</h3>
                        <p className="text-base md:text-xl max-w-7xl mx-auto">
                            A national initiative to bridge the gap between awareness and action by harnessing the boundless creativity of students. This unique platform empowers young minds to express their thoughts, emotions, and solutions on climate change and environmental challenges through engaging competitions.
                        </p>
                    </div>

                
                </div>
            </section>
             <section className="w-full min-h-[600px] md:h-[600px] py-8 md:py-12 relative flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-06">
                        <div className="flex flex-col items-center">
                            <div className="relative w-full md:w-[350px] h-[500px] md:h-[600px] rounded-xl overflow-hidden mb-4 md:mb-6">
                                <Image
                                    src="/images/programs/S28.webp"
                                    alt="Process Step 1"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full md:w-[350px] h-[500px] md:h-[600px] rounded-xl overflow-hidden mb-4 md:mb-6">
                                <Image
                                    src="/images/programs/S29.webp"
                                    alt="Process Step 2"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full md:w-[350px] h-[500px] md:h-[600px] rounded-xl overflow-hidden mb-4 md:mb-6">
                                <Image
                                    src="/images/programs/S30.webp"
                                    alt="Process Step 3"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full md:w-[350px] h-[500px] md:h-[600px] rounded-xl overflow-hidden mb-4 md:mb-6">
                                <Image
                                    src="/images/programs/S31.webp"
                                    alt="Process Step 4"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
             </section>
            
<section className="w-full py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-500">Create. Express. Inspire.</h2>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-black-900">Let’s Change the Climate Story.</h3>
                    
                    
                    <p>
                        <i className='text-sm'>STEP UP YGT Competitions (Coming Soon)</i></p>
                    <div className="flex items-center justify-center my-4">
                        <Image
                            src="/images/programs/S10.webp"
                            alt="Hackathon Icon"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </section>

            {/* Section 5: What CAN Youth do */}
            {/* <section className="w-full py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/programs/youth-action-bg.jpg" 
            alt="Youth Action Background" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="h-[250px] md:h-[300px] relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/programs/youth-action-1.jpg" 
                  alt="Youth in Action" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xl font-semibold">Driving Sustainable Innovation</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-[180px] relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/images/programs/youth-action-2.jpg" 
                    alt="Youth in Action" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="h-[180px] relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/images/programs/youth-action-3.jpg" 
                    alt="Youth in Action" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-3 inline-block">Our Future Is Now</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">WHAT CAN <span className="text-blue-300">YOU(th)</span> DO?</h2>
              <div className="h-1 w-24 bg-blue-400 rounded-full mb-8"></div>
              <p className="text-lg leading-relaxed mb-8">
                With over 600 million young people, India is the youngest country in the world. Therefore, in the years to come, no country will produce more leaders than India. The climate crisis, which the IPCC [Intergovernmental Panel on Climate Change] says has intensified, spread and in some cases, caused irreversible damage – will impact the youth and their future generations the most — the stakes couldn't be higher.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-blue-300 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <p>Advocate for sustainable policies in your community</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-300 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <p>Develop innovative solutions to environmental challenges</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-blue-300 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <p>Build a network of like-minded changemakers</p>
                </div>
              </div>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Join the Movement
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}
 {/* Vision & Mission Section */}

            {/* Responsive Image Section */}
            <section className="w-full relative">
                <div className="text-center py-12 md:py-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Previous Events</h2>
                    <div className="h-1 w-24 bg-blue-200 mx-auto rounded-full"></div>
                </div>

                {/* Mobile version */}
                <div className="block md:hidden">
                    <Image
                        src="/images/programs/S32a.webp"
                        alt="Mobile Program Image"
                        width={1080}
                        height={1920}
                        className="w-full"
                    />
                </div>

                {/* Desktop/Laptop version */}
                <div className="hidden md:block">
                    <Image
                        src="/images/programs/S32b.webp"
                        alt="Desktop Program Image"
                        width={1920}
                        height={1080}
                        className="w-full"
                    />
                </div>
            </section>

            {/* Section 6: CTA for currently open programs */}
            
             <section className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0076ba] mb-8">Our Vision & Mission</h2>
                    <div className="space-y-6 text-lg md:text-lg sm:text-md">
                        <p>
                            <span className="font-bold">India MUN</span> envisions a world where every student becomes a powerful force for positive change.
                        </p>
                        <p>
                            Aligned with the <span className="font-bold">Decade of Action - United Nations Sustainable Development Goals</span>, we redefine education to empower youth as architects of a sustainable future.
                        </p>
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
                                <p>
                                    You're standing at the most powerful moment in history.
                                </p>
                                <p>
                                    🌱 This is your moment. This is your movement.<br />
                                    And it begins with you.
                                </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

                    

                    {/* Final CTA */}
                    {/* <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of young leaders who are already making a difference. Start your journey with BuzzOnEarth today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                                Browse All Programs
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                                Contact Us
                            </Button>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    );
} 