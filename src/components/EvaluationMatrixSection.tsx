import React, { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Category {
    name: string;
    credits: number;
    color: string;
    percentage: number;
    description: string;
    subCriteria: SubCriteria[];
    startAngle?: number;
    endAngle?: number;
}

interface SubCriteria {
    name: string;
    description: string;
    credits: number;
}

const EvaluationMatrixSection = () => {
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const categories = [
        {
            name: "Climate Action & Sustainability Integration",
            credits: 120,
            color: "#5ce1e6",
            percentage: 24,
            description: "Measures the school's commitment to environmental responsibility, climate literacy, and ecosystem restoration.",
            subCriteria: [
                { name: "Climate Curriculum Integration", description: "Embedding environmental education into subjects across grade levels", credits: 30 },
                { name: "Student-Led Climate Projects", description: "Active eco-clubs, campaigns, plantation drives, etc.", credits: 30 },
                { name: "Participation in IYFA/India MUN Climate Events", description: "Active involvement in youth programs on climate action", credits: 30 },
                { name: "Impact Measurement & Reporting", description: "Use of data, reports, or audits to showcase progress", credits: 30 }
            ]
        },
        {
            name: "Leadership Development & Youth Empowerment",
            credits: 80,
            color: "#1774d1",
            percentage: 16,
            description: "Recognizing how well the school cultivates student leadership, initiative, and agency.",
            subCriteria: [
                { name: "Clubs & Councils", description: "Active student governance bodies, leadership labs", credits: 20 },
                { name: "Participation in YLP or MUNs", description: "Involvement in Youth Leadership Program / Model UNs", credits: 20 },
                { name: "Student Mentorship & Innovation Challenges", description: "Platforms for peer-led projects or mentorship", credits: 20 },
                { name: "Recognition & Reward Systems", description: "Internal systems to reward leadership and impact", credits: 20 }
            ]
        },
        {
            name: "Innovation & Entrepreneurship",
            credits: 70,
            color: "#002e41",
            percentage: 14,
            description: "How the school fosters critical thinking, innovation mindset, and 21st-century skills.",
            subCriteria: [
                { name: "Innovation Curriculum or Labs", description: "Makerspaces, STEAM, entrepreneurship courses", credits: 25 },
                { name: "Participation in Hackathons/Ideathons", description: "Showcasing practical innovation leadership", credits: 20 },
                { name: "Student Startups or Projects", description: "Incubation, seed-funding, or recognition of ideas", credits: 15 },
                { name: "Faculty-Led Innovation Practices", description: "Teachers introducing innovative pedagogy", credits: 10 }
            ]
        },
        {
            name: "Global Citizenship & Diplomacy",
            credits: 60,
            color: "#ff6b35",
            percentage: 12,
            description: "Assessment of how schools embed intercultural understanding, diplomacy, and SDG alignment.",
            subCriteria: [
                { name: "SDG-Aligned Projects", description: "School-wide or class-based SDG implementation", credits: 20 },
                { name: "International Collaborations", description: "Exchange programs, global school partnerships", credits: 15 },
                { name: "Participation in India MUN / UN Simulations", description: "Representing countries, debating policies", credits: 15 },
                { name: "Civic & Intercultural Learning", description: "Peace education, inclusion, ethics", credits: 10 }
            ]
        },
        {
            name: "Educator Development & Leadership",
            credits: 50,
            color: "#7dd3c0",
            percentage: 10,
            description: "How the school enables teacher growth and leadership.",
            subCriteria: [
                { name: "Teacher Training on SDGs/Climate/Leadership", description: "Regular upskilling programs and workshops", credits: 20 },
                { name: "Educator Recognition", description: "Awards, leadership roles within or beyond school", credits: 10 },
                { name: "Collaboration with Other Educators or Institutions", description: "Peer-to-peer training, national/international links", credits: 10 },
                { name: "Teacher-led Innovation/Clubs", description: "Climate clubs, entrepreneurship cells, etc.", credits: 10 }
            ]
        },
        {
            name: "Community & Social Impact",
            credits: 60,
            color: "#ffd34f",
            percentage: 12,
            description: "Impact beyond the school — in families, local communities, or under-resourced areas.",
            subCriteria: [
                { name: "Community Outreach Programs", description: "Rural outreach, awareness drives, climate camps", credits: 20 },
                { name: "Partnerships with NGOs/CSOs", description: "Co-created programs or solutions with civil society", credits: 15 },
                { name: "Equity & Inclusion Efforts", description: "Scholarships, inclusive programs, accessibility", credits: 15 },
                { name: "Digital & Media Storytelling of Impact", description: "Public storytelling of student/school-led impact", credits: 10 }
            ]
        },
        {
            name: "Legacy, Branding & Institutional Leadership",
            credits: 60,
            color: "#8b5cf6",
            percentage: 12,
            description: "Long-term vision, institutional commitment, and contribution to the broader movement.",
            subCriteria: [
                { name: "Years of Climate/Innovation Programming", description: "Consistency in initiatives across years", credits: 15 },
                { name: "Participation in Global Schools Summit/India MUNx", description: "Hosting or leading events under the GSCA banner", credits: 15 },
                { name: "Role as City Representative / Network Contributor", description: "Institutional leadership within the ecosystem", credits: 15 },
                { name: "Documentation & Reporting", description: "Visibility in reports, newsletters, or global directories", credits: 15 }
            ]
        }
    ];

    const rankingTiers = [
        { tier: "Platinum", range: "425+", color: "#5ce1e6", icon: "🏆" },
        { tier: "Gold", range: "375-424", color: "#ffd34f", icon: "🥇" },
        { tier: "Silver", range: "300-374", color: "#c0c0c0", icon: "🥈" },
        { tier: "Merit", range: "250-299", color: "#7dd3c0", icon: "⭐" }
    ];

    // Calculate cumulative percentages for pie chart
    let cumulativePercentage = 0;
    const categoriesWithCumulative = categories.map(category => {
        const startAngle = cumulativePercentage;
        cumulativePercentage += category.percentage;
        return {
            ...category,
            startAngle,
            endAngle: cumulativePercentage
        };
    });

    const createPieSlice = (category: Category, index: number) => {
        const { startAngle = 0, endAngle = 0, color } = category;
        // Convert percentage to radians (0-100% becomes 0-2π)
        const startAngleRad = (startAngle / 100) * 2 * Math.PI - Math.PI / 2; // Start from top
        const endAngleRad = (endAngle / 100) * 2 * Math.PI - Math.PI / 2;

        const largeArcFlag = (endAngle - startAngle) > 50 ? 1 : 0;

        const x1 = 225 + 200 * Math.cos(startAngleRad);
        const y1 = 225 + 200 * Math.sin(startAngleRad);
        const x2 = 225 + 200 * Math.cos(endAngleRad);
        const y2 = 225 + 200 * Math.sin(endAngleRad);

        const pathData = [
            `M 225 225`,
            `L ${x1} ${y1}`,
            `A 200 200 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
        ].join(' ');

        const handleMouseEnter = (e: MouseEvent<SVGPathElement>) => {
            setHoveredCategory(category);
            const svgElement = (e.target as Element).closest('svg');
            if (svgElement) {
                const svgRect = svgElement.getBoundingClientRect();
                setTooltipPosition({
                    x: e.clientX - svgRect.left,
                    y: e.clientY - svgRect.top
                });
            }
        };

        const handleMouseMove = (e: MouseEvent<SVGPathElement>) => {
            const svgElement = (e.target as Element).closest('svg');
            if (svgElement) {
                const svgRect = svgElement.getBoundingClientRect();
                setTooltipPosition({
                    x: e.clientX - svgRect.left,
                    y: e.clientY - svgRect.top
                });
            }
        };

        const handleMouseLeave = () => {
            setHoveredCategory(null);
        };

        return (
            <motion.path
                key={index}
                d={pathData}
                fill={color}
                stroke="white"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                    filter: "brightness(1.2)",
                    strokeWidth: 4
                }}
                style={{ cursor: 'pointer' }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        );
    };

    return (
        <section className="py-12 ">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1774d1] mb-2">
                        🏆 India MUN – Global Schools Ranking Evaluation Matrix
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Holistic assessment across 500 total credits

                    </p>

                    {/* Summary Card's */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
                        <motion.div
                            className="bg-white border border-[#1774d1] rounded-lg px-6 py-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-2xl font-bold text-[#1774d1]">500</div>
                            <div className="text-xs text-gray-600">Total Score</div>
                        </motion.div>
                        <motion.div
                            className="bg-white border border-[#7dd3c0] rounded-lg px-6 py-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-2xl font-bold text-[#7dd3c0]">7</div>
                            <div className="text-xs text-gray-600">Categories</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Content - Side by Side Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">

                    {/* Pie Chart - Left Side */}
                    <motion.div
                        className="relative w-full lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <svg width="450" height="450">
                                {/* Outer ring */}
                                <circle
                                    cx="225"
                                    cy="225"
                                    r="200"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="2"
                                />

                                {/* Pie slices */}
                                {categoriesWithCumulative.map((category, index) =>
                                    createPieSlice(category, index)
                                )}

                                {/* Inner circle */}
                                <circle
                                    cx="225"
                                    cy="225"
                                    r="100"
                                    fill="white"
                                    stroke="#e5e7eb"
                                    strokeWidth="2"
                                />
                            </svg>

                            {/* Center text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <div className="text-5xl font-bold text-[#1774d1]">500</div>
                                <div className="text-base text-gray-600">Total Credits</div>
                            </div>

                            {/* Tooltip */}
                            {hoveredCategory && (
                                <motion.div
                                    className="absolute bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg pointer-events-none z-20 whitespace-nowrap"
                                    style={{
                                        left: tooltipPosition.x + 10,
                                        top: tooltipPosition.y - 40,
                                        transform: tooltipPosition.x > 350 ? 'translateX(-100%)' : 'translateX(0)'
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="font-semibold text-sm">{hoveredCategory.name}</div>
                                    <div className="text-xs text-center" style={{ color: hoveredCategory.color }}>
                                        {hoveredCategory.credits} Credits ({hoveredCategory.percentage}%)
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Categories List - Right Side */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="rounded-lg px-8 py-6 h-full">
                           
                            <div className="space-y-4">
                                {categories.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-5 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div 
                                            className="w-6 h-6 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: category.color }}
                                        ></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-gray-800 text-base leading-tight">
                                                {category.name} — <span className="text-sm font-bold" style={{ color: category.color }}>{category.credits} Credits</span>
                                            </div>
                                            
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Ranking Tiers - Minimal Design in One Row */}
                <div className="flex flex-col items-center">{/* Wrapper for remaining content */}
                    <motion.div
                        className="mb-6 w-full max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-bold text-center text-gray-800 mb-1">
                                Ranking Tiers
                            </h3>
                            <p className="text-center text-gray-500 text-xs mb-4">Based On Total Credits</p>

                            <div className="flex justify-center items-center gap-6 md:gap-8">
                                {rankingTiers.map((tier, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="text-lg mb-1">{tier.icon}</div>
                                        <div
                                            className="text-sm font-bold mb-1"
                                            style={{ color: tier.color }}
                                        >
                                            {tier.range}
                                        </div>
                                        <div className="font-medium text-gray-600 text-xs">{tier.tier}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Credit Distribution Breakdown */}
                    <motion.div
                        className="w-full max-w-6xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-center text-black mb-6 tracking-wide">
                            CREDIT DISTRIBUTION BREAKDOWN
                        </h3>

                        <div className="space-y-4">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    {/* Category Header */}
                                    <div className="mb-3">
                                        <h4 className="text-lg font-bold text-black mb-1">
                                            🔹 {index + 1}. {category.name} — <span style={{ color: category.color }}>{category.credits} Credits</span>
                                        </h4>
                                        <p className="text-gray-700 text-xs leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Sub-criteria Table */}
                                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                                        {/* Table Header */}
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 bg-gray-100 p-2 text-xs font-semibold text-gray-800">
                                            <div className="md:col-span-4">Sub-Criteria</div>
                                            <div className="md:col-span-6">Description</div>
                                            <div className="md:col-span-2 text-center">Max Credits</div>
                                        </div>

                                        {/* Table Rows */}
                                        {category.subCriteria.map((subCriteria, subIndex) => (
                                            <motion.div
                                                key={subIndex}
                                                className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2 border-b border-gray-50 hover:bg-gray-50 transition-colors duration-200"
                                                whileHover={{ x: 2 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="md:col-span-4">
                                                    <span className="font-medium text-gray-800 text-xs">
                                                        {subCriteria.name}
                                                    </span>
                                                </div>
                                                <div className="md:col-span-6">
                                                    <span className="text-gray-600 text-xs">
                                                        {subCriteria.description}
                                                    </span>
                                                </div>
                                                <div className="md:col-span-2 flex items-center justify-center">
                                                    <div className="flex flex-col items-center gap-1 w-full">
                                                        <span className="font-bold text-sm">{subCriteria.credits}</span>
                                                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                            <div 
                                                                className="h-full rounded-full transition-all duration-300"
                                                                style={{ 
                                                                    backgroundColor: category.color,
                                                                    width: `${(subCriteria.credits / category.credits) * 100}%`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>{/* End wrapper for remaining content */}
            </div>
        </section>
    );
};

export default EvaluationMatrixSection;