import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const Toast = ({ show, message, onClose }) => {
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
          <div className="flex-1">{message}</div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 -mr-1 text-text-muted hover:text-text hover:bg-surface-hover transition-colors duration-150 cursor-pointer flex items-center justify-center border border-transparent hover:border-border"
              aria-label="Close notification"
            >
              <FiX size={14} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
