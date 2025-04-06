import {
  ProductStats,
  ProductionPlanStats,
  TopCustomerStats,
  ProgressItemStats,
  Material,
  ProductionStatus,
} from "@/features/dashboard/models";

export const mockProductStats: ProductStats[] = [
  {
    id: "1",
    name: "Áo sơ mi dài tay",
    quantity: 48,
    percentChange: 8.2,
  },
  {
    id: "2",
    name: "Quần tây",
    quantity: 18,
    percentChange: -5,
  },
  {
    id: "3",
    name: "Áo hoodie",
    quantity: 40,
    percentChange: 12,
  },
  {
    id: "4",
    name: "Đầm maxi",
    quantity: 23,
    percentChange: 3.5,
  },
  {
    id: "5",
    name: "Áo thun cổ tròn",
    quantity: 48,
    percentChange: 4.7,
  },
];

export const mockProductionPlan: ProductionPlanStats[] = [
  {
    id: "1",
    productName: "Áo sơ mi dài tay",
    expectedQuantity: 1000,
    actualQuantity: 850,
  },
  {
    id: "2",
    productName: "Quần tây",
    expectedQuantity: 800,
    actualQuantity: 720,
  },
  {
    id: "3",
    productName: "Áo hoodie",
    expectedQuantity: 1200,
    actualQuantity: 1100,
  },
  {
    id: "4",
    productName: "Đầm maxi",
    expectedQuantity: 600,
    actualQuantity: 550,
  },
  {
    id: "5",
    productName: "Áo thun cổ tròn",
    expectedQuantity: 1500,
    actualQuantity: 1400,
  },
];

export const mockTopCustomerStats: TopCustomerStats[] = [
  { id: "1", name: "Shop thời trang công sở Basic Office", quantity: 3000 },
  { id: "2", name: "Shop quần áo streetwear New York", quantity: 2900 },
  { id: "3", name: "Outlet Lemon squeeze", quantity: 2800 },
  { id: "4", name: "Công ty May mặc Saigon trendy", quantity: 2700 },
  { id: "5", name: "Công ty Dệt may Happy Polla", quantity: 2600 },
];

export const mockProgressItems: ProgressItemStats[] = [
  {
    id: "1",
    label: "Áo sơ mi dài tay",
    value: "123",
    unit: "cái",
    percentage: 50,
  },
  {
    id: "2",
    label: "Áo sơ mi cụt tay",
    value: "321",
    unit: "cái",
    percentage: 75,
  },
  { id: "3", label: "Quần baggy", value: "231", unit: "cái", percentage: 45 },
  { id: "4", label: "Quần tây", value: "999", unit: "cái", percentage: 60 },
  { id: "5", label: "Đầm maxi", value: "876", unit: "cái", percentage: 90 },
  { id: "6", label: "Áo hoodie", value: "765", unit: "cái", percentage: 15 },
  {
    id: "7",
    label: "Áo khoác bomber",
    value: "543",
    unit: "cái",
    percentage: 24,
  },
];

export const mockMaterials: Material[] = [
  {
    id: "1",
    image: "/material-ava.png",
    name: "Chỉ cotton",
    code: "NVL_000014",
    unit: "Cuộn",
    quantity: 8,
  },
  {
    id: "2",
    image: "/material-ava.png",
    name: "Vải lụa",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "3",
    image: "/material-ava.png",
    name: "Vải lót",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "4",
    image: "/material-ava.png",
    name: "Vải chống thấm",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "5",
    image: "/material-ava.png",
    name: "Vải nỉ",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
];

export const mockProductionStatuses: ProductionStatus[] = [
  {
    incomplete: 5,
    inProgress: 6,
    completed: 5,
  },
];
