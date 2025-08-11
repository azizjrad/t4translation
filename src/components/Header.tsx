import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.areas"), href: "/areas" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100 fixed w-full top-0 z-50 transition-all duration-300"
      role="banner"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group relative -ml-4"
            itemProp="url"
          >
            <div className="relative p-2 transition-all duration-500">
              <div className="relative z-10">
                <Logo size="md" showText={true} />
              </div>

              {/* Animated underline effect */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out w-0 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 blur-sm w-0 group-hover:w-full transition-all duration-500 ease-out delay-100"></div>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav
            className={`hidden md:flex ${
              isRTL ? "space-x-reverse" : ""
            } space-x-2`}
            role="navigation"
            aria-label="Main navigation"
            itemProp="hasPart"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group overflow-hidden ${
                  isActive(item.href)
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {!isActive(item.href) && (
                  <>
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                    {/* Animated border */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 transition-colors duration-300 rounded-lg"></div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-400 ease-out rounded-full"></div>
                  </>
                )}

                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right side with Language Toggle and Get Started Button */}
          <div
            className={`flex items-center ${
              isRTL ? "space-x-reverse" : ""
            } space-x-3`}
          >
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Get Started Button - Far Right */}
            <Link to="/get-started" className="hidden lg:block">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-sm mr-2"
              >
                {t("nav.getStarted")}
              </Button>
            </Link>

            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:bg-blue-50 hover:!text-gray-800 transition-all duration-300 group p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 group-hover:!text-blue-600 transition-colors duration-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 group-hover:!text-blue-600 transition-colors duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            {/* Header with Logo, Language Toggle and Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Logo size="sm" showText={true} />
              <div className="flex items-center space-x-3">
                <LanguageToggle variant="mobile" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:bg-blue-50 hover:!text-gray-800 transition-all duration-300 group p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6 text-gray-600 group-hover:!text-blue-600 transition-colors duration-300" />
                </Button>
              </div>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex flex-col items-center justify-center px-6 py-8 space-y-4 min-h-[80vh]">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`w-full max-w-sm text-center px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg bg-gray-50"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: `fadeInUp 0.6s ease-out forwards ${
                      index * 100
                    }ms both`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CSS for animations */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `,
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
