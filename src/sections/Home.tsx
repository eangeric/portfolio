export default function Home() {
  const mainText = "Hi I'm Eric, a Software Engineer.";
  const captionText = "I specialize in full-stack web development";
  const captionTextTwo = "and  love turning ideas into real applications.";

  return (
    <main
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-[url('stacked-waves-haikei.svg')] h-screen flex flex-col justify-center items-center"
    >
      <section className="text-white font-nunito p-4 flex flex-col items-center gap-4">
        <div className="size-36 bg-white rounded-full"></div>
        <h1 className="text-center text-xl font-extrabold">{mainText}</h1>
        <div>
          <p className="text-center font-semibold">{captionText}</p>
          <p className="text-center font-semibold">{captionTextTwo}</p>
        </div>
        <div className="flex w-full justify-evenly mt-8">
          <button className="bg-linear-to-br from-blue-900 to-gray-900 p-2 rounded-md">
            About
          </button>
          <button className="bg-linear-to-br from-blue-900 to-gray-900 p-2 rounded-md">
            Project
          </button>
          <button className="bg-linear-to-br from-blue-900 to-gray-900 p-2 rounded-md">
            Skills
          </button>
        </div>
      </section>
    </main>
  );
}
