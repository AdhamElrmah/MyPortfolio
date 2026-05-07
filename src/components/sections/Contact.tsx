import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AdhamElrmah",
    username: "@AdhamElrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adham-elrmah",
    username: "adham-elrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adham_elrmah",
    username: "@adham_elrmah",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("adhamelrmah@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textArea = document.createElement("textarea");
      textArea.value = "adhamelrmah@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background watermark */}
      <div
        className="absolute bottom-0 right-0 text-[25vw] lg:text-[18vw] font-bold opacity-[0.02] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        SAY HI
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-[#C3E41D]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[#C3E41D]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ─────────────────── */}
        <motion.div
          className="mb-16 md:mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#C3E41D]" />
            <span
              className="text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{
                color: "#C3E41D",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              Get In Touch
            </span>
            <div className="h-[2px] w-12 bg-[#C3E41D] lg:hidden" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code']">
            Let's Build{" "}
            <span className="text-[#C3E41D]">Something</span>
            <br className="hidden lg:block" />
            <span className="text-[#C3E41D] lg:text-white dark:lg:text-white"> Together</span>
          </h2>
        </motion.div>

          {/* ── Bento Box Layout ─────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* ── Left Side: Contact Cards (Bento style) ─────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Main Email Card */}
              <div 
                onClick={handleCopyEmail}
                className="group relative p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-[#111] cursor-pointer transition-all duration-300 shadow-sm flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available for work
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Fira_Code'] text-neutral-900 dark:text-white tracking-tight break-words mb-4">
                    adhamelrmah<span className="text-[#C3E41D]">@</span>gmail.com
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] text-lg">
                    Drop me a line anytime. I usually reply within 24 hours.
                  </p>
                </div>
                
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {copied ? "Copied to clipboard!" : "Click to copy email"}
                  </span>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 group-hover:bg-[#C3E41D] group-hover:text-black transition-colors duration-300">
                    {copied ? (
                      <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Socials Row */}
              <div className="grid grid-cols-3 gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] hover:bg-neutral-50 dark:hover:bg-[#111] hover:border-[#C3E41D]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-300 group shadow-sm"
                    aria-label={social.label}
                  >
                    <div className="text-neutral-600 dark:text-neutral-400 group-hover:text-[#C3E41D] transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Right Column: Shadcn Form ──────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] shadow-sm h-full flex flex-col justify-center">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold font-['Fira_Code'] text-neutral-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] text-lg">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                <form
                  action="https://formsubmit.co/adhamelrmah@gmail.com"
                  method="POST"
                  className="flex flex-col gap-8"
                  onSubmit={() => setIsSubmitting(true)}
                >
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.href} />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="name" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                        Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="h-14 rounded-xl border-neutral-300 dark:border-neutral-700 bg-transparent px-4 text-base focus-visible:ring-[#C3E41D]"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <Label htmlFor="email" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="h-14 rounded-xl border-neutral-300 dark:border-neutral-700 bg-transparent px-4 text-base focus-visible:ring-[#C3E41D]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label htmlFor="subject" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="_subject"
                      required
                      placeholder="Collaboration Opportunity"
                      className="h-14 rounded-xl border-neutral-300 dark:border-neutral-700 bg-transparent px-4 text-base focus-visible:ring-[#C3E41D]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label htmlFor="message" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="rounded-xl border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-4 text-base focus-visible:ring-[#C3E41D] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-[#C3E41D] text-black font-semibold text-lg hover:bg-[#d4f52e] transition-all duration-300 mt-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <svg
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

        {/* ── Footer Strip ─────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-neutral-200 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
              © {new Date().getFullYear()} Adham Elrmah
            </p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
              Designed & Built with <span className="text-[#C3E41D]">♥</span>
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.05]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 tracking-widest uppercase">
              Cairo, EG — {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Cairo" })}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
