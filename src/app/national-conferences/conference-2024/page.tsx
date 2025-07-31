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
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">India <span className="text-blue-100 ">Model</span> United Nations</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 text-blue-100"
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
        className="py-20 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-blue-600">
              India's Biggest Climate MUN
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">India Model United Nations</span> is at the forefront of shaping the next generation of climate diplomats, policymakers and global sustainability leaders. As India's largest Climate MUN, the annual conference stands as a premier platform where the brightest young minds unite to engage in high-impact discussions on climate justice, sustainability, and international policy.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Following the success of the <span className="font-semibold">inaugural chapter</span> in April 2024, the <span className="font-semibold">Grand Finale of the India MUN National Climate Conference</span> was hosted on July 27-28, 2024, marking a powerful milestone in youth-led climate diplomacy.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* India MUN National Climate Conference Section */}
      <section className="py-16 bg-white">

        {/* Welcome letter section */}
        <div className="min-h-[620px] max-w-7xl mx-auto mt-15 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 border-2 rounded-xl mb-8 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Welcome letter by the President, India MUN</h3>
            <p className="text-gray-700 text-sm md:text-base">
              <b>Dear Delegates, Advisors, and Honored Guests,</b>
              <br /><br />
              It is with immense pride and great pleasure that I welcome you to the National India Model United Nations Conference 2024. As the Secretary-General of India MUN 2024, I am thrilled to see the convergence of bright young minds from across our diverse nation, united by a common purpose: to address and take action on the critical issues surrounding climate change and sustainability.
              <br /><br />
              India MUN stands as the only pan-India Model United Nations conference dedicated to moving beyond activism and towards tangible action. This year, our theme, <b>"Loss and Damage Fund: Addressing Climate Justice through Financial Support from Developed to Developing Countries"</b> and <b>"Climate Innovations: Exploring Innovative Solutions that Empower Communities to Build Resilience against Climate Change Effects,"</b> underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference. Over the next two days, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.
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
          <div className="flex items-center justify-center col-span-1">
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src="/images/member/G2.webp"
                alt="India MUN President"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

      </section>

      {/* India MUN National Climate Conference Section */}
      <section className="py-16 bg-white">
        

        {/* Welcome letter section */}
        <div className="min-h-[620px] max-w-7xl mx-auto mt-15 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 border-2 rounded-xl mb-8 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Welcome letter by the President, India MUN</h3>
            <p className="text-gray-700 text-sm md:text-base">
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

      </section>

      {/* The Inaugural Chapter Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              The Inaugural Chapter
            </h2>
            <h3 className="text-md md:text-lg lg:text-xl text-blue-500 mb-8">
              India MUN National Climate Conference 2024
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed">
              The inaugural edition of the India MUN National Climate Conference marked a defining moment in youth-led climate action. With over 2,400+ bright young minds, the event brought together global climate leaders, policy influencers, innovators, and changemakers for an immersive day of purpose-driven dialogue and collaboration. The conference featured three enriching panel discussions, each exploring the intersection of youth with <span className="font-semibold">climate regeneration, innovation, and leadership</span>.
            </p>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                The event commenced with an invocation by <span className="font-semibold">Gayatri Chauhan, Executive President – India MUN</span>, with an empowering message of youth-led transformation and set a visionary tone for the days ahead. The conference was honoured by the presence of <span className="font-semibold">Ovais Sarmad, former Deputy Executive Secretary of the UNFCCC</span>, who addressed the delegates with a call for decisive climate leadership. Adding to the event's global stature, <span className="font-semibold">Erik Solheim, Norwegian diplomat and former Under-Secretary-General of the UNEP</span>, shared insights on multilateral cooperation and youth-led transformation. Together, these distinguished voices underscored India MUN's vision of becoming a prestigious global institution where India's youth lead the world in sustainability, diplomacy, and innovation.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Below are the highlights of each panel and their eminent speakers:
              </h4>
            </div>
          </div>
        </div>
      </section>


      {/* UN Participation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                UNITED NATIONS' PARTICIPATION
              </h2>
              <p className="text-blue-600 text-lg md:text-xl">
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
                  className="relative w-full pb-[75%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/conference/c2.webp"
                    alt="Mr. Ovais Sarmad"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Ovais Sarmad</h3>
                  <p className="text-sm text-gray-600 mb-1">Former Deputy Executive Secretary</p>
                  <p className="text-sm text-gray-600">United Nations Framework Convention on Climate Change</p>
                  <p className="text-sm text-blue-600 font-medium mt-2">(UNFCCC)</p>
                </div>
              </motion.div>

              {/* Erik Solheim Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="relative w-full pb-[75%]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Conference/c3.webp"
                    alt="Mr. Erik Solheim"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Erik Solheim</h3>
                  <p className="text-sm text-gray-600 mb-1">Norwegian Diplomat, Peace Negotiator, Former Executive</p>
                  <p className="text-sm text-gray-600">Director, United Nations Environment Program</p>
                  <p className="text-sm text-blue-600 font-medium mt-2">(UNEP)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Panel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className=" mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                LEADERSHIP PANEL
              </h2>
              <p className="text-blue-600 text-lg md:text-xl">
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
                    src="/images/conference/c4.webp"
                    alt="Ms. Gayatri Chauhan"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Gayatri Chauhan</h3>
                  <p className="text-xs text-gray-600">Founder and CEO</p>
                  <p className="text-xs text-blue-600 font-medium">(BuzzOnEarth)</p>
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
                  <p className="text-xs text-blue-600 font-medium">(ISRO)</p>
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
                  <p className="text-xs text-blue-600 font-medium">(INSEAD Paris)</p>
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
                  <p className="text-xs text-blue-600 font-medium">(Global Network for Zero)</p>
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
                  <p className="text-xs text-blue-600 font-medium">(Rajasthan Royals IPL)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/conference/c9.webp"
          alt="Conference Highlights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>


      {/* Innovation Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                INNOVATION PANEL
              </h2>
              <p className="text-blue-600 text-lg md:text-xl">
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
                  <p className="text-xs text-blue-600 font-medium">(Atal Innovation Mission)</p>
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
                    src="/images/conference/missing.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(Engineering Innovation)</p>
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
                    src="/images/conference/c10.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(SHELL)</p>
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
                    src="/images/conference/c11.webp"
                    alt="Mr. Shiva Subramanian"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Shiva Subramanian</h3>
                  <p className="text-xs text-gray-600">Managing Partner</p>
                  <p className="text-xs text-blue-600 font-medium">(Connect Ventures Group)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/conference/c12.webp"
          alt="Conference Highlights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Regeneration Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                REGENERATION PANEL
              </h2>
              <p className="text-blue-600 text-lg md:text-xl">
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
                    src="/images/conference/cmissin.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(Govt of India/Govt of Karnataka)</p>
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
                    src="/images/conference/c13.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(NASA)</p>
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
                    src="/images/conference/c14.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(Govt of India)</p>
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
                    src="/images/conference/c15.webp"
                    alt="Ms. Neha Raghav"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Neha Raghav</h3>
                  <p className="text-xs text-gray-600">Director, Environment Education</p>
                  <p className="text-xs text-blue-600 font-medium">(WWF-India)</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/conference/c16.webp"
          alt="Conference Highlights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* The grand finale */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                The Grand Finale- Youth at the Helm
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                India MUN National Climate Conference 2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Left side - Conference Image */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image
                  src="/images/conference/c17.webp"
                  alt="India MUN National Climate Conference"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Right side - Theme Box */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <p className="text-gray-700 font-medium mb-2">Conference Dates:</p>
                  <p className="text-xl font-bold text-gray-900">27th - 28th July, 2024</p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">THEME</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-900">Climate Action and Innovation</p>
                    <p className="text-lg text-gray-700">Financing</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      Sustainable Future
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto ">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From powerful panels to purpose-driven policy debates, the <b>India MUN National Climate Conference 2024</b> culminated in a remarkable celebration of youth leadership and global vision. What began as an ambitious gathering has now ignited a nationwide movement—one where the next generation doesn't wait for change, but leads it.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We reflect with pride and purpose on two transformative days of action-driven dialogue, bold thinking, and solution-oriented collaboration. Guided by the powerful theme "Climate Action and Innovation: Financing a Sustainable Future," this conference was not just about discussion—it was about defining the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll effect section*/}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-16">
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
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loss and Damage Fund</h3>
                    <p className="text-gray-700">
                      Addressing climate justice by advancing financial mechanisms through which developed nations support vulnerable countries facing irreversible climate impacts.
                    </p>
                  </div>
                </div>

                {/* Climate Innovations */}
                <div className="flex items-center justify-between">
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Innovations</h3>
                    <p className="text-gray-700">
                      Harnessing the power of technology and entrepreneurship to build community resilience and drive sustainable development at scale.
                    </p>
                  </div>
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
                  <div className="w-5/12" /> {/* Spacer */}
                </div>

                {/* Loss and Damage Fund Council */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12" /> {/* Spacer */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
                  <div className="timeline-content w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loss and Damage Fund Council</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
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
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>UNEP: Advancing climate-smart technologies</li>
                      <li>World Bank Group: Mobilizing capital for climate innovation</li>
                      <li>UNDP: Enabling community-led sustainable solutions</li>
                    </ul>
                  </div>
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black" />
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
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Opening Ceremony */}
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Grand Finale - Opening Ceremony</h3>
                <p className="text-gray-700 leading-relaxed">
                  of the India MUN National Climate Conference 2024 began with a moment of historic significance, as <span className="font-semibold">Mr. Ovais Sarmad, Secretary-General of India MUN 2024</span> and Former Deputy Executive Secretary of the UNFCCC, formally <span className="font-semibold">declared the conference open</span>, marking the commencement of a powerful youth-led movement for climate action and global cooperation. In his ceremonial address, he called upon delegates to rise as ambassadors of change, bridging diplomacy with urgency in the face of the climate crisis.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  This was followed by the <span className="font-semibold">Keynote Address by the Guest of Honor, Dr. Shakila Shamsu, OSD for the New Education Policy, Ministry of Education, Government of India</span>. She underscored the critical role of progressive education in nurturing climate-aware, solution-driven young leaders who can drive impact across communities and nations.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The Opening Ceremony culminated with a visionary Welcome and Closing Address by <span className="font-semibold">Ms. Gayatri Chauhan, Executive President of India MUN</span>. She reminded delegates that every discussion, every debate, and every decision made at the conference carries the power to positively shape the future of our planet. With heartfelt conviction, she urged the young leaders to carry forward the spirit of the conference, continuing their journey as bold, compassionate, and solution-driven sustainability champions well beyond the event.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Over 27th and 28th July, more than 2000 bright young minds stepped into the shoes of global leaders, engaging in rigorous debates, formulating policies, and co-creating solutions that mirror the urgency and scale of our climate challenges.
                </p>
              </div>

              {/* Image Carousel */}
              <div 
                className="relative w-full h-[400px] mt-12 overflow-hidden"
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Previous Button */}
                  <motion.button 
                    onClick={previousSlide}
                    className="absolute left-4 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>

                  {/* Carousel Images */}
                  <div className="relative w-full h-full flex items-center justify-center gap-6">
                    {/* Previous Image (Smaller) */}
                    <motion.div 
                      className="relative w-[25%] h-[250px] opacity-50 hover:opacity-75"
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
                    >
                      <Image
                        src={visibleImages.previous.src}
                        alt={visibleImages.previous.alt}
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                    </motion.div>

                    {/* Current Image (Larger) */}
                    <motion.div 
                      className="relative w-[45%] h-[350px] z-10"
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
                        className="object-cover rounded-xl shadow-2xl"
                        priority
                      />
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

                    {/* Next Image (Smaller) */}
                    <motion.div 
                      className="relative w-[25%] h-[250px] opacity-50 hover:opacity-75"
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
                    >
                      <Image
                        src={visibleImages.next.src}
                        alt={visibleImages.next.alt}
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                    </motion.div>
                  </div>

                  {/* Next Button */}
                  <motion.button 
                    onClick={nextSlide}
                    className="absolute right-4 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* High-Level Panel */}
              <div className="prose max-w-none mt-12">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The culmination of the General Assembly Plenary was marked by a landmark moment—a High-Level Panel featuring distinguished diplomats and global climate leaders, before whom the final resolutions, crafted through two days of rigorous deliberations, were formally presented by our delegates.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Leading the panel was <span className="font-semibold">Mr. Ovais Sarmad</span>, Secretary-General for the event, a valued Governing Council member of India MUN, and former Deputy Executive Secretary of the United Nations Framework Convention on Climate Change (UNFCCC). His decades of experience in global climate negotiations brought gravitas and vision to the forum, offering delegates a rare opportunity to engage directly with one of the world's foremost climate diplomats.
                </p>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The panel included <span className="font-semibold">Ms. Gayatri Chauhan</span>, Founder and CEO of BuzzOnEarth and Gaia The Earth Foundation, and the visionary force behind India's largest sustainability platforms. Her leadership continues to empower young climate leaders and build global networks for ecosystem restoration. Joining her were other eminent figures: <span className="font-semibold">Mr. Rajendra Shende, former Director at UNEP and Coordinating Lead Author at the IPCC</span>, who shared insights from decades at the frontlines of environmental diplomacy; <span className="font-semibold">Dr. Shakila Shamsu, an esteemed educationist and architect of India's New Education Policy</span>, whose vision champions climate literacy and youth empowerment; <span className="font-semibold">Dr. Babu Padmanabhan, Managing Director of STEER World</span>, renowned for his groundbreaking work in sustainable engineering; and <span className="font-semibold">Ms. Gouthami Agular, Founder and CEO of Ormex</span>, a pioneer in agricultural carbon removal technologies.
                </p>

                <p className="text-blue-600 leading-relaxed mt-6">
                  This landmark presentation not only validated the intellectual rigor of our young delegates but also symbolized a bridge between youth-driven climate diplomacy and global policy leadership.
                </p>

                <p className="text-blue-600 leading-relaxed mt-6">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                HIGH LEVEL PANEL
              </h2>
              <p className="text-blue-600 text-lg md:text-xl">
                Forest and Youth - Leading Regeneration and Conservation
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
                  <p className="text-xs text-blue-600 font-medium">(UNFCCC)</p>
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
                    src="/images/conference/c18.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(UNEP)</p>
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
                  <p className="text-xs text-blue-600 font-medium">(Government of India)</p>
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
                    src="/images/conference/missing.webp"
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
                  <p className="text-xs text-blue-600 font-medium">(Engineering Innovation)</p>
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
                    src="/images/conference/c19.webp"
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
                  <p className="text-xs text-blue-600 font-medium">Leading ClimateTech</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative  flex justify-center items-center h-[1000px] overflow-hidden">
      <Image
          src="/images/conference/c20.webp"
          alt="Conference Highlights"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

   {/* Council Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                Council Awards
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                India MUN National Climate Conference 2024
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex justify-center gap-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Loss and Damage Fund Council
                </h3>
                <span className="text-gray-400">|</span>
                <h3 className="text-xl font-bold text-gray-900">
                  Climate Innovation Council
                </h3>
              </div>

              <div className="flex flex-nowrap overflow-x-auto gap-3 pb-4 scrollbar-hide justify-start">
                {/* Loss and Damage Fund Council Awards */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">Sri Sri Open Minds International School</div>
                  <div className="text-base font-semibold mb-1">Pranshu Borra</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">BEST DELEGATE</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">Sri Sri Ravishankar Vidya Mandir</div>
                  <div className="text-base font-semibold mb-1">Shrey Thakoor</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">OUTSTANDING DELEGATE</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">Sri Sri Ravishankar Vidya Mandir</div>
                  <div className="text-base font-semibold mb-1">Swaroop Alok kumar</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">HONOURABLE MENTION</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
                  </div>
                </div>

                {/* Climate Innovation Council Awards */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">Bhavan's Mandir Vidyalayam</div>
                  <div className="text-base font-semibold mb-1">Sarang Srikanth</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">BEST DELEGATE</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">VPMS International School</div>
                  <div className="text-base font-semibold mb-1">Navya Jain</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">OUTSTANDING DELEGATE</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-w-[220px] flex-shrink-0">
                  <div className="text-[10px] opacity-80 mb-1">VPMS International School</div>
                  <div className="text-base font-semibold mb-1">Lakshmi Sahana Verma</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-bold text-blue-200">HONOURABLE MENTION</div>
                    <div className="text-[10px] opacity-80">AWARD</div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
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
                    name: "Pranshu Borra",
                    school: "Sri Sri Open Minds International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Shrey Thakoor",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Swaroop Alok kumar",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Sarang Srikanth",
                    school: "Bhavan's Mandir Vidyalayam",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Navya Jain",
                    school: "DPSA International School",
                    award: "OUTSTANDING DELEGATE"
                  }
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
                    name: "Pranshu Borra",
                    school: "Sri Sri Open Minds International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Shrey Thakoor",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Swaroop Alok Kumar",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Sarang Srikanth",
                    school: "Bhavan's Mandir Vidyalayam",
                    award: "BEST DELEGATE"
                  }
                ]}
                isReverse={true}
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
                    name: "Pranshu Borra",
                    school: "Sri Sri Open Minds International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Shrey Thakoor",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Swaroop Alok kumar",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Sarang Srikanth",
                    school: "Bhavan's Mandir Vidyalayam",
                    award: "BEST DELEGATE"
                  }
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
                    name: "Pranshu Borra",
                    school: "Sri Sri Open Minds International School",
                    award: "BEST DELEGATE"
                  },
                  {
                    name: "Shrey Thakoor",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "OUTSTANDING DELEGATE"
                  },
                  {
                    name: "Swaroop Alok kumar",
                    school: "Sri Sri Ravishankar Vidya Mandir",
                    award: "HONOURABLE MENTION"
                  },
                  {
                    name: "Sarang Srikanth",
                    school: "Bhavan's Mandir Vidyalayam",
                    award: "BEST DELEGATE"
                  }
                ]}
                isReverse={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative  flex justify-center items-center h-[1000px] overflow-hidden">
      <Image
          src="/images/conference/c21.webp"
          alt="Conference Highlights"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* The Executive Board Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Conference/c1.webp"
            alt="UN Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-100/20" />
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
                India Model United Nations
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
              >
                National Climate Conference 2024
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
              >
                The Executive Board
              </motion.h1>
            </div>

            {/* First Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8 overflow-x-auto pb-4 px-4"
            >
              {[
                { name: "Balaji", image: "EB1" },
                { name: "Prajwal N Prasad", image: "EB2" },
                { name: "Samhitha", image: "EB3" },
                { name: "Prabha Jha", image: "EB4" },
                { name: "Jiny Jawa", image: "EB5" },
                { name: "Anirudh Vijayan", image: "EB6" },
                { name: "Aanchal Khera", image: "EB" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                    <Image
                      src={`/images/Conference/${member.image}.webp`}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm md:text-base">{member.name}</h3>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 px-4"
            >
              {[
                { name: "Ansh Bansal", image: "EB7" },
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
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl mb-2">
                    <Image
                      src={`/images/Conference/${member.image}.webp`}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm md:text-base">{member.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-xl md:text-2xl font-bold text-[#0066FF] mb-8">
          The only MUN which is India's MUN and represents India internationally
        </h1>

        <p className="text-lg mb-12">
          India's first Model United Nations conference on Climate. A challenging and competitive platform for students to debate and analyse some of the world's most pressing climate problems. As delegates representing different countries and agencies, students gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
        </p>

        <div className="space-y-6">
          <h2 className="text-xl md:text-xl font-bold">
            Behold the power of the largest youth population in the world.
          </h2>
          
          <p className="text-lg text-[#0066FF] font-semibold">
            Brace yourself for leadership like never before.
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mt-12">
            India biggest Model UN conference on Climate is Coming Soon
          </h3>
        </div>
      </section>

     

    </div>
  );
}
