export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen text-white flex justify-center items-center px-6 py-12"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Placeholder */}
        <img src="/anteater.png" className="h-128" />

        {/* About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            The best part of programming for me is building things from scratch
            and being able to see it come to life. It's a powerful feeling to
            make something real from just an idea.
          </p>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li>
              <span className="font-semibold text-white">🎓 School:</span>{" "}
              University of California, Irvine Class of 2025
            </li>
            <li>
              <span className="font-semibold text-white">💻 Focus:</span> Full
              Stack Web Development
            </li>
            <li>
              <span className="font-semibold text-white">
                ⚙️ Preferred Tech:
              </span>{" "}
              React, Next.js, Node.js, Express, Supabase, PostgreSQL, Tailwind
              CSS
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
