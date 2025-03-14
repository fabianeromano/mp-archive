"use client";

import { FilterItem } from "@/app/category/page";
import { Badge } from "@/components/ui/badge";

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
