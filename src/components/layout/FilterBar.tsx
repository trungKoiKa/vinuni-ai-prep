import React from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
  options: { value: string; label: string }[];
  selected: string;
  onSelectedChange: (value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  searchPlaceholder,
  options,
  selected,
  onSelectedChange,
}) => (
  <Card className="py-4">
    <CardContent className="px-4 flex flex-wrap items-center justify-between gap-4">
      <div className="relative flex-1 min-w-60">
        <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>

      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        spacing={1.5}
        className="overflow-x-auto"
        value={selected}
        onValueChange={(value) => value && onSelectedChange(value)}
      >
        {options.map((opt) => (
          <ToggleGroupItem
            key={opt.value}
            value={opt.value}
            className="text-xs font-semibold data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
          >
            {opt.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </CardContent>
  </Card>
);
