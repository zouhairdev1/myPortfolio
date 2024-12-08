"use client";
import Link from "next/link";
import React, { useState } from "react";
const baseInputClasses =
  "w-full p-2 border border-zinc-300 rounded-md shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light";
const containerClasses =
  "  w-96 p-8  mx-auto my-10 border border-zinc-300 rounded-lg space-y-6 bg-slate-50 dark:bg-gray-800 ";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50  dark:bg-gray-900">
      <div className=" container bg-slate-50 dark:bg-gray-900 h-screen mx-auto">
        <div className=" flex flex-wrap  justify-center text-black dark:text-white  ">
          <div className="w-1/2 flex items-center flex-col justify-center align-middle">
            <h1 className=" ">Contact Me</h1>
            <p>
              <i className="fa-regular fa-paper-plane "></i>
              zouhairmachmacha@gmail.com
            </p>

            <div className="social-icons">

              <a href="https://www.linkedin.com/in/zouhair-machmacha-ba56602a4"  target="_blank"
        rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className={containerClasses}>
            <h1 className="text-2xl font-bold text-voile text-center">
              Contact Us
            </h1>
            {successMessage && (
              <p className="text-green-500 mb-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextAreaField
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-4 bg-voile text-white rounded-md hover:bg-gray-700 hover:text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ type, name, placeholder, value, onChange }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={baseInputClasses}
    />
  </div>
);

const TextAreaField = ({ name, placeholder, value, onChange }) => (
  <div>
    <textarea
      name={name}
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={baseInputClasses}
    ></textarea>
  </div>
);
