import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <main className="max-w-screen mx-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Contact />
        <Experience />
        <Footer />
      </main>
    </>
  );
};

export default App;
