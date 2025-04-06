import { Show } from "@/components/ui/show";
import { ProductStats } from "../models";
import { IncreaseIcon } from "@/icons/IncreaseIcon";
import { DecreaseIcon } from "@/icons/DecreaseIcon";
import { Card, CardContent } from "@/components/ui/card";

const ProductStatsCard = ({ product }: { product: ProductStats }) => {
  const isIncrease = product.percentChange >= 0;
  const Icon = isIncrease ? IncreaseIcon : DecreaseIcon;

  return (
    <Card className="w-full h-full border-none">
      <CardContent className="p-6">
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
      </CardContent>
    </Card>
  );
};

const ProductStatsCardSkeleton = () => {
  return (
    <Card className="w-full h-full border-none">
      <CardContent className="p-6">
        <div className="flex items-start h-full">
          <div className="flex flex-col gap-3 justify-between h-full">
            <span className="text-3xl font-bold text-new-blue-500">
              0
            </span>
            <div className="flex flex-col justify-center">
              <span>Chưa có mặt hàng</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const TopExportProducts = ({
  products,
  isLoading,
}: {
  products: ProductStats[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-lg">
        Top sản phẩm sản xuất nhiều nhất
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">

      {isLoading ? (
          Array(5).fill(null).map((_, index) => (
            <ProductStatsCardSkeleton key={index} />
          ))
        ) : (
            products.map((product) => (
            <ProductStatsCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
