"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Timeline from "@/components/Timeline";

export default function WhyApplyPage() {
    const timelineRef = useRef(null);
    const timelineLineRef = useRef(null);
    const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Only run on client side and if refs are available
        if (typeof window !== 'undefined' && timelineRef.current) {
            // Dynamically import GSAP to avoid SSR issues
            import('gsap').then((gsapModule) => {
                const gsap = gsapModule.gsap;
                return import('gsap/ScrollTrigger');
            }).then((ScrollTriggerModule) => {
                const { ScrollTrigger } = ScrollTriggerModule;
                const gsap = window.gsap;
                
                // Register ScrollTrigger
                gsap.registerPlugin(ScrollTrigger);

                // Animate timeline line
                if (timelineLineRef.current) {
                    gsap.fromTo(timelineLineRef.current, {
                        height: 0
                    }, {
                        height: '100%',
                        duration: 2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: timelineLineRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            scrub: 1
                        }
                    });
                }

                // Animate timeline items
                timelineItemsRef.current.forEach((item, index) => {
                    if (!item) return;
                    
                    const isEven = index % 2 === 0;
                    const contentElement = item.querySelector(isEven ? '.timeline-content-left' : '.timeline-content-right');
                    const circleElement = item.querySelector('.timeline-circle');
                    const direction = isEven ? -50 : 50;

                    // Animate circles
                    if (circleElement) {
                        gsap.fromTo(circleElement, {
                            scale: 0,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            }
                        });
                    }

                    // Animate content
                    if (contentElement) {
                        gsap.fromTo(contentElement, {
                            x: direction,
                            opacity: 0
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 75%',
                                toggleActions: 'play none none reverse'
                            }
                        });
                    }
                });

                // Cleanup function
                return () => {
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                };
            }).catch((error) => {
                console.log('GSAP not available, skipping animations');
            });
        }
    }, []);

    return (
        <main>
            {/* Global Schools Section */}
            <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#1875d1] text-4xl md:text-5xl font-bold mb-8">
                        Why Apply for the Global Schools<br />
                        Affiliation?
                    </h2>
                    <p className="text-base md:text-lg text-black max-w-5xl mx-auto">
                        Empowering Your Institution. Elevating Your Impact.
                    </p>
                </div>
            </section>

            {/* Global Education Values Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black overflow-hidden">
                {/* Background with Earth image */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-black/90"></div>
                    <Image
                        src={"/images/whyApply/w1.webp"}
                        alt="Earth from space background"
                        fill
                        className="object-cover opacity-60"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex flex-col">
                    <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <motion.div
                            className="text-white space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic">
                                    A prestigious recognition & symbol<br />
                                    of your school's commitment to<br />
                                    <span className="text-blue-300">global education values.</span>
                                </h2>

                                <div className="w-24 h-1 bg-blue-400"></div>

                                <p className="text-base md:text-lg leading-relaxed text-gray-200">
                                    A commitment to future-ready, purpose-driven education. By
                                    affiliating, your school joins a select league of visionary institutions
                                    shaping the leaders, innovators, and changemakers of tomorrow.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right side - Circular badge */}
                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="relative w-full max-w-lg">
                                <Image
                                    src="/images/whyApply/w2.webp"
                                    alt="Global Schools Recognition"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom text */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="text-white text-lg md:text-xl font-bold tracking-wider">
                            <span className="text-blue-300">CLIMATE ACTION.</span>
                            <span className="mx-2">LEADERSHIP.</span>
                            <span className="text-blue-300">INNOVATION.</span>
                            <span className="mx-2">DIPLOMACY.</span>
                            <span className="text-blue-300">ENTREPRENEURSHIP.</span>
                            <span className="mx-2">REGENERATION.</span>
                            <span className="text-blue-300">SDGs.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Responsive Image Section */}
            <section className="w-full relative mx-auto px-8">

                <div className="">
                    <Image
                        src="/images/whyApply/w3.png"
                        alt="Desktop Program Image"
                        width={1920}
                        height={1080}
                        className="w-full px-8 py-14"
                    />
                </div>
            </section>

            {/* Leadership and Transformation Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-black py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <motion.div
                            className="text-white space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                                A Mark of Leadership
                            </h2>

                            <h3 className="text-lg md:text-xl font-semibold mb-6">
                                A Commitment to Transformation.
                            </h3>

                            <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-4">
                                The Global Schools Affiliation isn't just a certification — it's a transformation.
                                It offers direction, insight, and a powerful partnership that elevates your school culture,
                                educational leadership, and global standing.
                            </p>

                            <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-6">
                                It is a mark of distinction for schools that lead with purpose. It recognizes institutions
                                that are not only educating, but transforming lives through innovation, sustainability, and
                                global citizenship.
                            </p>

                            <div className="space-y-4">
                                <h4 className="text-blue-400 text-sm md:text-base font-semibold">
                                    Affiliated schools signal to the world that they are:
                                </h4>
                                <ul className="space-y-2 text-sm md:text-base text-gray-200">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Committed to 21st-century leadership and SDG-aligned education
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Preparing students to be changemakers, problem-solvers, and global leaders
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Investing in their educators as catalysts of impact
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Part of a national and international movement shaping the future of education
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right side - Image */}
                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="relative w-full max-w-lg border-2 border-blue-400/30 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/whyApply/w4.webp"
                                    alt="Educational Transformation"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Badges */}
                        <motion.div
                            className="flex justify-center items-center space-x-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <Image
                                    src="/images/whyApply/x30.png"
                                    alt="Global Schools Member Badge"
                                    width={300}
                                    height={300}
                                    className=" h-auto object-contain"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/images/whyApply/x6.png"
                                    alt="Global Schools City Representative Badge"
                                    width={300}
                                    height={300}
                                    className=" h-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Right side - Text content */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="space-y-4">
                                <p className="text-base md:text-lg italic text-gray-800 leading-relaxed">
                                    When you display the Global Schools Badge, you're not just affiliated —<br />
                                    <strong>You're recognized as a force for educational leadership and global impact.</strong>
                                </p>

                                <div className="space-y-2">
                                    <p className="text-base md:text-lg italic text-gray-800">
                                        It tells the world:
                                    </p>
                                    <p className="text-base md:text-lg text-gray-800 font-bold italic">
                                        We don't just teach students — <span className="text-blue-500 font-semibold">we shape leaders</span>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                            For Institutions.
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                            We provide schools with an unparalleled platform to showcase your school's vision, amplify your leadership, and gain national & global recognition.
                        </p>
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

                        {/* Continue with items 13-24 (w17-w28) */}
                        {[
                            { num: 17, title: "Global Schools Network Directory", desc: "Get listed in our comprehensive directory accessible to parents, students, and educational partners worldwide. Connect with a global network of like-minded educational institutions." },
                            { num: 18, title: "Networking and Collaborations", desc: "Build meaningful partnerships with schools, organizations, and institutions around the world. Share resources and best practices with a global community of educators." },
                            { num: 19, title: "Global Exposure", desc: "Showcase your school's achievements and initiatives on international platforms and media. Gain visibility among international educational leaders and stakeholders." },
                            { num: 20, title: "Community Impact", desc: "Implement programs that create positive impact in your local and global communities. Build partnerships with NGOs and community organizations for greater impact." },
                            { num: 21, title: "Innovative Teaching", desc: "Access cutting-edge teaching methodologies and educational technologies. Stay at the forefront of educational innovation and best practices." },
                            { num: 22, title: "Climate and Innovation Clubs", desc: "Establish specialized clubs focused on climate action, sustainability, and innovation. Foster entrepreneurial thinking and environmental stewardship among young learners." },
                            { num: 23, title: "Enhanced Educational Support", desc: "Receive comprehensive support for curriculum development and educational program enhancement. Get assistance with school improvement and transformation initiatives." },
                            { num: 24, title: "Global Perspective", desc: "Develop truly global citizens with international perspectives and cross-cultural competencies. Prepare students for success in an interconnected world." },
                            { num: 25, title: "Peer Learning", desc: "Facilitate peer-to-peer learning experiences between students from different schools and countries. Foster global friendships and cultural understanding among students." },
                            { num: 26, title: "Inter-School Resource Sharing", desc: "Share educational resources, expertise, and best practices with other affiliated schools. Collaborate on joint projects and educational initiatives." },
                            { num: 27, title: "Industry-Relevant Skills", desc: "Develop programs that teach students skills relevant to future careers and industries. Prepare students for the jobs of tomorrow through practical skill development." },
                            { num: 28, title: "Career Pathways, Internships & Experiential Learning", desc: "Provide students with clear career pathways and internship opportunities. Offer experiential learning programs that bridge classroom knowledge with real-world application." }
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
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                            For Educators.
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                            We empowers educators to grow as leaders and 21st-century mentors, equipped with tools, networks, and opportunities to elevate their teaching
                            and transform student outcomes.</p>
                    </div>

                    {/* Benefits Grid with Accordions */}
                    {/* Benefits Grid with Accordions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {/* Educator Workshops & Leadership Training */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-29" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-4">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w29.webp"
                                            alt="Educator Workshops & Leadership Training"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Educator Workshops & Leadership Training
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Access specialized workshops and leadership training programs designed for educators.
                                    Develop essential skills in climate education, global citizenship, and innovative teaching methodologies.
                                    Enhance your professional capabilities and advance your career in educational leadership.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Recognition & Awards for Educational Excellence */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-30" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w30.webp"
                                            alt="Recognition & Awards for Educational Excellence"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Recognition & Awards for Educational Excellence
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Compete for prestigious awards recognizing outstanding contributions to educational excellence.
                                    Gain recognition for innovative teaching practices and student impact initiatives.
                                    Showcase your achievements on national and international platforms.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Peer Learning & National Educator Network */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-31" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w31.webp"
                                            alt="Peer Learning & National Educator Network"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Peer Learning & National Educator Network
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Connect with a national network of passionate educators sharing similar goals and challenges.
                                    Engage in peer-to-peer learning opportunities and collaborative professional development.
                                    Exchange best practices and innovative solutions with educators across the country.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Publish & Contribute to Global Dialogue */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-32" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w32.webp"
                                            alt="Publish & Contribute to Global Dialogue"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Publish & Contribute to Global Dialogue
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Contribute to educational research and publish your insights in global educational journals.
                                    Share your expertise and innovative practices with the international educational community.
                                    Participate in global dialogues shaping the future of education and sustainability.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Collaborate with Higher Education & Think Tanks */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-33" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w33.webp"
                                            alt="Collaborate with Higher Education & Think Tanks"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Collaborate with Higher Education & Think Tanks
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Partner with universities, research institutions, and educational think tanks.
                                    Engage in collaborative research projects and policy development initiatives.
                                    Access cutting-edge educational research and contribute to academic discourse.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Networking with National and International Experts */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-34" className="border rounded-lg bg-white">
                                <AccordionTrigger className="hover:no-underline px-4 py-3">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        <Image
                                            src="/images/whyApply/w34.webp"
                                            alt="Networking with National and International Experts"
                                            width={48}
                                            height={48}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <span className="text-xs font-semibold text-gray-800 leading-tight">
                                            Networking with National and International Experts
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-xs text-gray-600 px-4 pb-4">
                                    Build connections with leading educational experts, researchers, and policy makers.
                                    Access exclusive networking events and professional development opportunities.
                                    Learn from thought leaders and contribute to shaping educational policies and practices.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* For Students Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                            For Students:
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                            As part of the Global Schools Affiliation, students gain access to India MUN's most prestigious platforms — designed to build leadership, innovation, climate action, entrepreneurship and future-readiness.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Image */}
                        <div className="md:w-1/2">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src="/images/whyApply/w35.webp"
                                    alt="Student Programs Illustration"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Accordions */}
                        <div className="md:w-1/2">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Entry into India's Largest Climate & Leadership Student Network
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Become part of a nationwide movement of young changemakers leading action on sustainability, innovation, and global goals. Collaborate with peers, mentors, and experts across India and beyond.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        50% Scholarships on All India MUN Youth Programs
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Receive significant financial support to participate in India MUN's premium programs, making quality education and leadership development accessible to all students.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Real-World Exposure Through High-Impact Programs
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Gain hands-on experience through internships, workshops, and real-world projects that connect classroom learning to global challenges and career opportunities.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Global Student Awards, Recognition & Leadership Roles
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Compete for prestigious awards and recognition at national and international levels. Take on leadership roles that showcase your impact and achievements.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Resume Building & Career Readiness
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Develop a strong profile with certifications, achievements, and experiences that enhance your college applications and future career prospects.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Represent your school in national & international forums
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Serve as an ambassador for your school at prestigious conferences, summits, and events, building networks and representing your institution on global platforms.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        Get featured in media stories, campaigns, and school showcases
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Gain media exposure and recognition for your achievements through featured stories, campaigns, and school showcase events that highlight student leadership.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger className="text-left text-lg font-bold">
                                        City Representative School Involvement
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Participate in city-wide initiatives and represent your school as part of the Global Schools network, contributing to local and regional educational leadership.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fixed GSAP Timeline Section */}
            <Timeline />

            <section className="relative bg-white py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative">
                        {/* Circular Text */}
                            <div className="relative w-full aspect-square">
                                <Image
                                    src="/images/whyApply/w40.webp"
                                    alt="Student Programs Illustration"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                />
                            </div>
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
                        City Representatives
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                        Your School. Your City. A Leadership Role.
                    </h3>
                </div>

                {/* Main Description */}
                <div className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Affiliated schools may nominate themselves for the esteemed role of City 
                        Representative — a position that marks your institution as a regional leader in 
                        educational transformation.
                    </p>
                </div>

                {/* City Representatives Benefits */}
                <div className="mb-6">
                    <h4 className="text-base font-bold text-blue-600 mb-3">City Representatives:</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>Serve as the official face of India MUN in their city.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>Host and lead flagship student programs: MUNs, Conferences, Hackathons, Leadership Summits, SDG Events.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>Represent their city in key national forums and global platforms</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>Gain priority access to flagship initiatives, leadership councils, strategic partnerships and speaking opportunities.</span>
                        </li>
                    </ul>
                </div>

                {/* Additional Description */}
                <div className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong className="text-gray-800">City Representatives are spotlight institutions who becomes the face of 
                        educational transformation in their region</strong> — shaping local ecosystems for climate 
                        action, innovation, and youth leadership.
                    </p>
                </div>

                {/* Call to Action */}
                <div>
                    <p className="text-blue-600 text-base font-bold">
                        Be the force that elevates your city's voice on a national and global stage.
                    </p>
                </div>
            </div>
        </div>
    </div>
            </section>  

          {/* Global Schools Ranking Section */}
<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-black py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                    Global Schools Ranking
                </h2>

                <h3 className="text-sm md:text-base font-semibold mb-4">
                    An international distinction for institutions leading in Climate Action, Leadership, Innovation, 
                    Diplomacy, Entrepreneurship, and Regeneration.
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-gray-200 mb-3">
                    The Global Schools Ranking by India MUN is a first-of-its-kind recognition platform 
                    spotlighting pioneering institutions that are not only educating — but transforming the 
                    future.
                </p>

                <div className="space-y-3">
                    <h4 className="text-white-400 text-sm md:text-base font-semibold">
                        Putting Schools on the Global Map:
                    </h4>
                    
                    <p className="text-xs md:text-sm leading-relaxed text-gray-200 mb-3">
                        This prestigious ranking is part of the Global Schools for Climate Action, Leadership & 
                        Innovation (GSCA-GSLI) movement — designed to spotlight schools that are actively aligning 
                        with the UN Sustainable Development Goals, the UN Decade on Ecosystem Restoration, and 
                        the evolving needs of a planet in transformation. Ranked schools are showcased 
                        internationally through India MUN's and BoE networks, media partnerships, and United 
                        Nations-aligned forums.
                    </p>

                    <div className="space-y-2">
                        <p className="text-white-400 text-xs md:text-sm font-semibold">
                            <strong>Ranking Levels & Structure:</strong> City-Level, State-Level, National & Global Listings
                        </p>
                        <p className="text-xs md:text-sm leading-relaxed text-gray-200">
                            The evaluation process is merit-based, transparent, and globally benchmarked — overseen by 
                            a distinguished panel.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-lg border-blue-400/30 rounded-lg overflow-hidden">
                    <Image
                        src="/images/whyApply/w41.webp"
                        alt="Global Schools Ranking"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="relative bg-white py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg">
                    <Image
                        src="/images/whyApply/w42.webp"
                        alt="Global Schools Prizes"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
                        Global Schools Prizes
                    </h2>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                        Honoring Visionary Institutions Transforming Education.
                    </h3>
                </div>

                {/* Main Description */}
                <div className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Global Schools Prizes celebrate schools making a profound and lasting impact 
                        across education, leadership, climate action, innovation, SDG integration, Youth 
                        Empowerment & Community Engagement.
                    </p>
                </div>

                {/* A Mark of Global Impact Section */}
                <div className="mb-6">
                    <h4 className="text-base font-bold text-gray-800 mb-3">A Mark of Global Impact</h4>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Awarded annually at the Global Schools Summit & Awards Gala, these prizes 
                        spotlight institutions shaping the next era of education — aligned with the UN 
                        Sustainable Development Goals, ecosystem restoration, and 21st-century leadership. 
                        Winning a Global Schools Prize places your institution among India's most 
                        transformative schools, with recognition across national platforms and global 
                        networks.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Winning a Global Schools Prize signifies your school's commitment to excellence, 
                        innovation, and shaping the future of education.
                    </p>
                </div>

                {/* Selection Process */}
                <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong className="text-gray-800">The selection is merit-based, transparent, and globally benchmarked, overseen by a 
                        distinguished panel of:</strong> UN representatives & dignitaries, Leading education 
                        policymakers and Top university leaders & experts.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-900 py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                        Global Schools Summit
                    </h2>
                    <h3 className="text-base md:text-lg font-bold text-white mb-4">
                        A Conference of Changemakers Shaping the Future of Education:
                    </h3>
                </div>

                {/* Main Description */}
                <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        The Global Schools Summit is India MUN's annual gathering of trailblazing institutions, 
                        education leaders, Policy Influencers, UN Dignitaries, Global Leaders and Think Tanks.
                    </p>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                        This invite-only forum serves as a catalyst for collaboration, recognition, and vision-building in 
                        education aligned with SDGs and future-readiness.
                        Hosted by India MUN in collaboration with partners from the UN ecosystem and top academic 
                        institutions, this high-level forum offers:
                    </p>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                    <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Thought leadership panels with UN experts, government officials, and educators</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>High-level recognition ceremonies for affiliated and accredited schools</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Launchpads for student ambassadors and India MUNx initiatives</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Networking with visionary school principals and city representatives</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>City Representative & Accredited School Spotlight Ceremonies</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Global Schools Annual Prizes Ceremonies</span>
                        </li>
                    </ul>
                </div>

                {/* Closing Statement */}
                <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        The Summit is a celebration of bold ideas, global collaboration, and transformative education. 
                        It's not just an event — it's a movement.
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg">
                    <Image
                        src="/images/whyApply/w43.webp"
                        alt="Global Schools Summit"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="relative bg-white py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg">
                    <Image
                        src="/images/whyApply/w44.png"
                        alt="GSCA & GSLI Accreditation"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        GSCA & GSLI
                    </h2>
                    <h3 className="text-base md:text-lg font-bold text-blue-600 mb-4">
                        Path to Global Accreditation.
                    </h3>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Building upon the foundation of our affiliation process, the GSCA—GSLI Accreditation 
                        Program honors institutions that demonstrate exceptional commitment to climate 
                        action, educational innovation, and values-based leadership.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        We believe true transformation begins with consistent, purpose-driven efforts — and 
                        this program is designed to celebrate schools and colleges that go above and 
                        beyond in shaping a sustainable, inclusive, and future-ready world.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong className="text-gray-800">Once your institution joins the Global Schools network through affiliation, you 
                        become eligible to apply for this prestigious accreditation.</strong> By integrating 
                        environmental education, fostering student leadership, and launching real-world 
                        impact initiatives, your school can earn accolades that reflect a deep, enduring 
                        commitment to global change.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong className="text-gray-800">Accreditation is awarded through a transparent, merit-based evaluation system 
                        based on clearly defined criteria under the GSCA—GSLI framework.</strong> Institutions are 
                        recognized with <strong className="text-gray-800">Silver, Gold, or Platinum Plaques</strong>, symbolizing excellence in 
                        sustainability, leadership development, innovation, and community engagement.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        These honors don't just celebrate achievement — they position your school as a 
                        beacon of transformation.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="relative py-20 overflow-hidden h-200">
    {/* Background Image */}
    <div className="absolute inset-0">
        <Image
            src="/images/whyApply/w45.webp"
            alt="Future of Global Leadership"
            fill
            className="object-cover"
            priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto bg-black/40 p-7 rounded-2xl">
            {/* Top Label */}
            <div className="mb-8">
            <div className="inline-block border border-white/50 px-6 py-2 text-sm font-medium">
                Global Schools for Climate Action, Leadership & Innovation
            </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            THE FUTURE
            <br />
            OF GLOBAL LEADERSHIP
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
            Begins in Classrooms Like Yours
            </h2>

            {/* Description */}
            <div className="text-base md:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
                Great leaders aren't born in boardrooms — they're nurtured in classrooms first.
            </p>
            <p>
                Today's students will define tomorrow's climate solutions, global policies, and innovation breakthroughs.
            </p>
            <p>
                India MUN provides the platform, network, and recognition to turn your classrooms into launchpads for global impact.
            </p>
            </div>
        </div>
    </div>
</section>

<section className="relative bg-white py-16 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                    Who Can Apply?
                </h2>
            </div>

            {/* Content List */}
            <div className="space-y-4">
                <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">♦</span>
                    <p className="text-gray-800 text-base md:text-lg">
                        K–10/12 Schools (Private / Public / International).
                    </p>
                </div>

                <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">♦</span>
                    <p className="text-gray-800 text-base md:text-lg">
                        Schools aligned with sustainability, leadership, innovation, or holistic education.
                    </p>
                </div>

                <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">♦</span>
                    <p className="text-gray-800 text-base md:text-lg">
                        Institutions looking to enhance their global standing and student outcomes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="relative py-20 overflow-hidden h-200">
    {/* Background Image */}
    <div className="absolute inset-0">
        <Image
            src="/images/whyApply/w46.webp"
            alt="Students celebrating graduation"
            fill
            className="object-cover"
            priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                YOUR STUDENTS DESERVE THE WORLD. LET'S GIVE IT TO THEM.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
                Apply now to take your institution beyond boundaries — where learning meets purpose, and every child becomes a leader for the future.
            </p>

        </div>
    </div>
</section>

<section className="relative py-4 overflow-hidden">
     {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-lg md:text-xl font-semibold">
                    Get Certified:
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg">
                    Affiliate Now
                </button>
            </div>
</section>
        </main>
    );
}