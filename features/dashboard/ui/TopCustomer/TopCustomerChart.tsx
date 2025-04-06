import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";
import { TopCustomerStats } from "../../models";

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

export const TopCustomerChart = ({
  data,
  isLoading,
}: {
  data: TopCustomerStats[];
  isLoading: boolean;
}) => {
  return (
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
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "none" }} />
        )}
        <Bar
          dataKey="quantity"
          fill="var(--new-blue-500)"
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
