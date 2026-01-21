import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const swipeConfidenceThreshold = 8000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

type SwipeCarouselProps = {
  images: string[];
  alt: string;
  height?: string;
  showControls?: boolean;
  showIndicator?: boolean;
  instantSwitch?: boolean;
};

const SwipeCarousel = ({
  images,
  alt,
  height = "auto",
  showControls = true,
  showIndicator = true,
  instantSwitch = false,
}: SwipeCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(true); // image loaded state

  const prev = () => {
    setLoaded(false);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = () => {
    setLoaded(false);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full flex items-center justify-center select-none"
      style={{ height }}
    >
      {/* Loader */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="w-full h-auto object-contain cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          initial={instantSwitch ? {} : { opacity: 0, x: 40 }}
          animate={instantSwitch ? {} : { opacity: 1, x: 0 }}
          exit={instantSwitch ? {} : { opacity: 0, x: -40 }}
          transition={{ duration: instantSwitch ? 0 : 0.18 }}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) next();
            if (swipe > swipeConfidenceThreshold) prev();
          }}
        />
      </AnimatePresence>

      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showIndicator && images.length > 1 && (
        <div className="absolute bottom-3 text-xs text-white/80">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default SwipeCarousel;
