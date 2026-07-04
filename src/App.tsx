import About from "./sections/About";
import Hero from "./sections/Hero";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-nunito">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#000000] bg-[radial-gradient(#ffffff24_1.5px,#00091d_1.5px)] bg-[size:20px_20px] animate-pan"></div>
      </div>

      <main id="home" className="relative z-10 px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
      </main>
    </div>
  );
}
