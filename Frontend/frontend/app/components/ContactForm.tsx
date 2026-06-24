"use client";
import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  } catch (error: any) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
      "Something went wrong"
    );
  }
};

  return (
    <section className="bg-gradient-to-br from-[#084745] via-[#07131F] to-[#000000] text-white py-20 px-8 w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] border border-gray-700"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] border border-gray-700"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirements..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] border border-gray-700"
          />
        <div className="flex justify-center">
          <button className="group relative
            overflow-hidden
            px-10 py-4 justify-content-center
            rounded-full
            border-2 border-[#00D4AA]
            text-white
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_30px_#00D4AA] 
            hover:border-white
            ">
            <span className="relative z-10">Submit Inquiry</span>

            <span
              className="
              absolute inset-0
              bg-[#00D4AA]
              scale-x-0
              origin-left
              transition-transform duration-500
              group-hover:scale-x-100
              "
            />
          </button>
          </div>
        </form>
      </div>
    </section>
  );
}