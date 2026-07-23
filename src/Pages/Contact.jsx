import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/ui/SectionHeading";
import FeatureCard from "../Components/ui/FeatureCard";
import ContactCard from "../Components/Contact/ContactCard";
import ContactForm from "../Components/Contact/ContactForm";

const instagramIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
);

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Office Address",
    value: (
      <>
        Shams Al Barakat Exhibitions LLC, Office M-09, Arabilla Building,
        15C Street, Hor Al Anz East, Dubai, UAE
      </>
    ),
    href: "https://maps.app.goo.gl/Luj85duGsPQ88YvU6",
    external: true,
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+971 50 354 5972",
    href: "tel:+971503545972",
    copyValue: "+971503545972",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "info@barakatexhibitions.com",
    href: "mailto:info@barakatexhibitions.com",
    copyValue: "info@barakatexhibitions.com",
  },
  {
    icon: instagramIcon,
    label: "Instagram",
    value: "@barakatexhibitions",
    href: "https://www.instagram.com/barakatexhibitions/",
    external: true,
  },
];

const whyContactUs = [
  {
    title: "Planning an Exhibition",
    description:
      "From concept to execution, we design and manage exhibitions that leave a lasting impression.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: "Destination Retail",
    description:
      "Curated retail marketplaces that turn everyday shopping into a memorable journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 9v.906c0 1.16.902 2.09 2.021 2.132A22.6 22.6 0 0 0 6 12c1.052 0 2.062-.14 3-.398 0 0 0 .398 0 .398v.906c0 1.16.902 2.09 2.021 2.132A22.6 22.6 0 0 0 13 15c1.052 0 2.062-.14 3-.398v.398c0 1.16.902 2.09 2.021 2.132A22.6 22.6 0 0 0 20 17M3.75 21h16.5M4.5 3h15l1.5 6.75h-18L4.5 3Z" />
      </svg>
    ),
  },
  {
    title: "International Pavilion Development",
    description:
      "Purpose-built pavilions representing countries and cultures with authenticity and flair.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4.5 21V5.25A2.25 2.25 0 0 1 6.75 3h4.5a2.25 2.25 0 0 1 2.25 2.25V21M15 21V9.75A2.25 2.25 0 0 1 17.25 7.5h.75A2.25 2.25 0 0 1 20.25 9.75V21M8.25 6.75h.008v.008H8.25V6.75Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#822168]/5 via-white to-white">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#822168]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#002e5d]/10 blur-3xl"
        />

        <div className="relative px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#822168]">
                Get In Touch
              </p>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Let's Create Something Extraordinary Together
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-600">
              Whether you're planning an exhibition, pavilion, destination
              retail experience, or cultural event, our team is ready to help
              bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + form */}
      <section id="contact-form" className="px-6 md:px-10 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 h-full"
          >
            <h2 className="font-satoshi text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-1">
              {contactInfo.map((item, index) => (
                <ContactCard key={item.label} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 md:px-10 py-16 lg:py-20 bg-slate-50">
        <SectionHeading
          kicker="Find Us"
          title="Visit Our Office"
          subtitle="Our headquarters are located in Dubai, UAE."
          className="mb-12"
        />
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[380px] md:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            {mapLoaded ? (
              <iframe
                title="Shams Al Barakat Exhibitions Location"
                src="https://www.google.com/maps?q=Arabilla+Building,+15C+Street,+Hor+Al+Anz+East,+Dubai,+UAE&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                onClick={() => setMapLoaded(true)}
                className="group relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#822168]/20 via-[#a7a9c6]/30 to-[#002e5d]/20"
              >
                <span className="flex flex-col items-center gap-3 rounded-2xl bg-white/90 backdrop-blur px-8 py-6 shadow-lg group-hover:bg-white transition-colors">
                  <MapPin className="w-8 h-8 text-[#822168]" />
                  <span className="text-sm font-semibold text-gray-800">
                    Click to load map
                  </span>
                </span>
              </button>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://maps.app.goo.gl/Luj85duGsPQ88YvU6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#822168] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#822168] hover:bg-[#822168] hover:text-white transition-colors"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="px-6 md:px-10 py-16 lg:py-24">
        <SectionHeading
          kicker="Why Contact Us"
          title="How We Can Help"
          className="mb-14"
        />
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyContactUs.map((item, index) => (
            <FeatureCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#822168] to-[#5f1750] px-6 md:px-10 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Ready to Build Your Next Landmark Event?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/80 mb-10">
            Let's discuss how we can create unforgettable experiences
            together.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#822168] shadow-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
