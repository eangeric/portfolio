export default function ContactForm() {
  const sendEmail = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form
      action={sendEmail}
      className="bg-gray-900 flex flex-col px-6 py-8 rounded-2xl w-full max-w-sm"
    >
      <h1 className="text-center text-blue-500 text-4xl font-bold mb-4">
        Contact Me!
      </h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="Your name"
      ></input>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="name@email.com"
      ></input>

      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="What's this about?"
      ></input>

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="Your message..."
      ></textarea>

      <button className="bg-blue-500 p-2 rounded-md hover:cursor-pointer">
        Send
      </button>
    </form>
  );
}
