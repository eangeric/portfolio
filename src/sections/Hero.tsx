import { FaDownload, FaEnvelope } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col sm:flex-row-reverse sm:justify-between items-center px-4 py-10 md:py-16 lg:py-20 text-center sm:text-left max-w-7xl mx-auto">
      {/* Avatar/Image Section */}
      <div className="mb-8 sm:mb-0 sm:ml-4 md:ml-8 lg:ml-16">
        <div className="bg-white size-32 sm:size-40 md:size-56 lg:size-72 rounded-full border-4 border-blue-500/30 shadow-lg shadow-blue-500/10 overflow-hidden">
          {/* You can replace this with your actual image */}
          <img
            src="/api/placeholder/400/400"
            alt="Eric's Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="sm:flex-1 max-w-xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
          Hi, I'm <span className="text-blue-500">Eric</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-4 md:mb-6">
          Software Developer
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-6 md:mb-10 max-w-lg">
          I specialize in fullstack development and love turning ideas into real
          world applications!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf"
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md hover:shadow-blue-600/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
            <FaDownload className="text-lg" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-4 border border-blue-600 text-blue-500 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900/20 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
