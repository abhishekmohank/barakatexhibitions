import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const ContactCard = ({ icon, label, value, href, external, copyValue, index = 0 }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#822168]/5 transition-colors duration-300"
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#822168]/10 text-[#822168] shrink-0 transition-colors duration-300 group-hover:bg-[#822168] group-hover:text-white">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="text-sm font-medium text-gray-800 hover:text-[#822168] transition-colors break-words"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-gray-800 break-words">{value}</p>
        )}
      </div>
      {copyValue && (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="shrink-0 text-gray-400 hover:text-[#822168] transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      )}
    </motion.div>
  );
};

export default ContactCard;
