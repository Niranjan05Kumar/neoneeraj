import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiCheck, FiMail, FiAlertCircle } from "react-icons/fi";
import Toast from "./Toast";

const Contact = () => {
  const formRef = useRef(null);
  const lastSubmitTime = useRef(0);

  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  // Clear success notification after 6 seconds
  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Auto-dismiss toast message after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return;

    setErrorMessage("");

    // 1. Honeypot spam protection check (silently drop automated bot submissions)
    const honeypot = formRef.current._gotcha?.value;
    if (honeypot) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setToastMessage("Message sent successfully.");
        if (formRef.current) formRef.current.reset();
      }, 800);
      return;
    }

    // 2. Client-side rate limiting (5-second throttle cooldown)
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setSubmitStatus("error");
      setErrorMessage("Please wait a few moments before sending another message.");
      return;
    }

    // 3. Validation
    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // 4. Environment variables check
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
      if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
      if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");

      console.warn(
        `[EmailJS] Missing environment variable(s): ${missing.join(", ")}. ` +
        "Please create a .env file with your EmailJS credentials (refer to .env.example)."
      );

      setSubmitStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Please check environment variables or reach out directly via email."
      );
      return;
    }

    // 5. Send via EmailJS SDK
    setIsSubmitting(true);
    setSubmitStatus("sending");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
          blockHeadless: true,
        }
      );

      lastSubmitTime.current = Date.now();
      setSubmitStatus("success");
      setToastMessage("Message sent successfully.");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("[EmailJS] Transmission failed:", error);
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-12 sm:mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          07 / CONTACT
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      {/* Main Single Large Bordered Contact Container */}
      <div className="border border-border bg-surface relative p-6 sm:p-10 lg:p-14">
        {/* Subtle Corner Markers matching portfolio design system */}
        <span className="absolute -top-[5px] -left-[5px] font-mono text-xs text-border leading-none select-none">+</span>
        <span className="absolute -top-[5px] -right-[5px] font-mono text-xs text-border leading-none select-none">+</span>
        <span className="absolute -bottom-[5px] -left-[5px] font-mono text-xs text-border leading-none select-none">+</span>
        <span className="absolute -bottom-[5px] -right-[5px] font-mono text-xs text-border leading-none select-none">+</span>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* Honeypot Spam Protection (Hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form-gotcha">Do not fill this field</label>
            <input
              type="text"
              id="form-gotcha"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* 2-Column Composition: Left (50%) / Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN: Headline & Description */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text uppercase leading-[1.05] mb-5">
                LET'S BUILD <br />
                SOMETHING <br />
                <span className="text-accent">USEFUL.</span>
              </h2>

              <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
                Interested in software engineering opportunities, collaboration, 
                or just want to discuss a project? Feel free to reach out, share an idea, or get in touch. 
                I'm always open to meaningful conversations and new opportunities.
              </p>
            </div>

            {/* RIGHT COLUMN: Minimalist Editorial Box Form */}
            <div className="space-y-5 sm:space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                >
                  NAME <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  className="w-full bg-bg/50 border border-border px-3.5 py-2.5 text-text font-mono text-xs sm:text-sm placeholder:text-text-muted/40 hover:border-border-light focus:border-accent focus:outline-none focus-visible:outline-none transition-colors duration-150 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                >
                  EMAIL <span className="text-accent">*</span> <span className="text-text-secondary lowercase text-[10px] sm:text-[12px] max-w-md leading-relaxed font-sans">(Use an active email address, so <span className="uppercase">I</span> can reply)</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                  className="w-full bg-bg/50 border border-border px-3.5 py-2.5 text-text font-mono text-xs sm:text-sm placeholder:text-text-muted/40 hover:border-border-light focus:border-accent focus:outline-none focus-visible:outline-none transition-colors duration-150 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                >
                  SUBJECT <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  autoComplete="off"
                  placeholder="Project inquiry / Full-stack collaboration"
                  disabled={isSubmitting}
                  className="w-full bg-bg/50 border border-border px-3.5 py-2.5 text-text font-mono text-xs sm:text-sm placeholder:text-text-muted/40 hover:border-border-light focus:border-accent focus:outline-none focus-visible:outline-none transition-colors duration-150 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mb-1.5"
                >
                  MESSAGE <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  autoComplete="off"
                  placeholder="Briefly describe your project, timeline, or engineering inquiry..."
                  disabled={isSubmitting}
                  className="w-full bg-bg/50 border border-border px-3.5 py-2.5 text-text font-sans text-sm placeholder:text-text-muted/40 hover:border-border-light focus:border-accent focus:outline-none focus-visible:outline-none transition-colors duration-150 rounded-none resize-y min-h-[100px] leading-relaxed disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Status alerts */}
              {submitStatus === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-3 border border-accent/40 bg-accent/10 text-text font-mono text-xs flex items-center gap-2"
                >
                  <FiCheck className="text-accent shrink-0" size={15} />
                  <span>Message sent successfully.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-3 border border-red-500/40 bg-red-500/10 text-red-400 font-mono text-xs flex items-center gap-2"
                >
                  <FiAlertCircle className="text-red-400 shrink-0" size={15} />
                  <span>{errorMessage || "Something went wrong. Please try again."}</span>
                </div>
              )}
            </div>
          </div>

          {/* BOTTOM ROW: Social Links (Bottom on mobile, Left on desktop) + Send Message Button (Top on mobile, Right on desktop) */}
          <div className="mt-12 sm:mt-16 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-12">
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-sm">
              <a
                href="https://github.com/niranjan05Kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text transition-colors duration-150 uppercase tracking-wider font-semibold"
              >
                <span>GITHUB</span>
                <FiArrowUpRight size={17} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </a>

              <a
                href="https://www.linkedin.com/in/niranjan05kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text transition-colors duration-150 uppercase tracking-wider font-semibold"
              >
                <span>LINKEDIN</span>
                <FiArrowUpRight size={17} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </a>

              <a
                href="https://x.com/05niranjankumar"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text transition-colors duration-150 uppercase tracking-wider font-semibold"
              >
                <span>X</span>
                <FiArrowUpRight size={17} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </a>
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto group px-4 py-2.5 bg-text text-bg hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-150 flex items-center justify-center gap-2 border border-text cursor-pointer shadow-sm hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none shrink-0"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  <FiMail size={16} />
                  <span>SEND MESSAGE</span>
                  <FiArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Feedback */}
      <Toast
        show={!!toastMessage}
        onClose={() => setToastMessage("")}
        message={
          <span className="flex items-center gap-2 text-text">
            <FiCheck className="text-accent" size={16} />
            <span>{toastMessage}</span>
          </span>
        }
      />
    </section>
  );
};

export default Contact;
