"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
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

interface CouncilMember {
  id: string;
  name: string;
  designation: string[];
  affiliation: string;
}

const councilMembers: CouncilMember[] = [
  {
    id: 'g1',
    name: 'Ms. Gayatri Chauhan',
    designation: [
      'Founder and CEO, BuzzOnEarth',
      'President, Gaia The Earth Foundation',
    ],
    affiliation: 'Executive President, India MUN',
  },
  {
    id: 'g2',
    name: 'Mr. Ovais Sarmad',
    designation: [
      'Former Deputy Executive Secretary',
      'United Nations Framework Convention on Climate Change',
    ],
    affiliation: 'UNFCCC',
  },
  {
    id: 'g3',
    name: 'Hon\'ble Mr. Suresh Prabhu',
    designation: [
      'Parliamentarian, Minister and Chancellor',
      'Prime Minister\'s Sherpa for G20 Summit (2014 - 2015)',
    ],
    affiliation: 'Government of India',
  },
  {
    id: 'g4',
    name: 'Mr. Erik Solheim',
    designation: [
      'Norwegian Diplomat, Peace Negotiator',
      'Former Executive Director, United Nations Environment Program',
    ],
    affiliation: 'UNEP',
  },
  {
    id: 'g5',
    name: 'Dr. Jagdish N. Seth',
    designation: [
      'Padma Bhushan Awardee 2020',
      'Charles H. Kellstadt Professor of Business',
    ],
    affiliation: 'Emory University',
  },
  {
    id: 'g6',
    name: 'Dr. Shakila T. Shamsu',
    designation: [
      'Former OSD (New Education Policy)',
      'Department of Higher Education, MoE',
    ],
    affiliation: 'Government of India',
  },
  {
    id: 'g7',
    name: 'Mr. Ramanan Ramanathan',
    designation: [
      'Founder Mission Director Atal Innovation Mission',
      'Former Additional Secretary, NITI Aayog',
    ],
    affiliation: 'Government of India',
  },
  {
    id: 'g8',
    name: 'Prof. V Ramgopal Rao',
    designation: [
      'Group Vice-Chancellor,',
      'BITS Pilani Campuses.',
    ],
    affiliation: 'Former Director (2016-2021), IIT Delhi',
  },
  {
    id: 'g9',
    name: 'Dr. M.P. Poonia',
    designation: [
      'Vice Chairman, AICTE',
      'All India Council for Technical Education',
    ],
    affiliation: 'Government of India',
  },
  {
    id: 'g10',
    name: 'Dr. Babu Padmanabhan',
    designation: [
      'Founder & Managing Director, STEER World',
      'Founder, UnWOOD; Director, Phitons',
    ],
    affiliation: 'Engineering Innovation',
  },
  {
    id: 'g11',
    name: 'Shri Br. Maheshwara Chaitanya',
    designation: [
      'Chairperson'
    ],
    affiliation: 'AMRITA University',
  },
  {
    id: 'g12',
    name: 'Mr. LS Shashidhara',
    designation: [
      'Professor and Dean (Research)'
    ],
    affiliation: 'Ashoka University',
  },
  {
    id: 'g13',
    name: 'Mr. Venktesh Raghwendra',
    designation: [
      'Vice President, Safe Water Network',
      'Advisor/Trainer',
    ],
    affiliation: 'Govt of India/Govt of Karnataka',
  },
  {
    id: 'g14',
    name: 'Mrs. Moulika Arabhi',
    designation: [
      'Advisor at Centre for Environmental Law'
    ],
    affiliation: 'WWF-India',
  },
  {
    id: 'g15',
    name: 'Dr Dakshayini Kanna',
    designation: [
      'Senior Principal, Harvest International School,',
      'Sr. Director- Academic engagement',
    ],
    affiliation: 'India MUN',
  },
  {
    id: 'g16',
    name: 'Dr. Manila Carvalho',
    designation: [
      'Founder Principal DPS Bangalore East',
      'Director- Academic engagement',
    ],
    affiliation: 'India MUN',
  },
];

export default function GoverningCouncil() {
  return (
    <main className="py-16 px-6 md:px-8 lg:px-12 max-w-[90rem] mx-auto">
      <motion.div 
        className="mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Governing Council</h1>
        <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        {councilMembers.map(member => (
          <motion.div 
            key={member.id} 
            className="rounded-3xl overflow-hidden bg-white border border-border shadow-lg transition-all duration-300 max-w-[280px] mx-auto w-full"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="relative w-full pb-[140%]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={`/images/member/${member.id.toUpperCase()}.webp`}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="p-6 space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <div className="space-y-1.5 mt-2">
                {member.designation.map((line, index) => (
                  <p key={index} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
                <p className="text-sm text-primary font-medium mt-3">
                  ({member.affiliation})
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
} 