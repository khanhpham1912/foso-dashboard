import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
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
  description: string;
}

const productionStatuses: ProductionStatus[] = [
  {
    name: "Cow & Gate premium",
    value: 30,
    color: "#FF8F0D",
    description: "Cow & Gate premium",
  },
  {
    name: "Cow & Gate premium",
    value: 40,
    color: "#0375FF",
    description: "Cow & Gate premium",
  },
  {
    name: "Cow & Gate premium",
    value: 30,
    color: "#1FC583",
    description: "Cow & Gate premium",
  },
];

export function ProductionStatuses() {
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
        <></>
      </CardContent>
    </Card>
  );
}
