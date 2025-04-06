// icons
import { Calendar } from "lucide-react";

// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductionStatus {
  name: string;
  value: number;
  color: string;
}

const productionStatuses: ProductionStatus[] = [
  {
    name: "Chưa hoàn thành",
    value: 5,
    color: "#FF8F0D",
  },
  {
    name: "Đang sản xuất",
    value: 6,
    color: "var(--new-blue-500)",
  },
  {
    name: "Hoàn thành",
    value: 5,
    color: "#1FC583",
  },
];

const StatusSummary = ({
  quantity,
  status,
  color,
}: {
  quantity: number;
  status: string;
  color: string;
}) => {
  return (
    <div className="w-full rounded-lg border border-[#DDDDE2] flex flex-col p-2">
      <div className="text-2xl font-semibold" style={{ color }}>
        {quantity}
      </div>
      <div className="text-sm">{status}</div>
    </div>
  );
};

export const ProductionStatuses = () => {
  return (
    <Card className="w-full border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tình hình sản xuất</CardTitle>
          <Select defaultValue="1">
            <SelectTrigger className="w-36 gap-2 bg-transparent">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <SelectValue placeholder="Chọn ngày" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Hôm nay</SelectItem>
              <SelectItem value="2">Hôm nay</SelectItem>
              <SelectItem value="3">Hôm nay</SelectItem>
              <SelectItem value="4">Hôm nay</SelectItem>
              <SelectItem value="5">Hôm nay</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {productionStatuses.map((status) => (
            <StatusSummary
              key={status.name}
              quantity={status.value}
              status={status.name}
              color={status.color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
