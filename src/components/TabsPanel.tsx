
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { PublicationCard } from "./PublicationCard";
import { DashboardStats } from "./DashboardStats";
import { AgendaList } from "./AgendaList";
import { ProfileCard } from "./ProfileCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "repository", label: "Repositorio" },
  { id: "metrics", label: "Métricas" },
  { id: "agenda", label: "Agenda Académica" },
  { id: "profiles", label: "Perfiles" },
];

export function TabsPanel() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col mt-10">
      {/* Tabs */}
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 text-lg font-medium -mb-[2px] border-b-2 transition-all duration-200 focus:outline-none",
              activeTab === tab.id
                ? "border-[#74ACDF] text-[#2886CC] bg-white shadow-sm"
                : "border-transparent text-gray-600 hover:text-[#2886CC] bg-transparent"
            )}
            id={tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Animated panel transition */}
      <div
        key={activeTab}
        className="animate-fade-in"
      >
        {activeTab === "repository" && (
          <div>
            <SearchBar placeholder="Buscar publicaciones, autores, instituciones..." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Example/mock publication cards */}
              <PublicationCard
                title='La ciencia argentina en el siglo XXI'
                authors={["Juan Pérez", "Ana Gómez"]}
                institution="CONICET"
                year={2023}
                type="Artículo"
                url="#"
              />
              <PublicationCard
                title='Innovación en políticas públicas: desafíos y oportunidades'
                authors={["María Fernández"]}
                institution="UBA"
                year={2022}
                type="Informe"
                url="#"
              />
              <PublicationCard
                title='Estudios sobre economía regional argentina'
                authors={["Carlos Díaz"]}
                institution="UNLP"
                year={2024}
                type="Tesis Doctoral"
                url="#"
              />
            </div>
            <div className="text-right text-xs text-gray-400 mt-4">
              * Resultados de muestra. La integración con repositorios institucionales se habilitará al conectar Supabase.
            </div>
          </div>
        )}
        {activeTab === "metrics" && (
          <div>
            <DashboardStats />
            <div className="text-right text-xs text-gray-400 mt-4">
              * Las métricas se calcularán automáticamente sobre publicaciones indexadas.
            </div>
          </div>
        )}
        {activeTab === "agenda" && (
          <div>
            <AgendaList />
            <div className="text-right text-xs text-gray-400 mt-4">
              * Ejemplo de eventos y convocatorias. Automatización de scraping/próximamente.
            </div>
          </div>
        )}
        {activeTab === "profiles" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfileCard
              name="Universidad de Buenos Aires"
              type="Universidad"
              description="Principal institución académica de Argentina, líder en investigación."
              metrics={{ publicaciones: 1340, citas: 18920, autores: 900 }}
            />
            <ProfileCard
              name="CONICET"
              type="Organismo"
              description="Consejo Nacional de Investigaciones Científicas y Técnicas."
              metrics={{ publicaciones: 2860, citas: 43350, autores: 1900 }}
            />
            <ProfileCard
              name="Dra. Ana Gómez"
              type="Investigadora"
              description="Especialista en políticas públicas y publicaciones en revistas indexadas."
              metrics={{ publicaciones: 47, citas: 580, afiliación: "UBA" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
