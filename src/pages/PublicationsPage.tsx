
import { useState } from "react";
import { PublicationFilters } from "@/components/PublicationFilters";
import { PublicationList } from "@/components/PublicationList";

export default function PublicationsPage() {
  // Filters state (lifts up for future sharing with sidebar/topbar)
  const [filters, setFilters] = useState({
    search: "",
    theme: "",
    type: "",
    year: "",
    institution: "",
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto pt-8 pb-12">
      {/* Filter panel on the left for desktop / top for mobile */}
      <aside className="w-full md:max-w-xs md:sticky md:top-8 z-10">
        <PublicationFilters filters={filters} setFilters={setFilters} />
      </aside>
      {/* Publications List */}
      <section className="flex-1">
        <PublicationList filters={filters} />
      </section>
    </div>
  );
}
