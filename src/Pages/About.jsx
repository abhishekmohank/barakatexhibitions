import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import team from "../constants/team";
import coreValues from "../constants/coreValues";
import whyChooseUs from "../constants/whyChooseUs";
import TeamCard from "../Components/About/TeamCard";
import BioModal from "../Components/About/BioModal";

import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import StarIcon from "@heroicons/react/24/outline/StarIcon";
import ShieldCheckIcon from "@heroicons/react/24/outline/ShieldCheckIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import FlagIcon from "@heroicons/react/24/outline/FlagIcon";
import SparklesIcon from "@heroicons/react/24/outline/SparklesIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/outline/ClipboardDocumentListIcon";
import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import BuildingOffice2Icon from "@heroicons/react/24/outline/BuildingOffice2Icon";

const iconMap = {
  LightBulbIcon,
  StarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
  FlagIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  TicketIcon,
  BuildingOffice2Icon,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="min-h-screen">
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

        <div className="relative px-6 md:px-10 pt-16 pb-16 md:pt-24 md:pb-20">
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
                Who We Are
              </p>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[#822168]"
              />
            </div>
            <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              About Shams Al Barakat Exhibitions
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-600">
              Delivering world-class exhibitions, destination retail
              experiences, and international events across the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
              Our Story
            </p>
            <h2 className="font-satoshi text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="max-w-[700px] space-y-6"
          >
            <p className="text-base lg:text-lg leading-loose text-gray-600 text-justify hyphens-auto">
              Shams Al Barakat Exhibitions LLC is a{" "}
              <strong className="text-gray-900 font-semibold">
                renowned company
              </strong>{" "}
              in the exhibition industry, known for its expertise in
              organizing and managing{" "}
              <strong className="text-gray-900 font-semibold">
                top-tier exhibitions and trade shows
              </strong>
              . With a strong commitment to excellence and professionalism,
              Shams Al Barakat Exhibitions has established itself as a strong
              player in the field. Shams Al Barakat Exhibitions has been at
              the forefront of the exhibition industry for several years.
            </p>
            <p className="text-base lg:text-lg leading-loose text-gray-600 text-justify hyphens-auto">
              Our focus is on providing a platform for retail businesses to
              showcase their offerings, engage with customers, and expand
              their market presence through exhibitions and trade shows in
              the UAE and other Countries. We place great importance on
              creating immersive and impactful experiences that resonate
              with visitors long after the event. At Shams Al Barakat
              Exhibitions, we take pride in our{" "}
              <strong className="text-gray-900 font-semibold">
                meticulous attention to detail
              </strong>{" "}
              and our ability to customize each event to align with the
              unique goals and requirements of our exhibitors and partners.
              Our seasoned team collaborates closely with exhibitors to
              ensure{" "}
              <strong className="text-gray-900 font-semibold">
                flawless execution
              </strong>{" "}
              and successful outcomes. Leveraging our extensive industry
              network and in-depth market insights, Shams Al Barakat
              Exhibitions designs exhibitions and events that attract a{" "}
              <strong className="text-gray-900 font-semibold">
                diverse audience
              </strong>{" "}
              and foster valuable business connections. Our ultimate goal is
              to provide a platform where exhibitors can engage with end
              users and drive business growth effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-10 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#822168]/20 via-transparent to-[#002e5d]/40"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#822168]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-12 md:px-12 md:py-16 shadow-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c98bb3] mb-3">
            Where We're Headed
          </p>
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Our Vision
          </h2>
          <p className="text-base lg:text-lg leading-loose text-gray-300 text-justify hyphens-auto">
            To be a leading organizer of world-class pavilions, destination retail experiences, and cultural events across the GCC, recognized for innovation, quality, and excellence. 
            We aim to create vibrant destinations that connect businesses, entrepreneurs, and communities while delivering memorable experiences for visitors. Through creative planning, seamless execution, 
            and a commitment to continuous growth, we strive to set new standards in pavilion development, event management, and destination experiences, creating lasting value for our clients, partners, and stakeholders.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-white px-6 md:px-10 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#822168]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#002e5d]/10 blur-3xl"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#822168]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#822168]">
              What Drives Us Every Day
            </p>
            <span className="h-px w-8 bg-[#822168]" />
          </div>
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-base lg:text-lg leading-loose text-gray-600 text-justify hyphens-auto">
            To empower exhibitors, retail businesses, and partners with
            world-class platforms to showcase their products and services,
            connect with diverse audiences, and expand their market presence
            across the UAE, Saudi Arabia (KSA), Kuwait, and the wider GCC. We
            are committed to meticulous planning, flawless execution, and
            creating immersive experiences that foster lasting business
            relationships through innovation, integrity, and excellence in
            everything we do.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="px-6 md:px-10 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            What Drives Us
          </p>
          <h2 className="font-satoshi text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Our Core Values
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#822168]/10 text-[#822168] mb-4">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-satoshi text-base font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-slate-50 px-6 md:px-10 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            The People Behind It
          </p>
          <h2 className="font-satoshi text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Meet the Team
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              onReadMore={setActiveMember}
            />
          ))}
        </div>
      </section>

      <BioModal member={activeMember} onClose={() => setActiveMember(null)} />

      {/* Why Choose Us */}
      <section className="px-6 md:px-10 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#822168] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-satoshi text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="flex flex-col p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#822168]/10 text-[#822168] mb-4">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-satoshi text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#822168] to-[#5f1750] px-6 md:px-10 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <h2 className="font-satoshi text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Ready to Create Your Next Landmark Event?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/80 mb-10">
            Let's build unforgettable exhibition experiences together.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#822168] shadow-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      <div className="bg-[#002e5d] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default About;
