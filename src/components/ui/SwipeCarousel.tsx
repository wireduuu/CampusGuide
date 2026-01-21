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
  height = "55vh",
  showControls = true,
  showIndicator = true,
  instantSwitch = false,
}: SwipeCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(true);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const goTo = (newIndex: number) => {
    if (newIndex === index) return;
    setLoaded(false);
    setNextIndex(newIndex);

    // preload next image
    const img = new Image();
    img.src = images[newIndex];
    img.onload = () => {
      setIndex(newIndex);
      setNextIndex(null);
      setLoaded(true);
    };
  };

  const prev = () => goTo(index === 0 ? images.length - 1 : index - 1);
  const next = () => goTo(index === images.length - 1 ? 0 : index + 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full flex items-center justify-center select-none overflow-hidden"
      style={{ height }}
    >
      {/* Blurred previous image */}
      {!loaded && (
        <img
          src={images[index]}
          alt={alt}
          className="absolute w-full h-full object-contain filter blur-sm brightness-75"
        />
      )}

      {/* Blurred next image for preview */}
      {!loaded && nextIndex !== null && (
        <img
          src={images[nextIndex]}
          alt={alt}
          className="absolute w-full h-full object-contain filter blur-lg brightness-50 scale-105 transition-all duration-300"
        />
      )}

      {/* Loader */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="w-full h-auto object-contain cursor-grab active:cursor-grabbing z-10"
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

      {/* Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition z-30"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition z-30"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Indicator */}
      {showIndicator && images.length > 1 && (
        <div className="absolute bottom-3 text-xs text-white/80 z-30">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default SwipeCarousel;
