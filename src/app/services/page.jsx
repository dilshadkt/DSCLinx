import React from "react";
import Banner from "@/components/Banner";
import ServicesCard from "./ServicesCard";

export default function page() {
  return (
    <>
      {/* Banner section Start*/}
      <Banner
        head={"Services"}
        desc={
          "DSCLINX  proud to offer a complete range of construction services made possible by our professional team."
        }
      />
      
      <div className="mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <ServicesCard />
      </div>
      {/* Banner section End*/}
    </>
  );
}
