import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <main className="max-w-screen mx-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
