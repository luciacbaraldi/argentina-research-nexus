
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Jornadas de Ciencia Abierta Argentina",
    date: "2024-08-12",
    type: "Conferencia",
    link: "#",
    institution: "CONICET",
  },
  {
    title: "Convocatoria: Becas de Investigación 2025",
    date: "2024-07-01",
    type: "Llamado",
    link: "#",
    institution: "Ministerio de Ciencia",
  },
  {
    title: "Congreso Nacional de Políticas Públicas",
    date: "2024-10-22",
    type: "Evento",
    link: "#",
    institution: "UNSAM",
  },
];

export function AgendaList() {
  return (
    <section className="overflow-x-auto">
      <table className="w-full text-left bg-white rounded-xl shadow border divide-y mt-2">
        <thead>
          <tr className="text-gray-600 uppercase text-xs tracking-wide">
            <th className="py-3 px-4">Fecha</th>
            <th className="py-3 px-4">Evento</th>
            <th className="py-3 px-4">Tipo</th>
            <th className="py-3 px-4">Institución</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {events.map(evt => (
            <tr key={evt.title} className="hover:bg-[#F3FAFF] transition cursor-pointer">
              <td className="py-2 px-4 font-mono text-sm">{evt.date}</td>
              <td className="py-2 px-4">{evt.title}</td>
              <td className="py-2 px-4">
                <span className="inline-flex items-center gap-1 bg-[#E5F3FA] text-[#2886CC] px-2 py-0.5 text-xs rounded">
                  <Calendar size={14} /> {evt.type}
                </span>
              </td>
              <td className="py-2 px-4">{evt.institution}</td>
              <td className="py-2 px-4">
                <a
                  href={evt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2886CC] underline hover:text-[#145B8A]"
                >
                  Ver
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
