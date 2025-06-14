
import { useState } from "react";
import { TabsPanel } from "./TabsPanel";
import { Book } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 border-b bg-white/80 shadow-md relative z-20">
        <div className="flex items-center gap-2">
          <Book size={32} className="text-[#74ACDF]" />
          <span className="text-2xl font-bold tracking-tight text-gray-800">
            Argen<span className="text-[#74ACDF]">Investiga</span>
          </span>
        </div>
        <nav className="flex items-center gap-10">
          <a href="#repository" className="hover:text-[#2886CC] transition-colors font-medium">Repositorio</a>
          <a href="#metrics" className="hover:text-[#2886CC] transition-colors font-medium">Métricas</a>
          <a href="#agenda" className="hover:text-[#2886CC] transition-colors font-medium">Agenda</a>
          <a href="#profiles" className="hover:text-[#2886CC] transition-colors font-medium">Perfiles</a>
        </nav>
        <div>
          <button className="px-4 py-2 bg-[#74ACDF] text-white rounded-lg font-semibold hover:bg-[#2886CC] transition-colors shadow-sm">
            Ingresar
          </button>
        </div>
      </header>
      {/* Main content area */}
      <main className="flex-1 min-h-0 flex flex-col bg-gray-50">
        <TabsPanel />
      </main>
      <footer className="py-2 px-8 bg-white/80 border-t text-right text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ArgenInvestiga. Proyecto demo.
      </footer>
    </div>
  );
}
