import * as React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Team from "../components/Team";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <h1>KDK</h1>
      <p>KDK</p>
      <Hero />
      <About />
      <FAQ />
      <CTA />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
