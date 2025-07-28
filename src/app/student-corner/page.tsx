import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Student Corner | IndiaMUN",
  description: "Resources, opportunities and community for students interested in climate action and Model United Nations",
};

export default function StudentCorner() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground/10 to-primary/100" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Corner</h1>
            <p className="text-xl md:text-2xl mb-8">
              Your hub for resources, opportunities, and community as you embark on your climate action journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#opportunities">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Explore Opportunities
                </Button>
              </Link>
              <Link href="#resources">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Access Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="opportunities" className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how you can participate in IndiaMUN's programs and activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Upcoming Programs",
                description: "Apply for our flagship student programs designed to develop your leadership and advocacy skills.",
                links: [
                  { name: "Young Forest Ambassador Program", url: "/student-programs/young-forest-ambassador-program" },
                  { name: "Youth Leadership Program", url: "/student-programs/youth-leadership-program" },
                  { name: "Climate Hackathons", url: "/student-programs/climate-hackathons" },
                ],
                icon: "🌟",
              },
              {
                title: "Conferences",
                description: "Participate in our MUN conferences focused on climate action and environmental policy.",
                links: [
                  { name: "National Conference 2024", url: "/national-conferences/conference-2024" },
                  { name: "Regional MUN Events", url: "/student-programs/mun-conferences" },
                  { name: "International Partnerships", url: "/partners-and-affiliates" },
                ],
                icon: "🏛️",
              },
              {
                title: "Volunteer",
                description: "Join our network of volunteers and contribute your skills to our mission.",
                links: [
                  { name: "Current Opportunities", url: "/student-programs/volunteer" },
                  { name: "Volunteer Application", url: "#volunteer-form" },
                  { name: "Volunteer Stories", url: "#volunteer-stories" },
                ],
                icon: "✋",
              },
            ].map((opportunity, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{opportunity.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <ul className="space-y-2">
                  {opportunity.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.url} className="text-primary hover:underline flex items-center">
                        <span className="mr-2">→</span> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Resources</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Access educational materials, toolkits, and guides to enhance your knowledge and skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MUN Preparation Guide",
                description: "Everything you need to know about participating in a Model United Nations conference.",
                type: "PDF Guide",
                icon: "📋",
              },
              {
                title: "Climate Science Basics",
                description: "An introduction to key climate science concepts and terminology.",
                type: "Online Course",
                icon: "🌍",
              },
              {
                title: "Public Speaking Toolkit",
                description: "Enhance your presentation and debate skills with this comprehensive resource.",
                type: "Video Series",
                icon: "🎤",
              },
              {
                title: "Research Methods",
                description: "Learn how to research and develop position papers for MUN conferences.",
                type: "Workshop Materials",
                icon: "🔍",
              },
              {
                title: "SDGs Framework",
                description: "Understanding the UN Sustainable Development Goals and their relevance to climate action.",
                type: "Interactive Guide",
                icon: "🎯",
              },
              {
                title: "Climate Policy Simulator",
                description: "Interactive tool to understand how different policies impact climate outcomes.",
                type: "Web Application",
                icon: "💻",
              },
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{resource.icon}</div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    Access Resource
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section id="volunteer-stories" className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Stories</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from students who have participated in our programs and made a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Arjun Mehta",
                age: 18,
                program: "Young Forest Ambassador",
                story: "Being a Young Forest Ambassador changed my perspective on environmental activism. I learned that small actions, when multiplied by many people, can lead to significant positive change. Through the program, I led a tree-planting initiative in my community that has now grown into a city-wide movement.",
                image: "arjun",
              },
              {
                name: "Neha Singh",
                age: 20,
                program: "National Conference Delegate",
                story: "Participating in the National Conference gave me the confidence to speak up about climate issues. I represented India at an international youth climate summit the following year and am now studying environmental policy at university. The debating and negotiation skills I learned at IndiaMUN have been invaluable.",
                image: "neha",
              },
            ].map((story, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg p-6">
                <div className="md:w-1/3">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-1">{story.name}, {story.age}</h3>
                  <p className="text-primary font-medium mb-4">{story.program}</p>
                  <p className="text-gray-700 italic mb-4">"{story.story}"</p>
                  <Button variant="link" className="text-primary p-0">
                    Read Full Story →
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button>
              View More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Volunteer Application</h2>
            <p className="text-gray-700 mb-8 text-center">
              Interested in volunteering with IndiaMUN? Fill out this form to join our volunteer network and we'll get in touch with opportunities that match your skills and interests.
            </p>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3">
                  <option>Event Coordination</option>
                  <option>Content Creation</option>
                  <option>Social Media</option>
                  <option>Program Mentoring</option>
                  <option>Outreach</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
                <textarea rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-3 py-2"></textarea>
              </div>
              <div className="text-center">
                <Button size="lg" className="px-8">
                  Submit Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 