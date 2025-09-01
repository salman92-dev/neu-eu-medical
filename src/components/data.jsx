import Engaction from "./assets/engaction";
import Engactionwhite from "./assets/engactionwhite";
import AppointmentIcon from "./assets/oppointment-icon";

 


export const productData = [
{
    icon: <AppointmentIcon />,
    bgClass: "bg-box3",
    title: "Semaglutide Consultation (Brand Name)",
    price: "$149",
    type: "Appointment Only",
    calander: "https://offer.neueu.co/branded-semaglutide",
    features: [
      "Online medical visit with provider",
      "Evaluation for GLP-1 therapy suitability",
      "Prescription if appropriate",
      "Medication not included",
      "Provider answers your questions",
      "Follow-ups not included",
      "One time consult",
    ],
  },
  {
    icon: <AppointmentIcon />,
    bgClass: "bg-[#FFDCCC]",
    title: "Tirzepatide Consultation (Brand Name)",
    price: "$149",
    type: "Appointment Only",
    calander: "https://offer.neueu.co/branded-tirzepatide",
    features: [
      "Online medical visit with provider",
      "Evaluation for GLP-1 therapy suitability",
      "Prescription if appropriate",
      "Medication not included",
      "Provider answers your questions",
      "Follow-ups not included",
      "One time consult",
    ],
  },
  {
    icon: <Engaction />,
    bgClass: "bg-box1",
    title: "Semaglutide Package (Compounded)",
    price: "$349",
    type: "Medication + Appointment",
    calander: "https://offer.neueu.co/compounded-semaglutide",
    features: [
      "Online medical visit with provider",
      "Evaluation for GLP-1 therapy suitability",
      "Prescription if appropriate",
      "Provider answers your questions",
      "Follow-ups included",
      "Medication included (1 month)",
      "No insurance required",
    ],
  },
  {
    icon: <Engactionwhite />,
    bgClass: "bg-[#D77979]",
    title: "Tirzepatide Package (Compounded)",
    price: "$449",
    type: "Medication + Appointment",
    calander: "https://offer.neueu.co/compounded-tirzepatide",
    features: [
      "Online medical visit with provider",
      "Evaluation for GLP-1 therapy suitability",
      "Prescription if appropriate",
      "Provider answers your questions",
      "Follow-ups included",
      "Medication included (1 month)",
      "Cash Pay, No insurance required",
    ],
  },
];
