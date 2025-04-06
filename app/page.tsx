import { useDashboard } from "@/features/dashboard/hooks";
import { TopExportProducts } from "@/features/dashboard/ui";

export default function Home() {
  const { productStats } = useDashboard();

  return (
    <div className="flex flex-col gap-6 py-8">
      <TopExportProducts products={productStats} />
    </div>
  );
}
