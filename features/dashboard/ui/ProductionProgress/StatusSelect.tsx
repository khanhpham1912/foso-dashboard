import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StatusSelect = ({
  options,
}: {
  options: { label: string; value: string }[];
}) => {
  return (
    <Select defaultValue="1">
      <SelectTrigger className="w-36 gap-2 bg-transparent">
        <SelectValue placeholder="Chọn trạng thái" />
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
