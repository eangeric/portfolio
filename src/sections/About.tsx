import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      setShowArrow(
        window.scrollY >= sectionTop - 20 && window.scrollY < sectionTop + 100
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const details = [
    {
      label: "School",
      value: "University of California, Irvine",
    },
    {
      label: "Degree",
      value: "Computer Science B.S.",
    },
    {
      label: "Current Company",
      value: "TP-Link Systems Inc.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex min-h-dvh flex-col text-white"
    >
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="w-full max-w-6xl animate-fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-5xl font-extrabold text-blue-300 sm:text-6xl">
              About Me
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              I enjoy building useful software and ensuring it works reliably
              through testing and automation. I like turning ideas into working
              products, identifying issues early, improving the user experience,
              and helping teams deliver dependable software.
            </p>
          </div>

          <dl className="mx-auto mt-10 grid max-w-2xl gap-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-lg border border-white/10 bg-gray-950/75 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:border-blue-400/40"
              >
                <dt className="text-sm font-bold uppercase tracking-widest text-blue-300">
                  {detail.label}
                </dt>
                <dd className="mt-3 text-lg font-semibold leading-7 text-gray-200">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll to skills section"
        className={`${
          showArrow ? "opacity-100" : "pointer-events-none opacity-0"
        } flex justify-center pb-8 transition-opacity duration-300 ease-in-out hover:opacity-80`}
      >
        <FaArrowDown className="size-8 animate-bounce text-blue-200" />
      </a>
    </section>
  );
}
