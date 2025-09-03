import ConsentFormPage from "@/components/consent";
import Footer2 from "@/layout/footer-2";
import Navbar from "@/layout/navbar";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="bg-[#F9F6EF] md:rounded-b-[10%] rounded-b-[5%]">
        <Navbar className={"bg-[#F9F6EF] md:px-8 px-3"} />
        <ConsentFormPage />
      </div>
      <Footer2 className="bg-[#F2E1D0] mt-5" />
    </>
  );
}
