
import { Book } from "lucide-react";

export function PublicationCard({
  title,
  authors,
  institution,
  year,
  type,
  url
}: {
  title: string,
  authors: string[],
  institution: string,
  year: number,
  type: string,
  url: string
}) {
  return (
    <a
      href={url}
      className="block bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-lg transition-all duration-200 cursor-pointer group animate-fade-in"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-3 mb-3">
        <Book className="text-[#74ACDF] group-hover:scale-110 transition-transform" size={28} />
        <span className="bg-[#E5F3FA] text-[#2886CC] px-2 py-1 text-xs rounded shadow-sm font-semibold">
          {type}
        </span>
        <span className="ml-auto text-sm text-gray-500">{year}</span>
      </div>
      <h3 className="font-bold text-lg mb-2 group-hover:text-[#2886CC] transition-colors">{title}</h3>
      <div className="text-sm text-gray-700 mb-1 truncate">
        <span className="font-medium">Autores:</span> {authors.join(", ")}
      </div>
      <div className="text-sm text-gray-500">
        <span className="font-medium">Institución:</span> {institution}
      </div>
    </a>
  );
}
