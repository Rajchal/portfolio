import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Anjal Rajchal",
    url: "https://www.rajchal.me",
    sameAs: [
      "https://www.linkedin.com/in/anjal-rajchal-a7b02a2b0/",
      "https://github.com/Rajchal",
    ],
    jobTitle: "Frontend Developer",
  };
  return (
    <main className="max-w-screen mx-0">
      <HelmetProvider>
        <Helmet>
          <title>Anjal Rajchal - Portfolio</title>
          <meta
            name="description"
            content="Welcome to Anjal Rajchal's portfolio. Explore my projects, experience, and get in touch to learn more about my work and skills."
          />
          <meta
            name="keywords"
            content="Anjal Rajchal, portfolio, projects, experience, contact, Rajchal, anjal, rajchalanjal, anjalrajchal, anjal rajchal, developer"
          />
          <link rel="canonical" href="https://www.rajchal.me" />
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
