"use client";

// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekSelect } from "./WeekSelect";
import { MaterialTable } from "./MaterialTable";

// models
import { Material } from "../../models";

export const MaterialsNeeded = ({
  data,
  isLoading,
}: {
  data: Material[];
  isLoading?: boolean;
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Nguyên vật liệu cần mua</CardTitle>
        <WeekSelect
          options={[
            { label: "Tuần này", value: "1" },
            { label: "Tuần này", value: "2" },
            { label: "Tuần này", value: "3" },
            { label: "Tuần này", value: "4" },
            { label: "Tuần này", value: "5" },
          ]}
        />
      </CardHeader>
      <CardContent className="p-0">
        <MaterialTable data={data} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};
