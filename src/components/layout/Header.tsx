import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import type { Building } from "../../types/building";

type HeaderProps = {
  buildings: Building[];
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSelect: (building: Building) => void;
};

const Header = ({
  buildings,
  searchQuery,
  setSearchQuery,
  onSelect,
}: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  // Filter results safely
  const results =
    searchQuery.trim() === ""
      ? []
      : buildings.filter((b) => {
          const searchableText = [
            b.name,
            b.category,
            b.location,
            b.nearby,
            ...(b.departments ?? []),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchableText.includes(
            searchQuery.toLowerCase()
          );
        });

  return (
    <header className="bg-background border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-[4rem] flex items-center justify-between relative">
        {/* Logo / Title */}
        <span className="text-sm font-semibold text-primary">
          FEN Campus Guide
        </span>

        {/* Search */}
        <div className="relative">
          {!searchOpen && (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              <Search size={20} className="text-gray-500" />
            </button>
          )}

          {searchOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 z-50">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search lecture hall, department, building…"
                  className="input pl-10 pr-10 w-full text-sm"
                />

                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Results */}
              {results.length > 0 && (
                <ul className="mt-2 bg-white border rounded-md shadow-sm max-h-64 overflow-y-auto">
                  {results.map((b) => (
                    <li
                      key={b.id}
                      onClick={() => {
                        onSelect(b);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="font-medium">
                        {b.name}
                      </div>
                      {b.departments && (
                        <div className="text-xs text-gray-500">
                          {b.departments.join(", ")}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {searchQuery && results.length === 0 && (
                <div className="mt-2 px-3 py-2 text-sm text-gray-500">
                  No results found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
