"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Material {
  id: string;
  name: string;
  code: string;
  unit: string;
  quantity: number;
}

const materials: Material[] = [
  {
    id: "1",
    name: "Chỉ cotton",
    code: "NVL_000014",
    unit: "Cuộn",
    quantity: 8,
  },
  {
    id: "2",
    name: "Vải lụa",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "3",
    name: "Vải lót",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "4",
    name: "Vải chống thấm",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "5",
    name: "Vải nỉ",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
];

export function MaterialsNeeded() {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle>Nguyên vật liệu cần mua</CardTitle>

        <Select defaultValue="1">
          <SelectTrigger className="w-36 gap-2 bg-transparent">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-neutral-400" />
              <SelectValue placeholder="Chọn quý" />
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
              <TableHead className="w-[50px]">STT</TableHead>
              <TableHead>Nguyên vật liệu</TableHead>
              <TableHead>Đơn vị tính</TableHead>
              <TableHead className="text-right">Số lượng</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materials.map((material, index) => (
              <TableRow key={material.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div>
                      <div className="font-medium">{material.name}</div>
                      <div className="text-sm text-gray-500">(none)</div>
                      <div className="text-sm text-blue-500">
                        {material.code}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{material.unit}</TableCell>
                <TableCell className="text-right">
                  {material.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
