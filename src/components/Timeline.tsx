import { useEffect, useRef } from "react";
import Image from "next/image";

const TimelineSection = () => {
    const timelineRef = useRef(null);
    const timelinePointsRef = useRef(null);

    useEffect(() => {
        // Only run on client side
        if (typeof window !== 'undefined') {
            // Dynamically import GSAP to avoid SSR issues
            Promise.all([
                import('gsap'),
                import('gsap/ScrollTrigger')
            ]).then(([gsapModule, ScrollTriggerModule]) => {
                const { gsap } = gsapModule;
                const { ScrollTrigger } = ScrollTriggerModule;
                
                // Register ScrollTrigger
                gsap.registerPlugin(ScrollTrigger);

                // Animate timeline line
                if (timelineRef.current) {
                    gsap.fromTo(timelineRef.current, {
                        height: 0
                    }, {
                        height: '100%',
                        duration: 2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            scrub: 1
                        }
                    });
                }

                // Animate timeline items
                const timelineItems = document.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    const isEven = index % 2 === 0;
                    const contentElement = item.querySelector('.timeline-content-left, .timeline-content-right');
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
        <section className="relative bg-gradient-to-br from-[#000000] via-[#002e41] to-black py-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="py-8 text-3xl md:text-4xl font-bold text-[#1b66cf] mb-6">
                        Global Schools Affiliation is an Investment in Your Most Valuable Assets.
                    </h2>
                    <h2 className="pb-6 text-4xl md:text-4xl text-white mb-6">
                            Your <span className="font-bold">Students</span><span className="text-[#4686d8] font-bold">.</span> Your <span className="font-bold">Educators</span><span className="text-[#4686d8] font-bold">.</span> Your <span className="font-bold">Legacy</span><span className="text-[#4686d8] font-bold">.</span>
                        
                        </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div 
                        ref={timelineRef}
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full timeline-line"
                    />

                    {/* Timeline Points */}
                    <div ref={timelinePointsRef} className="space-y-32">
                        {/* Item 1 - National and Global Recognition */}
                        <div className="timeline-item flex items-center relative">
                            <div className="w-1/2 pr-12">
                                <div className="timeline-content-left text-left">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                                        <h4 className="text-2xl font-bold text-white mb-6">National and Global Recognition</h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Affiliation validates your commitment to 21st-century education — integrating leadership, sustainability, innovation, 
                                            and global awareness into your academic culture. It's your school's global stamp of excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                <Image
                                    src="/images/whyApply/w36.webp"
                                    alt="National and Global Recognition"
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 pl-12"></div>
                        </div>

                        {/* Item 2 - Access to a Powerful Ecosystem */}
                        <div className="timeline-item flex items-center relative">
                            <div className="w-1/2 pr-12"></div>
                            <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                <Image
                                    src="/images/whyApply/w37.webp"
                                    alt="Access to a Powerful Ecosystem"
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 pl-12">
                                <div className="timeline-content-right">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                                        <h4 className="text-2xl font-bold text-white mb-6">Access to a Powerful Ecosystem</h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Join a national and international network of top-tier schools, educators, and institutions. Gain access to international 
                                            programs, global campaigns & leadership summits. Gain National and global visibility, recognition by global leaders, 
                                            UN-aligned experts and dignitaries. Build collaborations with UN-aligned bodies and global partners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 - Unparalleled Student Opportunities */}
                        <div className="timeline-item flex items-center relative">
                            <div className="w-1/2 pr-12">
                                <div className="timeline-content-left text-left">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                                        <h4 className="text-2xl font-bold text-white mb-6">Unparalleled Student Opportunities</h4>
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            <p className="mb-4">Affiliated schools unlock exclusive access to flagship student programs like:</p>
                                            <div className="text-right">
                                                <ul className="text-base space-y-2 inline-block text-left">
                                                    <li>• India's Young Forest Ambassador (IYFA) Program</li>
                                                    <li>• Youth Leadership Program (YLP)</li>
                                                    <li>• Climate Hackathons & Model United Nations</li>
                                                    <li>• Innovation Labs, Competitions, Climate Clubs & Fellowships</li>
                                                </ul>
                                            </div>
                                            <p className="mt-4">These experiences empower your students to think critically, act locally, and lead globally.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                <Image
                                    src="/images/whyApply/w38.webp"
                                    alt="Unparalleled Student Opportunities"
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 pl-12"></div>
                        </div>

                        {/* Item 4 - Professional Growth for Educators */}
                        <div className="timeline-item flex items-center relative">
                            <div className="w-1/2 pr-12"></div>
                            <div className="timeline-circle absolute left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden z-10">
                                <Image
                                    src="/images/whyApply/w39.webp"
                                    alt="Professional Growth for Educators"
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 pl-12">
                                <div className="timeline-content-right">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                                        <h4 className="text-2xl font-bold text-white mb-6">Professional Growth for Educators</h4>
                                        <div className="text-gray-300 text-lg leading-relaxed">
                                            <p className="mb-4">Empower your teachers through:</p>
                                            <ul className="text-base space-y-2 list-disc list-inside">
                                                <li>SDG-based training & leadership workshops</li>
                                                <li>Leadership & innovation recognition</li>
                                                <li>Collaborations with top educators and institutions</li>
                                                <li>Peer-to-peer learning across the affiliation network</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1b66cf] mb-8">
                        Build a Transformational Legacy.
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-5xl mx-auto mb-6">
                        Affiliation enhances your school's profile, reputation, and future-readiness. With eligibility for - <strong>City Representative roles, Global 
                        Schools Ranking, Platinum-Level Accreditation, National Prizes, Summit Recognition, Representation at India's Biggest MUN 
                        Conference (India MUN National Conferences).</strong>
                    </p>
                    <p className="text-white text-xl font-semibold">
                        Your school becomes a beacon of impactful education.
                    </p>
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .timeline-item {
                        flex-direction: column;
                        text-align: center;
                        position: relative;
                        margin-bottom: 3rem;
                    }
                    .timeline-item .w-1/2 {
                        width: 100%;
                        padding: 0 1rem;
                        margin-bottom: 1.5rem;
                    }
                    .timeline-line {
                        left: 2rem;
                        width: 2px;
                    }
                    .timeline-circle {
                        position: relative;
                        left: -2rem;
                        margin: 1.5rem 0;
                        width: 5rem !important;
                        height: 5rem !important;
                    }
                    .timeline-content-left,
                    .timeline-content-right {
                        text-align: center;
                        margin-bottom: 1.5rem;
                    }
                    .timeline-content-left > div,
                    .timeline-content-right > div {
                        text-align: center;
                    }
                    .timeline-content-left h4,
                    .timeline-content-right h4 {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }
                    .timeline-content-left p,
                    .timeline-content-right p,
                    .timeline-content-left ul,
                    .timeline-content-right ul {
                        font-size: 1rem;
                    }
                    .timeline-content-left .inline-block {
                        display: block !important;
                        text-align: center !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .timeline-circle {
                        width: 4rem !important;
                        height: 4rem !important;
                    }
                    .timeline-content-left h4,
                    .timeline-content-right h4 {
                        font-size: 1.25rem;
                    }
                    .timeline-content-left > div,
                    .timeline-content-right > div {
                        padding: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TimelineSection;