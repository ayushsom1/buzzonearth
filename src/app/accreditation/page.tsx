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

    const [activeTab, setActiveTab] = useState('schools');

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
            
            <section className="bg-gradient-to-r pt-4 from-[#000000] to-[#002e41] opacity-95">
  <div className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
        Path to Global Accreditation
      </h2>
      <h3 className="text-[#1875d1] text-xl md:text-2xl font-semibold mb-8">
        Silver, Gold, or Platinum Ratings
      </h3>
    </div>
  </div>

  <div className="container px-4 sm:px-6 lg:px-8 mx-auto pb-16">
    {/* Change flex layout to start at lg */}
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg">
          <Image
            src="/images/accred/l1.webp"
            alt="GSCA & GSLI Accreditation"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 lg:pr-6 justify-center py-8 lg:py-16">
        <p className="text-sm text-white text-justify leading-relaxed">
          Building upon the foundation of the India MUN Global Schools Affiliation Program, <b>the GSCA–GSLI Accreditation Framework</b> recognizes institutions that demonstrate outstanding commitment to <b>climate action, educational innovation, and values-based leadership.</b>
        </p>
        <p className="py-5 text-sm text-white text-justify leading-relaxed">
          We believe that true change emerges from dedicated efforts & purpose-driven action. <b>Once your institution joins the Global Schools network through affiliation, you become eligible to apply for this prestigious accreditation under the Global Schools for Climate Action (GSCA) and Global Schools for Leadership & Innovation (GSLI) programs.</b>
        </p>
        <p className="text-sm py-5 text-white text-justify leading-relaxed">
          Accreditation is awarded through a transparent, merit-based evaluation system based on clearly defined criteria. Institutions are recognized with Silver, Gold, or Platinum accreditation plaques—symbols of excellence in sustainability, leadership, innovation, and community engagement.
        </p>
        <p className="text-sm py-5 text-white font-bold text-justify leading-relaxed">
          These recognitions are more than just honors — they position your institution as a beacon of transformation, setting a benchmark for what future-ready education looks like on a global stage.
        </p>
      </div>
    </div>
  </div>
</section>



           <section className="relative bg-gradient-to-b from-white to-[#F0FBFB] py-12 mt-8 overflow-hidden">
  {/* Heading & Subheading outside the container */}
  <div className="mb-10 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">
      Global Schools for Climate Action(GSCA) Accreditation
    </h2>
    <div className="mt-4 mx-auto h-2 w-1/4 rounded-full bg-gradient-to-r from-gray-400 via-teal-400 to-yellow-400"></div>
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Left Side - Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center">
  <motion.div
    className="relative w-full aspect-square max-w-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <Image
      src="/images/accred/l3.webp"
      alt="Student Programs Illustration"
      width={500}
      height={500}
      className="object-contain"
    />
  </motion.div>
