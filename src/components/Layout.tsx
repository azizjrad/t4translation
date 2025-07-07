import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="min-h-screen flex flex-col"
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
