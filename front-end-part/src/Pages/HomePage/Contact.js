import React, { useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import SectionTitle from "../../Components/SectionTitle";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tdkse1k",
        "template_0vtk4sj",
        e.target,
        "3bSr4dFOa1W4KL8E1"
      )
      .then(
        (result) => {
          console.log("Email sent: ", result.text);
          setFormData({ name: "", email: "", message: "" }); // Reset form after submission
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Email send error: ", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  const filteredContact = Object.keys(contact)
    .filter((key) => key !== "_id")
    .reduce((obj, key) => {
      obj[key] = contact[key];
      return obj;
    }, {});

  return (
    <div>
      <SectionTitle title="Contact Me" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-1 w-full md:w-1/2">
          <p className="text-accentColorTwo">{"const contactDetails = {"}</p>
          {Object.keys(filteredContact).map((key) => (
            <div key={key} className="flex items-center ml-10">
              <p className="text-accentColorTwo ml-5">{key}: </p>
              <p className="text-accentColorTwo ml-2">{filteredContact[key]}</p>
            </div>
          ))}
          <p className="text-accentColorTwo">{"};"}</p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <dotlottie-player
            src="https://lottie.host/a5ecb06f-a745-4d01-8b8c-40ea60108214/1rMFXndfih.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
            style={{ width: "400px", height: "400px" }}
          ></dotlottie-player>
        </div>
      </div>

      <div className="mt-10 mb-6 text-center">
        <h2 className="text-accentColorTwo">
          Or else send a direct email to me, emails are limited due to API
          conditions 😅:
        </h2>
      </div>

      <div className="my-6">
        <hr className="border-t-2 border-gray-200" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w-1/2 mx-auto"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 rounded border"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 rounded border"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-2 rounded border"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-accentColorTwo text-white p-3 rounded hover:bg-accentColorTwoLight"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
