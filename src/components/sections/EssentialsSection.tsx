import essentials from "./../../data/essentials";

const EssentialsSection = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">
        Places Every Fresher Must Know
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {essentials.map(place => (
          <div
            key={place.id}
            className="bg-white rounded-lg shadow-sm p-4 text-center"
          >
            <p className="font-medium text-sm">
              {place.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EssentialsSection;
