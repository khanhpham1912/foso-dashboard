import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProgressItem {
  label: string;
  value: number;
  percentage: number;
}

const progressItems: ProgressItem[] = [
  { label: "TotalProfit", value: 46, percentage: 60 },
  { label: "TotalIncome", value: 46, percentage: 23 },
  { label: "TotalExpenses", value: 46, percentage: 12 },
  { label: "TotalExpenses", value: 50, percentage: 12 },
  { label: "TotalExpenses", value: 49, percentage: 12 },
  { label: "TotalExpenses", value: 49, percentage: 12 },
  { label: "TotalExpenses", value: 50, percentage: 12 },
];

export function ProductionProgress() {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tiến độ sản xuất theo nhóm</CardTitle>
        <Select defaultValue="1">
          <SelectTrigger className="w-36 gap-2 bg-transparent">
            <SelectValue placeholder="Chọn trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Hoàn thành</SelectItem>
            <SelectItem value="2">Đang xử lý</SelectItem>
            <SelectItem value="3">Chưa hoàn thành</SelectItem>
            <SelectItem value="4">Trễ</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-8">
        {progressItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-900">
                {item.label}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-900">
                  {item.value}
                </span>
                <span className="text-sm text-gray-500">
                  ({item.percentage}%)
                </span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
