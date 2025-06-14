
import { useMemo } from "react";
import { useSupabaseQuery } from "./hooks/useSupabaseQuery";
import { Book } from "lucide-react";

// Card component for publications
function PublicationCard({ pub }: { pub: any }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col gap-2 hover:shadow-lg transition animate-fade-in">
      <div className="flex items-center gap-2 mb-1">
        <Book className="text-[#74ACDF]" size={22} />
        <span className="text-xs bg-[#E5F3FA] text-[#2886CC] px-2 py-0.5 rounded font-semibold">
          {pub.type}
        </span>
        <span className="ml-auto text-sm text-gray-600">{pub.year}</span>
      </div>
      <a
        href={pub.url}
        className="font-bold text-lg text-[#2886CC] hover:underline"
        target="_blank" rel="noopener noreferrer"
      >
        {pub.title}
      </a>
      <div className="text-sm text-gray-700">
        <span className="font-semibold">Autores: </span>
        {pub.authors?.map((a: any) => a.full_name).join(", ") || "Sin datos"}
      </div>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        <span>
          <span className="font-semibold">Institución:</span> {pub.institution?.name || "Sin datos"}
        </span>
        <span>
          <span className="font-semibold">Tema:</span> {pub.theme?.name || "Sin datos"}
        </span>
      </div>
    </div>
  );
}

export function PublicationList({ filters }: { filters: Record<string, string> }) {
  // Compose query string for Supabase filter
  const queryParams = useMemo(() => {
    // Build query params for each filter
    let qp: string[] = [];
    if (filters.search) {
      // Use ilike for title, abstract, or any author name
      qp.push(`or=(title.ilike.%25${encodeURIComponent(filters.search)}%25,abstract.ilike.%25${encodeURIComponent(filters.search)}%25)`);
    }
    if (filters.theme) qp.push(`theme_id=eq.${filters.theme}`);
    if (filters.type) qp.push(`type=eq.${encodeURIComponent(filters.type)}`);
    if (filters.year) qp.push(`year=eq.${encodeURIComponent(filters.year)}`);
    if (filters.institution) qp.push(`institution_id=eq.${filters.institution}`);
    // Embedded relations for authors, institution, theme
    let query =
      "/publications?select=id,title,year,type,url,theme:theme_id(name),institution:institution_id(name),publication_authors(author:author_id(full_name)),abstract";
    if (qp.length) query += `&${qp.join("&")}`;
    return query;
  }, [filters]);

  // Fetch list
  const { data: pubs, isLoading, error } = useSupabaseQuery(queryParams, []);

  // Merge authors (from publication_authors relation)
  const publications =
    pubs?.map((p: any) => ({
      ...p,
      authors: (p.publication_authors || []).map((pa: any) => pa.author),
    })) || [];

  return (
    <div>
      {isLoading && (
        <div className="text-center text-gray-500 py-8">Cargando publicaciones…</div>
      )}
      {error && (
        <div className="text-center text-red-500 py-8">
          Error cargando publicaciones.
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.length === 0 && (
            <div className="text-center col-span-3 text-gray-500">
              No se encontraron publicaciones.
            </div>
          )}
          {publications.map((pub: any) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>
      )}
    </div>
  );
}
