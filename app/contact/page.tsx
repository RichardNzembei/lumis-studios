"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
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

export default function ContactPage() {
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
            </div>

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

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  What to include
                </h2>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                  <li>— What you&apos;re building or the problem you&apos;re solving</li>
                  <li>— Your timeline and budget range</li>
                  <li>— Any existing codebase or designs</li>
                  <li>— How you prefer to work</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
}
