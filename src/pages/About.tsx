import React from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Globe,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Building2,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Mathlouthi Akrem",
      role: "Co-founder & CEO",
      image: "user1.png",
    },
    {
      name: "Mathlouthi Houssem",
      role: "Product Manager",
      image: "user2.png",
    },
    {
      name: "Jrad Aziz",
      role: "Developer",
      image: "user3.png",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality translations with meticulous attention to detail and cultural nuance.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Understanding diverse cultures and markets to provide contextually appropriate linguistic solutions worldwide.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Building lasting partnerships through personalized service, transparent communication, and dedicated support.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Consistent delivery of projects on time with 24/7 availability for urgent translation requirements.",
    },
  ];

  return (
    <>
      <SEO
        title="About T4Translation - Professional Translation Company | Our Story"
        description="Learn about T4Translation's mission to bridge languages and cultures worldwide. Meet our expert team of professional translators and discover our values, vision, and commitment to quality."
        keywords="about T4Translation, professional translation company, translation team, language services company, certified translators, translation experts, company history"
        canonicalUrl="https://t4translation.com/about"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[100vh] modern-hero-gradient text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 hero-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-lg font-medium">
                <Building2 className="w-5 h-5 mr-2" />
                About T4Translation
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Your trusted linguistic bridge connecting cultures and
                facilitating global communication with excellence since 2010
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    const aboutSection =
                      document.getElementById("about-section");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Scroll to about content"
                >
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Learn About Us
                  </div>
                  <div className="relative">
                    <ArrowRight
                      className="w-8 h-8 text-white/80 group-hover:text-white rotate-90 transition-colors duration-300"
                      style={{
                        animation: "moveUpDown 3s ease-in-out infinite",
                      }}
                    />
                  </div>
                </button>

                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                  @keyframes moveUpDown {
                    0% { transform: translateY(0) rotate(90deg); }
                    25% { transform: translateY(-6px) rotate(90deg); }
                    50% { transform: translateY(-12px) rotate(90deg); }
                    75% { transform: translateY(-6px) rotate(90deg); }
                    100% { transform: translateY(0) rotate(90deg); }
                  }
                `,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          id="about-section"
          className="py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="relative group">
                  {/* Enhanced Custom Animated Visual */}
                  <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 shadow-2xl group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-700 transform group-hover:-translate-y-3 overflow-hidden relative">
                    {/* Enhanced Background Patterns */}
                    <div className="absolute inset-0">
                      {/* Floating Orbs with Glow */}
                      <div className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-full shadow-lg animate-pulse">
                        <div
                          className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-full animate-spin"
                          style={{ animationDuration: "6s" }}
                        ></div>
                      </div>
                      <div
                        className="absolute top-16 right-12 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce shadow-glow"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-yellow-200/50 to-transparent rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-12 left-16 w-10 h-10 bg-cyan-400/25 rounded-full animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                      >
                        <div
                          className="w-full h-full bg-gradient-to-br from-cyan-200/50 to-transparent rounded-full animate-spin"
                          style={{ animationDuration: "4s" }}
                        ></div>
                      </div>
                      <div
                        className="absolute bottom-16 right-8 w-6 h-6 bg-pink-400/30 rounded-full animate-bounce"
                        style={{ animationDelay: "2s" }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-pink-200/50 to-transparent rounded-full"></div>
                      </div>

                      {/* Enhanced Geometric Patterns */}
                      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45 animate-pulse">
                        <div
                          className="absolute inset-2 border border-white/10 rounded-sm animate-spin"
                          style={{ animationDuration: "8s" }}
                        ></div>
                      </div>
                      <div className="absolute bottom-24 right-20 w-12 h-12 border-2 border-white/25 rounded-full">
                        <div
                          className="absolute inset-1 border border-white/15 rounded-full animate-spin"
                          style={{ animationDuration: "10s" }}
                        ></div>
                        <div className="absolute inset-3 bg-white/10 rounded-full animate-pulse"></div>
                      </div>

                      {/* Enhanced Language Connection Network */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 400 300"
                      >
                        <defs>
                          <radialGradient
                            id="nodeGradient"
                            cx="50%"
                            cy="50%"
                            r="50%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(255,255,255,0.8)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(255,255,255,0.3)"
                            />
                          </radialGradient>
                          <filter id="glow">
                            <feGaussianBlur
                              stdDeviation="3"
                              result="coloredBlur"
                            />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <g
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="2"
                          fill="none"
                          filter="url(#glow)"
                        >
                          {/* Primary Connection Nodes */}
                          <circle
                            cx="80"
                            cy="70"
                            r="6"
                            fill="url(#nodeGradient)"
                          >
                            <animate
                              attributeName="r"
                              values="6;12;6"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle
                            cx="320"
                            cy="100"
                            r="6"
                            fill="url(#nodeGradient)"
                          >
                            <animate
                              attributeName="r"
                              values="6;12;6"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                          </circle>
                          <circle
                            cx="180"
                            cy="220"
                            r="6"
                            fill="url(#nodeGradient)"
                          >
                            <animate
                              attributeName="r"
                              values="6;12;6"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                          </circle>
                          <circle
                            cx="120"
                            cy="180"
                            r="5"
                            fill="url(#nodeGradient)"
                          >
                            <animate
                              attributeName="r"
                              values="5;10;5"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="0.5s"
                            />
                          </circle>
                          <circle
                            cx="280"
                            cy="190"
                            r="5"
                            fill="url(#nodeGradient)"
                          >
                            <animate
                              attributeName="r"
                              values="5;10;5"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1.5s"
                            />
                          </circle>

                          {/* Enhanced Flowing Connection Lines */}
                          <path
                            d="M80,70 Q150,40 200,60 Q250,80 320,100"
                            strokeDasharray="8,4"
                            strokeWidth="3"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;-24"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.3;0.8;0.3"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </path>
                          <path
                            d="M320,100 Q300,140 280,190 Q230,210 180,220"
                            strokeDasharray="6,3"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;-18"
                              dur="3.5s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.4;0.9;0.4"
                              dur="3.5s"
                              repeatCount="indefinite"
                            />
                          </path>
                          <path
                            d="M180,220 Q140,200 120,180 Q100,150 90,120 Q85,95 80,70"
                            strokeDasharray="5,5"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;-20"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.5;1;0.5"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </path>
                          <path
                            d="M120,180 Q200,170 280,190"
                            strokeDasharray="4,4"
                            strokeWidth="2"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;-16"
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Data Flow Particles */}
                          <circle r="2" fill="rgba(255,255,255,0.9)">
                            <animateMotion dur="6s" repeatCount="indefinite">
                              <path d="M80,70 Q150,40 200,60 Q250,80 320,100" />
                            </animateMotion>
                            <animate
                              attributeName="opacity"
                              values="0;1;1;0"
                              dur="6s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="2" fill="rgba(255,255,255,0.9)">
                            <animateMotion
                              dur="5s"
                              repeatCount="indefinite"
                              begin="2s"
                            >
                              <path d="M320,100 Q300,140 280,190 Q230,210 180,220" />
                            </animateMotion>
                            <animate
                              attributeName="opacity"
                              values="0;1;1;0"
                              dur="5s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                          </circle>
                        </g>
                      </svg>

                      {/* Enhanced Central Hub */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          {/* Outer Ring */}
                          <div
                            className="w-28 h-28 border-2 border-white/20 rounded-full animate-spin"
                            style={{ animationDuration: "20s" }}
                          >
                            <div className="absolute top-1 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                            <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                            <div className="absolute left-1 top-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                            <div className="absolute right-1 top-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-y-1/2"></div>
                          </div>
                          {/* Central Globe */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-700 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                              <svg
                                className="w-10 h-10 text-white animate-pulse"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Language Labels with Containers */}
                      <div className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-white/80 text-sm font-medium animate-pulse">
                          العربية
                        </span>
                      </div>
                      <div
                        className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        style={{ animationDelay: "1s" }}
                      >
                        <span
                          className="text-white/80 text-sm font-medium animate-pulse"
                          style={{ animationDelay: "1s" }}
                        >
                          English
                        </span>
                      </div>
                      <div
                        className="absolute bottom-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        style={{ animationDelay: "2s" }}
                      >
                        <span
                          className="text-white/80 text-sm font-medium animate-pulse"
                          style={{ animationDelay: "2s" }}
                        >
                          Français
                        </span>
                      </div>
                      <div
                        className="absolute bottom-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <span
                          className="text-white/80 text-sm font-medium animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        >
                          Español
                        </span>
                      </div>

                      {/* Floating Translation Symbols */}
                      <div
                        className="absolute top-1/4 left-1/4 text-2xl text-white/30 animate-bounce"
                        style={{
                          animationDelay: "1s",
                          animationDuration: "3s",
                        }}
                      >
                        ⟷
                      </div>
                      <div
                        className="absolute top-3/4 right-1/4 text-2xl text-white/30 animate-bounce"
                        style={{
                          animationDelay: "2s",
                          animationDuration: "3s",
                        }}
                      >
                        🌐
                      </div>
                    </div>

                    {/* Enhanced Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Custom Styles for Enhanced Effects */}
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                    .shadow-glow {
                      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-10px); }
                    }
                  `,
                    }}
                  />
                </div>
              </div>
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  <strong>To serve as a reliable linguistic bridge</strong> that
                  connects individuals, businesses, and organizations across
                  cultural and language barriers. We are committed to delivering
                  exceptional translation and interpretation services that
                  preserve meaning, context, and cultural sensitivity while
                  facilitating clear, effective communication in an increasingly
                  connected world.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Our Vision
                  </span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We envision a world where language is never a barrier to
                  understanding, collaboration, or opportunity. Through our{" "}
                  <strong>24/7 commitment to quality and diversity</strong>, we
                  strive to be the premier choice for organizations seeking
                  professional linguistic services that respect cultural nuances
                  and deliver precise, contextually appropriate communication
                  solutions.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    "Excellence in every translation",
                    "Cultural sensitivity and accuracy",
                    "24/7 global support",
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our commitment to exceptional service
                and drive our mission forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .value-title-blue:hover { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .value-title-purple:hover { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .value-title-emerald:hover { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .value-title-orange:hover { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .value-title-blue { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .value-title-purple { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .value-title-emerald { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .value-title-orange { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
              `,
                }}
              />
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const colors = [
                  {
                    gradient: "from-blue-500 to-cyan-500",
                    title: "value-title-blue",
                  },
                  {
                    gradient: "from-purple-500 to-violet-500",
                    title: "value-title-purple",
                  },
                  {
                    gradient: "from-emerald-500 to-green-500",
                    title: "value-title-emerald",
                  },
                  {
                    gradient: "from-orange-500 to-amber-500",
                    title: "value-title-orange",
                  },
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <div
                    key={index}
                    className="group text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                      <div
                        className={`h-2 bg-gradient-to-r ${colorClass.gradient}`}
                      ></div>
                      <CardContent className="p-8">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClass.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3
                          className={`text-xl font-bold text-gray-900 mb-4 transition-all duration-300 ${colorClass.title}`}
                        >
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to linguistic excellence and
                cultural understanding
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden shadow-none border-none bg-transparent">
                      <div className="relative h-48 overflow-hidden rounded-2xl">
                        <img
                          src={`/${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                          {member.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and global
                reach
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Languages Supported" },
                { number: "10,000+", label: "Projects Completed" },
                { number: "500+", label: "Satisfied Clients" },
                { number: "14", label: "Years of Excellence" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                  </div>
                  <p className="text-white/90 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
