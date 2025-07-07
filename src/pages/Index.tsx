import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  Clock,
  Award,
  Languages,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="T4Translation - Professional Translation & Interpretation Services | Global Language Solutions"
        description="Expert translation and interpretation services in Arabic, English, French, and German. Government, legal, medical, business translation with fast turnaround. Professional linguists worldwide."
        keywords="translation services, interpretation, Arabic translation, English translation, French translation, German translation, professional translators, document translation, legal translation, medical translation, business translation, certified translation, localization services"
        canonicalUrl="https://t4translation.com"
      />
      <Layout>
        <SEO
          title="Home"
          description="Welcome to T4Translation, your gateway to professional translation services."
        />
        {/* Hero Section */}
        <section
          className="relative min-h-[90vh] modern-hero-gradient text-white overflow-hidden"
          itemScope
          itemType="https://schema.org/Service"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 hero-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-slide-in-left">
                <div className="space-y-2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                    <Globe className="w-4 h-4 mr-2" />
                    <span itemProp="serviceType">
                      Professional Translation Services
                    </span>
                  </div>
                  <h1
                    className="text-5xl md:text-7xl font-bold leading-tight"
                    itemProp="name"
                  >
                    Welcome to
                    <span
                      className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                      itemProp="provider"
                      itemScope
                      itemType="https://schema.org/Organization"
                    >
                      <span itemProp="name">T4Translation</span>
                    </span>
                  </h1>
                </div>

                <div className="space-y-6">
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-blue-100"
                    itemProp="slogan"
                  >
                    "Quality – Short Turnarounds – Satisfaction – Customer
                    Service"
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
                    We care for our clients; we listen to them; understand their
                    needs and make sure they get excellent and flawless customer
                    service. Customer satisfaction is our goal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button
                      size="lg"
                      className="group relative bg-white text-primary hover:bg-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-30"></div>
                      <span className="relative z-10">Get Started</span>
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      className="group relative bg-transparent border-2 border-white text-white hover:text-primary text-lg px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 overflow-hidden backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                        View Services
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative animate-slide-in-right">
                <div className="hero-illustration">
                  <div className="relative w-full h-96 md:h-[500px]">
                    {/* Main Illustration Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-80 h-80">
                        {/* Left Orange Circle (Users) */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow z-10">
                          <Users className="w-10 h-10 text-white" />
                        </div>

                        {/* Right Green Circle (Translation) */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow delay-300 z-10">
                          <Languages className="w-10 h-10 text-white" />
                        </div>

                        {/* Central Blue/Purple Globe */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow relative z-20">
                            <Globe className="w-20 h-20 text-white" />
                          </div>
                        </div>

                        {/* Language Bubbles */}
                        {/* Arabic Bubble - Top */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl animate-float z-30 border border-gray-100">
                          <span className="text-sm font-semibold text-gray-800">
                            عربي
                          </span>
                        </div>

                        {/* English Bubble - Bottom Left */}
                        <div className="absolute bottom-4 left-8 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl animate-float delay-500 z-30 border border-gray-100">
                          <span className="text-sm font-semibold text-gray-800">
                            English
                          </span>
                        </div>

                        {/* French Bubble - Bottom Right */}
                        <div className="absolute bottom-4 right-8 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl animate-float delay-1000 z-30 border border-gray-100">
                          <span className="text-sm font-semibold text-gray-800">
                            Français
                          </span>
                        </div>

                        {/* Additional Language Bubbles */}
                        {/* Spanish Bubble - Right */}
                        <div className="absolute right-2 top-16 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-float delay-700 z-30 border border-gray-100">
                          <span className="text-xs font-medium text-gray-700">
                            Español
                          </span>
                        </div>

                        {/* German Bubble - Left */}
                        <div className="absolute left-2 top-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg animate-float delay-1200 z-30 border border-gray-100">
                          <span className="text-xs font-medium text-gray-700">
                            Deutsch
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float delay-200 opacity-70"></div>
                    <div className="absolute bottom-12 left-12 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-float delay-700 opacity-70"></div>
                    <div className="absolute top-1/2 left-4 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float delay-1200 opacity-70"></div>
                    <div className="absolute top-1/4 right-6 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float delay-400 opacity-70"></div>
                    <div className="absolute bottom-1/4 right-12 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-float delay-900 opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Zigzag Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Who We Are - Right Side */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/who.png"
                      alt="Professional translation team collaboration"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  We are a group of skilled professionals dedicated to
                  delivering accurate and culturally relevant translations. Our
                  team includes experienced translators, localization experts,
                  and project managers who collaborate seamlessly to ensure
                  delivering high-quality content. With expertise in diverse
                  languages and industries, we provide tailored solutions to
                  meet your specific needs and help you connect with the global
                  audience effectively.
                </p>
              </div>
            </div>

            {/* Mission - Left Side */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  To facilitate smooth interaction and serve as a reliable
                  linguistic bridge and mediator between individuals,
                  communities, businesses, institutions, international
                  organizations, etc.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Excellence in every translation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Cultural sensitivity and accuracy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">
                      Building bridges between communities
                    </span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                    {/* Mission SVG Illustration */}
                    <svg viewBox="0 0 400 300" className="w-full h-auto">
                      {/* Background circles */}
                      <circle
                        cx="200"
                        cy="150"
                        r="120"
                        fill="url(#missionGradient)"
                        opacity="0.1"
                      />
                      <circle
                        cx="200"
                        cy="150"
                        r="80"
                        fill="url(#missionGradient)"
                        opacity="0.15"
                      />

                      {/* Central bridge/connection symbol */}
                      <path
                        d="M 120 150 Q 200 100 280 150"
                        stroke="url(#missionGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 120 150 Q 200 200 280 150"
                        stroke="url(#missionGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />

                      {/* People/connection nodes */}
                      <circle cx="120" cy="150" r="20" fill="#10B981" />
                      <circle cx="200" cy="125" r="18" fill="#059669" />
                      <circle cx="280" cy="150" r="20" fill="#10B981" />
                      <circle cx="200" cy="175" r="18" fill="#059669" />

                      {/* Communication lines */}
                      <line
                        x1="140"
                        y1="150"
                        x2="180"
                        y2="125"
                        stroke="#34D399"
                        strokeWidth="3"
                        opacity="0.7"
                      />
                      <line
                        x1="220"
                        y1="125"
                        x2="260"
                        y2="150"
                        stroke="#34D399"
                        strokeWidth="3"
                        opacity="0.7"
                      />
                      <line
                        x1="220"
                        y1="175"
                        x2="260"
                        y2="150"
                        stroke="#34D399"
                        strokeWidth="3"
                        opacity="0.7"
                      />
                      <line
                        x1="140"
                        y1="150"
                        x2="180"
                        y2="175"
                        stroke="#34D399"
                        strokeWidth="3"
                        opacity="0.7"
                      />

                      {/* Language symbols around the edges */}
                      <text
                        x="80"
                        y="120"
                        fill="#059669"
                        fontSize="24"
                        fontWeight="bold"
                      >
                        A
                      </text>
                      <text
                        x="320"
                        y="120"
                        fill="#059669"
                        fontSize="24"
                        fontWeight="bold"
                      >
                        中
                      </text>
                      <text
                        x="80"
                        y="190"
                        fill="#059669"
                        fontSize="24"
                        fontWeight="bold"
                      >
                        ع
                      </text>
                      <text
                        x="320"
                        y="190"
                        fill="#059669"
                        fontSize="24"
                        fontWeight="bold"
                      >
                        Ñ
                      </text>

                      {/* Floating message bubbles */}
                      <ellipse
                        cx="150"
                        cy="80"
                        rx="25"
                        ry="15"
                        fill="#ECFDF5"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="250"
                        cy="220"
                        rx="25"
                        ry="15"
                        fill="#ECFDF5"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="320"
                        cy="80"
                        rx="20"
                        ry="12"
                        fill="#ECFDF5"
                        stroke="#10B981"
                        strokeWidth="2"
                      />

                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient
                          id="missionGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Mission label */}
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-gray-700">
                          Global Bridge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services - Right Side */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="relative max-w-md mx-auto">
                  <div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl transition-all duration-700"
                    id="service-background"
                  ></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/document.png"
                      alt="Document Translation Service"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      id="service-image"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  T4Translation is a translation services portal which offers
                  individuals, organizations, and businesses excellent
                  translation and interpretation services using native-language
                  professionals from several countries in a genuine effort to
                  offer high-quality translations and other services..
                </p>

                {/* Interactive Service Buttons */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => {
                      const img = document.getElementById(
                        "service-image"
                      ) as HTMLImageElement;
                      const bg = document.getElementById("service-background");
                      if (img) {
                        img.src = "/document.png";
                        img.alt = "Document Translation Service";
                      }
                      if (bg) {
                        bg.className =
                          "absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl transition-all duration-700";
                      }
                    }}
                    className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Document
                  </button>
                  <button
                    onClick={() => {
                      const img = document.getElementById(
                        "service-image"
                      ) as HTMLImageElement;
                      const bg = document.getElementById("service-background");
                      if (img) {
                        img.src = "/business.png";
                        img.alt = "Business Translation Service";
                      }
                      if (bg) {
                        bg.className =
                          "absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl transition-all duration-700";
                      }
                    }}
                    className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Business
                  </button>
                  <button
                    onClick={() => {
                      const img = document.getElementById(
                        "service-image"
                      ) as HTMLImageElement;
                      const bg = document.getElementById("service-background");
                      if (img) {
                        img.src = "/government.png";
                        img.alt = "Government Translation Service";
                      }
                      if (bg) {
                        bg.className =
                          "absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl blur-xl transition-all duration-700";
                      }
                    }}
                    className="px-6 py-3 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    Government
                  </button>
                  <button
                    onClick={() => {
                      const img = document.getElementById(
                        "service-image"
                      ) as HTMLImageElement;
                      const bg = document.getElementById("service-background");
                      if (img) {
                        img.src = "/legal.png";
                        img.alt = "Legal Translation Service";
                      }
                      if (bg) {
                        bg.className =
                          "absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-2xl blur-xl transition-all duration-700";
                      }
                    }}
                    className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Legal
                  </button>
                </div>
              </div>
            </div>

            {/* Vision - Centered */}
            <div className="text-center animate-fade-in-up">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                  {/* Vision SVG Illustration - Centered */}
                  <div className="max-w-md mx-auto mb-8">
                    <svg viewBox="0 0 400 300" className="w-full h-auto">
                      {/* Background elements */}
                      <circle
                        cx="200"
                        cy="150"
                        r="100"
                        fill="url(#visionGradient)"
                        opacity="0.1"
                      />
                      <circle
                        cx="200"
                        cy="150"
                        r="60"
                        fill="url(#visionGradient)"
                        opacity="0.15"
                      />

                      {/* Global network connections */}
                      <circle
                        cx="200"
                        cy="150"
                        r="40"
                        fill="none"
                        stroke="url(#visionGradient)"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                      <circle
                        cx="200"
                        cy="150"
                        r="70"
                        fill="none"
                        stroke="url(#visionGradient)"
                        strokeWidth="1"
                        opacity="0.2"
                      />

                      {/* Central globe */}
                      <circle
                        cx="200"
                        cy="150"
                        r="25"
                        fill="url(#visionGradient)"
                      />

                      {/* Connecting nodes around the globe */}
                      <circle cx="150" cy="120" r="8" fill="#3B82F6" />
                      <circle cx="250" cy="120" r="8" fill="#8B5CF6" />
                      <circle cx="270" cy="170" r="8" fill="#EC4899" />
                      <circle cx="230" cy="200" r="8" fill="#6366F1" />
                      <circle cx="170" cy="200" r="8" fill="#3B82F6" />
                      <circle cx="130" cy="170" r="8" fill="#8B5CF6" />

                      {/* Connection lines */}
                      <line
                        x1="175"
                        y1="150"
                        x2="150"
                        y2="120"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <line
                        x1="225"
                        y1="150"
                        x2="250"
                        y2="120"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <line
                        x1="225"
                        y1="150"
                        x2="270"
                        y2="170"
                        stroke="#F472B6"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <line
                        x1="200"
                        y1="175"
                        x2="230"
                        y2="200"
                        stroke="#818CF8"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <line
                        x1="200"
                        y1="175"
                        x2="170"
                        y2="200"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                      <line
                        x1="175"
                        y1="150"
                        x2="130"
                        y2="170"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        opacity="0.6"
                      />

                      {/* Cultural symbols */}
                      <text
                        x="120"
                        y="100"
                        fill="#3B82F6"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        🌍
                      </text>
                      <text
                        x="280"
                        y="100"
                        fill="#8B5CF6"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        🌎
                      </text>
                      <text
                        x="290"
                        y="190"
                        fill="#EC4899"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        🌏
                      </text>
                      <text
                        x="110"
                        y="190"
                        fill="#6366F1"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        🤝
                      </text>

                      {/* Future vision rays */}
                      <path
                        d="M 200 150 L 180 80"
                        stroke="url(#visionGradient)"
                        strokeWidth="3"
                        opacity="0.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 200 150 L 320 100"
                        stroke="url(#visionGradient)"
                        strokeWidth="3"
                        opacity="0.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 200 150 L 320 200"
                        stroke="url(#visionGradient)"
                        strokeWidth="3"
                        opacity="0.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 200 150 L 80 200"
                        stroke="url(#visionGradient)"
                        strokeWidth="3"
                        opacity="0.4"
                        strokeLinecap="round"
                      />

                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient
                          id="visionGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                    T4Translation is mindful of our diversity, and seeks to
                    serve as a bridge between various distant interlocutors and
                    clients by providing them with top-notch and timely services
                    on a 24/7 basis.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white rounded-full shadow-lg">
                    <span className="font-semibold">
                      Connecting Cultures, Bridging Languages
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages We Translate Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Languages We Translate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional translation services across multiple languages with
                native-level expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* English */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white shadow-lg">
                  {/* UK Flag */}
                  <img
                    src="/uk_flag.svg"
                    alt="UK Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  English
                </h3>
                <p className="text-gray-600">
                  Native English speakers ensuring perfect fluency and cultural
                  accuracy
                </p>
              </div>

              {/* French */}
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-200">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white shadow-lg">
                  {/* French Flag */}
                  <div className="w-full h-full flex">
                    <div className="w-1/3 h-full bg-blue-600"></div>
                    <div className="w-1/3 h-full bg-white"></div>
                    <div className="w-1/3 h-full bg-red-600"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  French
                </h3>
                <p className="text-gray-600">
                  Precise French translations with attention to linguistic
                  nuances
                </p>
              </div>

              {/* Arabic */}
              <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white shadow-lg">
                  {/* Arabic Flag */}
                  <img
                    src="/ar_flag.png"
                    alt="Arabic Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Arabic
                </h3>
                <p className="text-gray-600">
                  Expert Arabic translations respecting cultural context and
                  dialects
                </p>
              </div>

              {/* German */}
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-400">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white shadow-lg">
                  {/* German Flag */}
                  <div className="w-full h-full flex flex-col">
                    <div className="w-full h-1/3 bg-black"></div>
                    <div className="w-full h-1/3 bg-red-600"></div>
                    <div className="w-full h-1/3 bg-yellow-400"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  German
                </h3>
                <p className="text-gray-600">
                  Professional German translations with technical precision
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Bridge Languages?
              </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
                Join thousands of satisfied clients who trust T4Translation for
                their linguistic needs. Let's start your translation journey
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/get-started">
                  <Button
                    size="lg"
                    className="group relative bg-white text-primary hover:bg-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-30"></div>
                    <span className="relative z-10 font-semibold">
                      Get Started Now
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
