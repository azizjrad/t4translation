import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  MapPin,
  Hand,
  Shield,
  Video,
  FileText,
  Languages,
  Mic,
  Play,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Headphones,
  Camera,
  BookOpen,
  Newspaper,
  Search,
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const getServices = () => [
    {
      icon: Users,
      title: t("services.items.interpretation.title"),
      category: t("services.items.interpretation.category"),
      description: t("services.items.interpretation.description"),
      features: t("services.items.interpretation.features", {
        returnObjects: true,
      }) as string[],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "/interpretation.png",
    },
    {
      icon: Video,
      title: t("services.items.subtitling.title"),
      category: t("services.items.subtitling.category"),
      description: t("services.items.subtitling.description"),
      features: t("services.items.subtitling.features", {
        returnObjects: true,
      }) as string[],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      image: "/subtitling.png",
    },
    {
      icon: Hand,
      title: t("services.items.signLanguage.title"),
      category: t("services.items.signLanguage.category"),
      description: t("services.items.signLanguage.description"),
      features: t("services.items.signLanguage.features", {
        returnObjects: true,
      }) as string[],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      image: "/sign.png",
    },
    {
      icon: Shield,
      title: t("services.items.authentication.title"),
      category: t("services.items.authentication.category"),
      description: t("services.items.authentication.description"),
      features: t("services.items.authentication.features", {
        returnObjects: true,
      }) as string[],
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      image: "/authentication.png",
    },
    {
      icon: MapPin,
      title: t("services.items.localization.title"),
      category: t("services.items.localization.category"),
      description: t("services.items.localization.description"),
      features: t("services.items.localization.features", {
        returnObjects: true,
      }) as string[],
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      image: "/localization.png",
    },
    {
      icon: FileText,
      title: t("services.items.surveys.title"),
      category: t("services.items.surveys.category"),
      description: t("services.items.surveys.description"),
      features: t("services.items.surveys.features", {
        returnObjects: true,
      }) as string[],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      image: "/surveys.png",
    },
  ];

  const services = getServices();

  const filteredServices =
    activeFilter === "All" || activeFilter === t("services.grid.filters.all")
      ? services
      : services.filter(
          (service) =>
            service.category === activeFilter ||
            (activeFilter === "Business" &&
              service.category === t("services.grid.filters.business")) ||
            (activeFilter === "Document" &&
              service.category === t("services.grid.filters.document"))
        );

  return (
    <>
      <SEO
        title="Services"
        description={t("seo.services.description")}
        keywords={t("seo.services.keywords")}
        canonicalUrl="https://t4translation.com/services"
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
                <Languages className="w-5 h-5 mr-2" />
                {t("services.hero.badge")}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {t("services.hero.title")}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                {t("services.hero.subtitle")}
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    const servicesSection =
                      document.getElementById("services-section");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Scroll to services"
                >
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {t("services.hero.scrollText")}
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

        {/* Services Grid Section */}
        <section
          id="services-section"
          className="py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("services.grid.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t("services.grid.subtitle")}
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { key: "All", label: t("services.grid.filters.all") },
                  {
                    key: "Business",
                    label: t("services.grid.filters.business"),
                  },
                  {
                    key: "Document",
                    label: t("services.grid.filters.document"),
                  },
                ].map((filter) => (
                  <Button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    variant={
                      activeFilter === filter.key ? "default" : "outline"
                    }
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeFilter === filter.key
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-0 hover:from-blue-700 hover:to-purple-700"
                        : "border-2 border-gray-300 text-gray-600 bg-white hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md"
                    }`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .service-title-blue:hover { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .service-title-purple:hover { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .service-title-pink:hover { background: linear-gradient(to right, rgb(236 72 153), rgb(244 63 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .service-title-emerald:hover { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .service-title-orange:hover { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .service-title-indigo:hover { background: linear-gradient(to right, rgb(99 102 241), rgb(59 130 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-blue { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-purple { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-pink { background: linear-gradient(to right, rgb(236 72 153), rgb(244 63 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-emerald { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-orange { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .service-title-indigo { background: linear-gradient(to right, rgb(99 102 241), rgb(59 130 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
              `,
                }}
              />
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                const titleColorClass = {
                  "from-blue-500 to-cyan-500": "service-title-blue",
                  "from-purple-500 to-violet-500": "service-title-purple",
                  "from-pink-500 to-rose-500": "service-title-pink",
                  "from-emerald-500 to-green-500": "service-title-emerald",
                  "from-orange-500 to-amber-500": "service-title-orange",
                  "from-indigo-500 to-blue-500": "service-title-indigo",
                }[service.color];

                return (
                  <div
                    key={index}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                      <div
                        className={`h-2 bg-gradient-to-r ${service.color}`}
                      ></div>

                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          {/* Image and Category */}
                          <div className="flex-shrink-0">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="mt-3">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {service.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-2xl font-bold text-gray-900 mb-3 transition-all duration-300 ${titleColorClass}`}
                            >
                              {service.title}
                            </h3>

                            <p
                              className="text-gray-600 leading-relaxed mb-6"
                              dangerouslySetInnerHTML={{
                                __html: service.description,
                              }}
                            />

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-2 mb-6">
                              {service.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* View Service Button */}
                            <Button
                              variant="outline"
                              className="group/btn border-2 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                            >
                              <span>{t("services.viewService")}</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("services.process.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("services.process.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .process-title-blue:hover { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .process-title-purple:hover { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .process-title-emerald:hover { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .process-title-blue { background: linear-gradient(to right, rgb(59 130 246), rgb(6 182 212)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .process-title-purple { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .process-title-emerald { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
              `,
                }}
              />
              {[
                {
                  step: "01",
                  title: t("services.process.steps.submit.title"),
                  description: t("services.process.steps.submit.description"),
                  icon: MessageSquare,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: t("services.process.steps.assign.title"),
                  description: t("services.process.steps.assign.description"),
                  icon: Users,
                  color: "from-purple-500 to-violet-500",
                },
                {
                  step: "03",
                  title: t("services.process.steps.deliver.title"),
                  description: t("services.process.steps.deliver.description"),
                  icon: Award,
                  color: "from-emerald-500 to-green-500",
                },
              ].map((step, index) => {
                const IconComponent = step.icon;
                const titleColorClass = {
                  "from-blue-500 to-cyan-500": "process-title-blue",
                  "from-purple-500 to-violet-500": "process-title-purple",
                  "from-emerald-500 to-green-500": "process-title-emerald",
                }[step.color];

                return (
                  <div
                    key={index}
                    className="group text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 ${titleColorClass}`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("services.whyChoose.title"),
                }}
              />
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {t("services.whyChoose.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: t("services.whyChoose.features.availability.title"),
                  description: t(
                    "services.whyChoose.features.availability.description"
                  ),
                },
                {
                  icon: Users,
                  title: t("services.whyChoose.features.nativeSpeakers.title"),
                  description: t(
                    "services.whyChoose.features.nativeSpeakers.description"
                  ),
                },
                {
                  icon: Shield,
                  title: t("services.whyChoose.features.quality.title"),
                  description: t(
                    "services.whyChoose.features.quality.description"
                  ),
                },
                {
                  icon: Globe,
                  title: t("services.whyChoose.features.languages.title"),
                  description: t(
                    "services.whyChoose.features.languages.description"
                  ),
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="opacity-90">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("services.cta.title")}
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                {t("services.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/get-started">
                  <Button
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    <span className="relative z-10 font-semibold">
                      {t("services.cta.primaryButton")}
                    </span>
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-4 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    {t("services.cta.secondaryButton")}
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

export default Services;
