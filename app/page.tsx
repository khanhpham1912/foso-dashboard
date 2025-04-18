"use client";
import { useDashboard } from "@/features/dashboard/hooks";
import {
  MaterialsNeeded,
  ProductionPlan,
  ProductionProgress,
  ProductionStatuses,
  TopCustomer,
  TopExportProducts,
} from "@/features/dashboard/ui";

export default function Home() {
  const { productStats, plan, topCustomer, isLoading, progressItems, materials, productionStatuses, summaryData } =
    useDashboard();

  return (
    <div className="flex flex-col gap-6 py-8">
      <TopExportProducts products={productStats} isLoading={isLoading} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ProductionPlan data={plan} isLoading={isLoading} />
        <TopCustomer data={topCustomer} isLoading={isLoading} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6">
        <ProductionStatuses data={productionStatuses} summaryData={summaryData} isLoading={isLoading} />
        <ProductionProgress data={progressItems} isLoading={isLoading} />
        <MaterialsNeeded data={materials} isLoading={isLoading} />
      </div>
    </div>
  );
}
