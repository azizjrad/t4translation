import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="relative inline-block group">
                <Logo size="md" showText={true} theme="dark" className="mb-4" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></div>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for professional translation and
              interpretation services worldwide. Bridging languages, connecting
              cultures.
            </p>

            {/* Social Links with Enhanced Design */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Service Areas", href: "/areas" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:ml-2 transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Offices</h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Tunisia Office
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Hammamet-Tunisia
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Libya Office
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Dhahra Street
                      <br />
                      Tripoli, Libya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              {[
                {
                  Icon: Phone,
                  text: "+216 52 175 934",
                  href: "tel:+21652175934",
                },
                {
                  Icon: Phone,
                  text: "+218 89 30 69 29 30",
                  href: "tel:+218930692930",
                },
                {
                  Icon: Mail,
                  text: "contact@t4translation.com",
                  href: "mailto:contact@t4translation.com",
                },
                { Icon: Globe, text: "www.t4translation.com", href: "#" },
              ].map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-500 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 break-words text-sm sm:text-base overflow-hidden">
                    {text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section with Enhanced Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
          <div className="relative border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="relative">
              <blockquote className="text-xl italic text-gray-200 mb-4 leading-relaxed">
                "Coming together is the beginning. Keeping together is progress.
                Working together is success."
              </blockquote>
              <p className="text-sm text-gray-400 font-medium">— Henry Ford</p>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2024 T4Translation Services. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
