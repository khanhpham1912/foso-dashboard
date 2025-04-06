import { ProductStats } from "../models";

export const useDashboard = () => {
  const productStats: ProductStats[] = [
    {
      id: "1",
      name: "Laptop Dell XPS 13",
      quantity: 1250,
      percentChange: 12.5,
    },
    {
      id: "2",
      name: "iPhone 15 Pro",
      quantity: 980,
      percentChange: -8.2,
    },
    {
      id: "3",
      name: "Samsung Galaxy S24",
      quantity: 850,
      percentChange: 5.7,
    },
    {
      id: "4",
      name: "MacBook Pro M3",
      quantity: 720,
      percentChange: 15.3,
    },
    {
      id: "5",
      name: "iPad Pro 12.9",
      quantity: 650,
      percentChange: -3.1,
    },
  ];

  return {
    productStats,
  };
};