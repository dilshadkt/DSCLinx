"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
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
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setSubmitting(true);
    const formData = new FormData(event.target);
    const form = document.getElementById("form");

    const hCaptchaElement = form.querySelector(
      'textarea[name="h-captcha-response"]'
    );
    const hCaptcha = hCaptchaElement?.value;

    if (!hCaptcha) {
      setToast({ type: "error", message: "Please complete the captcha." });
      setSubmitting(false);
      return;
    }

    formData.append("access_key", "e6b999bc-a83d-4df7-9c61-73edbd1dc706");

    let data;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      data = await response.json();
    } catch (err) {
      console.log("Network Error", err);
      setToast({ type: "error", message: "Network error. Please try again." });
      setSubmitting(false);
      return;
    }

    if (data.success) {
      setToast({ type: "success", message: "Form submitted successfully." });
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
      setSubmitting(false);
    } else {
      console.log("Error", data);
      setToast({
        type: "error",
        message: data.message || "Submission failed.",
      });
      setSubmitting(false);
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
            disabled={submitting}
            className="bg-[#fff] rounded-none text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#fff] hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center gap-2 text-black">
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </span>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </form>
        <div></div>
        {toast ? <Toast type={toast.type} message={toast.message} /> : null}
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

function Toast({ type, message }) {
  const base =
    "fixed bottom-6 right-6 z-50 rounded-md px-4 py-3 shadow-lg border text-sm";
  const styles =
    type === "success"
      ? "bg-green-600/90 border-green-500 text-white"
      : "bg-red-600/90 border-red-500 text-white";
  return <div className={`${base} ${styles}`}>{message}</div>;
}
