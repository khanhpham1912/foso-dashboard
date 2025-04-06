export interface ProductStats {
  id: string;
  name: string;
  quantity: number;
  percentChange: number;
}

export interface ProductionPlanStats {
  id: string;
  productName: string;
  expectedQuantity: number;
  actualQuantity: number;
}
