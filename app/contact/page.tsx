"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const contactMethods = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "studioslumis@gmail.com",
    href: "mailto:studioslumis@gmail.com",
    description: "Best for project enquiries and detailed briefs.",
    external: true,
  },
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "+254 740 934 445",
    href: "https://wa.me/254740934445",
    description: "Quick questions and fast back-and-forth.",
    external: true,
  },
];

const details = [
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: <Clock size={16} />,
    label: "Response time",
    value: "Within 24 hours",
  },
];


const inputCls =
  "w-full rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 transition-colors duration-200 focus:border-gray-200 focus:outline-none";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <motion.div
      className="pt-[52px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              as="h1"
              eyebrow="Contact"
              title="Let's talk."
              description="Tell us what you're working on. We'll get back to you within 24 hours."
            />
          </div>
        </Container>
      </section>

      {/* Contact options */}
      <Section>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-12 md:grid-cols-2"
          >
            {/* Contact methods */}
            <div className="flex flex-col gap-6">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.label}
                  variants={fadeUpVariant}
                  className="rounded-[16px] border border-gray-100 bg-white p-6"
                >
                  <div className="flex items-center gap-3 text-gray-800">
                    {method.icon}
                    <span className="text-sm font-semibold">{method.label}</span>
                  </div>
                  <p className="mt-3 text-base font-medium text-gray-800">{method.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{method.description}</p>
                  <div className="mt-4">
                    <Button variant="dark" href={method.href} external={method.external}>
                      {method.label === "Email" ? "Send Email" : "Open WhatsApp"}
                    </Button>
                  </div>
                </motion.div>
              ))}

              {/* Details */}
              <motion.div variants={fadeUpVariant} className="flex flex-col gap-8">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Details
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {details.map((d) => (
                      <div key={d.label} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="text-gray-400">{d.icon}</span>
                        <span className="font-medium text-gray-800">{d.label}:</span>
                        {d.value}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div variants={fadeUpVariant}>
              {status === "success" ? (
                <div className="flex flex-col items-start gap-4 rounded-[16px] border border-gray-100 bg-white p-8">
                  <CheckCircle2 size={24} className="text-gray-800" />
                  <div>
                    <p className="text-base font-semibold text-gray-800">Message sent.</p>
                    <p className="mt-1 text-sm text-gray-600">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Button variant="light" onClick={() => setStatus("idle")}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-4 rounded-[16px] border border-gray-100 bg-white p-8"
                >
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Send a message
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-gray-600">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-gray-600">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-gray-600">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Mobile app for logistics startup"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-gray-600">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what you're building, your timeline, and any other relevant details."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-600">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    variant="dark"
                    type="submit"
                    className={status === "loading" ? "opacity-60 pointer-events-none" : ""}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
}
