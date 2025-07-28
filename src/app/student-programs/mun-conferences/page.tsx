import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MUN Conferences | BuzzOnEarth",
  description: "India's first Model United Nations conference on Climate - A platform for students to debate and analyze climate problems.",
}

export default function MUNConferencesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-8">
          The only MUN which is India's MUN and represents India internationally
        </h1>

        <p className="text-lg mb-12">
          India's first Model United Nations conference on Climate. A challenging and competitive platform for students to debate and analyse some of the world's most pressing climate problems. As delegates representing different countries and agencies, students gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Behold the power of the largest youth population in the world.
          </h2>
          
          <p className="text-xl text-[#0066FF] font-semibold">
            Brace yourself for leadership like never before.
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mt-12">
            India biggest Model UN conference on Climate is Coming Soon
          </h3>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold text-[#0066FF] text-center mb-16">
          Key Highlights
        </h2>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Youth-Led Dialogues */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Youth-Led Dialogues</h3>
            <p className="text-gray-700">
              Engage in thought-provoking discussions led by young leaders driving climate action globally.
            </p>
          </div>

          {/* Innovative Solutions Showcase */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions Showcase</h3>
            <p className="text-gray-700">
              Witness groundbreaking initiatives and solutions addressing pressing climate challenges.
            </p>
          </div>

          {/* Global Networking */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Global Networking</h3>
            <p className="text-gray-700">
              Connect with like-minded individuals, experts, and organizations committed to a sustainable future
            </p>
          </div>

          {/* Inspiring Keynotes */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Inspiring Keynotes</h3>
            <p className="text-gray-700">
              Gain insights from influential speakers shaping the discourse on climate change and environmental conservation
            </p>
          </div>

          {/* Interactive Workshops */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Interactive Workshops</h3>
            <p className="text-gray-700">
              Participate in hands-on workshops, equipping yourself with actionable knowledge and skills.
            </p>
          </div>

          {/* Youth Awards Ceremony */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Youth Awards Ceremony</h3>
            <p className="text-gray-700">
              Celebrate and recognize outstanding contributions by young individuals in the field of climate action.
            </p>
          </div>
        </div>

        {/* Timeline Points */}
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {[
            "Highly influential and effective Governing council",
            "Strong network of mentors and guides for students to unleash their best potential",
            "Certificates signed by UN dignitaries",
            "Network of Global Schools for Climate Action, Leadership and Innovation",
            "Focus on inculcating spirit of innovation, entrepreneurship, leadership and regeneration",
            "Exposure to essential life skills. Experiential learning on diverse topics",
            "The only MUN focused on Climate and Biodiversity as core themes",
            "Direct linkage with UNEP and UNFCCC.",
            "Unique opportunity to represent India at UN COP Events."
          ].map((text, index) => (
            <div key={index} className="flex items-center justify-center w-32 h-32 rounded-full bg-[#90EE90] bg-opacity-20 border-4 border-[#90EE90] p-4 text-center text-sm font-medium">
              {text}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 