import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

export const DaySelect = ({
  options,
}: {
  options: { label: string; value: string }[];
}) => {
  return (
    <Select defaultValue="1">
      <SelectTrigger className="w-36 gap-2 bg-transparent">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-neutral-400" />
          <SelectValue placeholder="Chọn ngày" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
