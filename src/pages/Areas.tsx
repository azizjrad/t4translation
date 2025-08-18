import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  GraduationCap,
  Radio,
  Scale,
  Briefcase,
  Monitor,
  Languages,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Clock,
  Users,
} from "lucide-react";

const Areas = () => {
  const { t } = useTranslation();

  const getIndustries = () => [
    {
      icon: Building2,
      title: t("areas.industries.government.title"),
      description: t("areas.industries.government.description"),
      features: t("areas.industries.government.features", {
        returnObjects: true,
      }) as string[],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: Monitor,
      title: t("areas.industries.organization.title"),
      description: t("areas.industries.organization.description"),
      features: t("areas.industries.organization.features", {
        returnObjects: true,
      }) as string[],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: GraduationCap,
      title: t("areas.industries.education.title"),
      description: t("areas.industries.education.description"),
      features: t("areas.industries.education.features", {
        returnObjects: true,
      }) as string[],
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: Radio,
      title: t("areas.industries.media.title"),
      description: t("areas.industries.media.description"),
      features: t("areas.industries.media.features", {
        returnObjects: true,
      }) as string[],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: Scale,
      title: t("areas.industries.legal.title"),
      description: t("areas.industries.legal.description"),
      features: t("areas.industries.legal.features", {
        returnObjects: true,
      }) as string[],
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
    },
  ];

  const industries = getIndustries();

  return (
    <>
      <SEO
        title="Areas"
        description={t("seo.areas.description")}
        keywords={t("seo.areas.keywords")}
        canonicalUrl="https://t4translation.com/areas"
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
                <Globe className="w-5 h-5 mr-2" />
                {t("areas.hero.badge")}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {t("areas.hero.title")}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                {t("areas.hero.subtitle")}
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    const areasSection =
                      document.getElementById("areas-section");
                    if (areasSection) {
                      areasSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Scroll to areas"
                >
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {t("areas.hero.scrollText")}
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

        {/* Areas Grid Section */}
        <section
          id="areas-section"
          className="py-20 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("areas.grid.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t("areas.grid.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .area-title-pink:hover { background: linear-gradient(to right, rgb(236 72 153), rgb(244 63 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .area-title-purple:hover { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .area-title-orange:hover { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .area-title-red:hover { background: linear-gradient(to right, rgb(239 68 68), rgb(236 72 153)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .area-title-emerald:hover { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .area-title-pink { background: linear-gradient(to right, rgb(236 72 153), rgb(244 63 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .area-title-purple { background: linear-gradient(to right, rgb(168 85 247), rgb(139 92 246)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .area-title-orange { background: linear-gradient(to right, rgb(249 115 22), rgb(245 158 11)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .area-title-red { background: linear-gradient(to right, rgb(239 68 68), rgb(236 72 153)); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .group:hover .area-title-emerald { background: linear-gradient(to right, rgb(16 185 129), rgb(34 197 94)); -webkit-background-clip: text; background-clip: text; color: transparent; }
              `,
                }}
              />
              {industries.map((area, index) => {
                const IconComponent = area.icon;
                const titleColorClass = {
                  "from-pink-500 to-rose-500": "area-title-pink",
                  "from-purple-500 to-violet-500": "area-title-purple",
                  "from-orange-500 to-amber-500": "area-title-orange",
                  "from-red-500 to-pink-500": "area-title-red",
                  "from-emerald-500 to-green-500": "area-title-emerald",
                }[area.color];

                return (
                  <div
                    key={index}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                      <div
                        className={`h-2 bg-gradient-to-r ${area.color}`}
                      ></div>

                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-2xl font-bold text-gray-900 mb-3 transition-all duration-300 ${titleColorClass}`}
                            >
                              {area.title}
                            </h3>

                            <p 
                              className="text-gray-600 leading-relaxed mb-6"
                              dangerouslySetInnerHTML={{ __html: area.description }}
                            />

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-2 mb-6">
                              {area.features.map((feature, featureIndex) => (
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

                            {/* View Details Button */}
                            <Button
                              variant="outline"
                              className="group/btn border-2 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                            >
                              <span>{t("areas.grid.learnMore")}</span>
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

        {/* Why Choose Our Industry Expertise Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("areas.expertise.title")}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {t("areas.expertise.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Languages,
                  title: t("areas.expertise.features.terminology.title"),
                  description: t(
                    "areas.expertise.features.terminology.description"
                  ),
                },
                {
                  icon: Shield,
                  title: t("areas.expertise.features.compliance.title"),
                  description: t(
                    "areas.expertise.features.compliance.description"
                  ),
                },
                {
                  icon: Globe,
                  title: t("areas.expertise.features.cultural.title"),
                  description: t(
                    "areas.expertise.features.cultural.description"
                  ),
                },
                {
                  icon: Clock,
                  title: t("areas.expertise.features.quality.title"),
                  description: t(
                    "areas.expertise.features.quality.description"
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
                {t("areas.cta.title")}
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                {t("areas.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/get-started">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    {t("areas.cta.getStarted")}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-4 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    {t("areas.cta.contactUs")}
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

export default Areas;
