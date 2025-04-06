import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <CardTitle>
          Top 5 khách hàng có sản lượng nhiều nhất
        </CardTitle>
        <Button variant="outline" size="sm" className="h-8">
          <Calendar className="mr-2 h-4 w-4" />
          <span>Tháng này</span>
        </Button>
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
              <Bar
                dataKey="value"
                fill="#03A9F4"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
