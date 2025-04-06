// mock data
import {
  mockProductStats,
  mockProductionPlan,
  mockTopCustomerStats,
  mockProgressItems,
  mockMaterials,
} from "@/utils/mock";

// models
import {
    Material,
  ProductStats,
  ProductionPlanStats,
  ProgressItemStats,
  TopCustomerStats,
} from "../models";

// hooks
import { useEffect, useState } from "react";

export const useDashboard = () => {
  // All fetching logic is simulated with mock data
  // In a real application, you would replace this with actual API calls
  // and handle loading states, errors, etc.
  // You can use libraries like react-query or swr for data fetching and caching
  const [productStats, setProductStats] = useState<ProductStats[]>([]);
  const [plan, setPlan] = useState<ProductionPlanStats[]>([]);
  const [topCustomer, setTopCustomer] = useState<TopCustomerStats[]>([]);
  const [progressItems, setProgressItems] = useState<ProgressItemStats[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call with 1000ms delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setProductStats(mockProductStats);
      setPlan(mockProductionPlan);
      setTopCustomer(mockTopCustomerStats);
      setProgressItems(mockProgressItems);
      setMaterials(mockMaterials);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    productStats,
    plan,
    topCustomer,
    progressItems,
    materials,
    isLoading,
  };
};
