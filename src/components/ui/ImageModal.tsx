import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SwipeCarousel from "./SwipeCarousel";

type ImageModalProps = {
  isOpen: boolean;
  images: string[];
  title: string;
  description?: string;
  onClose: () => void;
};

const ImageModal = ({
  isOpen,
  images,
  title,
  description,
  onClose,
}: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/80
                   flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="relative bg-surface rounded-xl
                     overflow-hidden shadow-xl w-full max-w-5xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20
                       text-white bg-black/40 rounded-full p-1
                       hover:bg-black/60 transition"
          >
            <X size={18} />
          </button>

          {/* Swipe Carousel */}
          <SwipeCarousel images={images} alt={title} height="auto" />

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold mb-1">{title}</h3>

            {description && (
              <p className="text-sm text-text-muted leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
