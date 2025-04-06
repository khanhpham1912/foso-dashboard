import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TableEmptyIcon } from "@/icons";
import Image from "next/image";
import { Material } from "../../models";

export const MaterialTable = ({
  data,
  isLoading,
}: {
  data: Material[];
  isLoading?: boolean;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead className="w-12 text-center">STT</TableHead>
          <TableHead className="w-64">Nguyên vật liệu</TableHead>
          <TableHead className="w-24">Đơn vị tính</TableHead>
          <TableHead className="w-24 text-center">Số lượng</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading || !data.length ? (
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4} className="text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <TableEmptyIcon />
                <div className="mt-6 text-neutral-500 text-2xl font-medium">
                  Chưa có dữ liệu
                </div>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          data.map((material, index) => (
            <TableRow key={material.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-[#D0D5DD] rounded flex items-center justify-center overflow-hidden">
                    {material.image && (
                      <Image
                        src={material.image}
                        alt={material.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold">{material.name}</div>
                    <span className="text-tiny text-neutral-400">(none)</span>
                    <span className="text-tiny text-[#3276FA]">
                      {material.code}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{material.unit}</TableCell>
              <TableCell className="text-center">{material.quantity}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
