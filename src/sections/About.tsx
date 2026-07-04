export default function About() {
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
    {
      label: "Email",
      value: (
        <a
          href="mailto:ericeang3@gmail.com"
          className="text-blue-300 hover:text-blue-200"
        >
          ericeang3@gmail.com
        </a>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 text-white flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
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

        <dl className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-lg border border-white/10 bg-gray-950/75 p-6 shadow-xl shadow-black/20 backdrop-blur transition-colors hover:border-blue-400/40"
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
    </section>
  );
}
