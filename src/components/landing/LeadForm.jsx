"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CTA, FORM } from "./content";

const MIN_FILL_MS = 3000; // humans can't fill 4 fields faster than this

const SELECT_TRIGGER =
  "bg-transparent !ring-offset-0 !ring-0 rounded-none h-auto border border-white/40 focus:border-white px-[14px] py-3 text-base text-white data-[placeholder]:text-white/60";

const FIELD =
  "w-full bg-transparent border border-white/40 focus:border-white px-[14px] py-3 text-base text-white placeholder:text-white/60 outline-none";

export default function LeadForm({ id, heading, supporting, location }) {
  const router = useRouter();
  const formRef = useRef(null);
  const mountedAt = useRef(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [projectType, setProjectType] = useState("");
  const [startTime, setStartTime] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const validate = (formData) => {
    const next = {};
    if (!String(formData.get("name") || "").trim()) {
      next.name = "Please enter your name.";
    }
    const digits = String(formData.get("Phone") || "").replace(/\D/g, "");
    if (digits.length < 10) {
      next.Phone = "Please enter a valid mobile number.";
    }
    if (!projectType) next.projectType = "Please select a project type.";
    if (!startTime) next.startTime = "Please select a start time.";
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // Spam checks: hidden honeypot + minimum fill time (no visible captcha; Web3Forms spam filter also applies).
    const tookMs = Date.now() - mountedAt.current;
    if (formData.get("botcheck") || tookMs < MIN_FILL_MS) {
      setToast({ type: "error", message: "Please try again in a moment." });
      return;
    }

    setSubmitting(true);
    formData.append("access_key", "346e5e2d-4b6a-4a24-ba78-88727c6118e1");

    let data;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      data = await response.json();
    } catch (err) {
      setToast({ type: "error", message: "Network error. Please try again." });
      setSubmitting(false);
      return;
    }

    if (data.success) {
      const firstName = String(formData.get("name")).trim().split(/\s+/)[0];
      const transactionId = window.crypto?.randomUUID
        ? window.crypto.randomUUID()
        : `${Date.now()}`;

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-875773979/3PNuCJvcj8EZEJuAzaED",
          value: 1.0,
          currency: "CAD",
          transaction_id: transactionId,
        });
      }

      // Client-side navigation, so the conversion request above is not cancelled.
      // Keep `submitting` true so the button stays disabled until the page changes.
      router.push(
        `/restaurant-renovation/thank-you?name=${encodeURIComponent(firstName)}`
      );
      return;
    } else {
      setToast({
        type: "error",
        message: data.message || "Submission failed.",
      });
    }
    setSubmitting(false);
  };

  return (
    <div
      id={id}
      data-lead-form
      className="relative bg-black text-white p-8 shadow-lg max-sm:p-6 scroll-mt-24"
    >
      {
        <form ref={formRef} onSubmit={onSubmit} noValidate>
          <h2 className="text-3xl font-semibold max-sm:text-[22px]">
            {heading}
          </h2>
          {supporting ? (
            <p className="mt-2 text-white/80 text-base">{supporting}</p>
          ) : null}

          <div className="mt-6 flex flex-col gap-5">
            <Field error={errors.name}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="name"
                aria-label="Name"
                className={FIELD}
              />
            </Field>

            <Field error={errors.Phone}>
              <input
                type="tel"
                name="Phone"
                placeholder="Mobile"
                inputMode="tel"
                autoComplete="tel"
                aria-label="Mobile"
                className={FIELD}
              />
            </Field>

            <Field error={errors.projectType}>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger
                  className={SELECT_TRIGGER}
                  aria-label="Type of project"
                >
                  <SelectValue placeholder="Type of project" />
                </SelectTrigger>
                <SelectContent>
                  {FORM.projectTypes.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field error={errors.startTime}>
              <Select value={startTime} onValueChange={setStartTime}>
                <SelectTrigger
                  className={SELECT_TRIGGER}
                  aria-label="When are you looking to start?"
                >
                  <SelectValue placeholder="When are you looking to start?" />
                </SelectTrigger>
                <SelectContent>
                  {FORM.startTimes.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <input type="hidden" name="Project Type" value={projectType} />
          <input type="hidden" name="Start Date" value={startTime} />
          <input
            type="hidden"
            name="subject"
            value="Restaurant Renovation Landing Page - New Lead"
          />
          <input type="hidden" name="from_name" value="DSC Linx Landing Page" />
          <input type="hidden" name="Form Location" value={location} />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />


          <Button
            type="submit"
            variant="secondary"
            disabled={submitting}
            className="mt-6 w-full bg-white text-black rounded-none text-lg px-8 py-6 cont hover:bg-transparent hover:text-white border-2 border-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </span>
            ) : (
              <span>{CTA.submit}</span>
            )}
          </Button>
        </form>
      }
      {toast ? <Toast type={toast.type} message={toast.message} /> : null}
    </div>
  );
}

function Field({ error, children }) {
  return (
    <div>
      {children}
      {error ? (
        <p role="alert" className="mt-1 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Toast({ type, message }) {
  const styles =
    type === "success"
      ? "bg-green-600/90 border-green-500 text-white"
      : "bg-red-600/90 border-red-500 text-white";
  return (
    <div
      role="status"
      className={`fixed top-6 right-6 max-sm:left-6 z-[60] rounded-md px-4 py-3 shadow-lg border text-sm ${styles}`}
    >
      {message}
    </div>
  );
}

