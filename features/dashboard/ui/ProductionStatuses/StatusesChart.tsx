import {
  ResponsiveContainer,
  RadialBarChart,
  Tooltip,
  PolarRadiusAxis,
  Label,
  RadialBar,
} from "recharts";
import { ProductionStatus } from "../../models";

const skeletonData = [
  {
    incomplete: 5,
    inProgress: 5,
    completed: 5,
  },
];

const CustomTooltip = ({ active, payload }: any) => {
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

export const StatusesChart = ({
  data,
  isLoading,
  total,
}: {
  data: ProductionStatus[];
  isLoading: boolean;
  total: number;
}) => {
  return (
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
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
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
  );
};
