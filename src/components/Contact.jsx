import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2117f5c-2da8-4d86-a048-43ac957e8263");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully 🎉");
      event.target.reset();
    } else {
      console.error("Error:", data);
      toast.error(data.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 lg:px-32 w-full"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Contact <span className="text-blue-600 underline underline-offset-4">Us</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We’d love to hear from you. Fill out the form below and we’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8 md:p-10"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              name="Name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              name="Email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            required
            rows="6"
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full shadow-md transition-all"
        >
          {result || "Send Message"}
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
