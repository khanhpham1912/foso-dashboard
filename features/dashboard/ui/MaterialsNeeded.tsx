"use client";

// icons
import { Calendar } from "lucide-react";
import Image from "next/image";
import { TableEmptyIcon } from "@/icons/TableEmptyIcon";

// components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// models
import { Material } from "../models";

export const MaterialsNeeded = ({
  data,
  isLoading,
}: {
  data: Material[];
  isLoading?: boolean;
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Nguyên vật liệu cần mua</CardTitle>
        <Select defaultValue="1">
          <SelectTrigger className="w-36 gap-2 bg-transparent">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-neutral-400" />
              <SelectValue placeholder="Chọn tuần" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Tuần này</SelectItem>
            <SelectItem value="2">Tuần này</SelectItem>
            <SelectItem value="3">Tuần này</SelectItem>
            <SelectItem value="4">Tuần này</SelectItem>
            <SelectItem value="5">Tuần này</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0">
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
                        <span className="text-tiny text-neutral-400">
                          (none)
                        </span>
                        <span className="text-tiny text-[#3276FA]">
                          {material.code}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{material.unit}</TableCell>
                  <TableCell className="text-center">
                    {material.quantity}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
