"use client"

import { useEffect, useState } from "react"


export default function LollypopProcessPage() {
  const [activeTab, setActiveTab] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("[data-tab-content]");
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        setActiveTab(index);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const scrollToTab = (index: number) => {
    setActiveTab(index)
    const section = document.querySelector(`[data-tab-content="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <section className="bg-white">
        <div className=" xl:mx-40">
          <div className="  px-5 pb-5 ">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide block mb-4">Process</span>
            <h1 className="xl:text-center text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tailored to deliver the best for your business
            </h1>
            <p className="xl:text-center text-xl md:text-2xl text-gray-600  mx-auto leading-relaxed">
              A flexible and adaptive process that helps businesses launch and scale quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-20 bg-white ">
          <div className=" mx-3 xl:mx-60">
              <div className="flex justify-center ">
                <button
                  onClick={() => scrollToTab(0)}
                  className={`flex-1  transition-all duration-300 ${
                    activeTab === 0 ? "bg-white text-red-600 font-bold" : "bg-white text-gray-600 hover:bg-white"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1 text-left">For SMEs & Conglomerates Retail Startups & Creators</div>
                  <div className="text-md md:text-4xl font-bold text-left">Agile Design Process</div>
                </button>
                <button
                  onClick={() => scrollToTab(1)}
                  className={`flex-1  py-6 md:pl-20 transition-all duration-300 ${
                    activeTab === 1 ? "bg-white text-red-600 font-bold" : "bg-white text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1 text-left ">For E-comm and personal Branding</div>
                  <div className="text-md md:text-4xl font-bold text-left ">Build Fast a Wedsite</div>
                </button>
              </div>
            
          </div>
        </div>

      {/* Tab Content */}
      <div className=" space-y-0">
        {/* Build Fast Launch Fast */}
        <section data-tab-content="0" className="scroll-mt-40 xl:scroll-mt-[110px] py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Process Overview */}
              <div className="mb-12 ">
                <p className=" text-md md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Designing a responsive website for both  a desktop and mobile, while ensuring the users feel that the
                  brand is selling fashion and not just the products.
                </p>

                <div className="flex justify-between">
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Suited for:</span>
                    <h6 className="text-sm xl:text-lg font-bold text-gray-900">SMEs and Conglomerates</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1 w-30">Time lines:</span>
                    <h6 className="textsm xl:text-lg font-bold text-gray-900">1–2 Months</h6>
                    <span className="text-xs">(avg. 6–8 weeks)</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Engagement Mode:</span>
                    <h6 className="textsm xl:text-lg font-bold text-gray-900">Retainer / Fixed Project</h6>
                  </div>
                </div>
                <p className=" text-center pt-4 text-md md:text-2xl font-bold text-gray-700 mb-8 leading-relaxed">
                  We offer curated monthly plans tailored to your brand’s creative needs—focusing on professional design and video editing to ensure your content stays consistent, engaging, and visually compelling across platforms.
                </p>
               
              </div>

              {/* Process Steps */}
              <div className="pb-30 space-y-16">
                {/* Step 1: Build */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
                  <div className="sticky top-32 self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 1</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DISCOVER</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We begin by understanding your audience’s expectations and aligning them with your brand’s goals. Through in-depth research and discovery, 
                      we analyze your current brand presence and apply an iterative design process 
                      to craft meaningful visuals, intuitive experiences, and solutions that resonate with your vision.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Discover</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Brand Discovery & Research</h5>
                          <p className="text-gray-600">
                            We immerse ourselves in your brand to uncover its unique identity, values, and target audience. 
                            This phase ensures we align creative strategy with business intent.
                          </p>
                          <p className="text-gray-400">Your brand’s story, tone of voice, and market positioning</p>
                          <p className="text-gray-400">Audience insights and emotional value</p>
                          <p className="text-gray-400">Competitor analysis & visual audit for opportunities</p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Strategic Planning</h5>
                          <p className="text-gray-600">
                            In this stage, our brand strategy experts We turn research into an actionable creative direction that drives measurable impact. 
                            This actionable roadmap helps us outline the path to measurable results for your project.
                          </p>
                          <p className="text-gray-400">Brand and project KPIs</p>
                          <p className="text-gray-400">Core messaging frameworks</p>
                          <p className="text-gray-400">Visual positioning opportunities</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        We collaborate with you to integrate best design practices with all your requirements. This
                        consists of a step by step review of schematics, A concise design brief and roadmap to execution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Launch */}
                <div className="grid grid-cols-2 gap-12">
                  <div className="sticky top-32 self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 2</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DESIGN & VISUALIZE</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Translating the designs into pixel perfect, adaptable and scalable digital products followed by
                      launching a quality product into the market as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Logo Visual Identity</h5>
                          <p className="text-sm text-gray-600">
                            We design a cohesive and memorable brand system that speaks to your audience and stands out across platforms.
                          </p>
                          <p className="text-gray-400">Primary and alternate logo options</p>
                          <p className="text-gray-400">Define and shape the visual elements of your brand</p>
                          <p className="text-gray-400">Create memorable branding elements that connect with your audience</p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Brand Book & Style Gudie</h5>
                          <p className="text-sm text-gray-600">
                            A brand book and style guide houses all of your essential brand information in one place, 
                            providing accessibility to employees and stakeholders alike. Beyond your logo, this includes 
                            supporting brand elements such as typography, 
                            primary and secondary color palettes, imagery selection, brand iconography and more.
                          </p>
                          <p className="text-gray-400">Build a go-to guide for your brand</p>
                          <p className="text-gray-400">Define proper and improper usage of your brand elementsd</p>
                          <p className="text-gray-400">Identify guidelines to create consistency across channels</p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Video and Poster for AD&aposs </h5>
                          <p className="text-sm text-gray-600">
                            A brand book and style guide houses all of your essential brand information in one place, 
                            providing accessibility to employees and stakeholders alike. Beyond your logo, this includes 
                            supporting brand elements such as typography, 
                            primary and secondary color palettes, imagery selection, brand iconography and more.
                          </p>
                          <p className="text-gray-400">Build a go-to guide for your brand</p>
                          <p className="text-gray-400">Define proper and improper usage of your brand elementsd</p>
                          <p className="text-gray-400">Identify guidelines to create consistency across channels</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        An approach to build a high quality end product, where the design comes to life. This phase
                        consists of product optimisation and integration of special features, interactivity and other
                        design elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Section - Upstox */}
              {/* <ViewProjectsDesign/> */}
            </div>
          </div>
        </section>
        {/* Agile Design Process */}
        <section data-tab-content="1" className="scroll-mt-40 xl:scroll-mt-[110px]  bg-white">
          <div className="mx-3 xl:mx-60">
            <div className="">
              {/* Process Overview */}
              <div className="mb-12 ">
                <p className=" text-md md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Designing a responsive website for both  a desktop and mobile, while ensuring the users feel that the
                  brand is selling fashion and not just the products.
                </p>

                <div className="flex justify-between">
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Suited for:</span>
                    <h6 className="textsm xl:text-lg font-bold text-gray-900">SMEs and Conglomerates</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1 w-30">Time lines:</span>
                    <h6 className="textsm xl:text-lg font-bold text-gray-900">1-2 Months</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Engagement Mode:</span>
                    <h6 className="textsm xl:text-lg font-bold text-gray-900">Retainer</h6>
                  </div>
                </div>

                {/* Client Logos */}
                <div className="mb-8 mt-8">
                  <p className="text-sm text-gray-600 mb-4">Clients who have trusted our process:</p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-6">
                    {["Udaan", "Byju", "Intel", "Oracle", "Tata Steel", "Paytm", "GIIS School", "Farmrise"].map(
                      (client, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <div className="w-full h-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">{client}</span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <button className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors">
                    Get In Touch →
                  </button>
                </div>
              </div>

              {/* Process Steps */}
              <div className=" pb-10 space-y-16">
                {/* Step 1: Discover */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
                  <div className="sticky top-32 self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 1</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover</h2>
                    <p className="text-gray-600 leading-relaxed">
                      The discovery phase is the vital first step of the journey, and involves gaining an understanding
                      of user requirements, insight into business goals, and an analysis of the current state of the
                      product (if applicable).
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Business Goals</h5>
                          <p className="text-gray-600">
                            Gathering knowledge from clients and understanding the company&aposs vision and project goals.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">User Requirements</h5>
                          <p className="text-gray-600">
                            Understanding who the relevant users are, and gaining clarity on their needs and
                            motivations.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Market Research</h5>
                          <p className="text-gray-600">
                            Analysing the current market scenario and competitors, to set a direction and road map for
                            the project.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        Our UX consultants conduct a 2-3 week discovery workshop to gather knowledge from all
                        stakeholders. This helps us craft a holistic approach which will cater to all requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Design */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
                  <div className="sticky top-32 self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 2</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Design</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the design phase, we engage in an iterative process of trial and error to help come up with
                      unique concepts, ideas and solutions for every project. Clients are deeply involved in this stage,
                      to ensure the output is always in sync with business goals.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Information Architecture</h5>
                          <p className="text-gray-600">
                            Organizing, structuring, and mapping content on the platform, to help users discover
                            information and complete tasks.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Wireframes</h5>
                          <p className="text-gray-600">
                            Creating a design blueprint that provides a first glance of what the final visual design
                            will look like.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Visual Design</h5>
                          <p className="text-gray-600">
                            Creating a beautifully designed, functional interface with visual elements that appeal to
                            all users.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Prototype and Test</h5>
                          <p className="text-gray-600">
                            Prototyping the final product and testing it in real time to get inputs and reliable user
                            feedback.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        We collaborate with you to integrate best design practices with all your requirements. This
                        consists of a step by step review of schematics, wireframes, art illustrations and visual
                        design.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Build */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
                  <div className="sticky top-32 self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 3</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Build</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Translating designs into high quality adaptable, pixel perfect, scalable digital products that can
                      be launched quickly into the market.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Front-End Development</h5>
                          <p className="text-gray-600">
                            Implementing the best combination of technologies (full-stack, mean stack, flutter,
                            native-OS) for your project.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Backend Development</h5>
                          <p className="text-gray-600">
                            Using the best programming language and technologies to build a functional and adaptable
                            product.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h5>
                          <p className="text-gray-600">
                            Conducting quality checks and fixing existing glitches and inaccuracies to ensure quality
                            standards are met.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        An approach to build a high quality end product, where the design comes to life. This phase
                        consists of product optimisation and integration of special features, interactivity and other
                        design elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        
    </div>
  )
}
