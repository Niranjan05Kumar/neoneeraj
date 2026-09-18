import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 px-4 py-3 bg-surface border border-border text-text shadow-xl z-50 flex items-center gap-3 font-mono text-xs"
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
