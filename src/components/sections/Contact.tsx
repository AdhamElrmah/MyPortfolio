import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AdhamElrmah",
    user: "@AdhamElrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adham-elrmah",
    user: "adham-elrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adham_elrmah",
    user: "@adham_elrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const FloatingField: React.FC<{
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  label: string;
  textarea?: boolean;
  rows?: number;
}> = ({
  id,
  name,
  type = "text",
  required,
  placeholder,
  label,
  textarea,
  rows = 5,
}) => {
  const [focused, setFocused] = useState(false);
  const [hasVal, setHasVal] = useState(false);
  const active = focused || hasVal;
  const cls =
    "w-full px-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-white/[0.03] text-neutral-900 dark:text-white text-sm outline-none transition-all duration-300 focus:border-[#C3E41D] focus:shadow-[0_0_0_3px_rgba(195,228,29,0.08)] placeholder:text-neutral-300 dark:placeholder:text-neutral-600 font-['Antic']";
  const labelCls = `absolute left-4 transition-all duration-300 pointer-events-none font-mono text-[10px] tracking-wider uppercase ${active ? "-top-2.5 text-[#C3E41D] bg-neutral-50 dark:bg-[#111] px-1.5" : `${textarea ? "top-4" : "top-3.5"} text-neutral-400`}`;
  const shared = {
    id,
    name,
    required,
    placeholder: active ? placeholder : "",
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setHasVal(e.target.value.length > 0);
    },
  };
  return (
    <div className="relative">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {textarea ? (
        <textarea
          {...shared}
          rows={rows}
          className={`${cls} py-4 resize-none`}
        />
      ) : (
        <input type={type} {...shared} className={`${cls} h-12`} />
      )}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#C3E41D] transition-all duration-500 rounded-full ${focused ? "w-[calc(100%-2rem)]" : "w-0"}`}
      />
    </div>
  );
};

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("adhamelrmah@gmail.com");
    } catch {
      const t = document.createElement("textarea");
      t.value = "adhamelrmah@gmail.com";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      name: anonymous ? "Anonymous" : (formData.get("name") as string),
      email: anonymous ? "N/A" : (formData.get("email") as string),
      title: formData.get("_subject") as string,
      message: formData.get("message") as string,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      form.reset();
      setTimeout(() => {
        setIsSuccess(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fade: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden bg-neutral-50 dark:bg-[#0d0d0d] transition-colors duration-300"
    >
      {/* BG */}
      <div
        className="absolute top-0 right-0 text-[20vw] sm:text-[18vw] lg:text-[14vw] font-bold opacity-[0.015] select-none pointer-events-none leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        HELLO
      </div>
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#C3E41D]/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-[350px] h-[350px] rounded-full bg-[#C3E41D]/[0.03] blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle,currentColor 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Header */}
        <motion.div className="mb-14 md:mb-20 text-center" variants={fade}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-[2px] w-10 bg-[#C3E41D]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C3E41D] font-['Fira_Code']">
              Get In Touch
            </span>
            <div className="h-[2px] w-10 bg-[#C3E41D]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code']">
            Let's Build <span className="text-[#C3E41D]">Something</span>
            <br className="hidden sm:block" />
            <span className="sm:text-inherit text-[#C3E41D]"> Together</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] max-w-md mx-auto mt-5 text-sm md:text-base">
            Have a project in mind? Let's create something extraordinary.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
            variants={fade}
          >
            {/* Email compact card */}
            <div
              onClick={copyEmail}
              className="sm:col-span-3 lg:col-span-1 group p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-[#C3E41D]/30 hover:shadow-[0_0_30px_rgba(195,228,29,0.06)] overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-10 bg-gradient-to-b from-[#C3E41D]/30 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-10 bg-gradient-to-l from-[#C3E41D]/30 to-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#C3E41D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm md:text-base font-bold font-['Fira_Code'] text-neutral-900 dark:text-white truncate">
                      adhamelrmah<span className="text-[#C3E41D]">@</span>
                      gmail.com
                    </h3>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </span>
                  </div>
                  <p className="text-[11px] md:text-xs text-neutral-400 font-mono">
                    {copied
                      ? "✓ Copied to clipboard!"
                      : "Click to copy • I reply within 24h"}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 group-hover:bg-[#C3E41D] transition-all duration-300 shrink-0">
                  {copied ? (
                    <svg
                      className="w-3.5 h-3.5 text-[#C3E41D] group-hover:text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Social cards */}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#C3E41D]/40 hover:shadow-[0_0_20px_rgba(195,228,29,0.06)] flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:text-[#C3E41D] transition-colors shrink-0">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-mono text-neutral-900 dark:text-white font-medium">
                    {s.label}
                  </p>
                  <p className="text-[10px] md:text-[11px] font-mono text-neutral-400 truncate">
                    {s.user}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-[#C3E41D] ml-auto transition-all group-hover:translate-x-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            ))}

            {/* Location */}
            <div className="sm:col-span-3 lg:col-span-1 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#C3E41D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-mono text-neutral-900 dark:text-white tracking-wider">
                    Alexandria, EG
                  </p>
                  <p className="text-[10px] md:text-[11px] font-mono text-neutral-400">
                    UTC+2 • EET
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-400">
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Africa/Cairo",
                  })}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div className="lg:col-span-7" variants={fade}>
            <div className="relative p-6 md:p-9 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm h-full flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-0 left-0 w-[1px] h-10 bg-gradient-to-b from-[#C3E41D]/20 to-transparent" />
                <div className="absolute top-0 left-0 h-[1px] w-10 bg-gradient-to-r from-[#C3E41D]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1px] h-10 bg-gradient-to-t from-[#C3E41D]/20 to-transparent" />
                <div className="absolute bottom-0 right-0 h-[1px] w-10 bg-gradient-to-l from-[#C3E41D]/20 to-transparent" />
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#C3E41D]" />
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C3E41D]">
                    Message
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-['Fira_Code'] text-neutral-900 dark:text-white tracking-tight mb-1">
                  Send a Message
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-['Antic'] mb-3">
                  Fill out the form and I'll get back to you soon.
                </p>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400/90">
                    This form is fully functional — your message will be
                    delivered directly to my inbox.
                  </span>
                </div>
              </div>

              {/* Success Message Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-white/95 dark:bg-[#111]/95 backdrop-blur-sm"
                  >
                    <div className="w-16 h-16 mb-4 rounded-full bg-[#C3E41D]/20 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#C3E41D]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold font-['Fira_Code'] text-neutral-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-['Antic']">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                className="flex flex-col gap-5 flex-1"
                onSubmit={handleSubmit}
              >

                {/* Anon toggle */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#C3E41D]/10 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-[#C3E41D]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-neutral-900 dark:text-white">
                        Send Anonymously
                      </p>
                      <p className="text-[9px] font-mono text-neutral-400">
                        Name & email won't be required
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAnonymous(!anonymous)}
                    className={`relative w-10 h-5.5 rounded-full transition-all duration-300 ${anonymous ? "bg-[#C3E41D]" : "bg-neutral-300 dark:bg-neutral-700"}`}
                    style={{ height: 22 }}
                  >
                    <div
                      className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow transition-all duration-300 ${anonymous ? "left-[20px]" : "left-[2px]"}`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {!anonymous && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                        <FloatingField
                          id="name"
                          name="name"
                          required
                          placeholder="John Doe"
                          label="Name"
                        />
                        <FloatingField
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          label="Email"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <FloatingField
                  id="subject"
                  name="_subject"
                  required
                  placeholder="Collaboration Opportunity"
                  label="Subject"
                />
                <FloatingField
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  label="Message"
                  textarea
                  rows={4}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-12 rounded-2xl bg-[#C3E41D] text-black font-bold text-xs tracking-widest uppercase font-mono flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,228,29,0.3)] disabled:opacity-60 mt-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fade}
          className="mt-16 pt-6 border-t border-neutral-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
            <span>© {new Date().getFullYear()} Adham Elrmah</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span>
              Designed & Built with <span className="text-[#C3E41D]">♥</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
