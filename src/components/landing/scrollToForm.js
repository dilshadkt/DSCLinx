// Scrolls to the nearest lead form still ahead of the viewer (hero form near the
// top of the page, the closing form once they have scrolled past it).
export function scrollToForm(location) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", "cta_click", { cta_location: location });
  }

  const forms = Array.from(document.querySelectorAll("[data-lead-form]"));
  if (!forms.length) return;

  const target =
    forms.find((f) => f.getBoundingClientRect().bottom > 120) ??
    forms[forms.length - 1];

  target.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    target.querySelector("input[name='name']")?.focus({ preventScroll: true });
  }, 500);
}
