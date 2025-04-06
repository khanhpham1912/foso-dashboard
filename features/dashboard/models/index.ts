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

export interface TopCustomerStats {
  id: string;
  name: string;
  quantity: number;
}

export interface ProgressItemStats {
  id: string;
  label: string;
  value: string;
  percentage: number;
}