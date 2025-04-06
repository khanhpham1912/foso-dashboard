// icons
import { ChevronDown } from "lucide-react";

// components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getImageProps } from "next/image";
const { props } = getImageProps({
  src: "/avatar.png",
  alt: "User avatar",
  fill: true,
});

export const UserAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar>
            <AvatarImage {...props} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-5 w-5 text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
