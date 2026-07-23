import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-[#822168] text-white shadow-lg hover:bg-[#6d1b56] hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-[#822168]",
  light: "bg-white text-[#822168] shadow-lg hover:bg-gray-100",
};

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block" {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className="inline-block" {...props}>
      {content}
    </button>
  );
};

export default Button;
