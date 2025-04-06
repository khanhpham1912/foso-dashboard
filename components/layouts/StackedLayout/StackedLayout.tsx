import { FC, ReactNode } from "react";
import { Header } from "./Header";

interface StackedLayoutProps {
  children: ReactNode;
}

export const StackedLayout: FC<StackedLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-[calc(100vh-4.5rem)] flex flex-col px-12 overflow-auto">
        {children}
      </main>
    </div>
  );
};
