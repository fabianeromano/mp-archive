"use client";

import { useState } from "react";
import { FileText, ImageIcon, LibraryBig, Newspaper } from "lucide-react";

import { CategoryCard } from "@/components/category/categoryCard";
import { FilterBadges } from "@/components/category/filterBadges";
import { SearchForm } from "@/components/search-form";
import { useDocuments } from "@/hooks/use-documents";

// Tipos
type DocumentType = "fotos" | "oraciones" | "pasajes" | "revistas" | null;

interface FilterItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  type: DocumentType;
}

interface Document {
  id: string;
  title?: string;
  author?: string;
  type: DocumentType;
  // Añade aquí otros campos que tenga tu documento
}

export default function DocumentsPage() {
  const { documents } = useDocuments();
  const [selectedFilter, setSelectedFilter] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Definición de filtros con sus tipos asociados
  const filterItems: FilterItem[] = [
    { id: 1, icon: <LibraryBig />, label: "Todos", type: null },
    { id: 2, icon: <ImageIcon />, label: "Fotos", type: "fotos" },
    { id: 3, icon: <FileText />, label: "Oraciones", type: "oraciones" },
    { id: 4, icon: <FileText />, label: "Pasajes", type: "pasajes" },
    { id: 5, icon: <Newspaper />, label: "Revistas", type: "revistas" },
  ];

  const handleFilterClick = (filterId: number): void => {
    setSelectedFilter(filterId);
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  };

  // Obtener el tipo de filtro actual
  const getCurrentFilterType = (): DocumentType => {
    const currentFilter = filterItems.find(
      (item) => item.id === selectedFilter
    );
    return currentFilter ? currentFilter.type : null;
  };

  // Filtrar documentos según el filtro seleccionado y la búsqueda
  const filteredDocuments = documents.filter((doc: Document) => {
    // Aplicar filtro por tipo
    const currentFilterType = getCurrentFilterType();
    const passesTypeFilter =
      currentFilterType === null || doc.type === currentFilterType;

    if (!passesTypeFilter) return false;

    // Si no hay búsqueda, mostrar el documento
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return true;

    // Buscar en título y autor
    const searchLower = trimmedQuery.toLowerCase();
    return (
      doc.title?.toLowerCase().includes(searchLower) ||
      false ||
      doc.author?.toLowerCase().includes(searchLower) ||
      false
    );
  });

  return (
    <div className="flex flex-col space-y-4">
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
