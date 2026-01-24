import { motion, AnimatePresence } from "framer-motion";

type Props = {
  showSuccess: boolean;
  showError: boolean;
};

const ContactAlerts = ({ showSuccess, showError }: Props) => (
  <>
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-[10000] bg-status-success text-white px-6 py-3 rounded-full shadow-xl"
        >
          Request Submitted Successfully!
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-[10000] bg-status-error text-white px-6 py-3 rounded-full shadow-xl"
        >
          Failed to submit. Please try again.
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default ContactAlerts;
