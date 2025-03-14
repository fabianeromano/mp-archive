import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({
  onSearch,
  ...props
}: React.ComponentProps<"form"> & { onSearch: (query: string) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    onSearch(searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <SidebarGroup className="py-2">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Buscar
          </Label>
          <SidebarInput
            id="search"
            name="search"
            placeholder="Buscar documento..."
            className="pl-8"
            onChange={handleChange}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
