"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import Link from "next/link";
import { useTimelineScroll } from '@/hooks/useTimelineScroll';
import { useCarousel, carouselImages } from '@/hooks/useCarousel';
import { AwardsCarousel } from '@/components/AwardsCarousel';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
      >
        {/* Background Pattern - UN Globe Style */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <Image
            src="/images/Conference/c1.webp"
            alt="Conference Background"
            fill
            className="object-cover"
            priority
          />
          
          
          {/* UN-style laurel branches */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
            <div className="flex justify-center">
              <div className="w-64 h-32 border-t-4 border-l-4 border-r-4 border-white rounded-t-full transform rotate-180" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            {/* Conference Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-2xl md:text-4xl lg:text-5xl mb-4 leading-tight text-white"
            >
              <b>India</b> Model <b>United Nations</b>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 text-white"
            >
              National Climate Conference 2024
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
                  <span>27-28</span>
                  <span className="text-sm md:text-lg align-top">th</span>
                  <span>July, 2024</span>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            variants={fadeInUp}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#1774d1]">
              India's Biggest Climate MUN
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-sm md:text-md leading-relaxed">
                <span className="font-bold">India Model United Nations</span> is at the forefront of shaping the next generation of climate diplomats, policymakers and global sustainability leaders. As India's largest Climate MUN, the annual conference stands as a premier platform where the brightest young minds unite to engage in high-impact discussions on climate justice, sustainability, and international policy.
              </p>
              
              <p className="text-sm md:text-md leading-relaxed">
                Following the success of the <span className="font-bold">inaugural chapter</span> in April 2024, the <span className="font-semibold">Grand Finale of the India MUN National Climate Conference</span> was hosted on July 27-28, 2024, marking a powerful milestone in youth-led climate diplomacy.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* India MUN National Climate Conference Section */}
      <section className="py-10 bg-white">

        {/* Welcome letter section */}
        <div className="min-h-[620px] max-w-7xl mx-auto border-2 rounded-xl md:mb-16 overflow-hidden">
  <div className="p-4 md:p-8">
    {/* Mobile Layout */}
    <div className="block md:hidden space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Welcome letter by the Secretary-General, India MUN 2024</h3>
        
        {/* Preview content - always visible (first half) */}
        <div className="text-gray-700 text-xs text-justify">
          <p>
            <b>Dear Delegates, Advisors, and Honored Guests,</b>
            <br /><br />
            It is with immense pride and great pleasure that I welcome you to the National India Model United Nations Conference 2024. As the Secretary-General of India MUN 2024, I am thrilled to see the convergence of bright young minds from across our diverse nation, united by a common purpose: to address and take action on the critical issues surrounding climate change and sustainability.
            <br /><br />
            India MUN stands as the only pan-India Model United Nations conference dedicated to moving beyond activism and towards tangible action. This year, our theme, <b>"Loss and Damage Fund: Addressing Climate Justice through Financial Support from Developed to Developing Countries"</b> and <b>"Climate Innovations: Exploring Innovative Solutions that Empower Communities to Build Resilience against Climate Change Effects,"</b> underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference.
          </p>
          
          {/* Collapsible content (second half) */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="mt-4">
              Over the next two days, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.
              <br /><br />
              Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow. As you navigate through various committees, discussing topics that range from renewable energy and sustainable development to climate justice and conservation, I encourage you to think creatively, challenge assumptions, and work collaboratively. The world needs passionate, informed, and proactive individuals like you to lead the charge against climate change.
              <br /><br />
              To our esteemed advisors, teachers, principles and parents, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders. As we embark on this journey together, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.
              <br /><br />
              Welcome to the <b>National India MUN Conference 2024</b>. Let us make these days memorable and impactful.
              <br /><br />
              Yours sincerely,
              <br />
              <br />
              <b>Ovais Sarmad,<br /> Secretary-General, <br />India Model United Nations 2024</b>
            </p>
          </div>
        </div>
      </div>
      
      {/* Image for mobile - comes after text */}
      <div className="flex justify-center">
        <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full hover:-translate-y-2">
          <div className="relative w-full pb-[140%] hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/member/G2.webp"
              alt="India MUN President"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">Mr. Ovais Sarmad</h3>
            <div className="space-y-1.5 mt-2">
              <p className="text-xs text-gray-600">Former Deputy Executive Secretary 
United Nations Framework Convention on Climate Change</p>
              <p className="text-md text-[#1774d1] font-bold mt-3">
                (UNFCCC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">
      <div className="col-span-2">
        <h3 className="py-8 text-xl md:text-2xl font-bold mb-4">Welcome letter by the Secretary-General, India MUN 2024</h3>
        
        {/* Preview content - always visible (first half) */}
        <div className="text-gray-700 text-sm text-justify">
          <p>
            <b>Dear Delegates, Advisors, and Honored Guests,</b>
            <br /><br />
            It is with immense pride and great pleasure that I welcome you to the National India Model United Nations Conference 2024. As the Secretary-General of India MUN 2024, I am thrilled to see the convergence of bright young minds from across our diverse nation, united by a common purpose: to address and take action on the critical issues surrounding climate change and sustainability.
            <br /><br />
            India MUN stands as the only pan-India Model United Nations conference dedicated to moving beyond activism and towards tangible action. This year, our theme, <b>"Loss and Damage Fund: Addressing Climate Justice through Financial Support from Developed to Developing Countries"</b> and <b>"Climate Innovations: Exploring Innovative Solutions that Empower Communities to Build Resilience against Climate Change Effects,"</b> underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference.
            Over the next two days, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.
            <br /><br />
            Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow. As you navigate through various committees, discussing topics that range from renewable energy and sustainable development to climate justice and conservation, I encourage you to think creatively, challenge assumptions, and work collaboratively. The world needs passionate, informed, and proactive individuals like you to lead the charge against climate change.


          </p>
          
          {/* Collapsible content (second half) */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="mt-6 text-sm">
              
              
              
              To our esteemed advisors, teachers, principles and parents, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders. As we embark on this journey together, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.
              <br /><br />
              Welcome to the <b>National India MUN Conference 2024</b>. Let us make these days memorable and impactful.
              <br /><br />
              Yours sincerely,
              <br />
              <br />
              <b>Ovais Sarmad,<br /> Secretary-General, <br />India Model United Nations 2024</b>
            </p>
          </div>
        </div>
      </div>
      
      {/* Desktop Image */}
      <div className="flex items-center justify-center">
        <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full hover:-translate-y-2">
          <div className="relative w-full pb-[140%] hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/member/G2.webp"
              alt="India MUN President"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">Mr. Ovais Sarmad</h3>
            <div className="space-y-1.5 mt-2">
              <p className="text-xs text-gray-600">Former Deputy Executive Secretary 
United Nations Framework Convention on Climate Change</p>
              <p className="text-md text-[#1774d1] font-bold mt-3">
                (UNFCCC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Expand/Collapse Button */}
  <div className="border-t border-gray-200 p-4 bg-gray-50">
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full flex items-center justify-center gap-2 text-[#1774d1] hover:text-blue-800 transition-colors duration-200 font-medium"
    >
      <span>{isExpanded ? 'Show Less' : 'Read Full Letter'}</span>
      {isExpanded ? (
        <ChevronUp className="w-5 h-5 transition-transform duration-200" />
      ) : (
        <ChevronDown className="w-5 h-5 transition-transform duration-200" />
      )}
    </button>
  </div>
</div>

      </section>

      {/* India MUN National Climate Conference Section */}
      <section className="pb-16 bg-white">
  {/* Welcome letter section */}
  <div className="min-h-[620px] max-w-7xl mx-auto border-2 rounded-xl overflow-hidden">
    <div className="p-4 md:p-8">
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Welcome letter by the President, India MUN</h3>
          
          {/* Preview content - always visible (first half) */}
          <div className="text-gray-700 text-xs text-justify">
            <p>
              <b>Dear Young Leaders, Esteemed Educators, and Honored Guests,</b>
              <br /><br />
              It is with immense joy and great anticipation that I welcome you to the National India Model United Nations Conference 2024. As the Founder and Executive President of India MUN, I am deeply inspired by the bright young minds gathering from all corners of our diverse nation. Your enthusiasm and dedication to addressing and taking action on the critical issues surrounding climate change and sustainability fill me with hope and confidence for our future.
              <br /><br />
              India is a young country, with more than 50% of our population under the age of 25. This youthful demographic is our greatest asset. I firmly believe in the power of youth to drive change, innovate, and lead with passion and purpose. The energy, creativity, and resilience that you bring to the table are exactly what we need to tackle the pressing challenges of our time.
            </p>
            
            {/* Collapsible content (second half) */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="mt-4">
                I envision the youth of our country as torchbearers in solving global challenges. Instead of adopting a victim mindset, I urge you to embrace an action mindset. Rise above the challenges not only for your own good but for the betterment of society, nature, and our planet at large. Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow.
                <br /><br />
                Our theme this year, <b>"Climate Action and Innovation: Financing a Sustainable Future,"</b> underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference. Over the two days on 27th and 28th July 2024, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.
                <br /><br />
                Our focus this year is twofold:
                <br />
                1. Loss and Damage Fund: Addressing the financial support from developed to developing countries for climate impacts.
                <br />
                2. Climate Innovations: Exploring innovative solutions that empower communities to build resilience against climate change effects.
                <br /><br />
                You will be participating in discussions within our carefully structured councils and committees:
                <br /><br />
                • Loss and Damage Fund Council:
                <br />
                ○ UNFCCC: Financing Mechanisms for the Loss and Damage Fund
                <br />
                ○ IPCC: Scientific Assessments and Reports on Climate Impacts
                <br />
                ○ GCF: Allocation and Distribution of Funds to Vulnerable Nations
                <br /><br />
                • Climate Innovation Council:
                <br />
                ○ UNEP: Promoting Innovative Climate Technologies
                <br />
                ○ World Bank Group: Financing Climate Innovation Projects
                <br />
                ○ UNDP: Empowering Communities through Climate Innovations
                <br /><br />
                To our esteemed advisors and guests, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders.
                <br /><br />
                As we move closer to the conference dates, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.
                <br /><br />
                Welcome to the <b>National India MUN Conference 2024</b>. Let us make these days memorable and impactful.
                <br /><br />
                Yours sincerely,
                <br />
                <br />
                <b>Gayatri Chauhan, <br />Founder and Executive President, <br />India Model United Nations</b>
              </p>
            </div>
          </div>
        </div>
        
        {/* Image for mobile - comes after text */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full hover:-translate-y-2">
            <div className="relative w-full pb-[140%] hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/programs/S21.webp"
                alt="India MUN President"
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Ms. Gayatri Chauhan</h3>
              <div className="space-y-1.5 mt-2">
                <p className="text-xs text-gray-600">Founder and CEO, BuzzOnEarth 
President, Gaia The Earth Foundation</p>
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
          <h3 className="py-8 text-xl md:text-2xl font-bold mb-4">Welcome letter by the President, India MUN</h3>
          
          {/* Preview content - always visible (first half) */}
          <div className="text-gray-700 text-sm text-justify">
            <p>
              <b>Dear Young Leaders, Esteemed Educators, and Honored Guests,</b>
              <br /><br />
              It is with immense joy and great anticipation that I welcome you to the National India Model United Nations Conference 2024. As the Founder and Executive President of India MUN, I am deeply inspired by the bright young minds gathering from all corners of our diverse nation. Your enthusiasm and dedication to addressing and taking action on the critical issues surrounding climate change and sustainability fill me with hope and confidence for our future.
              <br /><br />
              India is a young country, with more than 50% of our population under the age of 25. This youthful demographic is our greatest asset. I firmly believe in the power of youth to drive change, innovate, and lead with passion and purpose. The energy, creativity, and resilience that you bring to the table are exactly what we need to tackle the pressing challenges of our time.
            <br /><br />
            I envision the youth of our country as torchbearers in solving global challenges. Instead of adopting a victim mindset, I urge you to embrace an action mindset. Rise above the challenges not only for your own good but for the betterment of society, nature, and our planet at large. Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow.
                <br /><br />
                Our theme this year, <b>"Climate Action and Innovation: Financing a Sustainable Future,"</b> underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference. Over the two days on 27th and 28th July 2024, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.
                <br /><br />
            </p>
            
            {/* Collapsible content (second half) */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="mt-4">
                
                Our focus this year is twofold:
                <br />
                1. Loss and Damage Fund: Addressing the financial support from developed to developing countries for climate impacts.
                <br />
                2. Climate Innovations: Exploring innovative solutions that empower communities to build resilience against climate change effects.
                <br /><br />
                You will be participating in discussions within our carefully structured councils and committees:
                <br /><br />
                • Loss and Damage Fund Council:
                <br />
                ○ UNFCCC: Financing Mechanisms for the Loss and Damage Fund
                <br />
                ○ IPCC: Scientific Assessments and Reports on Climate Impacts
                <br />
                ○ GCF: Allocation and Distribution of Funds to Vulnerable Nations
                <br /><br />
                • Climate Innovation Council:
                <br />
                ○ UNEP: Promoting Innovative Climate Technologies
                <br />
                ○ World Bank Group: Financing Climate Innovation Projects
                <br />
                ○ UNDP: Empowering Communities through Climate Innovations
                <br /><br />
                To our esteemed advisors and guests, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders.
                <br /><br />
                As we move closer to the conference dates, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.
                <br /><br />
                Welcome to the <b>National India MUN Conference 2024</b>. Let us make these days memorable and impactful.
                <br /><br />
                Yours sincerely,
                <br />
                <br />
                <b>Gayatri Chauhan, <br />Founder and Executive President, <br />India Model United Nations</b>
              </p>
            </div>
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
                style={{ objectFit: 'cover' }}
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Ms. Gayatri Chauhan</h3>
              <div className="space-y-1.5 mt-2">
                <p className="text-xs text-gray-600">Founder and CEO, BuzzOnEarth 
President, Gaia The Earth Foundation</p>
              <p className="text-md text-[#1774d1] font-bold mt-3">
                (Executive President, India MUN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Expand/Collapse Button */}
    <div className="border-t border-gray-200 p-4 bg-gray-50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 text-[#1774d1] hover:text-blue-800 transition-colors duration-200 font-medium"
      >
        <span>{isExpanded ? 'Show Less' : 'Read Full Letter'}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 transition-transform duration-200" />
        ) : (
          <ChevronDown className="w-5 h-5 transition-transform duration-200" />
        )}
      </button>
    </div>
  </div>
</section>

      {/* The Inaugural Chapter Section */}
      <section className="py-16 bg-gradient-to-b from-[#000000] to-[#002e41]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1774d1] mb-4">
              The Inaugural Chapter
            </h2>
            <h3 className="text-md md:text-lg lg:text-xl text-[#1774d1] mb-8">
              India MUN National Climate Conference 2024
            </h3>
          </div>

          <div className="max-w-7xl mx-auto">
            <p className="text-white text-sm md:text-base mb-8 text-center leading-relaxed">
              The inaugural edition of the India MUN National Climate Conference marked a defining moment in youth-led climate action. With over 2,400+ bright young minds, the event brought together global climate leaders, policy influencers, innovators, and changemakers for an immersive day of purpose-driven dialogue and collaboration. The conference featured three enriching panel discussions, each exploring the intersection of youth with <span className="font-semibold">climate regeneration, innovation, and leadership</span>.
            </p>

            <div className="bg-black/50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <p className="text-[#1774d1] text-sm md:text-base text-center leading-relaxed">
                The event commenced with an invocation by <span className="font-semibold">Gayatri Chauhan, Executive President – India MUN</span>, with an empowering message of youth-led transformation and set a visionary tone for the days ahead. The conference was honoured by the presence of <span className="font-semibold">Ovais Sarmad, former Deputy Executive Secretary of the UNFCCC</span>, who addressed the delegates with a call for decisive climate leadership. Adding to the event's global stature, <span className="font-semibold">Erik Solheim, Norwegian diplomat and former Under-Secretary-General of the UNEP</span>, shared insights on multilateral cooperation and youth-led transformation. Together, these distinguished voices underscored India MUN's vision of becoming a prestigious global institution where India's youth lead the world in sustainability, diplomacy, and innovation.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl text-gray-300 mb-4">
                Below are the highlights of each panel and their eminent speakers:
              </h4>
            </div>
          </div>
        </div>
      </section>


      {/* UN Participation Section */}
      <section className="py-8 mt-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                UNITED NATIONS' PARTICIPATION
              </h2>
              <p className="text-[#1774d1] font-semibold text-lg md:text-xl">
                Invocation - Esteemed Leadership & Mentorship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Ovais Sarmad Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[60%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c2.webp"
                    alt="Mr. Ovais Sarmad"
                    fill
                    className="object-fill"
                    priority
                  />
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Ovais Sarmad</h3>
                  <p className="text-sm text-gray-600 mb-1">Former Deputy Executive Secretary</p>
                  <p className="text-sm text-gray-600">United Nations Framework Convention on Climate Change</p>
                  <p className="text-sm text-[#1774d1] font-medium mt-2">(UNFCCC)</p>
                </div>
              </motion.div>

              {/* Erik Solheim Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[60%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                     src="/images/Conference/c3.webp"
                    alt="Mr. Erik Solheim"
                    fill
                    className="object-fit"
                    priority
                  />
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Erik Solheim</h3>
                  <p className="text-sm text-gray-600 mb-1">Norwegian Diplomat, Peace Negotiator, Former Executive</p>
                  <p className="text-sm text-gray-600">Director, United Nations Environment Program</p>
                  <p className="text-sm text-[#1774d1] font-medium mt-2">(UNEP)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Panel Section */}
      <section className="py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className=" mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                LEADERSHIP PANEL
              </h2>
              <p className="text-[#1774d1] text-lg font-semibold md:text-xl">
                Leadership and Youth - Building Responsible Leaders of Tomorrow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Gayatri Chauhan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c4.webp"
                    alt="Ms. Gayatri Chauhan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Gayatri Chauhan</h3>
                  <p className="text-xs text-gray-600">Founder and CEO</p>
                  <p className="text-xs text-[#1774d1] font-medium">(BuzzOnEarth)</p>
                </div>
              </motion.div>

              {/* B.N Ramakrishnan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c5.webp"
                    alt="Mr. B.N Ramakrishnan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. B.N Ramakrishnan</h3>
                  <p className="text-xs text-gray-600">Senior Director</p>
                  <p className="text-xs text-[#1774d1] font-medium">(ISRO)</p>
                </div>
              </motion.div>

              {/* Prof. Subi Rangan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c6.webp"
                    alt="Prof. Subi Rangan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Prof. Subi Rangan</h3>
                  <p className="text-xs text-gray-600">Professor of Strategy & Management</p>
                  <p className="text-xs text-[#1774d1] font-medium">(INSEAD Paris)</p>
                </div>
              </motion.div>

              {/* Mr. Mahesh Ramanujam Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c7.webp"
                    alt="Mr. Mahesh Ramanujam"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Mahesh Ramanujam</h3>
                  <p className="text-xs text-gray-600">Former President, U.S. Green Building Council & CEO</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Global Network for Zero)</p>
                </div>
              </motion.div>

              {/* Mr. Nimrod Mon Brokman Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c8.webp"
                    alt="Mr. Nimrod Mon Brokman"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Nimrod Mon Brokman</h3>
                  <p className="text-xs text-gray-600">Founder, Behavioral Foresight, Leadership coach</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Rajasthan Royals IPL)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full overflow-hidden">
  <Image
    src="/images/Conference/c9.webp"
    alt="Conference Highlights"
    width={1920}
    height={1080} // or your actual aspect ratio
    className="w-full h-auto"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
</section>



      {/* Innovation Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                INNOVATION PANEL
              </h2>
              <p className="text-[#1774d1] text-lg font-semibold md:text-xl">
                Innovation and Youth - Nurturing Creativity and Entrepreneurship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Mr. Ramanan Ramanathan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G7.webp"
                    alt="Mr. Ramanan Ramanathan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Ramanan Ramanathan</h3>
                  <p className="text-xs text-gray-600">Former Additional Secretary, NITI Aayog</p>
                  <p className="text-xs text-gray-600">Former Mission Director, Atal Innovation Mission</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Atal Innovation Mission)</p>
                </div>
              </motion.div>

              {/* Dr. Babu Padmanabhan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G10.webp"
                    alt="Dr. Babu Padmanabhan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dr. Babu Padmanabhan</h3>
                  <p className="text-xs text-gray-600">Founder, Managing Director, STEER World</p>
                  <p className="text-xs text-gray-600">Founder, UnWOOD; Director, Phitons</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Engineering Innovation)</p>
                </div>
              </motion.div>

              {/* Ms. Reshmi Vasudevan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c10.webp"
                    alt="Ms. Reshmi Vasudevan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Reshmi Vasudevan</h3>
                  <p className="text-xs text-gray-600">Chief Technology Officer</p>
                  <p className="text-xs text-gray-600">Shell Business Operations</p>
                  <p className="text-xs text-[#1774d1] font-medium">(SHELL)</p>
                </div>
              </motion.div>

              {/* Mr. Shiva Subramanian Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c11.webp"
                    alt="Mr. Shiva Subramanian"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Shiva Subramanian</h3>
                  <p className="text-xs text-gray-600">Managing Partner</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Connect Ventures Group)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full overflow-hidden">
  <Image
    src="/images/Conference/c12.webp"
    alt="Conference Highlights"
    width={1920}
    height={1080} // or your actual aspect ratio
    className="w-full h-auto"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
</section>


      {/* Regeneration Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                REGENERATION PANEL
              </h2>
              <p className="text-[#1774d1] text-lg font-semibold md:text-xl">
                Forest and Youth - Leading Regeneration and Conservation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             

              {/* Mr. Venktesh Raghwendra Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G13.webp"
                    alt="Mr. Venktesh Raghwendra"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Venktesh Raghwendra</h3>
                  <p className="text-xs text-gray-600">Vice President, Safe Water Network</p>
                  <p className="text-xs text-gray-600">Advisor/Trainer</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Govt of India/Govt of Karnataka)</p>
                </div>
              </motion.div>

              {/* Ms. Liza Goldberg Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c13.webp"
                    alt="Ms. Liza Goldberg"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Liza Goldberg</h3>
                  <p className="text-xs text-gray-600">Lead - Google Cloud to Classroom, Nat Geo Explorer</p>
                  <p className="text-xs text-gray-600">Biospheric Research Scientist</p>
                  <p className="text-xs text-[#1774d1] font-medium">(NASA)</p>
                </div>
              </motion.div>

              {/* Air Vice Marshal (Dr) Ajit Tyagi Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c14.webp"
                    alt="Air Vice Marshal (Dr) Ajit Tyagi"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Air Vice Marshal (Dr) Ajit Tyagi</h3>
                  <p className="text-xs text-gray-600">Former Director General (DG) - (IMD)</p>
                  <p className="text-xs text-gray-600">Chairman, IDC Foundation; Patron India Water Foundation</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Govt of India)</p>
                </div>
              </motion.div>

              {/* Ms. Neha Raghav Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c15.webp"
                    alt="Ms. Neha Raghav"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Neha Raghav</h3>
                  <p className="text-xs text-gray-600">Director, Environment Education</p>
                  <p className="text-xs text-[#1774d1] font-medium">(WWF-India)</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full overflow-hidden">
  <Image
    src="/images/Conference/c16.webp"
    alt="Conference Highlights"
    width={1920}
    height={1080} // or your actual aspect ratio
    className="w-full h-auto"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
</section>


      {/* The grand finale */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1774d1] mb-2">
          The Grand Finale- Youth at the Helm
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          India MUN National Climate Conference 2024
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16">
        {/* Left side - Conference Image */}
        <div className="relative w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden shadow-xl lg:col-span-2 group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
          <Image
            src="/images/Conference/c17.webp"
            alt="India MUN National Climate Conference"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-300 group-hover:from-black/40" />
          
          {/* Optional overlay content for hover effect */}
          <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">The Grand Finale</h3>
              <p className="text-sm">India MUN 2025</p>
            </div>
          </div>
        </div>

        {/* Right side - Theme Box */}
        <div className="relative w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] bg-white rounded-xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-100">
            <Image
              src="/images/Conference/c1.webp"
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 rounded-xl transition-all duration-300 group-hover:bg-black/30"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8">
            <div className="text-center mb-6">
              <p className="text-white font-medium mb-2 text-sm md:text-base">Conference Dates:</p>
              <p className="text-lg md:text-xl font-bold text-[#5ce1e6] transition-all duration-300 group-hover:text-[#4fd1d6]">
                27th - 28th July, 2024
              </p>
            </div>

            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-blue-100">
                THEME
              </h3>
              <div className="h-1 w-20 md:w-30 mx-auto bg-gradient-to-r mb-4 from-blue-200 via-blue-400 to-blue-300 rounded-full transition-all duration-300 group-hover:w-32"></div>
              <div className="space-y-2">
                <p className="py-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 group-hover:text-blue-100">
                  Climate Action and Innovation
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-cyan-200">
                  Financing a Sustainable Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl text-justify mx-auto">
        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
          From powerful panels to purpose-driven policy debates, the <b>India MUN National Climate Conference 2024</b> culminated in a remarkable celebration of youth leadership and global vision. What began as an ambitious gathering has now ignited a nationwide movement—one where the next generation doesn't wait for change, but leads it.
        </p>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          We reflect with pride and purpose on two transformative days of action-driven dialogue, bold thinking, and solution-oriented collaboration. Guided by the powerful theme "Climate Action and Innovation: Financing a Sustainable Future," this conference was not just about discussion—it was about defining the future.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Scroll effect section*/}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1774d1] text-center mb-16">
              At the heart of this year's conference were<br />two critical focus areas:
            </h2>

            <div className="relative py-4">
              {/* Vertical Timeline Line */}
              <div 
                ref={timelineRef}
                className="absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-2rem)] w-[2px] bg-black top-4" 
              />

              {/* Timeline Points */}
              <div ref={timelinePointsRef} className="space-y-24">
                {/* Loss and Damage Fund */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12" /> {/* Spacer */}
                  <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                                  <Image
                                                      src="/images/Conference/c30.webp"
                                                      alt="Access to a Powerful Ecosystem"
                                                      width={96}
                                                      height={96}
                                                      className="w-full h-full object-cover"
                                                  />
                                              </div>
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loss and Damage Fund</h3>
                    <p className="text-gray-700 text-sm">
                      Addressing climate justice by advancing financial mechanisms through which developed nations support vulnerable countries facing irreversible climate impacts.
                    </p>
                  </div>
                </div>

                {/* Climate Innovations */}
                <div className="flex items-center justify-between">
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Innovations</h3>
                    <p className="text-gray-700 text-sm">
                      Harnessing the power of technology and entrepreneurship to build community resilience and drive sustainable development at scale.
                    </p>
                  </div>
                  <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                                  <Image
                                                      src="/images/Conference/c31.webp"
                                                      alt="Access to a Powerful Ecosystem"
                                                      width={96}
                                                      height={96}
                                                      className="w-full h-full object-cover"
                                                  />
                                              </div>
                  <div className="w-5/12" /> {/* Spacer */}
                </div>

                {/* Loss and Damage Fund Council */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12" /> {/* Spacer */}
                  <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                                  <Image
                                                      src="/images/Conference/c33.webp"
                                                      alt="Access to a Powerful Ecosystem"
                                                      width={96}
                                                      height={96}
                                                      className="w-full h-full object-cover"
                                                  />
                                              </div>
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loss and Damage Fund Council</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>UNFCCC: Designing equitable financing mechanisms</li>
                      <li>IPCC: Presenting climate impact assessments to guide policy</li>
                      <li>GCF (Green Climate Fund): Mapping fund allocation to vulnerable nations</li>
                    </ul>
                  </div>
                </div>

                {/* Climate Innovation Council */}
                <div className="flex items-center justify-between">
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Innovation Council</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                      <li>UNEP: Advancing climate-smart technologies</li>
                      <li>World Bank Group: Mobilizing capital for climate innovation</li>
                      <li>UNDP: Enabling community-led sustainable solutions</li>
                    </ul>
                  </div>
                  <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                                  <Image
                                                      src="/images/Conference/c32.webp"
                                                      alt="Access to a Powerful Ecosystem"
                                                      width={96}
                                                      height={96}
                                                      className="w-full h-full object-cover"
                                                  />
                                              </div>
                  <div className="w-5/12" /> {/* Spacer */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Finale Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-justify">
            <div className="space-y-8">
              {/* Opening Ceremony */}
              <div className="prose max-w-none text-sm">
                
                <p className="text-gray-700 leading-relaxed">
                  <b>The Grand Finale - Opening Ceremony </b> of the India MUN National Climate Conference 2024 began with a moment of historic significance, as <span className="font-semibold">Mr. Ovais Sarmad, Secretary-General of India MUN 2024</span> and Former Deputy Executive Secretary of the UNFCCC, formally <span className="font-semibold">declared the conference open</span>, marking the commencement of a powerful youth-led movement for climate action and global cooperation. In his ceremonial address, he called upon delegates to rise as ambassadors of change, bridging diplomacy with urgency in the face of the climate crisis.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  This was followed by the <span className="font-semibold">Keynote Address by the Guest of Honor, Dr. Shakila Shamsu, OSD for the New Education Policy, Ministry of Education, Government of India</span>. She underscored the critical role of progressive education in nurturing climate-aware, solution-driven young leaders who can drive impact across communities and nations.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The Opening Ceremony culminated with a visionary Welcome and Closing Address by <span className="font-semibold">Ms. Gayatri Chauhan, Executive President of India MUN</span>. She reminded delegates that every discussion, every debate, and every decision made at the conference carries the power to positively shape the future of our planet. With heartfelt conviction, she urged the young leaders to carry forward the spirit of the conference, continuing their journey as bold, compassionate, and solution-driven sustainability champions well beyond the event.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Over 27th and 28th July out of 2,400+ student participants, 1000 selected final delegates stepped into the shoes of global leaders, engaging in rigorous debates, formulating policies, and co-creating solutions that mirror the urgency and scale of our climate challenges.
                </p>
              </div>

              {/* Image Carousel */}
              <div 
  className="relative w-full mt-12 overflow-hidden"
  onMouseEnter={pauseAutoPlay}
  onMouseLeave={resumeAutoPlay}
>
  <div className="relative flex items-center justify-center px-4 sm:px-8 md:px-12">
    {/* Previous Button */}
    <motion.button 
      onClick={previousSlide}
      className="absolute left-2 sm:left-4 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label="Previous slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>

    {/* Carousel Images */}
    <div className="relative w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 py-4 sm:py-6 md:py-8">
      {/* Previous Image (Smaller) - Hidden on mobile */}
      <motion.div 
        className="relative hidden sm:block w-[20%] md:w-[25%] aspect-[4/3] opacity-50 hover:opacity-75 cursor-pointer"
        initial={{ opacity: 0, x: -100, rotateY: -45 }}
        animate={{ opacity: 0.5, x: 0, rotateY: 0 }}
        transition={{ 
          duration: 0.7,
          ease: [0.32, 0.72, 0, 1],
          opacity: { duration: 0.4 }
        }}
        key={visibleImages.previous.src}
        whileHover={{ 
          scale: 1.05, 
          opacity: 0.75,
          transition: { duration: 0.2 } 
        }}
        onClick={previousSlide}
      >
        <Image
          src={visibleImages.previous.src}
          alt={visibleImages.previous.alt}
          fill
          className="object-cover rounded-lg sm:rounded-xl"
          sizes="(max-width: 768px) 0px, (max-width: 1024px) 20vw, 25vw"
        />
      </motion.div>

      {/* Current Image (Larger) */}
      <motion.div 
        className="relative w-[90%] sm:w-[50%] md:w-[45%] aspect-[4/3] z-10"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.5 }
        }}
        key={visibleImages.current.src}
        layoutId="mainImage"
      >
        <Image
          src={visibleImages.current.src}
          alt={visibleImages.current.alt}
          fill
          className="object-cover rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl"
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 45vw"
        />
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {[0, 1, 2].map((index) => (
                          <motion.div
                            key={index}
                            className={`h-2 rounded-full ${
                              visibleImages.current === carouselImages[index]
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                            initial={{ width: visibleImages.current === carouselImages[index] ? 16 : 8 }}
                            animate={{ 
                              width: visibleImages.current === carouselImages[index] ? 16 : 8,
                              scale: visibleImages.current === carouselImages[index] ? 1.1 : 1
                            }}
                            transition={{ 
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

      {/* Next Image (Smaller) - Hidden on mobile */}
      <motion.div 
        className="relative hidden sm:block w-[20%] md:w-[25%] aspect-[4/3] opacity-50 hover:opacity-75 cursor-pointer"
        initial={{ opacity: 0, x: 100, rotateY: 45 }}
        animate={{ opacity: 0.5, x: 0, rotateY: 0 }}
        transition={{ 
          duration: 0.7,
          ease: [0.32, 0.72, 0, 1],
          opacity: { duration: 0.4 }
        }}
        key={visibleImages.next.src}
        whileHover={{ 
          scale: 1.05, 
          opacity: 0.75,
          transition: { duration: 0.2 } 
        }}
        onClick={nextSlide}
      >
        <Image
          src={visibleImages.next.src}
          alt={visibleImages.next.alt}
          fill
          className="object-cover rounded-lg sm:rounded-xl"
          sizes="(max-width: 768px) 0px, (max-width: 1024px) 20vw, 25vw"
        />
      </motion.div>
    </div>

    {/* Next Button */}
    <motion.button 
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label="Next slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
  </div>
</div>

              {/* High-Level Panel */}
              <div className="prose max-w-none mt-12 text-sm">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The culmination of the General Assembly Plenary was marked by a landmark moment—a High-Level Panel featuring distinguished diplomats and global climate leaders, before whom the final resolutions, crafted through two days of rigorous deliberations, were formally presented by our delegates.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Leading the panel was <span className="font-semibold">Mr. Ovais Sarmad</span>, Secretary-General for the event, a valued Governing Council member of India MUN, and former Deputy Executive Secretary of the United Nations Framework Convention on Climate Change (UNFCCC). His decades of experience in global climate negotiations brought gravitas and vision to the forum, offering delegates a rare opportunity to engage directly with one of the world's foremost climate diplomats.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The panel included <span className="font-semibold">Ms. Gayatri Chauhan</span>, Founder and CEO of BuzzOnEarth and Gaia The Earth Foundation, and the visionary force behind India's largest sustainability platforms. Her leadership continues to empower young climate leaders and build global networks for ecosystem restoration. Joining her were other eminent figures: <span className="font-semibold">Mr. Rajendra Shende, former Director at UNEP and Coordinating Lead Author at the IPCC</span>, who shared insights from decades at the frontlines of environmental diplomacy; <span className="font-semibold">Dr. Shakila Shamsu, an esteemed educationist and architect of India's New Education Policy</span>, whose vision champions climate literacy and youth empowerment; <span className="font-semibold">Dr. Babu Padmanabhan, Managing Director of STEER World</span>, renowned for his groundbreaking work in sustainable engineering; and <span className="font-semibold">Ms. Gouthami Agular, Founder and CEO of Ormex</span>, a pioneer in agricultural carbon removal technologies.
                </p>

                <p className="text-[#058dd8] font-bold leading-relaxed mt-6">
                  This landmark presentation not only validated the intellectual rigor of our young delegates but also symbolized a bridge between youth-driven climate diplomacy and global policy leadership.
                </p>

                <p className="text-[#058dd8] font-bold leading-relaxed mt-6">
                  The unprecedented opportunity allowed student delegates to showcase their policy solutions directly to the United Nations Dignitaries and other global institutions. For a Model UN, this was no ordinary simulation—it was a real-world exchange of ideas with those shaping international climate policy, reaffirming India MUN's standing as a globally recognized platform for youth-led climate action and diplomacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* High Level Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                HIGH LEVEL PANEL
              </h2>
              <p className="text-[#1774d1] text-center text-lg md:text-xl">
                 India MUN National Climate Conference 2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             

              {/* Mr. Venktesh Raghwendra Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G2.webp"
                    alt="Mr. Ovais Sarmad"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Ovais Sarmad</h3>
                  <p className="text-xs text-gray-600">Secretary-General, India MUN 2024</p>
                  <p className="text-xs text-gray-600">Former Deputy Executive Secretary</p>
                  <p className="text-xs text-[#1774d1] font-bold">(UNFCCC)</p>
                </div>
              </motion.div>

              {/* Mr. Rajendra Shende Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c18.webp"
                    alt="Mr. Rajendra Shende"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Rajendra Shende</h3>
                  <p className="text-xs text-gray-600">High level Expert, India MUN 2024</p>
                  <p className="text-xs text-gray-600">Former coordinating lead author IPCC</p>
                  <p className="text-xs text-gray-600">Former Director</p>
                  <p className="text-xs text-[#1774d1] font-medium">(UNEP)</p>
                </div>
              </motion.div>

              {/* Dr. Shakila T. Shamsu Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G6.webp"
                    alt="Dr. Shakila T. Shamsu"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dr. Shakila T. Shamsu</h3>
                  <p className="text-xs text-gray-600">High level Expert, India MUN</p>
                  <p className="text-xs text-gray-600">Former OSD (New Education Policy)</p>
                  <p className="text-xs text-gray-600">Department of Higher Education, Ministry of Education</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Government of India)</p>
                </div>
              </motion.div>

              {/* Dr. Babu Padmanabhan Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/member/G10.webp"
                    alt="Dr. Babu Padmanabhan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Dr. Babu Padmanabhan</h3>
                  <p className="text-xs text-gray-600">High level Expert, India MUN</p>
                  <p className="text-xs text-gray-600">Founder & Managing Director, STEER World</p>
                  <p className="text-xs text-gray-600">Founder, UnWOOD; Director, Phitons</p>
                  <p className="text-xs text-[#1774d1] font-medium">(Engineering Innovation)</p>
                </div>
              </motion.div>

              {/* Ms. Goulnara AGUIAR Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[100%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c19.webp"
                    alt="Ms. Goulnara AGUIAR"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Goulnara AGUIAR</h3>
                  <p className="text-xs text-gray-600">High level Expert, India MUN</p>
                  <p className="text-xs text-gray-600">Founder & CEO</p>
                  <p className="text-xs text-[#1774d1] font-medium">Leading ClimateTech</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full bg-white">
  <div className="w-full">
    <Image
      src="/images/Conference/c20.webp"
      alt="Conference Highlights"
      width={1920} // or the actual width of your image
      height={1080} // or the actual height for correct aspect ratio
      className="w-full h-auto"
      priority
    />
  </div>
</section>


      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1774d1] mb-4">
        Award Ceremony
      </h2>
      <p className="text-lg md:text-xl text-gray-700">
        India MUN National Climate Conference 2024
      </p>
    </div>
    
    {/* YouTube Video Section */}
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <iframe
          src="https://www.youtube.com/embed/zQNjt7ZSox8?autoplay=1&mute=0&rel=0&modestbranding=1"
          title="Award Ceremony | India MUN National Climate Conference 2024"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      
      {/* Optional: Video description */}
      <div className="text-center mt-6">
        <p className="text-blue-200 text-sm md:text-base">
          Celebrating excellence and innovation at the India MUN National Climate Conference 2024
        </p>
      </div>
    </div>
  </div>
</section>    

      <section className="relative w-full bg-white overflow-hidden py-8">
  <div className="w-full max-w-[700px] mx-auto">
    <Image
      src="/images/Conference/c21.webp"
      alt="Conference Highlights"
      width={1000}
      height={600}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>



   {/* Council Awards Section */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1774d1] mb-4">
          Council Awards
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          India MUN National Climate Conference 2024
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Loss and Damage Fund Council */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Loss and Damage Fund Council
          </h3>
          <div className="space-y-4">
            {/* Best Delegate */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-yellow-400 mb-1">BEST DELEGATE</div>
                  <div className="text-lg font-bold mb-1">Pranshu Borra</div>
                  <div className="text-sm opacity-90">Sri Sri Open Minds International School</div>
                </div>
              </div>
            </div>

            {/* Outstanding Delegate */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-[#1774d1] flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-[#1774d1] mb-1">OUTSTANDING DELEGATE</div>
                  <div className="text-lg font-bold mb-1">Shrey Thakoor</div>
                  <div className="text-sm opacity-90">Sri Sri Ravishankar Vidya Mandir</div>
                </div>
              </div>
            </div>

            {/* Honourable Mention */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-gray-400 mb-1">HONOURABLE MENTION</div>
                  <div className="text-lg font-bold mb-1">Swaroop Alok kumar</div>
                  <div className="text-sm opacity-90">Sri Sri Ravishankar Vidya Mandir</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Innovation Council */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Climate Innovation Council
          </h3>
          <div className="space-y-4">
            {/* Best Delegate */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-yellow-400 mb-1">BEST DELEGATE</div>
                  <div className="text-lg font-bold mb-1">Sarang Srikanth</div>
                  <div className="text-sm opacity-90">Bhavan's Mandir Vidyalayam</div>
                </div>
              </div>
            </div>

            {/* Outstanding Delegate */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-[#1774d1] flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-[#1774d1] mb-1">OUTSTANDING DELEGATE</div>
                  <div className="text-lg font-bold mb-1">Navya Jain</div>
                  <div className="text-sm opacity-90">VPMS International School</div>
                </div>
              </div>
            </div>

            {/* Honourable Mention */}
            <div className="bg-gradient-to-br from-[#000000] via-[#002e41] to-black rounded-xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex-grow">
                  <div className="text-xs font-bold text-gray-400 mb-1">HONOURABLE MENTION</div>
                  <div className="text-lg font-bold mb-1">Lakshmi Sahana Verma</div>
                  <div className="text-sm opacity-90">VPMS International School</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Committee Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1774d1] mb-4">
                Committee Awards
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                India MUN National Climate Conference 2024
              </p>
            </div>

            {/* GCF Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                Green Climate Fund (GCF)
              </h3>
              <AwardsCarousel
                delegates={[
                  {
                    name: "Srushti Nimavat",
                    school: "Kokilaben Dhirubhai Ambani Reliance Foundation School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Maanvi Sharma",
                    school: "Birla Open Minds International School",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Devashree Tripathi",
                    school: "Global Indian International School Hadapsar",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Raja Mohana Moukthika",
                    school: "Birla Open Minds International School",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Prashitha Sivanupandian",
                    school: "Pushpalata Vidya Mandir",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Amrith",
                    school: "Presidency School R.T.Nagar",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Akshay Prabhu",
                    school: "Sri Sri Ravishankar Vidya Mandir, Borivali East",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Shrey Thakoor",
                    school: "Sri Sri Ravishankar Vidya Mandir, Borivali East",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Keerthana Dhananathan",
                    school: "Babaji Vidhyashram School, Sholinganallur",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Rudra Kamat",
                    school: "Sri Sri Ravishankar Vidya Mandir, Borivali East",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Pranav Sunil",
                    school: "CMR National Public School",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Swaroop Alokkumar Dwivedi",
                    school: "Sri Sri Ravishankar Vidya Mandir, Borivali East",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>

            {/* IPCC Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                Intergovernmental Panel on Climate Change (IPCC)
              </h3>
              <AwardsCarousel
                delegates={[
                   {
                    name: "Mohammad Saalim Bhat",
                    school: "Birla Open Minds International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Jasleen Kaur",
                    school: "Kokilaben Dhirubhai Ambani Reliance Foundation School",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "S K Dharun",
                    school: "Kalvi Intercontinental School",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Sheetal",
                    school: "Air Force School ChandanNagar",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Arnav Kulkarni",
                    school: "Sanjay Ghodawat International School Kolhapur",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Rohnish Middha",
                    school: "St Peter's College, Agra",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Akshara Jain",
                    school: "Sri Sri Ravishankar Vidya Mandir, Borivali East",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Neha S Nair",
                    school: "GoldenBee Global School",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Pranav P Nair",
                    school: "National Public School Hosur Road",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Supratheek Reddy",
                    school: "Indus Valley International school",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Yashita Singh",
                    school: "Goldenbee Global School",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>

            {/* UNDP Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                United Nations Development Programme (UNDP)
              </h3>
              <AwardsCarousel
                delegates={[
                  {
                    name: "Rujhan Agrawal",
                    school: "Sanjay Ghodawat International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Priyanka",
                    school: "Birla Open Minds International School",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Sriram SMR",
                    school: "Golden Bee Global School",
                    award: "HONOURABLE MENTION"
                  },
                
                  {
                    name: "Gadiraju Purnima Yogya",
                    school: "Birla Open Minds International School",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Yash Kunal Dalvi",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Keerthana S",
                    school: "Presidency School RT Nagar",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Taneesha Das",
                    school: "Oasis International School, Bangalore ",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Shreyas Jha",
                    school: "St. John’s Public School",
                    award: "HONOURABLE MENTION"
                  },
                  
                  {
                    name: "Ritwik S",
                    school: "Paramekkavu Vidya Mandir",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Advaitha Cantam",
                    school: "Delhi Public School, Nadergul, Hyderabad",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>

            {/* UNEP Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                United Nations Environment Programme (UNEP)
              </h3>
              <AwardsCarousel
                delegates={[
                  {
                    name: "Snigdha Ch",
                    school: "Silver Oaks International School, Oakdale",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Aanyaa Garatikar",
                    school: "NES International School, Mumbai",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Dhyey Bhatt",
                    school: "Kokilaben Dhirubhai Ambani Reliance Foundation School",
                    award: "HONOURABLE MENTION"
                  },
                
                  {
                    name: "Aliza farooqui",
                    school: "St. Thomas School Indirapuram",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Ishan Ninad Kelkar",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Sukhman Sahaj Kaur",
                    school: "Nosegay Public School",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Rudransh Sharma",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Sayandeep Ghosh",
                    school: "Presidency School RT Nagar",
                    award: "HONOURABLE MENTION"
                  },
                  
                  {
                    name: "Avani Gadda Tanush Reddy",
                    school: "Birla Open Minds International School",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Tapan Jain",
                    school: "St. Thomas School Indirapuram",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>

            {/* UNFCCC Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                United Nations Framework Convention on Climate Change (UNFCCC)
              </h3>
              <AwardsCarousel
                delegates={[
                  {
                    name: "Arangam Harshini",
                    school: "Bhadrachalam Public School & Junior College",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Tanya Sangoi",
                    school: "NES International School, Mumbai",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Amogh Ajay",
                    school: "NES International School, Mumbai",
                    award: "HONOURABLE MENTION"
                  },
                
                  {
                    name: "Tejaswini Singh",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Syeda Rida Asif",
                    school: "Presidency School RT Nagar",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Hitansh Solanki",
                    school: "Global Indian International School, Hadapsar",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Tanishka Karkhanis",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Sreehan Reddy Majjigapu",
                    school: "The Hyderabad Public School, Warangal",
                    award: "HONOURABLE MENTION"
                  },
                  
                  {
                    name: "Pranshu Borra",
                    school: "Birla Open Minds International School",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Vedant Badkas",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>

            {/* World Bank Group Awards */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                World Bank Group
              </h3>
              <AwardsCarousel
                delegates={[
                  {
                    name: "Aarush Padhye",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Aashrita S",
                    school: "Babaji Vidhyashram School",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Rithvik Sivaram Chandrabhatta",
                    school: "Birla Open Minds International School",
                    award: "HONOURABLE MENTION"
                  },
                
                  {
                    name: "Saadhna Manikandan",
                    school: "Study L'ecole Internationale",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Ishika Pravin Yelore",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Navya Jain",
                    school: "VSPK International School",
                    award: "BEST DIPLOMAT"
                  },
                  {
                    name: "Parvathy Menon",
                    school: "Bhavans Vidya Mandir Eroor",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Aayna Dixit",
                    school: "Delhi Public School Raipur",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Pritam Mahato",
                    school: "Presidency School RT Nagar",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "A.S.Gunavarshini",
                    school: "Kalvi International Public School",
                    award: "BEST SPEAKER"
                  },
                  {
                    name: "Raghav Parte",
                    school: "Sri Sri Ravishankar Vidya Mandir (SSRVM), Borivali East",
                    award: "BEST DIPLOMAT"
                  },
                ]}
                isReverse={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      

      {/* The Executive Board Section */}
      <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/Conference/c1.webp"
      alt="UN Background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
  
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-2 sm:border-4 border-white rounded-full" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border border-white sm:border-2 rounded-full" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
        >
          India Model United Nations
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2"
        >
          National Climate Conference 2024
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
        >
          The Executive Board
        </motion.h1>
      </div>

      {/* Executive Board Members */}
      <div className="space-y-6 sm:space-y-8">
        {/* First Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full"
        >
          {/* Mobile: Horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 px-2">
            {[
              { name: "Balaji", image: "EB1" },
              { name: "Prajwal N Prasad", image: "EB2" },
              { name: "Samhitha", image: "EB3" },
              { name: "Prabha Jha", image: "EB4" },
              { name: "Jiny Jawa", image: "EB5" },
              { name: "Anirudh Vijayan", image: "EB6" },
              { name: "Ansh Bansal", image: "EB7" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center flex-shrink-0 min-w-[80px]"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                  <Image
                    src={`/images/Conference/${member.image}.webp`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-white font-medium text-xs text-center leading-tight">{member.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Tablet and Desktop: Flexbox with wrapping */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { name: "Balaji", image: "EB1" },
              { name: "Prajwal N Prasad", image: "EB2" },
              { name: "Samhitha", image: "EB3" },
              { name: "Prabha Jha", image: "EB4" },
              { name: "Jiny Jawa", image: "EB5" },
              { name: "Anirudh Vijayan", image: "EB6" },
              { name: "Ansh Bansal", image: "EB7" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                  <Image
                    src={`/images/Conference/${member.image}.webp`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base text-center max-w-[100px] sm:max-w-[120px] leading-tight">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full"
        >
          {/* Mobile: Horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 px-2">
            {[
              { name: "Vridhi Parakh", image: "EB8" },
              { name: "Kaushik", image: "EB9" },
              { name: "Rajat Sharma", image: "EB10" },
              { name: "Pratyush Rao", image: "EB11" },
              { name: "Pratheek Kashyap", image: "EB13" },
              { name: "Rahul Satish", image: "EB14" },
              { name: "Samiksha N", image: "EB12" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center flex-shrink-0 min-w-[80px]"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                  <Image
                    src={`/images/Conference/${member.image}.webp`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-white font-medium text-xs text-center leading-tight">{member.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Tablet and Desktop: Flexbox with wrapping */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { name: "Vridhi Parakh", image: "EB8" },
              { name: "Kaushik", image: "EB9" },
              { name: "Rajat Sharma", image: "EB10" },
              { name: "Pratyush Rao", image: "EB11" },
              { name: "Pratheek Kashyap", image: "EB13" },
              { name: "Rahul Satish", image: "EB14" },
              { name: "Samiksha N", image: "EB12" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                  <Image
                    src={`/images/Conference/${member.image}.webp`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-white font-medium text-sm md:text-base text-center max-w-[100px] sm:max-w-[120px] leading-tight">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Why Participate Section */}
            <section className="max-w-7xl mx-auto py-16 px-4">
              <motion.div
                className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-8 md:p-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="space-y-6">
                  {/* Communication & Public Speaking */}
                  <div className="flex items-start space-y-4">
                    
                    <div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Our heartfelt congratulations to all our <b>award winners and participants</b>—your hard work, passion, and commitment to creating meaningful change have truly shone throughout this transformative conference. We are immensely proud of each and every one of you. Thank you for being an integral part of the India MUN National Climate Conference 2024. Together, we are building the foundations for a more sustainable and resilient world.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-6">
                        We extend our deepest gratitude to our <b>Secretary-General, the esteemed High-Level Panel, distinguished speakers, Executive Board Members, Chairs, and Moderators,</b> whose leadership and insights elevated the discourse to new heights.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-6">
                        <b>A special thanks to our India MUN affiliated and participating schools</b> for their continued support, and to the delegates whose enthusiastic participation, thoughtful debates, and innovative solutions were the heartbeat of this event.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-6">
                        <b>To the parents and mentors—your unwavering encouragement has been invaluable.</b>
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-6">
                        Your collective contributions have made the India MUN National Climate Conference 2024 an outstanding success. We look forward to your continued involvement as we scale new horizons in climate leadership, innovation, and action.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="bg-white py-10">
                    
                                        {/* UN Logo */}
                                        <div className="flex justify-center mb-4">
                                            <div className="relative w-50 h-24">
                                                <Image
                                                    src="/images/logos/top1.webp"
                                                    alt="UN Logo"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center mb-16">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#1774d1] mb-4">
          India MUN National Conference 2025
        </h2>
        <button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-12 py-2 text-lg font-semibold rounded-xl min-w-[200px]">
                    Learn More
                </button>
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
