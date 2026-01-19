export const highlightMatch = (text: string, query: string) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        className="bg-yellow-300 dark:bg-yellow-600 px-0.5 rounded"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
};
