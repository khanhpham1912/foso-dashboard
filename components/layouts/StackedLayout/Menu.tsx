import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
}

interface MenuProps {
  items: MenuItem[];
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="gap-1 sm:gap-2 lg:gap-3">
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-white/90 text-xs sm:text-sm px-2 lg:px-3 py-1 lg:py-2`}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};