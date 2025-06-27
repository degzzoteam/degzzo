"use client"

import {
  Heart,
  Users,
  Lightbulb,
  Music,
  Plane,
  Coffee,
  Palette,
  BookOpen,
  Sparkles,
  Globe,
  Award,
  Smile,
} from "lucide-react"

export default function CareersPage() {
  const coreValues = [
    { icon: Users, label: "Diversity", color: "text-purple-600" },
    { icon: Globe, label: "Culture", color: "text-blue-600" },
    { icon: Heart, label: "Respect", color: "text-red-600" },
    { icon: Sparkles, label: "Passion", color: "text-orange-600" },
    { icon: BookOpen, label: "Learning", color: "text-green-600" },
    { icon: Music, label: "Music", color: "text-pink-600" },
    { icon: Plane, label: "Travel", color: "text-indigo-600" },
    { icon: Coffee, label: "Food", color: "text-amber-600" },
  ]

  const culturalBlocks = [
    {
      icon: Users,
      title: "Cultural Diversity",
      description: "Our designers come from diverse backgrounds, contributing to the culture in their own unique ways.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Learning and Growth",
      description: "We believe in multi-dimensional growth & encourage participation in all aspects of the work we do.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      title: "Passion and Respect",
      description: "Our passion for design comes from respecting diverse perspectives and embracing the unexplored.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Smile,
      title: "Here for a Good Time",
      description: "We are just as serious about food, coffee, drinks and enjoying ourselves, as we are about design.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]


  return (
    
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Join Our Creative Journey</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're a digital design and website development company where creativity meets innovation. Come build the
            future of digital experiences with us.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Culture Building Blocks */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Building Blocks of our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At our company, we adopt a holistic approach towards the workplace. Here's what makes our culture unique
              and vibrant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalBlocks.map((block, index) => {
              const IconComponent = block.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative p-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${block.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-8 h-8 ${block.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {block.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-lg">{block.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another design agency. We're a community of passionate creators building the future of
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-xl font-bold mb-4">Creative Freedom</h3>
              <p className="text-gray-300">
                Express your creativity without limits. We encourage bold ideas and innovative solutions.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Users className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h3 className="text-xl font-bold mb-4">Collaborative Environment</h3>
              <p className="text-gray-300">
                Work with talented individuals from diverse backgrounds in a supportive team environment.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <BookOpen className="w-12 h-12 mx-auto mb-6 text-green-400" />
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-300">
                Grow your skills with access to latest tools, technologies, and learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join our team of passionate designers and developers. Let's build the future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg">
              Send Your Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Reach out to learn more about opportunities with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:info.degzzo@gmail.com"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              <Coffee className="w-5 h-5" />
              degzzoteam@gmail.com
            </a>

            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href="tel:+917708460702"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              <Heart className="w-5 h-5" />
              Let's grab coffee and chat!
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
