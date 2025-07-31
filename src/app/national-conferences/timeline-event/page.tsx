import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "National Conference 2024 | IndiaMUN",
  description: "Join us for IndiaMUN's National Conference 2024 - India's largest youth climate action summit",
};

export default function Conference2024() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
          {/* Background pattern or image would go here */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-900/90" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">National Conference 2024</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              October 15-18, 2024 • New Delhi
            </p>
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              India's premier youth climate action summit bringing together future leaders from across the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#register">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="#schedule">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Info */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Conference</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The IndiaMUN National Conference is our flagship annual event that brings together students from across India to engage in Model United Nations debates focused on climate action and environmental policy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This year's conference theme is "Climate Innovation and Youth Leadership: Pathways to a Sustainable Future," highlighting the crucial role young people play in developing innovative solutions to environmental challenges.
              </p>
              <p className="text-lg text-gray-700">
                Participants will simulate UN committees, engage in diplomatic negotiations, and develop policy recommendations that address real-world climate issues. The conference also features workshops, keynote speakers, and networking opportunities with environmental leaders.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Conference Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Information</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dates & Venue",
                items: [
                  "October 15-18, 2024",
                  "India Habitat Centre, New Delhi",
                  "Registration opens: March 1, 2024",
                  "Registration closes: September 15, 2024"
                ],
                icon: "📅",
              },
              {
                title: "Committees",
                items: [
                  "United Nations Environment Programme (UNEP)",
                  "UN Framework Convention on Climate Change (UNFCCC)",
                  "UN Development Programme (UNDP)",
                  "World Health Organization (WHO)",
                  "UN Economic and Social Council (ECOSOC)"
                ],
                icon: "🏛️",
              },
              {
                title: "Eligibility & Fees",
                items: [
                  "High school students (Grades 9-12)",
                  "College/University students",
                  "Registration fee: ₹3,000 per delegate",
                  "Institutional delegation (10+ students): ₹2,500 per delegate",
                  "Financial aid available for eligible participants"
                ],
                icon: "✅",
              },
            ].map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-6 text-center">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">{info.title}</h3>
                <ul className="space-y-2">
                  {info.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conference Schedule</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              A four-day program of debates, workshops, and networking events.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                day: "Day 1 - October 15",
                title: "Opening Day",
                events: [
                  { time: "08:00 - 09:30", event: "Registration and Check-in" },
                  { time: "10:00 - 11:30", event: "Opening Ceremony with Keynote Speaker" },
                  { time: "12:00 - 13:00", event: "Committee Briefings" },
                  { time: "13:00 - 14:00", event: "Lunch Break" },
                  { time: "14:00 - 17:00", event: "Committee Session I" },
                  { time: "17:30 - 19:00", event: "Welcome Reception" },
                ]
              },
              {
                day: "Day 2 - October 16",
                title: "Debate Day",
                events: [
                  { time: "09:00 - 12:00", event: "Committee Session II" },
                  { time: "12:00 - 13:00", event: "Lunch Break" },
                  { time: "13:00 - 16:00", event: "Committee Session III" },
                  { time: "16:30 - 18:00", event: "Expert Panel: Climate Innovation" },
                  { time: "18:30 - 20:00", event: "Cultural Evening" },
                ]
              },
              {
                day: "Day 3 - October 17",
                title: "Resolution Day",
                events: [
                  { time: "09:00 - 12:00", event: "Committee Session IV" },
                  { time: "12:00 - 13:00", event: "Lunch Break" },
                  { time: "13:00 - 16:00", event: "Committee Session V" },
                  { time: "16:30 - 18:00", event: "Career Fair: Environmental Sector" },
                  { time: "18:30 - 21:00", event: "Conference Dinner (Optional)" },
                ]
              },
              {
                day: "Day 4 - October 18",
                title: "Closing Day",
                events: [
                  { time: "09:00 - 12:00", event: "Committee Session VI (Final)" },
                  { time: "12:00 - 13:00", event: "Lunch Break" },
                  { time: "13:00 - 15:00", event: "Resolution Presentations" },
                  { time: "15:30 - 17:00", event: "Closing Ceremony and Awards" },
                  { time: "17:00 - 18:00", event: "Farewell Reception" },
                ]
              },
            ].map((day, index) => (
              <div key={index} className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-4 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{day.day}</h3>
                    <p className="text-gray-600">{day.title}</p>
                  </div>
                </div>
                <div className="border-l-2 border-blue-200 ml-5 pl-8">
                  <div className="space-y-6">
                    {day.events.map((event, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-10 top-2 h-3 w-3 rounded-full bg-blue-600"></div>
                        <p className="text-blue-800 font-medium">{event.time}</p>
                        <p className="text-gray-700">{event.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Speakers</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Learn from leading experts in climate policy, environmental science, and youth advocacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Arunima Patel",
                role: "Climate Scientist, Indian Institute of Science",
                topic: "Climate Science & Policy Interface",
              },
              {
                name: "Rajiv Sharma",
                role: "Former Environment Secretary, Government of India",
                topic: "Environmental Governance",
              },
              {
                name: "Meera Gupta",
                role: "Youth Climate Activist & UN Youth Delegate",
                topic: "Youth Mobilization for Climate Action",
              },
              {
                name: "Prof. Vikram Singh",
                role: "Sustainable Development Expert, TERI University",
                topic: "Sustainable Cities & Communities",
              },
            ].map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Speaker Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                  <p className="text-gray-600 mb-3">{speaker.role}</p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Speaking on:</span> {speaker.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 bg-blue-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Register for Conference 2024</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Secure your spot at India's premier youth climate conference. Early bird rates available until July 31, 2024.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Register Now
          </Button>
          <p className="mt-6 text-sm text-blue-200">
            For group registrations or inquiries, contact conference@indiamun.org
          </p>
        </div>
      </section>
    </div>
  );
} 