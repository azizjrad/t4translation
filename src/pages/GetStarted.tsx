import React, { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Rocket,
  FileText,
  Clock,
  Users,
  CheckCircle,
  Upload,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const { toast } = useToast();

  // Preload critical image
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "/getstarted.png";
    link.as = "image";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [formData, setFormData] = useState({
    status: "",
    areas: "",
    service: "",
    sourceLanguage: "",
    targetLanguage: "",
    name: "",
    email: "",
    projectDetails: "",
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTime, setBlockTime] = useState<Date | null>(null);

  // Check if user is still blocked
  const checkBlockStatus = () => {
    if (
      blockTime &&
      new Date().getTime() - blockTime.getTime() < 30 * 60 * 1000
    ) {
      return true;
    }
    if (
      blockTime &&
      new Date().getTime() - blockTime.getTime() >= 30 * 60 * 1000
    ) {
      setIsBlocked(false);
      setBlockTime(null);
      setRetryCount(0);
    }
    return false;
  };

  // Simulate form submission with random failure for demo
  const simulateFormSubmission = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.3); // 30% chance of failure for demo
      }, 2000);
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is blocked
    if (checkBlockStatus()) {
      const remainingTime = Math.ceil(
        (30 * 60 * 1000 - (new Date().getTime() - blockTime!.getTime())) / 60000
      );
      toast({
        title: "⏳ Too Many Failed Attempts",
        description: `Please wait ${remainingTime} more minutes before trying again. We've temporarily blocked submissions to prevent spam.`,
        variant: "destructive",
        duration: 6000,
      });
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectDetails) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields (Name, Email, and Project Details).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      const success = await simulateFormSubmission();

      if (success) {
        // Reset retry count on successful submission
        setRetryCount(0);

        // Show success notification
        toast({
          title: "🎉 Project Request Submitted Successfully!",
          description: `Thank you ${formData.name}! We'll analyze your ${
            formData.service || "translation"
          } requirements and send a detailed quote to ${
            formData.email
          } within 2 hours.`,
          duration: 5000,
        });

        console.log("Form submitted:", formData);

        // Reset form after successful submission
        setFormData({
          status: "",
          areas: "",
          service: "",
          sourceLanguage: "",
          targetLanguage: "",
          name: "",
          email: "",
          projectDetails: "",
          file: null,
        });
      } else {
        // Handle submission failure
        const newRetryCount = retryCount + 1;
        setRetryCount(newRetryCount);

        if (newRetryCount >= 3) {
          // Block user for 30 minutes after 3 consecutive failures
          setIsBlocked(true);
          setBlockTime(new Date());

          toast({
            title: "🚫 Multiple Submission Failures",
            description:
              "We've detected multiple failed attempts. Please come back in 30 minutes and try again. This helps us maintain system stability.",
            variant: "destructive",
            duration: 8000,
          });
        } else {
          toast({
            title: "❌ Submission Failed",
            description: `Sorry, there was an issue sending your request. Please try again. (Attempt ${newRetryCount}/3)`,
            variant: "destructive",
            duration: 5000,
          });
        }
      }
    } catch (error) {
      // Handle unexpected errors
      const newRetryCount = retryCount + 1;
      setRetryCount(newRetryCount);

      if (newRetryCount >= 3) {
        setIsBlocked(true);
        setBlockTime(new Date());

        toast({
          title: "🚫 Multiple Submission Failures",
          description:
            "We've detected multiple failed attempts. Please come back in 30 minutes and try again. This helps us maintain system stability.",
          variant: "destructive",
          duration: 8000,
        });
      } else {
        toast({
          title: "❌ Unexpected Error",
          description: `An unexpected error occurred. Please try again. (Attempt ${newRetryCount}/3)`,
          variant: "destructive",
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Document Translation",
    "Website Localization",
    "Live Interpretation",
    "Video Subtitling",
    "Audio Transcription",
    "Legal Translation",
    "Medical Translation",
    "Technical Translation",
    "Marketing Content",
    "Academic Papers",
  ];

  const languages = ["English", "Arabic", "French", "German"];

  const areas = [
    "Government Translation",
    "Organization Translation",
    "Education Translation",
    "Media Translation",
    "Legal and Business Translation",
  ];

  const services = [
    "Translation and Interpretation Services",
    "Subtitling, Transcription, Captioning Service",
    "Sign Language Service",
    "Authentication Service",
    "Localization Service",
    "Surveys, Researches, News Bulletins",
  ];

  const urgencyOptions = [
    { value: "urgent", label: "Urgent (24-48 hours)", price: "+50%" },
    { value: "rush", label: "Rush (3-5 days)", price: "+25%" },
    {
      value: "standard",
      label: "Standard (1-2 weeks)",
      price: "Standard Rate",
    },
    { value: "economy", label: "Economy (2-4 weeks)", price: "-15%" },
  ];

  return (
    <>
      <SEO
        title="Get Started - T4Translation | Free Quote for Translation Services"
        description="Start your translation project with T4Translation. Get a free quote for professional translation services in Arabic, English, French, and German. Expert linguists, fast turnaround."
        keywords="get started translation, free translation quote, project quote, translation services, professional translators, Arabic translation, English translation, French translation, German translation"
        canonicalUrl="https://t4translation.com/get-started"
      />
      <Layout>
        {" "}
        {/* Hero Section */}
        <section
          className="relative min-h-[80vh] modern-hero-gradient text-white overflow-hidden"
          itemScope
          itemType="https://schema.org/WebPage"
          role="banner"
          aria-labelledby="hero-title"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 hero-shapes" aria-hidden="true">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>
          </div>{" "}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-lg font-medium">
                <Rocket className="w-5 h-5 mr-2" aria-hidden="true" />
                <span itemProp="breadcrumb">Start Your Project</span>
              </div>

              <h1
                id="hero-title"
                className="text-5xl md:text-7xl font-bold leading-tight"
                itemProp="name"
              >
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Get Started
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto"
                itemProp="description"
              >
                Transform your content for global audiences. Get a personalized
                quote and timeline for your translation project in minutes
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    const formSection = document.getElementById("project-form");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Scroll to project form"
                >
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Start Your Project
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
        </section>{" "}
        {/* Project Form Section */}
        <section
          id="project-form"
          className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden"
          itemScope
          itemType="https://schema.org/ContactPage"
          role="main"
          aria-labelledby="form-title"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-60 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-bounce"></div>

            {/* Moving Gradient Circles */}
            <div className="absolute top-10 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full animate-slow-ping"></div>
            <div
              className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-r from-purple-300/10 to-indigo-300/10 rounded-full animate-slow-ping"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float-up"></div>
            <div
              className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-float-up"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-3/4 w-2 h-2 bg-indigo-400/40 rounded-full animate-float-up"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* CSS Animations */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes slow-ping {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.7; }
                100% { transform: scale(1); opacity: 1; }
              }
              
              @keyframes float-up {
                0% { transform: translateY(0px) scale(1); opacity: 0.7; }
                50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
                100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
              }
              
              .animate-slow-ping {
                animation: slow-ping 4s ease-in-out infinite;
              }
              
              .animate-float-up {
                animation: float-up 6s ease-in-out infinite;
              }
            `,
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {" "}
            {/* Header */}
            <div className="text-center mb-16">
              <h2
                id="form-title"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                itemProp="name"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Feel Free to GetStarted
                </span>
              </h2>
            </div>
            {/* Form and Image Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {" "}
              {/* Form Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    itemScope
                    itemType="https://schema.org/ContactForm"
                    role="form"
                    aria-label="Translation project request form"
                    noValidate
                  >
                    {" "}
                    {/* Status */}
                    <div>
                      <Label
                        htmlFor="status"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Status <span className="text-gray-400">(Optional)</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("status", value)
                        }
                      >
                        <SelectTrigger
                          id="status"
                          className="h-12 border-gray-200 rounded-xl"
                          aria-describedby="status-help"
                        >
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="anytime">AnyTime</SelectItem>
                        </SelectContent>
                      </Select>
                      <div id="status-help" className="sr-only">
                        Choose the urgency level for your translation project
                      </div>
                    </div>
                    {/* Areas */}
                    <div>
                      <Label
                        htmlFor="areas"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Areas
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("areas", value)
                        }
                      >
                        <SelectTrigger className="h-12 border-gray-200 rounded-xl">
                          <SelectValue placeholder="Select Areas" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {areas.map((area) => (
                            <SelectItem key={area} value={area.toLowerCase()}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Service */}
                    <div>
                      <Label
                        htmlFor="service"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Service
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="h-12 border-gray-200 rounded-xl">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service.toLowerCase()}
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Source Language */}
                    <div>
                      <Label
                        htmlFor="sourceLanguage"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Source language
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("sourceLanguage", value)
                        }
                      >
                        <SelectTrigger className="h-12 border-gray-200 rounded-xl">
                          <SelectValue placeholder="Select source language" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang.toLowerCase()}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Target Language */}
                    <div>
                      <Label
                        htmlFor="targetLanguage"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Target language
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("targetLanguage", value)
                        }
                      >
                        <SelectTrigger className="h-12 border-gray-200 rounded-xl">
                          <SelectValue placeholder="Select target language" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang.toLowerCase()}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>{" "}
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Full Name{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your Full Name"
                        className="h-12 border-gray-200 rounded-xl"
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        autoComplete="name"
                      />
                      <div
                        id="name-error"
                        className="sr-only"
                        role="alert"
                        aria-live="polite"
                      >
                        {!formData.name ? "Full name is required" : ""}
                      </div>
                    </div>{" "}
                    {/* Email Address */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Email Address{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Your Email Address"
                        className="h-12 border-gray-200 rounded-xl"
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        autoComplete="email"
                      />
                      <div
                        id="email-error"
                        className="sr-only"
                        role="alert"
                        aria-live="polite"
                      >
                        {!formData.email ? "Email address is required" : ""}
                      </div>
                    </div>{" "}
                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Message Here{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.projectDetails}
                        onChange={(e) =>
                          handleInputChange("projectDetails", e.target.value)
                        }
                        placeholder="Please describe your project in detail..."
                        rows={4}
                        className="border-gray-200 rounded-xl resize-none"
                        required
                        aria-required="true"
                        aria-describedby="message-error message-help"
                      />
                      <div
                        id="message-help"
                        className="text-sm text-gray-500 mt-1"
                      >
                        Include project details, word count, deadline, and any
                        special requirements
                      </div>
                      <div
                        id="message-error"
                        className="sr-only"
                        role="alert"
                        aria-live="polite"
                      >
                        {!formData.projectDetails
                          ? "Project details are required"
                          : ""}
                      </div>
                    </div>
                    {/* Upload Files */}
                    <div>
                      <Label
                        htmlFor="file"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Upload Files
                      </Label>
                      <div className="relative">
                        <Input
                          id="file"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.txt,.rtf,.ppt,.pptx,.xls,.xlsx"
                          className="hidden"
                          multiple
                        />
                        <label
                          htmlFor="file"
                          className="flex items-center justify-between w-full h-12 px-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-blue-400 transition-colors"
                        >
                          <span className="text-gray-500 text-sm">
                            {formData.file
                              ? formData.file.name
                              : "No file chosen"}
                          </span>
                          <span className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                            Choose Files
                          </span>
                        </label>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting || isBlocked}
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Submitting...
                          </>
                        ) : isBlocked ? (
                          <>
                            <Clock className="w-5 h-5 mr-2" />
                            Temporarily Blocked
                          </>
                        ) : (
                          <>
                            <Rocket className="w-5 h-5 mr-2" />
                            Submit your Proposal
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>{" "}
              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="/getstarted.png"
                    alt="Professional translator working on translation project with multiple languages displayed on screen"
                    className="w-full h-auto rounded-2xl animate-float"
                    loading="lazy"
                    width="600"
                    height="400"
                    itemProp="image"
                  />

                  {/* Floating Animation Styles */}
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                    @keyframes float {
                      0% { transform: translateY(0px) rotate(0deg); }
                      33% { transform: translateY(-20px) rotate(1deg); }
                      66% { transform: translateY(-10px) rotate(-1deg); }
                      100% { transform: translateY(0px) rotate(0deg); }
                    }
                    
                    .animate-float {
                      animation: float 6s ease-in-out infinite;
                    }
                  `,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Get Started - Translation Project Request",
              description:
                "Request a free quote for professional translation services",
              url: "https://t4translation.com/get-started",
              provider: {
                "@type": "Organization",
                name: "T4Translation",
                url: "https://t4translation.com",
              },
              potentialAction: {
                "@type": "CommunicateAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://t4translation.com/get-started",
                  inLanguage: "en",
                },
                instrument: {
                  "@type": "DigitalDocument",
                  name: "Translation Project Request Form",
                },
              },
              mainEntity: {
                "@type": "Service",
                name: "Professional Translation Services",
                serviceType: "Translation and Interpretation",
                provider: {
                  "@type": "Organization",
                  name: "T4Translation",
                },
                areaServed: "Worldwide",
                availableLanguage: ["English", "Arabic", "French", "German"],
              },
            }),
          }}
        />
      </Layout>
    </>
  );
};

export default GetStarted;
