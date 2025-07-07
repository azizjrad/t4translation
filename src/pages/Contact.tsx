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
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    message: "",
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
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields (Name, Email, and Message).",
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
          title: "✉️ Message Sent Successfully!",
          description: `Thank you ${formData.name}! Your ${
            formData.reason ? formData.reason.toLowerCase() : "message"
          } has been received. We'll respond to ${
            formData.email
          } within 24 hours.`,
          duration: 5000,
        });

        console.log("Form submitted:", formData);

        // Reset form
        setFormData({ reason: "", name: "", email: "", message: "" });
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
            title: "❌ Message Send Failed",
            description: `Sorry, there was an issue sending your message. Please try again. (Attempt ${newRetryCount}/3)`,
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

  const reasons = ["Quote", "Inquiry", "Reclamation", "Other"];

  return (
    <>
      <SEO
        title="Contact T4Translation - Get in Touch | Professional Translation Services"
        description="Contact T4Translation for expert translation and interpretation services. Get quotes, ask questions, or discuss your project needs. Available in Arabic, English, French, and German."
        keywords="contact translation services, translation quote, T4Translation contact, professional translators contact, translation inquiry, interpretation services contact"
        canonicalUrl="https://t4translation.com/contact"
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
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact T4Translation
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Ready to break language barriers? Let's discuss your project and
                discover how we can help you communicate globally
              </p>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Scroll to contact form"
                >
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Start Conversation
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

        {/* Main Contact Section */}
        <section
          id="contact-section"
          className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden"
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Send us a Message
                      </span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Have a question or need assistance? We're here to help you
                      with all your linguistic needs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Reason/Purpose */}
                    <div>
                      <Label
                        htmlFor="reason"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Reason/Purpose
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("reason", value)
                        }
                        value={formData.reason}
                      >
                        <SelectTrigger className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <SelectValue placeholder="Select reason/purpose" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                          {reasons.map((reason) => (
                            <SelectItem
                              key={reason}
                              value={reason.toLowerCase()}
                              className="hover:bg-blue-50 cursor-pointer"
                            >
                              {reason}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your Full Name"
                        className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Your Email Address"
                        className="h-12 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 font-medium mb-2 block"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || isBlocked}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : isBlocked ? (
                        <>
                          <Clock className="w-5 h-5 mr-2" />
                          Temporarily Blocked
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Image with Animation */}
              <div className="animate-fade-in-up flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                    <img
                      src="/contact-img.png"
                      alt="Contact Us"
                      className="w-80 h-80 object-contain animate-float"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-70"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce opacity-70"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute bottom-1/4 -right-8 w-5 h-5 bg-cyan-500 rounded-full animate-bounce opacity-70"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Animations */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(1deg); }
            50% { transform: translateY(-15px) rotate(0deg); }
            75% { transform: translateY(-8px) rotate(-1deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `,
          }}
        />
      </Layout>
    </>
  );
};

export default Contact;
