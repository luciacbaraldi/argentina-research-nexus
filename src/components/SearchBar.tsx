
import { useState } from "react";
import { Search } from "lucide-react";

export function SearchBar({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        className="w-full px-5 py-3 border rounded-lg shadow-sm bg-white pr-16 focus:ring-2 focus:ring-[#74ACDF] text-lg transition-all"
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        disabled
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
        <Search />
      </span>
      <span className="absolute right-4 top-full mt-1 text-xs text-gray-400 select-none">
        (La búsqueda se habilitará pronto)
      </span>
    </div>
  );
}
