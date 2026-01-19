import essentials from "./../../data/essentials";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../ui/ImageModal";

type ActiveItem = {
  images: string[];
  title: string;
  description: string;
};

const EssentialsSection = () => {
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  return (
    <section id="essentials" className="scroll-mt-20 px-4 py-16 bg-gradient-to-b from-accent/30 to-background">
       <div className="max-w-6xl mx-auto">
        <h2 className="section-title font-semibold mb-4">
          Places Every Fresher Must Know
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {essentials.map((place) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              onClick={() =>
                setActiveItem({
                  images: place.images,
                  title: place.name,
                  description: place.description,
                })
              }
              className="relative h-32 sm:h-36 rounded-lg overflow-hidden
                        shadow-sm group cursor-pointer"
            >
              {/* Image */}
              <img
                src={place.images[0]}
                alt={place.name}
                className="absolute inset-0 h-full w-full object-cover
                          transition-transform duration-300
                          group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.webp";
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b
                          from-black/30 via-black/50 to-black/90
                          group-hover:from-black/20
                          group-hover:to-black/80 transition"
              />

              {/* Title */}
              <div className="relative z-10 h-full flex items-end p-2">
                <p className="text-white text-sm font-semibold leading-tight">
                  {place.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Image Carousel Modal */}
        {activeItem && (
          <ImageModal
            key={activeItem.title} 
            isOpen
            images={activeItem.images}
            title={activeItem.title}
            description={activeItem.description}
            onClose={() => setActiveItem(null)}
          />
        )}
      </div>
    </section>
  );
};

export default EssentialsSection;
