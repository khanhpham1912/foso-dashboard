import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ProductionPlanStats } from "../models";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const skeletonData = [
  { name: "", expectedQuantity: 0, actualQuantity: 0 },
  { name: "", expectedQuantity: 0, actualQuantity: 0 },
  { name: "", expectedQuantity: 0, actualQuantity: 0 },
  { name: "", expectedQuantity: 0, actualQuantity: 0 },
  { name: "", expectedQuantity: 0, actualQuantity: 0 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-[#171719] p-3 text-white shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-[#03A0F4]">Kế hoạch: {payload[0].value}</p>
        <p className="text-[#1FC5A1]">Thực hiện: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

export const ProductionPlan = ({
  data = [],
}: {
  data: ProductionPlanStats[];
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Kế hoạch sản xuất</CardTitle>
        <Select defaultValue="1">
          <SelectTrigger className="w-36 gap-2 bg-transparent">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-neutral-400" />
              <SelectValue placeholder="Chọn quý" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Quý này</SelectItem>
            <SelectItem value="2">Quý này</SelectItem>
            <SelectItem value="3">Quý này</SelectItem>
            <SelectItem value="4">Quý này</SelectItem>
            <SelectItem value="5">Quý này</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[20rem] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data || skeletonData}
              margin={{
                right: 16,
                left: 12,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="productName"
                label={{ value: "Mặt hàng", position: "left", offset: 8 }}
                axisLine={false}
                height={50}
                tickLine={false}
                tick={(props) => {
                  return (
                    <g transform={`translate(${props.x},${props.y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={24}
                        fill="#929AA5"
                        textAnchor="middle"
                      >
                        {props.payload.value}
                      </text>
                    </g>
                  );
                }}
              />
              <YAxis
                {...(data.length === 0 && { domain: [0, 100] })}
                tickCount={6}
                axisLine={false}
                label={{
                  value: data ? "Cái" : "Đơn vị",
                  position: "top",
                  offset: 20,
                }}
                tickLine={false}
                tick={{ fill: "#929AA5" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Tooltip
                formatter={(value: number) => `${value} cái`}
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{
                  backgroundColor: "#111827",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 14,
                  padding: 8,
                }}
                labelStyle={{ display: "none" }}
              />
              <Legend
                verticalAlign="top"
                content={(props) => (
                  <div className="flex gap-3 mb-5 justify-end">
                    {props.payload?.map((entry, index) => (
                      <div
                        key={`item-${index}`}
                        className="flex items-center gap-2"
                      >
                        <div
                          className="w-7 h-3 rounded-xl"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-neutral-700 font-medium">
                          {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              />
              <Bar
                dataKey="expectedQuantity"
                name="Kế hoạch"
                fill={"var(--new-blue-500)"}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="actualQuantity"
                name="Thực hiện"
                fill={"#1FC583"}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
