// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DaySelect } from "./DaySelect";
import { StatusesChart } from "./StatusesChart";
import { StatuesSummary } from "./StatuesSummary";

// models
import { ProductionStatus, SummaryData } from "../../models";

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

  return (
    <Card className="w-full border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tình hình sản xuất</CardTitle>
          <DaySelect
            options={[
              { label: "Hôm nay", value: "1" },
              { label: "Hôm nay", value: "2" },
              { label: "Hôm nay", value: "3" },
              { label: "Hôm nay", value: "4" },
              { label: "Hôm nay", value: "5" },
            ]}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full h-[23rem] flex-grow">
            <StatusesChart data={data} isLoading={isLoading} total={total} />
          </div>
          <StatuesSummary summaryData={summaryData} isLoading={isLoading} />
        </div>
      </CardContent>
    </Card>
  );
};
