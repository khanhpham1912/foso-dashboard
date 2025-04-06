import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
            <CardTitle>
              Tình hình sản xuất
            </CardTitle>
          <Button variant="outline" className="h-10 gap-2">
            <Calendar size={16} />
            <span>Tháng</span>
            <ChevronDown size={12} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <></>
      </CardContent>
    </Card>
  );
}
