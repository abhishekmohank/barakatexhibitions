import { motion } from "framer-motion";

const TeamCard = ({ member, index, onReadMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="w-full h-72 overflow-hidden bg-gray-100">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: member.imagePosition || "center top" }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-satoshi text-xl font-bold tracking-tight text-gray-900">
          {member.name}
        </h3>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#822168] mt-1 mb-3">
          {member.role}
        </p>
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-5">
          {member.intro}
        </p>
        <button
          onClick={() => onReadMore(member)}
          aria-haspopup="dialog"
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#822168] hover:gap-2 transition-all self-start"
        >
          Read More
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default TeamCard;
