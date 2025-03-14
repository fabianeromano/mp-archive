"use client";

import { CategoryCard } from "@/components/category/categoryCard";
import { FilterBadges } from "@/components/category/filterBadges";
import { SearchForm } from "@/components/search-form";
import { useDocuments } from "@/hooks/use-documents";
import { FileText, ImageIcon, LibraryBig, Newspaper } from "lucide-react";
import { useState } from "react";

// Tipos y datos constantes
export type FilterItem = {
  id: number;
  icon: React.ReactNode;
  label: string;
};

interface FilterTypeMap {
  [key: number]: string | null;
}

export const filterItems: FilterItem[] = [
  { id: 1, icon: <LibraryBig />, label: "Todos" },
  { id: 2, icon: <ImageIcon />, label: "Fotos" },
  { id: 3, icon: <FileText />, label: "Oraciones" },
  { id: 4, icon: <FileText />, label: "Pasajes" },
  { id: 5, icon: <Newspaper />, label: "Revistas" },
];

// Mapeo de IDs de filtro a los tipos exactos de documento
const filterTypeMap: FilterTypeMap = {
  1: null, // "Todos" - no filtra por tipo
  2: "fotos", // Si es que tienes este tipo, si no, ajustarlo
  3: "oraciones",
  4: "pasajes",
  5: "revistas",
};

export default function Page() {
  const { documents } = useDocuments();
  const [selectedFilter, setSelectedFilter] = useState<number>(1);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterClick = (filterId: number): void => {
    setSelectedFilter(filterId);
    // Aquí podrías añadir lógica adicional para filtrar contenido
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  };

  // Filtrar documentos según el filtro seleccionado y la búsqueda
  const filteredDocuments = documents.filter((doc) => {
    // Primero aplicamos el filtro de tipo
    const passesTypeFilter =
      selectedFilter === 1 || doc.type === filterTypeMap[selectedFilter];

    // Si no pasa el filtro de tipo, no seguimos
    if (!passesTypeFilter) return false;

    // Si no hay búsqueda, mostramos el documento
    if (!searchQuery.trim()) return true;

    // Si hay búsqueda, comprobamos si coincide con título, descripción, etc.
    const searchLower = searchQuery.toLowerCase();

    // Ajusta estos campos según la estructura real de tus documentos
    return (
      (doc.title && doc.title.toLowerCase().includes(searchLower)) ||
      (doc.author && doc.author.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <FilterBadges
        filterItems={filterItems}
        selectedFilter={selectedFilter}
        onFilterClick={handleFilterClick}
      />
      <div className="w-full px-3">
        <p className="text-base font-medium dark:text-gray-200">
          Se encontraron {filteredDocuments.length} resultado(s)
        </p>
      </div>
      <section className="p-3 w-full">
        <CategoryCard documents={filteredDocuments} />
      </section>
    </div>
  );
}
