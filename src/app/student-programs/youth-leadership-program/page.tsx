"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function YouthLeadershipProgram() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/programs/youth-leadership.jpg" 
            alt="Leadership Background" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <Image 
                src="/images/icons/leadership-icon.svg" 
                alt="Leadership Icon" 
                width={80} 
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Youth Leadership Program</h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-300">
              India's most powerful LEADERSHIP PROGRAM for the YOUTH
            </p>
            <p className="text-xl mb-12">
              Empowering youth to dream big, think smart, and lead with impact
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Begin Your Leadership Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Building World class Leaders of tomorrow</h2>
              <div className="h-1 w-24 bg-purple-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">
                An immersive, experiential leadership development program curated by industry leaders
                to help you become the best version of yourself, build essential life skills, and grow into
                a confident, purpose-driven leader ready to shape the future.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe in unlocking the boundless potential within every young person. This
                transformative journey is designed to equip young leaders with the mindset, skills to
                excel in your chosen field, and purpose to lead with impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Develop essential leadership and life skills</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Learn from industry leaders and experts</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Build a powerful network of like-minded leaders</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden"
            >
              <Image 
                src="/images/programs/youth-leadership.jpg"
                alt="Youth Leadership Program"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="w-full py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900"></div>
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundSize: '30px 30px',
                 backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)'
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Building World class Leaders of tomorrow</h2>
              <div className="h-1 w-24 bg-purple-400 mx-auto rounded-full mb-12"></div>
              <p className="text-xl mb-12">
                An immersive, experiential leadership development program curated by industry leaders
                to help you become the best version of yourself, build essential life skills, and grow into
                a confident, purpose-driven leader ready to shape the future.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-800/20 backdrop-blur-md p-8 border border-purple-500/10"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-indigo-400/10 blur-xl"></div>
                  
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Leadership Development</h3>
                    <p className="text-white/80 mb-4">
                      We believe in unlocking the boundless potential within every young person. This
                      transformative journey is designed to equip young leaders with the mindset and skills to
                      excel in your chosen field.
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">Core Focus</span>
                        <span className="text-xs text-white/60">01</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-800/20 backdrop-blur-md p-8 border border-purple-500/10"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-indigo-400/10 blur-xl"></div>
                  
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Purpose-Driven Impact</h3>
                    <p className="text-white/80 mb-4">
                      Our program empowers you with the tools and network needed to lead with impact,
                      driving meaningful change in your community and beyond.
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">Core Focus</span>
                        <span className="text-xs text-white/60">02</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 mb-12 border border-purple-500/10"
                whileHover={{ 
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">1K+</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">1000+</h4>
                    <p className="text-sm text-white/70 uppercase tracking-wider">Alumni Leaders</p>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">50+</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">50+</h4>
                    <p className="text-sm text-white/70 uppercase tracking-wider">Partner Organizations</p>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">100%</span>
                    </div>
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">100%</h4>
                    <p className="text-sm text-white/70 uppercase tracking-wider">Success Rate</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 border-0 text-white transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                  Begin Your Journey
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Empowering youth to dream big, think smart, and lead with impact</h2>
            <div className="h-1 w-24 bg-purple-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl mb-12">
              Join a community of future leaders who are committed to making a difference in their communities and beyond.
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 