// mock data
import {
  mockProductStats,
  mockProductionPlan,
  mockTopCustomerStats,
  mockProgressItems,
  mockMaterials,
  mockProductionStatuses,
} from "@/utils/mock";

// models
import {
    Material,
  ProductStats,
  ProductionPlanStats,
  ProductionStatus,
  ProgressItemStats,
  SummaryData,
  TopCustomerStats,
} from "../models";

// hooks
import { useEffect, useState } from "react";

const getSummaryData = (status: ProductionStatus): SummaryData[] => [
    {
      name: "Chưa hoàn thành",
      value: status.incomplete || 0,
      color: "#FF8F0D",
    },
    {
      name: "Đang sản xuất",
      value: status.inProgress || 0,
      color: "var(--new-blue-500)",
    },
    {
      name: "Hoàn thành",
      value: status.completed || 0,
      color: "#1FC583",
    },
  ];

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
  const [productionStatuses, setProductionStatuses] = useState<ProductionStatus[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryData[]>([]);
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
      setProductionStatuses(mockProductionStatuses);
      setSummaryData(getSummaryData(mockProductionStatuses[0]));
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
    productionStatuses,
    summaryData,
    isLoading,
  };
};
