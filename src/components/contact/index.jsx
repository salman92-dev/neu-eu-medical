"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPaperPlane, FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import emailjs from "emailjs-com";
import Star from "../assets/star";
import { Helmet, HelmetProvider } from "react-helmet-async";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const SERVICE_ID = "service_7p4r1oq";
  const TEMPLATE_ID = "template_8ie1cek";
  const PUBLIC_KEY = "DJUu3uqyxHUx7ejZC";

  const validate = () => {
    let temp = {};
    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.phone.trim()) temp.phone = "Phone number is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Email is invalid";
    if (!formData.message.trim()) temp.message = "Message is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSuccessMsg("Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSuccessMsg("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative bg-[#FFE4D1] flex items-center justify-center px-4 py-12"
    >
      <HelmetProvider>
        <Helmet>
          <title>Contact Neu Eu | Online Weight Loss Consultation</title>
          <meta
            name="description"
            content="Connect with Neu Eu for expert guidance on medical weight loss programs. Book an online consultation and start your personalized, medication‑assisted plan."
          />
        </Helmet>
      </HelmetProvider>
      {/* Star Decorations */}
      <span className="absolute md:top-[30%] top-[20%] right-5 md:right-20 blink">
        <Star />
      </span>
      <span className="absolute top-[20%] left-[30%] md:left-20 blink">
        <Star />
      </span>
      <span className="absolute top-[40%] left-[30%] blink">
        <Star />
      </span>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="md:space-y-10 space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-lg text-gray-500">Contact Us</h2>
            <h1 className="text-5xl font-semibold text-[#891a1f]">
              Get in Touch with Us
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <div className="bg-white p-4 rounded">
              <MdOutlineCall className="text-[#891a1f] text-xl" />
            </div>
            <div>
              <p className="font-semibold text-[#891a1f] text-lg">
                Phone Number
              </p>
              <p className="text-gray-700">+9723325266</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <div className="bg-white p-4 rounded">
              <HiOutlineMail className="text-[#891a1f] text-xl" />
            </div>
            <div>
              <p className="font-semibold text-[#891a1f] text-lg">Email</p>
              <p className="text-gray-700">Info@neueu.co</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
            <Link
              href=""
              className="bg-white flex items-center justify-center px-6 py-2 rounded-md shadow hover:shadow-md"
            >
              <Image
                src="/images/facebook.png"
                alt="facebook"
                width={106}
                height={30}
                quality={100}
              />
            </Link>
            <Link
              href=""
              className="bg-white px-6 py-2 rounded-md shadow hover:shadow-md"
            >
              <Image
                src="/images/instagram.png"
                alt="instagram"
                width={106}
                height={30}
                quality={100}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white md:p-8 p-5 rounded-lg shadow_class space-y-4"
        >
          {successMsg && (
            <p className="text-center text-green-600 font-medium">
              {successMsg}
            </p>
          )}

          {["name", "phone", "email", "message"].map((field) => {
            const Icon =
              field === "name"
                ? FaRegUser
                : field === "phone"
                ? IoCallOutline
                : field === "email"
                ? HiOutlineMail
                : FaPaperPlane;

            const isTextarea = field === "message";
            const inputProps = {
              name: field,
              value: formData[field],
              onChange: handleChange,
              placeholder:
                field === "name"
                  ? "Full Name"
                  : field.charAt(0).toUpperCase() + field.slice(1),
              className:
                "w-full pl-14 pr-4 py-3.5 bg-[#F5F5F5] border border-[#E8E6E6] rounded focus:outline-none" +
                (errors[field] ? " border-red-500" : ""),
              required: true,
            };

            return (
              <div key={field} className="relative">
                <Icon className="absolute top-4 left-4 text-gray-600 text-xl" />
                {isTextarea ? (
                  <textarea
                    {...inputProps}
                    rows={5}
                    className={inputProps.className + " resize-none"}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    {...inputProps}
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            );
          })}

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-fit px-14 rounded-full bg-[#b35c5c] text-white py-2.5 mx-auto mt-4 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
