
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HighlightsSection from "@/components/HighlightsSection";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleExplore = () => {
    if (query.trim().length === 0) {
      navigate("/explore");
    } else {
      navigate(`/explore?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleExplore();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-georgia">
      {/* Hero section styled like the reference image */}
      <header className="flex flex-col items-center justify-center pt-16 pb-10 px-4">
        <div className="w-full max-w-2xl flex items-center gap-4 mb-6">
          <span className="rounded-md bg-[#eaf4fb] flex items-center justify-center p-2">
            {/* Lucide BookText icon as a minimalist book */}
            <BookText size={40} strokeWidth={2.2} className="text-[#74ACDF]" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-end leading-tight" style={{letterSpacing: "-1px"}}>
            <span className="text-primary mr-1">Argen</span>
            <span className="text-[#74ACDF]">Investiga</span>
          </h1>
        </div>
        <h2 className="text-lg md:text-xl font-medium mb-3 text-gray-700 max-w-2xl text-center">
          Una plataforma colaborativa para descubrir, cuantificar y explorar toda la producción académica sobre Argentina.
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Reunimos investigaciones de universidades, think tanks y organizaciones de la sociedad civil para hacerlas visibles, accesibles y comparables.
        </p>
      </header>

      {/* Central explorer button + search */}
      <section className="flex flex-col items-center gap-4 pb-14">
        <Button size="lg" className="text-lg px-7 py-4 font-semibold flex items-center gap-2" onClick={handleExplore}>
          <Search />
          Explorar publicaciones
        </Button>
        <div className="w-full max-w-md relative">
          <Input
            className="pr-12 h-12 text-lg rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-200"
            type="text"
            placeholder="Buscar por título, autor, palabra clave..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Buscar publicaciones"
            autoFocus
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Search />
          </span>
        </div>
      </section>

      {/* Highlight section */}
      <section className="px-2 pb-16">
        <HighlightsSection />
      </section>

      {/* Footer */}
      <footer className="mt-auto py-4 px-2 border-t bg-card text-center text-sm text-muted-foreground flex flex-col md:flex-row gap-2 justify-center items-center">
        <a href="/about" className="mx-2 hover:underline">Sobre el proyecto</a>
        <span className="hidden md:inline">·</span>
        <a href="/contribute" className="mx-2 hover:underline">Cómo contribuir</a>
        <span className="hidden md:inline">·</span>
        <a href="/contact" className="mx-2 hover:underline">Contacto</a>
      </footer>
    </div>
  );
}
