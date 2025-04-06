// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuaterSelect } from "./QuaterSelect";
import { TopCustomerChart } from "./TopCustomerChart";

// models
import { TopCustomerStats } from "../../models";

export const TopCustomer = ({
  data = [],
  isLoading = false,
}: {
  data: TopCustomerStats[];
  isLoading?: boolean;
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top 5 khách hàng có sản lượng nhiều nhất</CardTitle>
        <QuaterSelect
          options={[
            { label: "Quý này", value: "1" },
            { label: "Quý trước", value: "2" },
            { label: "Quý 3/2023", value: "3" },
            { label: "Quý 2/2023", value: "4" },
          ]}
        />
      </CardHeader>

      <CardContent>
        <div className="h-[20rem] w-full">
          <TopCustomerChart data={data} isLoading={isLoading} />
        </div>
      </CardContent>
    </Card>
  );
};
