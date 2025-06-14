
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useSupabaseQuery } from "./hooks/useSupabaseQuery";

type Filters = {
  search: string;
  theme: string;
  type: string;
  year: string;
  institution: string;
};

export function PublicationFilters({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  // Fetch filter options (themes, institutions, years/types from publications)
  const { data: themes } = useSupabaseQuery("/themes", []);
  const { data: institutions } = useSupabaseQuery("/institutions", []);
  const { data: yearsTypes, isLoading: yearsLoading } = useSupabaseQuery("/publications?select=year,type", []);

  // Extract unique years/types from publication records
  const years = Array.from(
    new Set((yearsTypes || []).map((p: any) => p.year).filter(Boolean))
  ).sort((a: string, b: string) => b.localeCompare(a));
  const types = Array.from(
    new Set((yearsTypes || []).map((p: any) => p.type).filter(Boolean))
  ).sort();

  // Event handlers
  const handleInput = (field: keyof Filters, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white px-4 py-6 rounded-xl shadow border border-gray-200 flex flex-col gap-4">
      <div>
        <label htmlFor="search" className="block font-semibold text-gray-700 mb-1">
          Buscar
        </label>
        <Input
          id="search"
          placeholder="Título, palabra clave, autor..."
          value={filters.search}
          onChange={e => handleInput("search", e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Tema</label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={filters.theme}
          onChange={e => handleInput("theme", e.target.value)}
        >
          <option value="">Todos</option>
          {themes?.map((t: any) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Tipo</label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={filters.type}
          onChange={e => handleInput("type", e.target.value)}
        >
          <option value="">Todos</option>
          {types.map((t: string) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Año</label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={filters.year}
          onChange={e => handleInput("year", e.target.value)}
        >
          <option value="">Todos</option>
          {years.map((y: string) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Institución</label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={filters.institution}
          onChange={e => handleInput("institution", e.target.value)}
        >
          <option value="">Todas</option>
          {institutions?.map((i: any) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
