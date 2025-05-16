import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkwlodg");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const actionWrapper = (formData: FormData) => {
    handleSubmit(formData);
  };

  useEffect(() => {
    if (state.succeeded) {
      // Show the success message
      setShowSuccessMessage(true);

      // Set a timer to hide the message after 10 seconds
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <form
      action={actionWrapper}
      className="bg-gray-900 flex flex-col px-6 py-8 rounded-2xl w-full max-w-sm"
    >
      <h1 className="text-center text-blue-500 text-4xl font-bold mb-4">
        Contact Me!
      </h1>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="Your name"
        required
      ></input>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="name@email.com"
        required
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="What's this about?"
        required
      ></input>
      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        className="border-2 border-gray-500 rounded-md mb-4 p-2 bg-white text-black focus:outline-2 focus:outline-blue-500"
        placeholder="Your message..."
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        disabled={state.submitting}
        className="bg-blue-500 p-2 rounded-md hover:cursor-pointer mb-4"
      >
        Send
      </button>

      {showSuccessMessage && (
        <div className="text-center">Your message has been sent!</div>
      )}
    </form>
  );
}
