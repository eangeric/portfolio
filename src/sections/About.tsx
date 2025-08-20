export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen text-white flex justify-center items-center px-12 py-12 "
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Placeholder */}
        <img src="/anteater.png" className="max-h-128" />

        {/* About Content */}
        <div className="text-center sm:text-left ">
          <h2 className="text-4xl font-bold mb-4 underline underline-offset-6 decoration-blue-500">
            About Me
          </h2>
          <p className="text-lg mb-4">
            I love doing full stack development. The best part is building
            things from scratch and being able to see it come to life. It is a
            powerful feeling to turn an idea into something real.
          </p>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li>
              <span className="font-semibold text-white">🎓 School:</span>{" "}
              University of California, Irvine
            </li>
            <li>
              <span className="font-semibold text-white">🖥️ Major:</span>{" "}
              Computer Science, Information Specialization
            </li>
            <li>
              <span className="font-semibold text-white">📍 Location:</span>{" "}
              Long Beach, California, USA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
