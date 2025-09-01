"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import emailjs from "@emailjs/browser";

import { PiSealCheckFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  // Load selected product from localStorage
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    } else {
      window.location.href =
        "https://calendar.google.com/calendar/u/0/appointments/AcZssZ1cKjUucr_7Rl6HsEY96spVnBhoi_G1l16Myo0=";
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Replace with your EmailJS service ID, template ID, and user/public key
  const serviceID = "service_zfam3rg";
  const templateID = "template_8ie1cek";
  const publicKey = "FhTT97vSejz41wgWD";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in your ${key.replace(/([A-Z])/g, " $1")}`);
        return;
      }
    }

    const templateParams = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: `${formData.address}, ${formData.city}, ${formData.country} - ${formData.zipCode}`,
      productTitle: product?.title,
      productPrice: product?.price,
      productImage: `${process.env.NEXT_PUBLIC_DOMAIN || ""}${product?.img}`,
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Order sent successfully!");
      localStorage.removeItem("selectedProduct");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
      });
      window.location.href = `${product.calander}`;

      router.push(`${product.calander}`);
      // router.push(`${product.calander}`);
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the order. Please try again.");
    }
  };

  if (!product) return null;

  return (
    <div className="bg-[#FFE6DF] min-h-screen md:pt-24 pt-16 pb-12 px-4 rounded-b-3xl">
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-[#751010] mb-2"
              variants={itemVariants}
            >
              Shipping & Your Info
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              Upgrade Your Order & Save!
            </motion.p>

            <form onSubmit={handleSubmit}>
              <motion.div className="space-y-10" variants={containerVariants}>
                {/* Personal Information */}
                <motion.div className="space-y-4" variants={itemVariants}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                      required
                    />
                  </div>
                </motion.div>

                {/* Shipping Information */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-[#751010] mb-4">
                    Shipping
                  </h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Full Address"
                      className="w-full px-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                      required
                    />

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City Name"
                      className="w-full px-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>

                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Zip Code"
                        className="w-full px-4 py-3.5 bg-[#FFECE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-fit py-3.5 px-12 bg-primary text-white font-medium rounded-full  hover:bg-[#b35c5c] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  Complete Order
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className="lg:col-span-1 bg-white rounded-xl overflow-hidden shadow-lg p-5"
            variants={itemVariants}
          >
            <motion.div
              className=""
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 bg-[radial-gradient(circle,_#E48973,_#B96153)] rounded-xl">
                <div className="relative w-full h-56">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                    quality={100}
                  />
                </div>
              </div>

              <div className="pt-5">
                <h2 className="text-2xl font-bold text-[#751010] mb-2">
                  {product.title}
                </h2>
                <p className="text-3xl font-bold text-[#751010] mb-6">
                  {product.price}
                </p>

                <ul className="space-y-4 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <PiSealCheckFill className="text-[#751010] text-xl mr-2 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center space-x-2 mb-4">
                  <Image
                    src="/images/payment.png"
                    alt="Payment Methods"
                    width={200}
                    height={40}
                    quality={100}
                  />
                </div>

                <div className="bg-[#f9f1ef] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Item</span>
                    <div className="flex justify-between w-1/2">
                      <span className="font-medium">Quantity</span>
                      <span className="font-medium">Price</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-medium">{product.title}</span>
                    <div className="flex justify-between w-1/2">
                      <span>1</span>
                      <span className="text-[#98423D] font-bold">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 font-bold">
                    <span>Order Total</span>
                    <span className="text-[#98423D] font-bold">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
