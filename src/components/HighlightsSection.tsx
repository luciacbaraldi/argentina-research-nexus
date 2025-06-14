
import { useSupabaseQuery } from "./hooks/useSupabaseQuery";

export default function HighlightsSection() {
  // Últimas publicaciones cargadas (5 most recent)
  const { data: pubs } = useSupabaseQuery(
    "/publications?select=id,title,year,institution:institution_id(name)&order=created_at.desc&limit=5"
  );
  // Top 3 universidades (institutions with the highest number of publications)
  const { data: topInstitutions } = useSupabaseQuery(
    "/institutions?select=id,name,publications(count)&order=publications.count.desc&limit=3"
  );
  // Temas más activos (most frequent themes)
  const { data: activeThemes } = useSupabaseQuery(
    "/themes?select=id,name,publications(count)&order=publications.count.desc&limit=3"
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Últimas publicaciones cargadas */}
      <div className="bg-card rounded-lg shadow p-5 flex flex-col">
        <h3 className="font-semibold text-base mb-3 text-primary">Últimas publicaciones cargadas</h3>
        <ul className="flex flex-col gap-2">
          {pubs?.length ? pubs.map((p: any) => (
            <li key={p.id} className="text-sm">
              <span className="font-medium">{p.title}</span>
              <span className="text-xs text-gray-400 ml-1">({p.year})</span>
              <span className="block text-xs text-gray-500">{p.institution?.name}</span>
            </li>
          )) :
            <span className="text-xs text-gray-400">No hay publicaciones.</span>}
        </ul>
      </div>
      {/* Top 3 universidades */}
      <div className="bg-card rounded-lg shadow p-5 flex flex-col">
        <h3 className="font-semibold text-base mb-3 text-primary">Top 3 universidades</h3>
        <ul className="flex flex-col gap-2">
          {topInstitutions?.length ? topInstitutions.map((i: any) => (
            <li key={i.id} className="text-sm flex justify-between">
              <span>{i.name}</span>
              <span className="ml-2 font-mono text-xs text-gray-500">{i.publications?.length || 0}</span>
            </li>
          )) :
            <span className="text-xs text-gray-400">Sin datos.</span>
          }
        </ul>
      </div>
      {/* Temas más activos */}
      <div className="bg-card rounded-lg shadow p-5 flex flex-col">
        <h3 className="font-semibold text-base mb-3 text-primary">Temas más activos</h3>
        <ul className="flex flex-col gap-2">
          {activeThemes?.length ? activeThemes.map((t: any) => (
            <li key={t.id} className="flex justify-between text-sm">
              <span>{t.name}</span>
              <span className="ml-2 font-mono text-xs text-gray-500">{t.publications?.length || 0}</span>
            </li>
          )) :
            <span className="text-xs text-gray-400">Sin datos.</span>
          }
        </ul>
      </div>
    </div>
  );
}
