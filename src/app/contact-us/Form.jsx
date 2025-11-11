"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/constants";

export default function Form() {
  const [result, setResult] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const form = document.getElementById("form");

    const hCaptcha = form.querySelector(
      "textarea[name=h-captcha-response]"
    ).value;

    if (!hCaptcha) {
      alert("Please fill out captcha field");
      return;
    }

    formData.append("access_key", "e6b999bc-a83d-4df7-9c61-73edbd1dc706");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      const transactionId =
        typeof window !== "undefined" && window.crypto?.randomUUID
          ? window.crypto.randomUUID()
          : `${Date.now()}`;

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-875773979/3PNuCJvcj8EZEJuAzaED",
          value: 1.0,
          currency: "CAD",
          transaction_id: transactionId,
        });
      }
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
      <div className="relative bg-black p-8 shadow-lg dark:bg-dark-2 sm:p-12">
        <form id="form" onSubmit={onSubmit}>
          <h2 className="flex justify-center text-white text-4xl font-semibold pb-9 max-sm:text-[27px]">
            Contact Us
          </h2>
          <ContactInputBox type="text" name="name" placeholder="Full Name" />

          <div className="grid grid-cols-2 gap-x-10 max-md:grid-cols-1">
            <ContactInputBox
              type="text"
              name="Company Name"
              placeholder="Company Name"
            />
            <ContactInputBox type="text" name="email" placeholder="Email" />
          </div>

          <div className="grid grid-cols-2 gap-x-10 max-md:grid-cols-1">
            <ContactInputBox type="text" name="Phone" placeholder="Phone" />
            <div className="mb-6">
              <Select onValueChange={(val) => setProject(val)}>
                <SelectTrigger className="bg-transparent !ring-offset-0 !ring-0 rounded-none h-auto resize-none border border-stroke px-[14px] py-3 text-base text-white outline-none">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((item, i) => (
                    <SelectItem key={i} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* <ContactInputBox
                            type="text"
                            name="Project Type"
                            placeholder="Project Type"
                        /> */}
          </div>

          <ContactTextArea
            row="6"
            placeholder="Your Message"
            name="details"
            defaultValue=""
          />
          <div className="h-captcha" data-captcha="true"></div>
          <input type="checkbox" name="botcheck" className="hidden"></input>
          <input
            type="text"
            name="projectType"
            value={project}
            className="hidden"
          ></input>
          <Button
            type="submit"
            variant="secondary"
            className="bg-[#fff] rounded-none text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#fff] hover:text-white"
          >
            <span>Submit</span>
          </Button>
        </form>
        <div></div>
        <span className="py-4 text-white">{result}</span>
      </div>
    </div>
  );
}

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-6">
      <textarea
        required
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full bg-transparent resize-none border border-stroke px-[14px] py-3 text-base text-white outline-none"
        defaultValue={defaultValue}
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        required
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full bg-transparent border border-stroke px-[14px] py-3 text-base text-white outline-none "
      />
    </div>
  );
};
