"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2 
    }
  }
};

export default function PartnersAndAffiliates() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      {/* Partners and Associates Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Partners and Associates</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-5xl mx-auto">
              India MUN partners with schools, colleges, institutions, and corporations who believe in the power of young people in accelerating the pace of climate action and
              innovation, and are committed to empower them.
            </p>
          </motion.div>
          
          {/* Founding Partners */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center"
              variants={fadeIn}
              custom={1}
            >
              Founding Partners
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8"
              variants={fadeIn}
              custom={2}
            >
              India MUN is a joint initiative of BuzzOnEarth and Gaia The Earth Foundation, the organizations that are
              committed to sustainability and regeneration.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-8 flex-wrap"
              variants={staggerContainer}
            >
              <motion.div 
                className="h-24 w-48 flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image 
                  src="/images/logos/p1.webp" 
                  alt="Gaia The Earth Foundation Logo" 
                  width={192} 
                  height={96} 
                  className="object-contain" 
                />
              </motion.div>
              <motion.div 
                className="h-24 w-48 flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image 
                  src="/images/logos/p2.webp" 
                  alt="BuzzOnEarth Logo" 
                  width={192} 
                  height={96} 
                  className="object-contain" 
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Vision Partners */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center"
              variants={fadeIn}
              custom={0}
            >
              Vision Partners
            </motion.h3>
            <motion.div 
              className="flex justify-center gap-8 flex-wrap"
              variants={staggerContainer}
            >
              {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                <motion.div 
                  key={num} 
                  className="h-24 w-48 flex items-center justify-center"
                  variants={logoVariants}
                  whileHover="hover"
                >
                  <Image 
                    src={`/images/logos/p${num}.webp`} 
                    alt={`Vision Partner ${num} Logo`} 
                    width={192} 
                    height={96} 
                    className="object-contain" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Program Partners */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center"
              variants={fadeIn}
              custom={0}
            >
              Program Partners
            </motion.h3>
            <motion.div 
              className="flex justify-center gap-8 flex-wrap"
              variants={staggerContainer}
            >
              {[15, 16, 17, 18, 19, 20].map((num) => (
                <motion.div 
                  key={num} 
                  className="h-24 w-48 flex items-center justify-center"
                  variants={logoVariants}
                  whileHover="hover"
                >
                  <Image 
                    src={`/images/logos/p${num}.webp`} 
                    alt={`Program Partner ${num} Logo`} 
                    width={192} 
                    height={96} 
                    className="object-contain" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-center text-gray-500 italic mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Logos reflect past collaborations, educational alignments, or organizational inspirations through BuzzOnEarth, Gaia The Earth Foundation, and India MUN programs.
          </motion.p>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={fadeIn}
              custom={1}
            >
              We're on a mission to empower the next generation of sustainability leaders, and we invite you to be a part of it. India MUN invites forward-thinking corporate
              partners and institutions to take action and join us in driving meaningful change.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={fadeIn}
              custom={2}
            >
              Your partnership isn't just an opportunity; it's a call to action to invest in the
              education and development of young minds committed to climate action and innovation. Together, we can make an impact that reverberates through generations.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 mb-6 font-semibold"
              variants={fadeIn}
              custom={3}
            >
              Step up and lead the charge – partner with India MUN today!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect CTA */}
      <section className="py-16 bg-primary text-white">
        <motion.div 
          className="container px-4 sm:px-6 lg:px-8 mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Interested in supporting youth-led climate action? Join our network of partners and help create a sustainable future.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 