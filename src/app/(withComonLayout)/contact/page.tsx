"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //form submission
    console.log("Form data submitted:", formData);
    setSuccessMessage(
      "Thank you for your message! We will get back to you soon."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <main className="p-8">
        <section className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold text-sky-500 mb-4">
            Get in Touch
          </h2>
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-500 text-white py-2 px-4 rounded flex justify-center items-center gap-3"
            >
              Send Message <FaArrowRight />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
