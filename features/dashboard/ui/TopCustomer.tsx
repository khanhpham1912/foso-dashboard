import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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

interface TopCustomerChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export function TopCustomer({ data = [] }: TopCustomerChartProps) {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
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
            <SelectItem value="2">Quý này</SelectItem>
            <SelectItem value="3">Quý này</SelectItem>
            <SelectItem value="4">Quý này</SelectItem>
            <SelectItem value="5">Quý này</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <div className="p-6 pt-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={8}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(0, 0, 0, 0.1)"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9297A0" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9297A0" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#17181A",
                  border: "none",
                  borderRadius: "6px",
                  color: "white",
                }}
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              />
              <Bar dataKey="value" fill="#03A9F4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
