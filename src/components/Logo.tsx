import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
  theme = "light",
}) => {
  const sizeClasses = {
    sm: "w-32 h-8",
    md: "w-40 h-10",
    lg: "w-48 h-12",
  };

  const iconSizes = {
    sm: { circle: 14, text: "6" },
    md: { circle: 18, text: "8" },
    lg: { circle: 22, text: "10" },
  };

  const currentSize = iconSizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon without Hover Effects */}
      <div className="relative">
        <svg
          width={currentSize.circle * 2}
          height={currentSize.circle * 2}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#6366F1", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="logoGradientHover"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#60A5FA", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#A78BFA", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#818CF8", stopOpacity: 1 }}
              />
            </linearGradient>
            <filter
              id="logoShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000000"
                floodOpacity="0.2"
              />
            </filter>
          </defs>

          {/* Main Circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="url(#logoGradient)"
            filter="url(#logoShadow)"
          />

          {/* Globe Grid */}
          <circle
            cx="20"
            cy="20"
            r="12"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.9"
          />
          <ellipse
            cx="20"
            cy="20"
            rx="12"
            ry="6"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <ellipse
            cx="20"
            cy="20"
            rx="6"
            ry="12"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.7"
            className="transition-all duration-500 group-hover:opacity-90"
          />
          <line
            x1="20"
            y1="8"
            x2="20"
            y2="32"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <line
            x1="8"
            y1="20"
            x2="32"
            y2="20"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.7"
          />

          {/* T4 Text in center */}
          <text
            x="20"
            y="26"
            fontFamily="Arial, sans-serif"
            fontSize={currentSize.text}
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            T4
          </text>

          {/* Decorative elements */}
          <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.8" />
          <circle cx="28" cy="12" r="1.5" fill="white" opacity="0.8" />
          <circle cx="12" cy="28" r="1.5" fill="white" opacity="0.8" />
          <circle cx="28" cy="28" r="1.5" fill="white" opacity="0.8" />
        </svg>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span
              className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                size === "sm"
                  ? "text-lg"
                  : size === "md"
                  ? "text-xl"
                  : "text-2xl"
              }`}
            >
              T4
            </span>
            <span
              className={`font-semibold ml-1 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              } ${
                size === "sm"
                  ? "text-lg"
                  : size === "md"
                  ? "text-xl"
                  : "text-2xl"
              }`}
            >
              Translation
            </span>
          </div>
          {size !== "sm" && (
            <span
              className={`text-xs opacity-80 -mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Professional Translation Services
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
