// icons

// components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// models
import { ProductionPlanStats } from "../../models";
import { QuaterSelect } from "./QuaterSelect";
import { ProductionPlanChart } from "./ProductionPlanChart";

export const ProductionPlan = ({
  data = [],
  isLoading = false,
}: {
  data: ProductionPlanStats[];
  isLoading?: boolean;
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Kế hoạch sản xuất</CardTitle>
        <QuaterSelect
          options={[
            { label: "Quý này", value: "1" },
            { label: "Quý này", value: "2" },
            { label: "Quý này", value: "3" },
            { label: "Quý này", value: "4" },
          ]}
        />
      </CardHeader>
      <CardContent>
        <div className="h-[20rem] w-full">
          <ProductionPlanChart data={data} isLoading={isLoading} />
        </div>
      </CardContent>
    </Card>
  );
};
