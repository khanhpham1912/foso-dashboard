// components
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Menu } from "./Menu";
import { UserAvatar } from "./UserAvatar";
import { Supporter } from "./Supporter";

// icons
import { Search } from "lucide-react";

const menuItems = [
  { name: "Danh mục", href: "/categories" },
  { name: "Bán & Xuất hàng", href: "/sell-and-export" },
  { name: "Mua & Nhập hàng", href: "/buy-and-import" },
  { name: "Kho & Sản xuất", href: "/warehouse-and-production" },
  { name: "Kế toán", href: "/accounting" },
  { name: "Báo cáo & Thống kê", href: "/reports-and-statistics" },
  { name: "Tiện ích", href: "/utilities" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-[4.5rem] w-full bg-new-blue-700 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        <div className="w-[60px] sm:w-[70px] lg:w-[83px] h-6 sm:h-7 lg:h-8 relative">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={83}
            height={32}
            className="w-full h-full"
          />
        </div>

        <Menu items={menuItems} />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        <div className="hidden sm:block">
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            className="h-6 sm:h-7 bg-white/20 border-none text-white placeholder:text-white/50 pl-8 sm:pl-10 text-xs sm:text-sm max-w-[120px] sm:max-w-[150px] lg:max-w-[200px] min-w-[100px] sm:min-w-[120px]"
            startIcon={Search}
            iconProps={{ className: "text-white w-3 h-3 sm:w-4 sm:h-4" }}
          />
        </div>

        <Supporter />
        <UserAvatar />
      </div>
    </header>
  );
};
