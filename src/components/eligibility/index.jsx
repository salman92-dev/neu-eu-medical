"use client";

import { useEffect, useState } from "react";
import Eligibility from "./eligibility";
import { useRouter } from "next/navigation";
import Usericon from "../assets/user";
import DataIcon from "../assets/date";
import LocationIcon from "../assets/location";

export default function EligibilityPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [showManualReviewPopup, setShowManualReviewPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    state: "",
    location: "",
    thyroidCancer: "",
    pregnant: "",
    allergicToGlp: "",
    triedGlpBefore: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Load selected product from localStorage
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    setProduct(JSON.parse(savedProduct));
  }, []);

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Immediate validation for disqualifying conditions
    if (name === "thyroidCancer" && value === "Yes") {
      setErrorMessage("You are disqualified due to history of thyroid cancer.");
    } else if (name === "pregnant" && value === "Yes") {
      setErrorMessage("You are disqualified because you are pregnant.");
    } else if (name === "allergicToGlp" && value === "Yes") {
      setErrorMessage("You are disqualified due to allergy to GLP-1's.");
    } else {
      setErrorMessage("");
    }
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const nextStep = () => {
    // Check for disqualifying conditions first
    if (formData.thyroidCancer === "Yes") {
      setErrorMessage("You are disqualified due to history of thyroid cancer.");
      return;
    }
    if (formData.pregnant === "Yes") {
      setErrorMessage("You are disqualified because you are pregnant.");
      return;
    }
    if (formData.allergicToGlp === "Yes") {
      setErrorMessage("You are disqualified due to allergy to GLP-1's.");
      return;
    }

    // Clear any previous error messages
    setErrorMessage("");

    if (step < 8) {
      // STEP VALIDATION: check only fields relevant to the current step
      const stepRequiredFields = {
        1: ["name"],
        2: ["dateOfBirth"],
        3: ["state"],
        4: ["location"],
        5: ["thyroidCancer"],
        6: ["pregnant"],
        7: ["allergicToGlp"],
        8: ["triedGlpBefore"],
      };

      const currentFields = stepRequiredFields[step] || [];
      const isStepValid = currentFields.every(
        (key) => formData[key] && formData[key].trim() !== ""
      );

      if (!isStepValid) {
        alert("Please fill in the required field(s) before proceeding.");
        return;
      }

      // Additional validation for date of birth (age check)
      if (step === 2 && formData.dateOfBirth) {
        const age = calculateAge(formData.dateOfBirth);
        if (age < 18) {
          alert("You must be at least 18 years old to proceed.");
          return;
        }
      }

      // If valid, go to the next step
      setDirection(1);
      setStep(step + 1);
    } else {
      // FINAL SUBMISSION VALIDATION
      const requiredFields = [
        "name",
        "dateOfBirth",
        "state",
        "thyroidCancer",
        "pregnant",
        "allergicToGlp",
        "triedGlpBefore",
      ];

      const isFormValid = requiredFields.every(
        (key) => formData[key] && formData[key].trim() !== ""
      );

      if (!isFormValid) {
        alert("Please complete all required fields before submitting.");
        return;
      }

      // ✅ Logic for redirect
      const { triedGlpBefore } = formData;



      router.push("/consent"); 
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    return (
      <>
        {getStepContent()}
        {/* { errorMessage && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        { errorMessage }
                    </div>
                ) } */}
      </>
    );
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Eligibility
            tabNumber="01"
            heading="What is your name?"
            buttontext="Next"
            onClick={nextStep}
            onBack={null}
          >
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Usericon />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name*"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </Eligibility>
        );

      case 2:
        return (
          <Eligibility
            tabNumber="02"
            heading="What is your date of birth?"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <DataIcon />
                </div>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="Date of Birth*"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </Eligibility>
        );

      case 3:
        return (
          <Eligibility
            tabNumber="03"
            heading="Choose your current Texas"
            subheading="Select one *"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6 space-y-3">
              {["Texas", "Oregon","Others"].map((stateOption) => (
                <label
                  key={stateOption}
                  className={`block w-full p-3 border rounded-md cursor-pointer transition-colors ${
                    formData.state === stateOption
                      ? "bg-[#fde8e8] border-[#751010]"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="state"
                      value={stateOption}
                      checked={formData.state === stateOption}
                      onChange={() => handleRadioChange("state", stateOption)}
                      className="custom-radio w-4 h-4 border-gray-300"
                    />
                    <span className="ml-2">{stateOption}</span>
                  </div>
                </label>
              ))}
            </div>
          </Eligibility>
        );
        case 4:
  return (
    <Eligibility
      tabNumber="04"
      heading="What is your current State?"
      subheading="Please enter your city or address"
      buttontext="Next"
      onClick={nextStep}
      onBack={prevStep}
    >
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LocationIcon />
          </div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Select your state"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
            required
          />
        </div>
      </div>
    </Eligibility>
  );


      case 5:
        return (
          <Eligibility
            tabNumber="05"
            heading="Do you have a history of thyroid cancer?"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6 space-y-3">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-3 rounded-md cursor-pointer transition-colors border ${
                    formData.thyroidCancer === option
                      ? "bg-[#FFE4D1] border-[#FFD4B5]"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="thyroidCancer"
                      value={option}
                      checked={formData.thyroidCancer === option}
                      onChange={() =>
                        handleRadioChange("thyroidCancer", option)
                      }
                      className="custom-radio w-4 h-4 border-gray-300"
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </Eligibility>
        );

      case 6:
        return (
          <Eligibility
            tabNumber="06"
            heading="Are you pregnant?"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6 space-y-3">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-3 rounded-md cursor-pointer transition-colors border ${
                    formData.pregnant === option
                      ? "bg-[#FFE4D1] border-[#FFD4B5]"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="pregnant"
                      value={option}
                      checked={formData.pregnant === option}
                      onChange={() => handleRadioChange("pregnant", option)}
                      className="custom-radio w-4 h-4 border-gray-300"
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </Eligibility>
        );

      case 7:
        return (
          <Eligibility
            tabNumber="07"
            heading="Are you allergic to glp-1's?"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6 space-y-3">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-3 rounded-md cursor-pointer transition-colors border ${
                    formData.allergicToGlp === option
                      ? "bg-[#FFE4D1] border-[#FFD4B5]"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="allergicToGlp"
                      value={option}
                      checked={formData.allergicToGlp === option}
                      onChange={() =>
                        handleRadioChange("allergicToGlp", option)
                      }
                      className="custom-radio w-4 h-4 border-gray-300"
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </Eligibility>
        );

      case 8:
        return (
          <Eligibility
            tabNumber="08"
            heading="Have you tried a glp-1 in the past?"
            buttontext="Next"
            onClick={nextStep}
            onBack={prevStep}
          >
            <div className="mt-6 space-y-3">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-3 rounded-md cursor-pointer transition-colors border ${
                    formData.triedGlpBefore === option
                      ? "bg-[#FFE4D1] border-[#FFD4B5]"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="triedGlpBefore"
                      value={option}
                      checked={formData.triedGlpBefore === option}
                      onChange={() =>
                        handleRadioChange("triedGlpBefore", option)
                      }
                      className="custom-radio w-4 h-4 border-gray-300"
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </Eligibility>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        {errorMessage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4 text-[#751010]">
                Ineligible
              </h2>
              <p className="text-gray-700 mb-6">{errorMessage}</p>
              <button
                onClick={() => {
                  setErrorMessage("");
                  window.location.reload();
                  setStep(1);
                }}
                className="px-4 py-2 bg-[#751010] text-white rounded-md hover:bg-[#5a0d0d] transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
