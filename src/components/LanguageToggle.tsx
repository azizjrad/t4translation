import React from "react";
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
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

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
      <span className="text-sm font-medium text-gray-700 group-hover:!text-gray-800 hidden lg:inline">
        {getLanguageDisplay()}
      </span>
      <Globe className="w-4 h-4 text-gray-600 group-hover:!text-blue-600 transition-colors duration-300 lg:hidden" />
    </Button>
  );
};

export default LanguageToggle;
