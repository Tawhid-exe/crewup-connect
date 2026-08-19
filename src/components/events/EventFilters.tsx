import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories, cities } from "@/data/crewup";

interface EventFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  city: string;
  onCityChange: (value: string) => void;
}

export function EventFilters({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  city,
  onCityChange,
}: EventFiltersProps) {
  return (
    <div className="panel space-y-5 p-5">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search events, causes or organizations"
          className="h-11 pl-9"
        />
      </div>

      <FilterRow
        label="Interest"
        options={["All", ...categories]}
        selected={category}
        onSelect={onCategoryChange}
      />
      <FilterRow label="Location" options={["All", ...cities]} selected={city} onSelect={onCityChange} />
    </div>
  );
}

function FilterRow({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            size="sm"
            variant={selected === option ? "mint" : "soft"}
            onClick={() => onSelect(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}