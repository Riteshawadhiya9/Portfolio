import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach(
      (field) =>
        !formData[field].trim() &&
        (newErrors[field] = "This field is required"),
    );
    setErrors(newErrors);
    return !Object.keys(newErrors).length; // if len is 0 then return true(form is valid) else false
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
        },
        PUBLIC_KEY,
      );
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        idea: "",
      });
    } catch (err) {
      console.log("EmailJS Error : ", err);
      setStatus("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{
              x: [0, 50, -40, 25, 0],
              y: [0, -40, 30, -15, 0],
              rotate: [0, 12, -10, 6, 0],
              // scale: [1, 1.08, 0.95, 1.03, 1],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          />

        </motion.div>

            
        <motion.div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6}}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via[#00bf8f] to-[#1cd8d2]">Let's Work Together</h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            <div className="flex flex-col">
              <label className="mb-1">Your Name <span className="text-red-500">*</span></label>
              <input type="text" 
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Your Email <span className="text-red-500">*</span></label>
              <input type="email" 
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className={`p-3 rounded-md bg-white/10 border ${errors.email ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Give a Subject <span className="text-red-500">*</span></label>
              <input type="text" 
              name="service"
              placeholder="Something in your mind?"
              value={formData.service}
              onChange={handleChange}
              autoComplete="off"
              className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Explain Your Idea <span className="text-red-500">*</span></label>
              <textarea 
              name="idea"
              placeholder="Tell me about your idea..."
              value={formData.idea}
              onChange={handleChange}
              autoComplete="off"
              rows="4"
              className={`p-3 rounded-md bg-white/10 border ${errors.idea ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500 resize-none`}
              />
              {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
            </div>

            <motion.button 
            type="submit" 
            className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-md font-semibold transition duration-300 text-black"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            {status && <p className={`text-center ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{status}</p>}

          </form>  

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
