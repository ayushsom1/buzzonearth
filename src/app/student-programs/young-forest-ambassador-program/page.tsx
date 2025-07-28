"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function YoungForestAmbassador() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/programs/s1.webp" 
            alt="Forest Background" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-black/80"></div>
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
                src="/images/icons/forest-ambassador-icon.svg" 
                alt="Forest Ambassador Icon" 
                width={80} 
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">India's Young Forest Ambassador Challenge</h1>
            <p className="text-2xl md:text-3xl mb-8 text-green-300">
              Connecting Young Minds with UN programs on ecosystem restoration.
            </p>
            <p className="text-xl mb-12">
              Get ready to dive deep into nature, ignite your passion, and become a voice for our precious forests. 
              Through our immersive program, you'll gain the skills and knowledge needed to create positive change.
            </p>
            <p className="text-3xl font-bold italic mb-12">Be the Voice. Be the Action. Be the Change.</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Join the Challenge
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
              <h2 className="text-3xl font-bold mb-6">Building a network of Young Global Ambassadors for Forests & Biodiversity</h2>
              <div className="h-1 w-24 bg-green-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">
                Our Young Forest Ambassador program is a transformative journey that combines environmental education, 
                leadership development, and hands-on conservation experience. As an ambassador, you'll:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-green-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Learn from environmental experts and conservation leaders</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-green-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Participate in real-world conservation projects</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-green-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Develop leadership and advocacy skills</p>
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
                src="/images/programs/forest-ambassador.jpg"
                alt="Forest Ambassador Program"
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
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-950"></div>
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'url("/images/programs/s6.webp")', 
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Be the Voice. Be the Action. Be the Change.</h2>
              <div className="h-1 w-24 bg-green-400 mx-auto rounded-full mb-12"></div>
              <p className="text-xl mb-12">
                Get ready to dive deep into nature, ignite your passion, and become a voice for our precious forests. 
                Through our immersive program, you'll gain the skills and knowledge needed to create positive change.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-800/20 backdrop-blur-md p-8 border border-green-500/10"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-green-500/20 blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-green-300/10 blur-xl"></div>
                  
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-300">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-green-300">Be the Voice</h3>
                    <p className="text-white/80 mb-4">Advocate for forest conservation and inspire others to take action</p>
                    <div className="mt-auto">
                      <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Learn More →</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-800/20 backdrop-blur-md p-8 border border-green-500/10"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-green-500/20 blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-green-300/10 blur-xl"></div>
                  
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-300">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l2 2"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-green-300">Be the Action</h3>
                    <p className="text-white/80 mb-4">Lead hands-on conservation projects and make a tangible impact</p>
                    <div className="mt-auto">
                      <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Learn More →</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 to-green-800/20 backdrop-blur-md p-8 border border-green-500/10"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-green-500/20 blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-green-300/10 blur-xl"></div>
                  
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-md self-start rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-300">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-green-300">Be the Change</h3>
                    <p className="text-white/80 mb-4">Drive sustainable transformation in your community and beyond</p>
                    <div className="mt-auto">
                      <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Learn More →</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 text-white transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40">
                  Join the Movement
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 