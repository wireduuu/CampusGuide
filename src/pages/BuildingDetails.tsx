import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import buildings from "../data/buildings";

const BuildingDetail = () => {
  const { id } = useParams();
  const buildingId = Number(id);
  const building = buildings.find((b) => b.id === buildingId);

  const [activeImage, setActiveImage] = useState(0);

  if (!building) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-sm text-text-muted">Building not found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
        >
          <ChevronLeft size={16} />
          Back to buildings
        </Link>
      </div>
    );
  }

  const images =
    building.images?.length > 0
      ? building.images
      : ["/images/placeholder.webp"];

  const allRooms =
    building.roomGroups?.flatMap(group =>
      group.codes.filter(code => code.trim() !== "")
    ) ?? [];

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      {/* Back */}
      <Link
        to="/#buildings"
        className="inline-flex items-center gap-2 mb-6 text-sm text-primary"
      >
        <ChevronLeft size={18} />
        Back to buildings
      </Link>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT — Image Carousel */}
        <div className="lg:w-1/2">
          <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-sm">
            <img
              src={images[activeImage]}
              alt={building.name}
              onError={(e) =>
                (e.currentTarget.src = "/images/placeholder.webp")
              }
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* RIGHT — Building Info */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">
            {building.name}
          </h1>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="tag">{building.category}</span>

            {building.nearby && (
              <span className="tag bg-accent/20 text-text-primary">
                Near {building.nearby}
              </span>
            )}
          </div>

          <p className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <MapPin size={16} />
            {building.location}
          </p>

          {/* Optional Description */}
          {/* {building.description && (
            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              {building.description}
            </p>
          )} */}

          {building.departments && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">
                Departments / Offices
              </h2>
              <div className="flex flex-wrap gap-2">
                {building.departments.map((dep) => (
                  <span
                    key={dep}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          )}

          {allRooms.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2">
                Rooms
              </h2>

              <div className="flex flex-wrap gap-2">
                {allRooms.map((code) => (
                  <span
                    key={code}
                    className="text-xs px-3 py-1 rounded border bg-primary/10"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default BuildingDetail;
