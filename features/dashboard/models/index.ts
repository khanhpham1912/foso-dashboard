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
  unit: string;
  percentage: number;
}

export interface Material {
  id: string;
  image: string;
  name: string;
  code: string;
  unit: string;
  quantity: number;
}

export interface ProductionStatus {
    incomplete?: number;
    inProgress?: number;
    completed?: number;
  }
  
export  interface SummaryData {
    name: string;
    value: number;
    color: string;
  }
  