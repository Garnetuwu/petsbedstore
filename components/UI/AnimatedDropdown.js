import { motion } from "framer-motion";

const AnimatedDropdown = ({ children }) => {
  <motion.div
    className="fixed left-0 right-0 top-12 z-10"
    initial={{ y: -200 }}
    animate={{ y: 0 }}
    exit={{ y: -200 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>;
};

export default AnimatedDropdown;
