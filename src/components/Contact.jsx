import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCopy, FiCheck, FiMail, FiDownload } from "react-icons/fi";
import { socialMedia } from "../data";
import Toast from "./Toast";

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const handleCopy = async (text, id, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setToastMessage(`Copied ${label} to clipboard.`);
      setTimeout(() => setCopiedId(null), 2500);
      setTimeout(() => setToastMessage(""), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      setToastMessage(`Copied ${label} to clipboard.`);
      setTimeout(() => setCopiedId(null), 2500);
      setTimeout(() => setToastMessage(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Editorial Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs sm:text-sm font-semibold text-accent tracking-widest uppercase">
          05 / CONTACT
        </span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Closing Statement */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-text uppercase leading-[0.95] mb-6">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-accent">USEFUL.</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-lg leading-relaxed mb-8 font-sans">
            Interested in software engineering opportunities, technical collaboration,
            or discussing complex backend and full-stack systems? My inbox is always open.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:niranjankumar11082005@gmail.com"
              className="group px-6 py-3.5 bg-text text-bg hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-150 flex items-center gap-2 border border-text cursor-pointer shadow-sm hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
            >
              <FiMail size={16} />
              <span>SEND EMAIL</span>
              <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </a>

            <a
              href="/Niranjan_Kumar_Resume.pdf"
              download
              className="group px-5 py-3.5 bg-surface text-text hover:border-accent hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-mono text-xs sm:text-sm uppercase tracking-wider border border-border transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <FiDownload size={16} className="group-hover:translate-y-0.5 transition-transform duration-150" />
              <span>RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Communication Channels & Direct Links */}
        <div className="lg:col-span-5 border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              COMMUNICATION CHANNELS
            </span>
            <span className="font-mono text-xs text-accent">DIRECT REACH</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {socialMedia.map((channel) => {
              const isCopied = copiedId === channel.id;
              return (
                <div
                  key={channel.id}
                  className="flex items-center justify-between py-3 border-b border-border/70 last:border-b-0 hover:bg-surface-hover px-2 transition-colors duration-150"
                >
                  <div>
                    <span className="block text-[10px] text-text-muted uppercase tracking-wider">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:text-accent transition-colors duration-150 font-medium"
                    >
                      {channel.value}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    {channel.copyable ? (
                      <button
                        type="button"
                        onClick={() => handleCopy(channel.value, channel.id, channel.label)}
                        className="p-2 border border-border hover:border-accent text-text-muted hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150 cursor-pointer"
                        title={`Copy ${channel.label}`}
                        aria-label={`Copy ${channel.label}`}
                      >
                        {isCopied ? <FiCheck size={14} className="text-green-500" /> : <FiCopy size={14} />}
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-2 border border-border hover:border-accent text-text-muted hover:text-accent hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150 cursor-pointer"
                        title={`Open ${channel.label}`}
                        aria-label={`Open ${channel.label}`}
                      >
                        <FiArrowUpRight size={14} className="group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5 transition-transform duration-150" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>LOCATION</span>
            <span className="text-text font-medium">IIT (BHU) VARANASI (221005)</span>
          </div>
        </div>
      </div>

      {/* Toast Feedback */}
      <Toast
        show={!!toastMessage}
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
