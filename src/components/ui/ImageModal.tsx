import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <AnimatePresence>
      {isOpen && (
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
                       overflow-hidden shadow-xl"
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

            {/* Carousel */}
            <div className="relative w-full h-[55vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 bg-black/40
                               text-white rounded-full p-2
                               hover:bg-black/60 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-3 bg-black/40
                               text-white rounded-full p-2
                               hover:bg-black/60 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">
                {title}
              </h3>

              {description && (
                <p className="text-sm text-text-muted leading-relaxed">
                  {description}
                </p>
              )}

              {images.length > 1 && (
                <p className="mt-2 text-xs text-text-muted">
                  Image {index + 1} of {images.length}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
