import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, to, href, external, index = 0 }) => {
  const content = (
    <>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#822168]/10 text-[#822168] mb-5 transition-colors duration-300 group-hover:bg-[#822168] group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-satoshi text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      {(to || href) && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#822168] group-hover:gap-2 transition-all">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const cardClasses =
    "group flex flex-col items-center text-center h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#822168]/30 transition-all duration-300";

  const wrapper = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      {to ? (
        <Link to={to} className={cardClasses}>
          {content}
        </Link>
      ) : href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={cardClasses}
        >
          {content}
        </a>
      ) : (
        <div className={cardClasses}>{content}</div>
      )}
    </motion.div>
  );

  return wrapper;
};

export default FeatureCard;
