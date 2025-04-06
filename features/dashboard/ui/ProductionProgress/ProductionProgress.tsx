// components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// models
import { ProgressItemStats } from "../../models";
import { StatusSelect } from "./StatusSelect";

const ProgressItem = ({
  label,
  value,
  unit,
  percentage,
}: ProgressItemStats) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-gray-900">
            {`${value} ${unit}`}
          </span>
          <span className="text-sm text-gray-500">({percentage}%)</span>
        </div>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-2 rounded-full bg-[#1FC583] animate-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const ProgressItemSkeleton = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">
          Chưa có mặt hàng
        </span>
        <span>-</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden" />
    </div>
  );
};

export const ProductionProgress = ({
  data,
  isLoading,
}: {
  data: ProgressItemStats[];
  isLoading: boolean;
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tiến độ sản xuất theo nhóm</CardTitle>
        <StatusSelect
          options={[
            { label: "Hoàn thành", value: "1" },
            { label: "Đang xử lý", value: "2" },
            { label: "Chưa hoàn thành", value: "3" },
            { label: "Trễ", value: "4" },
          ]}
        />
      </CardHeader>
      <CardContent className="space-y-8">
        {isLoading
          ? Array(7)
              .fill(null)
              .map((_, index) => <ProgressItemSkeleton key={index} />)
          : data.map((item) => <ProgressItem key={item.id} {...item} />)}
      </CardContent>
    </Card>
  );
};
