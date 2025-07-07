import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found - T4Translation | 404 Error"
        description="The page you're looking for doesn't exist. Explore our professional translation services or contact us for assistance with your translation needs."
        keywords="404 error, page not found, translation services, T4Translation"
        canonicalUrl="https://t4translation.com/404"
        noIndex={true}
      />
      <Layout>
        <section
          className="min-h-[80vh] bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center px-4"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* 404 Number */}
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                404
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl animate-pulse"></div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The page you're looking for seems to have been translated into
                another dimension. Let's get you back to the right place!
              </p>
            </div>

            {/* Helpful Links */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              <Link
                to="/"
                className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Home className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Home Page
                </h3>
                <p className="text-xs text-gray-600">Return to main</p>
              </Link>

              <Link
                to="/services"
                className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Search className="w-6 h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Services
                </h3>
                <p className="text-xs text-gray-600">Explore services</p>
              </Link>

              <Link
                to="/about"
                className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <ArrowLeft className="w-6 h-6 text-indigo-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  About Us
                </h3>
                <p className="text-xs text-gray-600">Learn more</p>
              </Link>

              <Link
                to="/contact"
                className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Contact
                </h3>
                <p className="text-xs text-gray-600">Get in touch</p>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/get-started">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
