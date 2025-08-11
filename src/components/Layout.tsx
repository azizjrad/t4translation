import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`min-h-screen flex flex-col ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Header />
      <main className="flex-1 pt-20" role="main" itemProp="mainContentOfPage">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
