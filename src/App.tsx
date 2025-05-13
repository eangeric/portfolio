import Hero from "./sections/Hero";

export default function App() {
  return (
    <main className="text-white font-nunito">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0  h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1.5px,#00091d_1.5px)] bg-[size:20px_20px]"></div>
      </div>

      <section className="container mx-auto">
        <Hero />
      </section>
    </main>
  );
}
