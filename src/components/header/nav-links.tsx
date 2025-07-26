"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const NavLinks = ({className} : {className?: string}) => {
  return (
    <NavigationMenu viewport={false} className={cn(className)}>
      <NavigationMenuList>
        {navLinks.map(({ label }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuTrigger className="text-muted-foreground hover:text-primary! transition-colors">{label}</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[300px] h-[300px]">

            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
