import { SummaryData } from "../../models";

const StatusSummary = ({
  quantity,
  status,
  color,
}: {
  quantity: number | undefined;
  status: string;
  color: string;
}) => {
  return (
    <div className="w-full rounded-lg border border-[#DDDDE2] flex flex-col p-2">
      <div className="text-2xl font-semibold" style={{ color }}>
        {quantity || 0}
      </div>
      <div className="text-sm">{status}</div>
    </div>
  );
};

export const StatuesSummary = ({
  summaryData,
  isLoading,
}: {
  summaryData: SummaryData[];
  isLoading?: boolean;
}) => {
  return (
    <div className="flex gap-2 w-full">
      {summaryData.map((status) => (
        <StatusSummary
          key={status.name}
          quantity={isLoading ? 0 : status.value}
          status={status.name}
          color={status.color}
        />
      ))}
    </div>
  );
};
