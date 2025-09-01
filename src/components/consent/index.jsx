"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import Star from "../assets/star";
import emailjs from "@emailjs/browser";

export default function ConsentFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState(null);

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  // Load selected product from localStorage
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    setProduct(JSON.parse(savedProduct));
  }, []);

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }
    // Simple email regex validation
    if (!formData.email) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }
    // Basic phone validation (digits, min 10 digits)
    if (!formData.phone) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{5,}$/.test(formData.phone.replace(/\D/g, ""))) {
      errs.phone = "Invalid phone number";
    }
    if (!formData.agreed) {
      errs.agreed = "You must agree to the terms";
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for the field on change
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSending(true);

    try {
      // Replace with your EmailJS service ID, template ID, and user/public key
      const serviceID = "service_kzpfa1o";
      const templateID = "template_8ie1cek";
      const publicKey = "FhTT97vSejz41wgWD";

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        agreed: formData.agreed ? "Yes" : "No",
      };

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setFormData({ name: "", email: "", phone: "", agreed: false });

      let calendarLink = "https://offer.neueu.co/freeconsultation";

      if (product && product.calander) {
        calendarLink = product.calander;
      }

      localStorage.removeItem("selectedProduct");  
      window.location.href = calendarLink;

    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  // console.log("Redirecting to:", calendarLink);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" px-4 py-10 flex items-center justify-center relative"
    >
      <Link
        href="/eligibility"
        className="absolute md:top-[5vw] top-[17vw] text-2xl left-[5vw]"
      >
        <CgArrowLongLeft />
      </Link>

      {/* Star Decoration */}
      <span className="absolute md:top-[30%] top-[20%] right-5 md:right-20 blink">
        <Star />
      </span>
      <span className="absolute top-[50%] left-5 md:left-20 blink">
        <Star />
      </span>

      <div className="md:max-w-3xl w-full md:p-8 p-4 space-y-6">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium 0">Almost there!</p>
          <h1 className="text-5xl font-bold text-[#751010]">Consent</h1>
          <p className=" text-gray-500">
            Read and accept our terms and conditions by signing below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 mt-10">
          <div className="flex md:items-center items-start space-x-3">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="md:mt-1 md:h-7 md:w-7 w-10 h-10 text-[#891a1f] accent-[#891a1f] rounded border-gray-300 focus:ring-[#891a1f]"
            />
            <label className="md:text-base text-xs text-gray-500">
              Please check this box to indicate that you have read and agree to
              our terms and conditions
            </label>
          </div>
          {errors.agreed && (
            <p className="text-red-600 text-sm">{errors.agreed}</p>
          )}

          <div>
            <label className="block mb-1 font-medium text-[#891a1f]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f] ${
                errors.name ? "border border-red-600" : ""
              }`}
              placeholder="Type here"
              required
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#891a1f]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f] ${
                errors.email ? "border border-red-600" : ""
              }`}
              placeholder="Type here"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#891a1f]">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f] ${
                errors.phone ? "border border-red-600" : ""
              }`}
              placeholder="Type here"
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="text-center text-sm text-[#891a1f] font-semibold">
            <Link href="/privacy-policies" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms of Service
            </Link>
          </div>

          <div className="mx-auto w-full flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={sending}
              className={`w-fit px-20 py-3 rounded-full text-white font-semibold transition-colors ${
                sending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-[#8a3f40]"
              }`}
            >
              {sending ? "Sending..." : "Submit"}
            </motion.button>
          </div>
        </form>
      </div>
      {/* {showPopup && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-[#891a1f] mb-2">Thank you!</h2>
            <p className="text-gray-600 mb-6">We’ll contact you within 2–3 days</p>
            <button
                onClick={closePopup}
                className="mt-4 px-6 py-2 rounded-full bg-[#891a1f] text-white font-semibold hover:bg-[#751010]"
            >
                Close
            </button>
        </div>
    </div>
)} */}
    </motion.div>
  );
}
