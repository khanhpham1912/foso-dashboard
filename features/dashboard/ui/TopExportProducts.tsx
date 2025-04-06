import { Show } from "@/components/ui/show";
import { ProductStats } from "../models";
import { IncreaseIcon } from "@/icons/IncreaseIcon";
import { DecreaseIcon } from "@/icons/DecreaseIcon";

const ProductStatsCard = ({ product }: { product: ProductStats }) => {
  const isIncrease = product.percentChange >= 0;
  const Icon = isIncrease ? IncreaseIcon : DecreaseIcon;

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.2)] p-4 sm:p-6">
      <div className="flex justify-between items-start h-full">
        <div className="flex flex-col gap-3 justify-between h-full">
          <span className="text-3xl font-bold text-new-blue-500">
            {product.quantity}
          </span>
          <div className="flex flex-col justify-center">
            <span>{product.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-medium">
            {Math.abs(product.percentChange)}%
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductStatsCardSkeleton = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-fit bg-white rounded-2xl shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.2)] p-4 sm:p-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="h-8 sm:h-10 w-16 sm:w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-5 w-5 sm:h-6 sm:w-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const TopExportProducts = ({
  products,
}: {
  products: ProductStats[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-base sm:text-lg">
        Top sản phẩm sản xuất nhiều nhất
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        <Show
          when={!!products.length}
          fallback={
            <>
              <ProductStatsCardSkeleton />
              <ProductStatsCardSkeleton />
              <ProductStatsCardSkeleton />
              <ProductStatsCardSkeleton />
              <ProductStatsCardSkeleton />
            </>
          }
        >
          <>
            {products.map((product) => (
              <ProductStatsCard key={product.id} product={product} />
            ))}
          </>
        </Show>
      </div>
    </div>
  );
};
