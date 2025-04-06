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
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarRadiusAxis,
  Label,
  RadialBar,
  Tooltip,
} from "recharts";

// models
import { ProductionStatus, SummaryData } from "../models";

const StatusSummary = ({
  quantity,
  status,
  color,
}: {
  quantity: number | undefined;
  status: string;
  color: string;
}) => {
  return (
    <div className="w-full rounded-lg border border-[#DDDDE2] flex flex-col p-2">
      <div className="text-2xl font-semibold" style={{ color }}>
        {quantity || 0}
      </div>
      <div className="text-sm">{status}</div>
    </div>
  );
};

const skeletonData = [
  {
    incomplete: 5,
    inProgress: 5,
    completed: 5,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce(
      (sum: number, item: any) => sum + item.value,
      0
    );

    return (
      <div className="flex flex-col bg-white rounded-lg gap-2 p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 rounded-xl bg-[#FF8F0D]" />
          <span className="text-neutral-700">
            Chưa hoàn thành: {((payload[0].value / total) * 100).toFixed(0)}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-2 rounded-xl bg-new-blue-500" />
          <span className="text-neutral-700">
            Đang sản xuất: {((payload[1].value / total) * 100).toFixed(0)}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-2 rounded-xl bg-[#1FC5A1]" />
          <span className="text-neutral-700">
            Hoàn thành: {((payload[2].value / total) * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export const ProductionStatuses = ({
  data,
  summaryData,
  isLoading = false,
}: {
  data: ProductionStatus[];
  summaryData: SummaryData[];
  isLoading?: boolean;
}) => {
  const total =
    (data?.[0]?.incomplete ?? 0) +
    (data?.[0]?.inProgress ?? 0) +
    (data?.[0]?.completed ?? 0);

  const getPercentage = (value: number) => {
    return total > 0 ? ((value / total) * 100).toFixed(1) : "0.0";
  };

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
        <div className="flex flex-col items-center justify-between">
          <div className="w-full h-[23rem] flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                data={isLoading ? skeletonData : data}
                innerRadius={120}
                outerRadius={220}
              >
                <Tooltip cursor={false} content={<CustomTooltip />} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy || 0}
                              className="fill-foreground text-4xl font-semibold"
                            >
                              {isLoading ? 0 : total}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 28}
                              className="fill-muted-foreground"
                            >
                              Lệnh sản xuất
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="incomplete"
                  stackId="statusProgress"
                  cornerRadius={12}
                  fill={isLoading ? "#C6CBD1" : "#FF8F0D"}
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="inProgress"
                  stackId="statusProgress"
                  cornerRadius={12}
                  fill={isLoading ? "#C6CBD1" : "var(--new-blue-500)"}
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="completed"
                  fill={isLoading ? "#C6CBD1" : "#1FC583"}
                  stackId="statusProgress"
                  cornerRadius={12}
                  className="stroke-transparent stroke-2 px-4"
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-2 w-full">
            {summaryData.map((status) => (
              <StatusSummary
                key={status.name}
                quantity={isLoading ? 0 : status.value}
                status={status.name}
                color={status.color}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
