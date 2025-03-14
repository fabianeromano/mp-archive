"use client";

import { Badge } from "@/components/ui/badge";

// Definimos el tipo FilterItem aquí para evitar dependencias circulares
interface FilterItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  type: string | null;
}

type FilterBadgesProps = {
  filterItems: FilterItem[];
  selectedFilter: number;
  onFilterClick: (filterId: number) => void;
};

export function FilterBadges({
  filterItems,
  selectedFilter,
  onFilterClick,
}: FilterBadgesProps) {
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-2 py-2">
      {filterItems.map((item) => (
        <Badge
          key={item.id}
          className={`gap-1 cursor-pointer transition-colors ${
            selectedFilter === item.id
              ? "bg-primary"
              : "bg-primary/70 hover:bg-primary"
          }`}
          onClick={() => onFilterClick(item.id)}>
          {item.icon}
          {item.label}
        </Badge>
      ))}
    </section>
  );
}
