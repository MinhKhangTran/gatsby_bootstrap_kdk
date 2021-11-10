import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SkipNavLink />
      <div>
        <Navigation />
        <SkipNavContent />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
