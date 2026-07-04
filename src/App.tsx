import About from "./sections/About";
import Hero from "./sections/Hero";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="min-h-screen text-white font-nunito">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1.5px,#00091d_1.5px)] bg-[size:20px_20px] animate-pan"></div>
      </div>

      <main id="home" className="px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
      </main>
    </div>
  );
}
