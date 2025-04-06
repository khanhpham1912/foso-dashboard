import { ProductStats, ProductionPlanStats, TopCustomerStats } from "../models";
import { useEffect, useState } from "react";

const mockProductStats: ProductStats[] = [
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

const mockProductionPlan: ProductionPlanStats[] = [
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

const mockTopCustomerStats: TopCustomerStats[] = [
  { id: "1", name: "Shop thời trang công sở Basic Office", quantity: 3000 },
  { id: "2", name: "Shop quần áo streetwear New York", quantity: 2900 },
  { id: "3", name: "Outlet Lemon squeeze", quantity: 2800 },
  { id: "4", name: "Công ty May mặc Saigon trendy", quantity: 2700 },
  { id: "5", name: "Công ty Dệt may Happy Polla", quantity: 2600 },
];

export const useDashboard = () => {
  const [productStats, setProductStats] = useState<ProductStats[]>([]);
  const [plan, setPlan] = useState<ProductionPlanStats[]>([]);
  const [topCustomer, setTopCustomer] = useState<TopCustomerStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call with 500ms delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProductStats(mockProductStats);
      setPlan(mockProductionPlan);
      setTopCustomer(mockTopCustomerStats);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    productStats,
    plan,
    topCustomer,
    isLoading,
  };
};
