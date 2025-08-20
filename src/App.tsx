import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="text-white font-nunito">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1.5px,#00091d_1.5px)] bg-[size:20px_20px] animate-pan"></div>
      </div>

      {/* Sections */}
      <section
        id="home"
        className="p-4 h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      >
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </section>
    </div>
  );
}
