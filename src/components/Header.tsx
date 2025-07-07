import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "AR", name: "العربية", flag: "🇸🇦" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
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
            className="hidden md:flex space-x-2"
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

          {/* Right side with Language Selector and Get Started Button */}
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative group">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex border-gray-200 hover:border-blue-400 transition-all duration-300 ease-out group px-3 py-2 h-8 relative overflow-hidden bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  >
                    <Globe className="w-4 h-4 mr-1 text-gray-600 group-hover:text-blue-600 transition-colors duration-300 ease-out" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 ease-out text-sm">
                      {currentLang}
                    </span>
                  </Button>

                  {/* Animated underline effect matching navbar links */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-400 ease-out rounded-full"></div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border-gray-200 shadow-xl language-selector-dropdown"
                sideOffset={8}
                onCloseAutoFocus={(event) => event.preventDefault()}
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer relative group overflow-hidden px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-blue-600 flex items-center justify-center text-center"
                  >
                    {/* Hover background effect matching navbar - light gradient only */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                    {/* Animated border matching navbar */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 transition-colors duration-300 rounded-lg"></div>

                    {/* Bottom accent line matching navbar */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-400 ease-out rounded-full"></div>

                    <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-blue-600 w-full text-center">
                      {lang.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Get Started Button - Far Right */}
            <Link to="/get-started" className="hidden lg:block">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-sm mr-2"
              >
                Get Started
              </Button>
            </Link>

            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 group-hover:text-blue-600 transition-colors duration-300" />
              ) : (
                <Menu className="w-5 h-5 group-hover:text-blue-600 transition-colors duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation - Slide from Right */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Panel */}
            <div
              className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/100 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Logo size="sm" showText={true} />
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-5 h-5 group-hover:text-blue-600 transition-colors duration-300" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isActive(item.href)
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md"
                        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Language Selector */}
              <div className="px-6 py-4 border-t border-gray-100">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="relative group w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-200 hover:border-blue-400 transition-all duration-300 ease-out relative overflow-hidden bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                      >
                        <Globe className="w-4 h-4 mr-2 text-gray-600 group-hover:text-blue-600 transition-colors duration-300 ease-out" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 ease-out">
                          {currentLang}
                        </span>
                      </Button>

                      {/* Animated underline effect for mobile */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-400 ease-out rounded-full"></div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-white border-gray-200 shadow-xl language-selector-dropdown"
                    sideOffset={8}
                    onCloseAutoFocus={(event) => event.preventDefault()}
                  >
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setCurrentLang(lang.code)}
                        className="cursor-pointer relative group overflow-hidden px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-blue-600 flex items-center justify-center text-center"
                      >
                        {/* Hover background effect matching navbar - light gradient only */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                        {/* Animated border matching navbar */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 transition-colors duration-300 rounded-lg"></div>

                        {/* Bottom accent line matching navbar */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-400 ease-out rounded-full"></div>

                        <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-blue-600 w-full text-center">
                          {lang.name}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Get Started Button */}
              <div className="px-6 py-4">
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