</div>
      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2">
        {/* Main Description */}
        <div className="mb-6 text-justify">
          <p className="text-black text-sm font-bold leading-relaxed">
            GSCA honors institutions that go above and beyond in championing
            environmental sustainability and climate action.
          </p>
        </div>
        <div className="mb-6 text-justify">
          <p className="text-black text-sm leading-relaxed">
            This program is designed to acknowledge the remarkable contributions made
            by schools and colleges towards <b>creating a greener and more sustainable future.</b>
          </p>
        </div>
        <div className="mb-6 text-justify">
          <p className="text-black text-sm leading-relaxed">
            The Accreditation Program operates on a <b>merit-based scoring system</b>, with
            institutions evaluated based on specific criteria tailored by India MUN. Institutions that demonstrate excellence in climate action, sustainability initiatives, and environmental stewardship will be recognized with <b>Silver, Gold, or Platinum Plaques.</b>
          </p>
        </div>
        <div className="mb-6 text-justify">
          <p className="text-[#1774d1] text-sm font-bold leading-relaxed">
            Our aim is to build a network of institutions that lead by example, inspiring
            a generation of young minds to be active stewards of our planet. Through the
            GSCA Accreditation Program, we celebrate your efforts, amplify your impact,
            and showcase the outstanding work you're doing in the realm of climate action.
          </p>
        </div>

        {/* Additional Description */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm text-justify leading-relaxed">
            <strong className="text-gray-800">
              Join us on this journey towards a more sustainable future,
            </strong>{" "}
            where your institution's contributions will shine brightly as a testament to
            your commitment to positive change.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
 

            {/* The Vision Behind the Global Schools Affiliation Section */}
            <section className="max-w-7xl mx-auto py-16 px-4 ">
                <div className="bg-gray-30 rounded-3xl border-2 border-gray-200 p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-[#4686d8] mb-4">
                            GSCA Accreditation Criteria
                        </h2>
                        <p className="text-lg text-gray-800">
                            India MUN Accreditation – Global Schools for Climate Action 
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 text-justify">
                        <p className="text-sm text-gray-800 font-bold">
                            Global Schools for Climate Action (GSCA) is a holistic accreditation program that has been thoughtfully designed by educationists, researchers, environmental experts, and administrators to assess the performance of educational institutions in a measurable manner, recognizing their dedication to climate action and sustainability.
                        </p>
                        
                        {/* Eligibility Section */}
                        <div className="bg-gray-50 p-4 rounded-lg mt-8">
                            <h1 className="text-2xl font-bold text-[#4686d8] mb-4">
                            Affiliation Status:
                        </h1>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            Schools must have successfully completed the affiliation process with India MUN to be eligible for participation in the Accreditation Program.
                        </p>
                        </div>

                        <div className="mt-4 mx-auto h-2 w-1/4 rounded-full bg-gradient-to-r from-gray-400 via-teal-400 to-blue-400"></div>

                    

                        {/* Why We Exist Section */}
                        <div className="mt-8">
                            <h1 className="text-2xl font-bold text-center mb-4">
                            Evaluation Metrics (100 credits)
                        </h1>
                        </div>
                        

                        {/* Parameter 1 */}
<div className="mt-8">
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#4686d8] mt-1">🔷</span> Parameter 1: Climate Action Projects and Initiatives (30 credits)
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Share with us the notable climate action projects and initiatives your institution has undertaken</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Demonstrate the objective, impact, scale, and sustainability of these projects</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Present details of your institution's community outreach programs related to climate action</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Demonstrate the positive impact of these programs on the environment and local community</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Share testimonials from community members or partner organizations about the effectiveness of your initiatives</span>
    </li>
  </ul>
</div>

{/* Parameter 2 */}
<div className="mt-8">
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#4686d8] mt-1">🔷</span> Parameter 2: Student Engagement and Participation (25 credits)
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Tell us about the active involvement of your students in climate action-related activities and clubs</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Showcase leadership roles and active participation in climate-related events and conferences</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Let us know how your institution encourages and supports student engagement in climate initiatives</span>
    </li>
  </ul>
</div>

{/* Parameter 3 */}
<div className="mt-8">
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#4686d8] mt-1">🔷</span> Parameter 3: Integrating Guest Lectures and Pedagogy (20 credits)
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Share details about how climate change and sustainability are incorporated into your academic curriculum</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Highlight dedicated courses, workshops, or seminars related to environmental issues</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Emphasize the learning outcomes and benefits students gain from this curriculum integration</span>
    </li>
  </ul>
</div>

{/* Parameter 4 */}
<div className="mt-8">
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#4686d8] mt-1">🔷</span> Parameter 4: Sustainable Campus Practices (10 credits)
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Participate in a sustainability audit to showcase your institution's campus practices</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Demonstrate your institution's progress in reducing carbon footprint, energy consumption, waste generation, etc.</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Highlight any sustainable transportation options or green building initiatives you have undertaken</span>
    </li>
  </ul>
</div>

{/* Parameter 5 */}
<div className="mt-8">
  <h3 className="text-base font-bold text-gray-800 mb-4">
    <span className="text-[#4686d8] mt-1">🔷</span> Parameter 5: Long-term Vision and Commitment (15 credits)
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Share your institution's long-term sustainability plans and climate action goals</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Emphasize the feasibility and ambition of these plans</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-black">»</span>
      <span className="text-sm text-gray-700">Highlight the institutional support and allocation of resources for climate action initiatives</span>
    </li>
  </ul>
</div>


                        

                        

                        
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-b from-white to-[#F0FBFB] py-12 mt-8 overflow-hidden">
  {/* Heading & Subheading outside the container */}
  <div className="mb-10 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">
      Global Schools for Leadership & Innovation (GSLI) Accreditation
    </h2>
    <div className="mt-4 mx-auto h-2 w-1/4 rounded-full bg-gradient-to-r from-gray-400 via-teal-400 to-yellow-400"></div>
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Left Side - Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          className="relative w-full aspect-square max-w-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src="/images/accred/l2.webp"
            alt="Leadership & Innovation Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2">
        {/* Main Description */}
        <div className="mb-6 text-justify">
          <p className="text-black text-sm font-bold leading-relaxed">
            GSLI Accreditation recognizes institutions that demonstrate outstanding
            commitment to advancing leadership development, educational innovation, and
            entrepreneurial thinking within the academic ecosystem.
          </p>
        </div>

        <div className="mb-6 text-justify">
          <p className="text-black text-sm leading-relaxed">
            This program celebrates schools and colleges that go beyond conventional
            academics to empower students with the skills, mindset, and values required
            to lead in a complex and rapidly evolving world. By fostering innovation in
            pedagogy, promoting student-led ventures, and embedding leadership experiences
            into learning pathways, your institution positions itself as a hub for
            future-ready education.
          </p>
        </div>

        <div className="mb-6 text-justify">
          <p className="text-black text-sm leading-relaxed">
            Accreditation is awarded through a transparent, merit-based evaluation
            process based on rigorous criteria designed by India MUN. Institutions that
            show excellence across innovation, student leadership, and entrepreneurship
            will be recognized with <b>Silver, Gold, or Platinum Plaques</b>.
          </p>
        </div>

        <div className="mb-6 text-justify">
          <p className="text-[#1774d1] text-sm font-bold leading-relaxed">
            Through the GSLI Accreditation, India MUN aims to build a high-impact network
            of institutions that champion innovation-driven learning and cultivate the
            next generation of thinkers, doers, and changemakers. Your institution’s
            efforts will be recognized, your impact amplified, and your leadership
            positioned at the forefront of transformative education.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto py-16 px-4">
  <div className="bg-gray-30 rounded-3xl border-2 border-gray-200 p-8 md:p-12">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-[#4686d8] mb-4">
        GSLI Accreditation Criteria
      </h2>
      <p className="text-lg text-gray-800">
        India MUN Accreditation – Global Schools for Leadership & Innovation
      </p>
    </div>

    {/* Main Content */}
    <div className="space-y-6 text-justify">
      <p className="text-sm text-gray-800 font-bold">
        Global Schools for Leadership & Innovation (GSLI) is a comprehensive accreditation framework curated by academic experts, innovation leaders, and global education researchers. It evaluates institutional performance across clearly defined pillars through a structured and measurable process, assessing how effectively schools and colleges integrate innovation, leadership development, and a global outlook into their educational ecosystems.
      </p>

      {/* Eligibility Section */}
      <div className="bg-gray-50 p-4 rounded-lg mt-8">
        <h1 className="text-2xl font-bold text-[#4686d8] mb-4">
          Affiliation Status:
        </h1>
        <p className="text-sm text-gray-700 leading-relaxed">
          Schools must have successfully completed the India MUN Affiliation process to be eligible for GSLI Accreditation.
        </p>
      </div>

      <div className="mt-4 mx-auto h-2 w-1/4 rounded-full bg-gradient-to-r from-gray-400 via-teal-400 to-blue-400"></div>

      {/* Evaluation Metrics */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          Evaluation Metrics (100 credits)
        </h1>
      </div>

      {/* Parameter 1 */}
      <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">
          <span className="text-[#4686d8] mt-1">🔷</span> Parameter 1: Student Leadership & Changemaking (30 credits)
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Highlight programs that foster leadership, critical thinking, and real-world problem solving among students</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Share evidence of student-led initiatives, leadership roles, and civic action campaigns</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Showcase participation in leadership platforms like MUNs, youth parliaments, innovation summits, etc.</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Provide testimonials or reflections from students leading such programs</span></li>
        </ul>
      </div>

      {/* Parameter 2 */}
      <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">
          <span className="text-[#4686d8] mt-1">🔷</span> Parameter 2: Innovation in Learning & Pedagogy (25 credits)
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Demonstrate how your institution promotes innovative teaching methodologies and interdisciplinary learning</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Include use of experiential learning, technology-enabled teaching, or project-based learning</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Highlight flagship innovation programs, workshops, or labs implemented in your school/college</span></li>
        </ul>
      </div>

      {/* Parameter 3 */}
      <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">
          <span className="text-[#4686d8] mt-1">🔷</span> Parameter 3: Entrepreneurship & Future Skills (20 credits)
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Share how your institution nurtures entrepreneurial mindsets and 21st-century competencies such as creativity, collaboration, and digital literacy</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Showcase incubation programs, student startups, or entrepreneurship clubs</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Highlight participation in pitch events, hackathons, or design sprints</span></li>
        </ul>
      </div>

      {/* Parameter 4 */}
      <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">
          <span className="text-[#4686d8] mt-1">🔷</span> Parameter 4: Global Citizenship & SDG Integration (15 credits)
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Demonstrate integration of global themes, SDG education, and cross-cultural learning</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Share partnerships with international programs, global networks, or virtual exchanges</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Highlight projects where students work on global issues like sustainability, equity, peace, etc.</span></li>
        </ul>
      </div>

      {/* Parameter 5 */}
      <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">
          <span className="text-[#4686d8] mt-1">🔷</span> Parameter 5: Institutional Vision & Strategic Commitment (10 credits)
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Share your institution’s strategic vision for leadership and innovation in education</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Emphasize the long-term roadmap, resource allocation, and support mechanisms in place</span></li>
          <li className="flex items-start gap-2"><span className="text-black">»</span><span className="text-sm text-gray-700">Highlight involvement of school leadership, educators, and governance in driving innovation</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="bg-gradient-to-r from-[#000000] to-[#002e41] opacity-95 py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Column - Text */}
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ongoing Support & Handholding
      </h2>
      <p className="mb-6 text-gray-200">
        At India MUN, we understand that meaningful accreditation is not just about 
        evaluation — it's about enabling institutions to grow, improve, and achieve 
        measurable outcomes.
      </p>

      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-lg mr-3">🔷</span>
          Detailed guidance on evaluation criteria and documentation
        </li>
        <li className="flex items-start">
          <span className="text-lg mr-3">🔷</span>
          Step-by-step roadmap to meet key benchmarks across all parameters
        </li>
        <li className="flex items-start">
          <span className="text-lg mr-3">🔷</span>
          Access to templates, case study formats, and best practice guides
        </li>
        <li className="flex items-start">
          <span className="text-lg mr-3">🔷</span>
          Mentorship sessions and capacity-building support for school coordinators
        </li>
        <li className="flex items-start">
          <span className="text-lg mr-3">🔷</span>
          Regular check-ins and advisory calls to track progress and resolve challenges
        </li>
      </ul>

      <p className="mt-6 text-gray-300">
        Our goal is to ensure that every institution is set up for success and is able 
        to reflect its efforts and growth effectively during the accreditation cycle.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="flex justify-center">
      <img
        src="/images/accred/l4.webp" 
        alt="Mentorship and Support Illustration"
        className="rounded-xl shadow-lg max-w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

<section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#4686d8] mb-4">
                Accreditation Structure & Recognition Pathways
            </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
            <div className="flex bg-white rounded-full p-1 shadow-lg">
                <button
                    onClick={() => setActiveTab('schools')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${(activeTab === 'schools' || !activeTab)
                        ? 'bg-gray-800 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    For Schools (K-10/K-12)
                </button>
                <button
                    onClick={() => setActiveTab('higher')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'higher'
                        ? 'bg-gray-800 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    For Higher Education
                </button>
            </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-8xl mx-auto">
            {activeTab === 'schools' && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left side - Badge Image */}
                        <div className="flex justify-center">
                            <div className="relative w-150 h-100">
                                <Image
                                    src="/images/accred/l6.webp"
                                    alt="GSCA & GSLI Accreditation Badge"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="space-y-4">
                            <h3 className="text-xl py-6 font-bold text-gray-800 mb-3">
                                Global Accreditation for Schools (K-10/K-12)
                            </h3>

                            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#4686d8]">
                                <p className="text-sm font-semibold text-gray-800">
                                    "Recognizing Excellence in Climate Action, Leadership & Innovation"
                                </p>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                Enrollment Fee: <span className="font-semibold">₹2.5 Lakhs</span> per accreditation pathway — GSCA or GSLI.
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Accreditation Pathways:</span>
                                <br />• GSCA – Global Schools for Climate Action
                                <br />• GSLI – Global Schools for Leadership & Innovation
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Eligibility:</span> Must be an Affiliated School under the India MUN Global Network.
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Recognition Levels:</span> Silver | Gold | Platinum Plaques
                            </p>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Accreditation is awarded based on documented performance over 6–12 months prior to submission. Schools receive comprehensive handholding, guidance, strategic support to achieve their recognition and capacity-building support throughout the accreditation journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'higher' && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left side - Badge Image */}
                        <div className="flex justify-center">
                            <div className="relative w-150 h-100">
                                <Image
                                    src="/images/accred/l7.webp"
                                    alt="GSCA & GSLI Higher Education Accreditation Badge"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="space-y-4">
                            <h3 className="text-xl py-6 font-bold text-gray-800 mb-3">
                                Global Accreditation for Higher Education
                            </h3>

                            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#4686d8]">
                                <p className="text-sm font-semibold text-gray-800">
                                    ""Recognizing Institutional Leadership in Climate Action, Sustainability & Innovation"
                                </p>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                Enrollment Fee: <span className="font-semibold">₹7.5 Lakhs</span> per accreditation pathway — GSCA or GSLI.
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Accreditation Pathways:</span>
                                <br />• GSCA – Global Schools for Climate Action
                                <br />• GSLI – Global Schools for Leadership & Innovation
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Eligibility:</span> Colleges, Universities & Teacher Education Institutions.
                            </p>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-semibold">Recognition Levels:</span> Silver | Gold | Platinum Plaques
                            </p>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Accreditation is awarded based on documented performance over 6–12 months prior to submission. Institutions receive complete guidance, mentoring, strategic support to achieve their recognition and capacity-building support throughout the accreditation journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
</section>


<section className=" bg-white">
                <div className="container mx-auto px-4 mt-10">
                    <div className="flex justify-center items-center gap-8">
                        {[, 3, 4, 5, ].map((num) => (
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

            

            {/* Become A Global Member School Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-black mb-6">
                            GSCA-GSLI <span className="font-extrabold">ACCREDITATION</span>
                        </h2>
                        <p className="text-md font-bold leading-relaxed mb-6">
                                Be part of a growing alliance of visionary schools, universities, and institutions advancing sustainability, innovation, and leadership in education.
                            </p>
                            <p className="text-sm  leading-relaxed">
                                Join leading institutions around the world and access to our transformative programs, global events, expert resources, and recognition through our <b>GSCA and GSLI Accreditation Pathways.</b>
                            </p>
                            <p className="text-sm  leading-relaxed">
                                As an affiliated institution, your institution becomes eligible to unlock structured engagement opportunities, collaborate on international youth initiatives, and shape the next generation of leaders and changemakers.
                            </p>

                        
                    </div>

                    
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-[#000000] via-[#002e41] to-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl text-white py-10">
        HOW TO BECOME{" "}
        <span className="font-extrabold">AN ACCREDITED INSTITUTION</span>
      </h2>
    </div>

    <div className="text-white space-y-12">
      {/* Higher Education Eligibility */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Eligibility Criteria for Universities or Colleges
        </h3>
        <p className="mb-6 text-[#41b8d5]">
          To apply for accreditation under India MUN’s Higher Education Program,
          your institution must:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Be an accredited university or college recognized by relevant
            national authorities.
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Offer active academic programs with enrolled student cohorts across
            undergraduate or postgraduate levels.
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Demonstrate a foundational commitment to leadership development,
            sustainability, entrepreneurship, or social impact.
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Be willing to engage with India MUN’s programs by encouraging
            student initiatives, teacher participation, and community-based
            projects.
          </li>
        </ul>
      </div>

      {/* Schools Eligibility */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Eligibility Criteria for Schools
        </h3>
        <p className="mb-6 text-[#41b8d5]">
          To apply for GSCA or GSLI Accreditation, your institution must:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Be a recognized Global Member School through the India MUN Affiliation Program, K–10/12 (Private / Public / International) educational institution operating under national or international curriculum frameworks.
                  
          </li>
          <li className="flex items-start">
            <span className="text-lg mr-3">🔷</span>
            Demonstrate a clear willingness to advance to the next level through
            long-term commitment to climate action, innovation, leadership
            development, or community impact.
          </li>
        </ul>
      </div>

      {/* Application Process */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          📩 Request an Application
        </h3>
        <p className="mb-4 text-[#41b8d5]">To begin your application process:</p>
        <ol className="space-y-4 list-decimal list-inside">
          <li>
            Email us with your institutional profile and expression of interest.
          </li>
          <li>Our team will conduct a preliminary eligibility review.</li>
          <li>
            If shortlisted, you’ll be invited for a formal interaction to
            explore program alignment and next steps.
          </li>
        </ol>
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

            

            
        </main>
    );
}