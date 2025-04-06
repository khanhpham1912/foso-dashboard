import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import { ProductionPlanStats } from "../../models";

const skeletonData = [
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
  { name: "-", expectedQuantity: 0, actualQuantity: 0 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-white rounded-lg gap-2 p-3 shadow-lg">
        <p className="font-medium text-foreground">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-2 rounded-xl bg-new-blue-500" />
          <span className="text-neutral-700">Kế hoạch: {payload[0].value}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-2 rounded-xl bg-[#1FC5A1]" />
          <span className="text-neutral-700">
            Thực hiện: {payload[1].value}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export const ProductionPlanChart = ({
  data,
  isLoading,
}: {
  data: ProductionPlanStats[];
  isLoading?: boolean;
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={isLoading ? skeletonData : data}
        margin={{
          right: 16,
          left: 12,
        }}
        maxBarSize={32}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="productName"
          label={{
            value: "Mặt hàng",
            position: "left",
            offset: 8,
            fontSize: 12,
            dy: 2,
          }}
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
                  fontSize={12}
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
            fontSize: 12,
          }}
          tickLine={false}
          tick={{ fill: "#929AA5", fontSize: 12 }}
        />
        {!!data.length && (
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "none" }} />
        )}
        <Legend
          verticalAlign="top"
          content={(props) => (
            <div className="flex gap-3 mb-5 justify-end">
              {props.payload?.map((entry, index) => (
                <div key={`item-${index}`} className="flex items-center gap-2">
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
  );
};
