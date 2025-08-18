import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "default" | "mobile";
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = "default",
  className = "",
}) => {
  const { t, i18n } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for i18n to be properly initialized
    const checkReady = () => {
      if (i18n.isInitialized && i18n.language) {
        setIsReady(true);
      }
    };

    if (i18n.isInitialized) {
      checkReady();
    } else {
      i18n.on('initialized', checkReady);
    }

    return () => {
      i18n.off('initialized', checkReady);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };

  const getLanguageDisplay = () => {
    return currentLanguage === "en" ? "عربي" : "EN";
  };

  const getMobileLanguageDisplay = () => {
    return currentLanguage === "en" ? "AR" : "ENG";
  };

  const getTooltipText = () => {
    const targetLanguage =
      currentLanguage === "en" ? t("languages.arabic") : t("languages.english");
    return t("languages.switchTo", { language: targetLanguage });
  };

  const getFlagIcon = () => {
    return currentLanguage === "en" ? (
      <img
        src="/ar_flag.svg"
        alt="Arabic Flag"
        className="w-4 h-4 rounded-sm object-cover shadow-sm"
      />
    ) : (
      <img
        src="/uk_flag.svg"
        alt="English Flag"
        className="w-4 h-4 rounded-sm object-cover shadow-sm"
      />
    );
  };

  // Show a default state while initializing
  if (!isReady) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={`flex items-center space-x-2 text-gray-700 hover:bg-blue-50 hover:!text-gray-800 transition-all duration-300 group ${variant === "mobile" ? "p-3 w-full justify-center" : "px-3 py-2"} ${className}`}
        disabled
      >
        <img
          src="/ar_flag.svg"
          alt="Arabic Flag"
          className="w-4 h-4 rounded-sm object-cover shadow-sm"
        />
        <span className="text-sm font-medium text-gray-700 group-hover:!text-gray-800">
          AR
        </span>
      </Button>
    );
  }

  if (variant === "mobile") {
    return (
      <Button
        onClick={toggleLanguage}
        variant="ghost"
        size="sm"
        className={`flex items-center ${
          currentLanguage === "ar" ? "space-x-reverse" : ""
        } space-x-2 text-gray-700 hover:bg-blue-50 hover:!text-gray-800 transition-all duration-300 group p-3 w-full justify-center ${className}`}
        aria-label={getTooltipText()}
      >
        {getFlagIcon()}
        <span className="text-sm font-medium text-gray-700 group-hover:!text-gray-800">
          {getMobileLanguageDisplay()}
        </span>
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className={`flex items-center ${
        currentLanguage === "ar" ? "space-x-reverse" : ""
      } space-x-2 text-gray-700 hover:bg-blue-50 hover:!text-gray-800 transition-all duration-300 group px-3 py-2 ${className}`}
      title={getTooltipText()}
      aria-label={getTooltipText()}
    >
      {getFlagIcon()}
      <span className="text-sm font-medium text-gray-700 group-hover:!text-gray-800">
        {getMobileLanguageDisplay()}
      </span>
    </Button>
  );
};

export default LanguageToggle;
