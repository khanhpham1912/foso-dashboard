import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TopCustomerStats } from "../models";

const skeletonData = [
  { name: "-", quantity: 0 },
  { name: "-", quantity: 0 },
  { name: "-", quantity: 0 },
  { name: "-", quantity: 0 },
  { name: "-", quantity: 0 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-sm gap-2 px-3 py-2 shadow-lg text-foreground">
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export function TopCustomer({
  data = [],
  isLoading = false,
}: {
  data: TopCustomerStats[];
  isLoading?: boolean;
}) {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top 5 khách hàng có sản lượng nhiều nhất</CardTitle>
        <Select defaultValue="1">
          <SelectTrigger className="w-36 gap-2 bg-transparent">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-neutral-400" />
              <SelectValue placeholder="Chọn quý" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Quý này</SelectItem>
            <SelectItem value="2">Quý trước</SelectItem>
            <SelectItem value="3">Quý 3/2023</SelectItem>
            <SelectItem value="4">Quý 2/2023</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div className="h-[20rem] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={isLoading ? skeletonData : data}
              layout="vertical"
              margin={{
                top: 32,
                right: 16,
                left: 52,
                bottom: 20,
              }}
              barSize={16}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis
                type="number"
                {...(data.length === 0 && { domain: [0, 3200] })}
                tickCount={5}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Sản lượng",
                  position: "left",
                  offset: 20,
                  dy: 8,
                  fontSize: 12,
                }}
                tick={(props) => {
                  return (
                    <g transform={`translate(${props.x},${props.y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={20}
                        fontSize={12}
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
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                height={50}
                label={{
                  value: "Khách hàng",
                  position: "top",
                  offset: 20,
                  fontSize: 12,
                }}
                tick={(props) => (
                  <g transform={`translate(${props.x},${props.y})`}>
                    <foreignObject
                      x={-100}
                      y={-10}
                      width={100}
                      height={36}
                      textAnchor="end"
                    >
                      <div className="flex justify-end">
                        <span className="line-clamp-2 text-xs text-slate-500">
                          {props.payload.value}
                        </span>
                      </div>
                    </foreignObject>
                  </g>
                )}
              />
              {!!data.length && (
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "none" }}
                />
              )}
              <Bar dataKey="quantity" fill="var(--new-blue-500)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
