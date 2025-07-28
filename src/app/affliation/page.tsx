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

            {/* Small Images Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-8">
                        {[2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="relative w-[250px] h-[250px]">
                                <Image
                                    src={`/images/affiliation/x${num}.png`}
                                    alt={`Small Image ${num}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliated Schools Carousel Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#1875d1] mb-4">
                            Our Affiliated Schools
                        </h2>
                        <p className="text-gray-600">
                            Prestigious institutions leading educational transformation globally
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative max-w-7xl mx-auto">
                        <div className="overflow-hidden rounded-lg">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                            >
                                {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
                                    <div
                                        key={num}
                                        className="flex-shrink-0 px-2"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <div className="group relative w-full rounded-lg overflow-hidden shadow-md bg-white">
                                            <div className="relative w-full aspect-[4/3]">
                                                <Image
                                                    src={`/images/affiliation/x${num}.webp`}
                                                    alt={`Affiliated School ${num}`}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white text-sm font-medium">Global Member School</p>
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

            <section className="bg-gradient-to-r pt-4 from-[#0a1929] to-[#112c4c]">
                <div className="container px-2 sm:px-4 lg:px-3 mx-auto py-16">
                    <div className="flex flex-col md:flex-row-reverse items-center">
                        <div className="">
                            <Image
                                src="/images/about_us/A6.webp"
                                alt="Our Mission Illustration"
                                width={600}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-12">
                            <h2 className="text-4xl font-bold mb-8 text-[#1875d1]">Your school could be the next success story</h2>
                            <p className="text-sm text-white leading-relaxed">
                                At India MUN, we celebrate schools not only as centers of learning, but as launchpads for
                                leadership, innovation, and global impact. <br />
                                We believe that every student deserves an education that empowers them to lead, solve, and
                                transform, and every educator deserves a platform that uplifts their vision and amplifies their
                                voice. <br />
                                The Global Schools Affiliation represents a comprehensive transformation of your school's
                                identity, impact, and international standing. It is a prestigious recognition of your
                                commitment to global education values — from sustainability and leadership to innovation
                                and inclusion. <br />
                                By affiliating with India MUN, your school joins a prestigious alliance of changemaking
                                institutions — committed to nurturing the next generation of global leaders and
                                ambassadors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empowering Schools Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Image */}
                        <div className="md:w-1/2">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src="/images/affiliation/x24.webp"
                                    alt="Empowering Schools Illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Accordions */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-8">Empowering Schools Through:</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Schools Ranking.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Recognizing schools across India for excellence in climate action, leadership, and innovation. Be ranked among the nation's top transformative institutions.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Student Programs & Curriculum Access.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Access to international educational programs and curriculum resources designed to foster global citizenship and environmental awareness.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Prestigious Prizes & Global Recognition.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Opportunities for schools and students to win awards and gain international recognition for their environmental initiatives and leadership.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Schools Summit.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Participate in our annual summit where schools showcase their achievements and connect with global education leaders.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Global Representation at India's Biggest Model UN Conferences
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Exclusive opportunities for students to represent their schools at prestigious Model UN conferences across India.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        Path to Global Accreditation.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Support and guidance for schools seeking international accreditation and recognition.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-left text-xl font-bold">
                                        India MUNx Events.
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Special access to India MUNx events, workshops, and training sessions for students and educators.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Image */}
                        <div className="relative">
                            <div className="relative w-full aspect-3/2  h-100 mx-auto">
                                <Image
                                    src="/images/affiliation/x25.webp"
                                    alt="Global collaboration - hands protecting Earth"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right side - Quote Content */}
                        <div className="relative">
                            {/* Large opening quote */}
                            <div className="text-8xl text-[#4686d8] absolute -top-6 -left-4 leading-none">"</div>

                            <div className="pl-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed">
                                    We're not just building a network. We're cultivating a{" "}
                                    <span className="text-[#1875d1]">global force</span> for{" "}
                                    <span className="text-[#1875d1]">educational transformation.</span>
                                </h2>

                                {/* Keywords section */}
                                <div className="mb-8">
                                    <p className="text-lg font-semibold text-gray-700 italic">
                                        CLIMATE ACTION. LEADERSHIP. INNOVATION.<br />
                                        DIPLOMACY. ENTREPRENEURSHIP. REGENERATION. SDGs.
                                    </p>
                                </div>

                                {/* Bottom quote */}
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#4686d8]">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Every student deserves an education that empowers them to{" "}
                                        <span className="font-semibold text-[#1875d1]">lead, solve, innovate and transform</span>.
                                        Every educator deserves a platform that{" "}
                                        <span className="font-semibold text-[#1875d1]">uplifts their vision and amplifies their impact</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Large closing quote */}
                            <div className="text-8xl text-[#4686d8] absolute -bottom-6 right-4 leading-none">"</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                {/* Timeline Points */}
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center gap-4 items-center text-lg">
                        {[
                            "Highly influential and effective Governing council",
                            "Strong network of mentors and guides for students to unleash their best potential",
                            "Certificates signed by UN dignitaries",
                            "Network of Global Schools for Climate Action, Leadership and Innovation",
                            "Focus on inculcating spirit of innovation, entrepreneurship, leadership and regeneration"
                        ].map((text, index) => (
                            <div key={index} className="flex items-center justify-center w-55 h-55 rounded-full bg-white border-10 border-[#E6F3FF] p-4 text-center font-medium hover:border-[#0066FF] transition-colors duration-300">
                                {text}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 items-center text-lg">
                        {[
                            "Exposure to essential life skills. Experiential learning on diverse topics",
                            "The only MUN focused on Climate and Biodiversity as core themes",
                            "Direct linkage with UNEP and UNFCCC.",
                            "Unique opportunity to represent India at UN COP Events.",
                            "Access to top institutions like IITs, IIMs, Ashoka University, Amrita University, ISB & so on."
                        ].map((text, index) => (
                            <div key={index} className="flex items-center justify-center w-55 h-55 rounded-full bg-white border-10 border-[#E6F3FF] p-4 text-center font-medium hover:border-[#0066FF] transition-colors duration-300">
                                {text}
                            </div>
                        ))}
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
            <section className="py-16 bg-gradient-to-r from-[#0a1929] to-[#1a2332]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Unite - Empower - Act
                        </h2>
                        <p className="text-[#4A90E2] text-lg md:text-xl max-w-4xl mx-auto">
                            Global Schools Affiliation is more than a network — it's a movement to reimagine education for a climate-conscious, innovation-driven, future-ready world.
                        </p>
                    </div>

                    {/* Two Column Content */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Quote marks */}
                            <div className="text-[#4A90E2] text-6xl font-bold mb-4">"</div>
                            <div className="text-white space-y-4">
                                <p className="text-lg leading-relaxed">
                                    <span className="text-[#4A90E2] font-semibold">India MUN</span> - a pioneering global institution, uniting and empowering schools, educators and young minds for climate action, leadership and innovation, provides a transformative platform for the schools, educators & students to help nurture their ideas into action, connecting them with a global community supported by global leaders, industry experts, UN Environment Program and UN Climate Change.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Sharing deep foundations with organizations such as the United Nations Environment Programme, the United Nations Global Innovation Hub, the United Nations Framework Convention on Climate Change, NASA, ISRO, ARCI and several IITs, India MUN operates at the confluence of global policy, innovation, and education.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    At its core, India MUN is the vanguard of climate-conscious education and a catalyst for future-ready learning — one that integrates environmental stewardship with bold leadership, creative innovation, and real-world problem-solving.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Quote marks */}
                            <div className="text-[#4A90E2] text-6xl font-bold mb-4">"</div>
                            <div className="text-white space-y-4">
                                <p className="text-lg leading-relaxed">
                                    By affiliating with <span className="font-semibold">India MUN</span>, your school joins a <span className="font-semibold">prestigious alliance of changemaking institutions</span> — united in signing the climate pledge for "UN Decade on Climate Action". This prestigious alliance opens doors to participate in UN-based programs and events, fostering connections among leaders who are passionately committed to shaping a greener and more resilient world.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    We provide schools with an unparalleled platform to showcase their work, earn global recognition, and lead in climate action, innovation, and leadership.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Together, let's embark on a rewarding journey of climate action, leadership and innovation, crafting a world that thrives and prospers for generations to come.
                                </p>
                                <p className="text-lg leading-relaxed font-semibold">
                                    <span className="text-[#4A90E2]">India MUN secretariat</span> is committed to providing our affiliated schools with extensive support and resources, including trainings for teachers and students, and ongoing guidance throughout the program's journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Centered Statement */}
                    <div className="text-center mb-12">
                        <p className="text-white text-xl font-medium max-w-4xl mx-auto">
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

            {/* Affiliation Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1875d1] mb-4">
                            Affiliation Benefits
                        </h2>
                    </div>

                    {/* Benefits Accordion Grid */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
                            {[
                                {
                                    id: "certificate",
                                    title: "Affiliation Certificate",
                                    content: "Receive an official certificate recognizing your school's commitment to global climate action, leadership, and innovation. This prestigious certificate validates your institution's dedication to future-ready education.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <path d="M12 8h40a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H36l-4 8-4-8H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4zm6 8v4h28v-4H18zm0 8v4h28v-4H18zm0 8v4h20v-4H18z" />
                                            <circle cx="44" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="m41 40 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )
                                },
                                {
                                    id: "ranking",
                                    title: "Global Schools Ranking",
                                    content: "Be part of an exclusive ranking system that recognizes schools globally for their excellence in climate action, leadership, and innovation. Showcase your school's achievements on an international platform.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <rect x="8" y="32" width="8" height="24" rx="2" />
                                            <rect x="20" y="24" width="8" height="32" rx="2" />
                                            <rect x="32" y="16" width="8" height="40" rx="2" />
                                            <rect x="44" y="8" width="8" height="48" rx="2" />
                                            <path d="m12 20 8-8 8 8 8-8 8 8" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )
                                },
                                {
                                    id: "reputation",
                                    title: "Enhanced Reputation",
                                    content: "Elevate your school's reputation in the educational community and beyond. Gain recognition as a forward-thinking institution committed to addressing global challenges and preparing future leaders.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="m20 32 8 8 16-16" fill="none" stroke="currentColor" strokeWidth="3" />
                                            <circle cx="32" cy="8" r="4" />
                                            <circle cx="8" cy="32" r="4" />
                                            <circle cx="56" cy="32" r="4" />
                                            <circle cx="32" cy="56" r="4" />
                                        </svg>
                                    )
                                },
                                {
                                    id: "accreditation",
                                    title: "GSCA & GSLI Accreditation",
                                    content: "Achieve prestigious Global Schools for Climate Action (GSCA) and Global Schools Leadership Initiative (GSLI) accreditation, marking your school as a certified leader in sustainable education practices.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M32 12v8M32 44v8M52 32h-8M20 32h8" stroke="currentColor" strokeWidth="2" />
                                            <text x="32" y="28" textAnchor="middle" fontSize="8" fill="currentColor">GSCA</text>
                                            <text x="32" y="38" textAnchor="middle" fontSize="6" fill="currentColor">PLATINUM</text>
                                        </svg>
                                    )
                                },
                                {
                                    id: "awards",
                                    title: "Recognition & Awards",
                                    content: "Access exclusive awards and recognition opportunities for your school and students. Participate in competitions, win prestigious prizes, and gain international acclaim for outstanding achievements.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <path d="M32 8l6 12h12l-10 8 4 12-12-8-12 8 4-12-10-8h12z" />
                                            <circle cx="46" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M32 44v12M28 52h8" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )
                                },
                                {
                                    id: "support",
                                    title: "Access to Support & Resources",
                                    content: "Gain access to comprehensive support including training programs for teachers and students, educational resources, mentorship opportunities, and ongoing guidance throughout your journey with India MUN.",
                                    icon: (
                                        <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                                            <rect x="16" y="16" width="32" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="32" cy="24" r="4" />
                                            <path d="M24 36h16v8H24z" />
                                            <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )
                                }
                            ].map((benefit) => (
                                <div key={benefit.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={benefit.id} className="border-none">
                                            <AccordionTrigger className="hover:no-underline px-4 pt-4 pb-2 flex flex-col [&>svg]:order-last [&>svg]:mt-2 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-[#4ECDC4]">
                                                <div className="flex flex-col items-center text-center w-full">
                                                    <div className="flex justify-center items-center mb-3">
                                                        <div className="w-8 h-8 text-[#4ECDC4]">
                                                            {benefit.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1">{benefit.title}</h3>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4">
                                                <p className="text-xs text-gray-600 text-center">{benefit.content}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Affiliate Now Button */}
                    <div className="text-center">
                        <Button className="bg-[#1875d1] hover:bg-[#1875d1]/90 text-white px-12 py-4 text-lg font-semibold rounded-xl">
                            Affiliate Now
                        </Button>
                    </div>
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
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
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
                                                <span className="font-semibold">Renewal:</span> INR 10,000 + GST/year
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
                                    <p className="text-sm text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6">
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
                                        Your School's Official Onboarding Kit
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
                                            <h4 className="text-lg font-bold text-gray-800 mb-4">
                                                Global Member School<br />
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
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-3">
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">Marketing Pack –</h5>
                                            <p className="text-xs text-gray-600">Ready-to-use designs for social media, co-branded posters, certificates, and more.</p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-800">School Listing</h5>
                                            <p className="text-xs text-gray-600">in the National Global Schools Network Directory</p>
                                        </div>

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
            <section className="py-16 bg-gradient-to-r from-[#0a1929] to-[#1a2332]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Content */}
                        <div className="text-white space-y-4">
                            <h2 className="text-3xl font-bold text-[#4A90E2] mb-4">
                                City Representatives
                            </h2>

                            <h3 className="text-xl font-medium mb-6">
                                Your School. Your City. A Leadership Role.
                            </h3>

                            <p className="text-sm mb-6">
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
                                <p className="text-sm">
                                    City Representatives are spotlight institutions who becomes the face of educational transformation
                                    in their region — shaping local ecosystems for climate action, innovation, and youth leadership.
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

                <div className="">
                    <Image
                        src="/images/affiliation/x32.webp"
                        alt="Desktop Program Image"
                        width={1920}
                        height={1080}
                        className="w-full"
                    />
                </div>
            </section>

            {/* The Vision Behind the Global Schools Affiliation Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#4686d8] mb-4">
                            The Vision Behind the Global Schools Affiliation
                        </h2>
                        <p className="text-lg text-gray-800 font-medium">
                            Uniting Institutions Bold Enough to Shape the Future of Education
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6">
                        <p className="text-sm text-gray-800 font-medium">
                            The Global Schools Affiliation is built on a powerful belief — that the future of education will be led by bold, collaborative, purpose-driven institutions.
                        </p>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            This prestigious affiliation is designed to bring together <span className="font-medium">visionary schools</span> that are redefining what it means to educate in the 21st century — integrating <span className="font-medium">climate action, global citizenship, SDG learning, innovation, diplomacy, and leadership development</span> into the very fabric of their institution, also are courageous enough to evolve — and collaborative enough to uplift others along the way.
                        </p>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            This initiative by India MUN is more than a recognition — it is an invitation to be part of a national and international alliance of schools that are leading education with purpose, innovation, and impact.
                        </p>

                        {/* Why We Exist Section */}
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4">Why We Exist:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Celebrate institutions leading the transformation of education in India and beyond with purpose, courage, and global vision</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Give schools the <span className="font-medium">visibility, tools, and global platforms</span> to create measurable change</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Build a network where best practices, resources, and leadership flow freely</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Embed sustainability, leadership, and innovation into everyday learning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Empower educators as catalysts for change</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span className="text-sm text-gray-700">Nurture students as changemakers, innovators and future global leaders</span>
                                </li>
                            </ul>
                        </div>

                        {/* Through the Affiliation Section */}
                        <div className="mt-8">
                            <h3 className="text-base font-bold text-gray-800 mb-4">Through the Global Schools Affiliation, institutions gain:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700"><span className="font-medium">National & Global Visibility</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700">Recognition by <span className="font-medium">global leaders, UN-aligned experts and dignitaries</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700">Access to <span className="font-medium">Globally recognized programs and certifications</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700"><span className="font-medium">Unparalleled leadership opportunities</span> for educators and students</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700">International recognition and branding as a changemaking institution</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4686d8] mt-1">♦</span>
                                    <span className="text-sm text-gray-700">Access to a <span className="font-medium">powerful ecosystem</span> of like-minded schools, experts, and global partners.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Eligibility Section */}
                        <div className="bg-gray-50 p-4 rounded-lg mt-8">
                            <p className="text-sm text-gray-700">
                                <span className="font-medium">Eligibility for</span> - City Representative roles, Global Schools Ranking, Platinum-Level Accreditation, Global Schools Prizes, Summit Recognition, Representation at India's Biggest MUN Conference (India MUN National Conferences).
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
                        <div className="text-center mt-10">
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
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            BECOME A <span className="font-bold">GLOBAL MEMBER SCHOOL</span><span className="text-[#4686d8]">.</span><br />
                            <span className="font-bold">GET CERTIFIED</span><span className="text-[#4686d8]">.</span>
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
                            <h3 className="text-xl font-bold text-gray-800 mb-8">
                                Global Schools Prizes
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-xs font-bold text-gray-600 mb-1">GLOBAL</div>
                                        <div className="text-xs font-bold text-gray-600 mb-1">SCHOOL</div>
                                        <div className="text-xs font-bold text-gray-600">PRIZES</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-2 text-sm font-medium rounded-lg">
                                Learn More
                            </Button>
                        </div>

                        {/* Global Schools Ranking Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-8">
                                Global Schools Ranking
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-xs font-bold text-gray-600 mb-1">WORLD'S</div>
                                        <div className="text-xs font-bold text-gray-600 mb-1">LEADING</div>
                                        <div className="text-xs font-bold text-gray-600">SCHOOLS</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-[#4686d8] hover:bg-[#357ABD] text-white px-8 py-2 text-sm font-medium rounded-lg">
                                Learn More
                            </Button>
                        </div>

                        {/* Global Schools Summit Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-8">
                                Global Schools Summit
                            </h3>

                            {/* Circular Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-xs font-bold text-gray-600 mb-1">GLOBAL</div>
                                        <div className="text-xs font-bold text-gray-600 mb-1">SCHOOL</div>
                                        <div className="text-xs font-bold text-gray-600">SUMMIT</div>
                                    </div>
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
                            Led by distinguished global leaders, UN experts, and education visionaries committed to transforming education for climate action and innovation.
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

            
        </main>
    );
}