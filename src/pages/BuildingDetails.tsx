import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, MapPin } from "lucide-react";
import buildings from "../data/buildings";
import SwipeCarousel from "../components/ui/SwipeCarousel";
import { useEffect } from "react";

const BuildingDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { id } = useParams();
  const buildingId = Number(id);
  const building = buildings.find((b) => b.id === buildingId);

  if (!building) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-sm text-text-muted">Building not found.</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
        >
          <ChevronLeft size={16} />
          Buildings
        </Link>
      </div>
    );
  }

  const images =
    building.images?.map((img) => img.trim()).filter((img) => img.length > 0) ??
    [];
  const safeImages = images.length > 0 ? images : ["/images/placeholder.webp"];

  const allRooms =
    building.roomGroups?.flatMap((group) =>
      group.codes.filter((code) => code.trim() !== ""),
    ) ?? [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 pt-8 pb-16"
    >
      {/* Back */}
      {/* <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 text-sm text-primary"
      >
        <ChevronLeft size={18} />
        Buildings
      </Link> */}

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT — Swipe Carousel */}
        <div className="lg:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-sm h-auto">
            <SwipeCarousel
              images={safeImages}
              alt={building.name}
              height="17rem"
              showControls={true}
              showIndicator={true}
              instantSwitch={true} // snappier, no fade
            />
          </div>
        </div>

        {/* RIGHT — Building Info */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">{building.name}</h1>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="tag">{building.category}</span>

            {building.nearby && (
              <span className="tag bg-accent/20 text-text-primary">
                Near {building.nearby}
              </span>
            )}
          </div>

          <p className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <MapPin size={16} color="#930101" />
            {building.location}
          </p>

          {/* Departments */}
          {building.departments && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2">Departments</h2>
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

          {/* Rooms */}
          {allRooms.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2">Rooms</h2>
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
