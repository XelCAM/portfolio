import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_lol22d9",
        "template_767fs4o",
        form.current,
        "vtXLr4r1SnXfOFrHj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message was successfully sent");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Your Message wasn't sent");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-700 text-white py-8 px-4" id="contactme">
      <h1 className="text-5xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="max-w-xl mx-auto">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-500 text-white focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-500 text-white focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-500 text-white focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded focus:outline-none"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
