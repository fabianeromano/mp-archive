import { Badge } from "../ui/badge";

interface DocumentBadgeProps {
  categories: string[];
}

export default function CategoryBadge({ categories }: DocumentBadgeProps) {
  return (
    <div className="flex gap-1 mt-1">
      {categories.map((item, index) => (
        <Badge
          key={index}
          className="border border-black dark:border-white"
          variant="outline">
          {item}
        </Badge>
      ))}
    </div>
  );
}
