"use client";

import * as React from "react";
import { House, Grid2x2, UserCog } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = {
  user: {
    name: "Fabian Romano",
    email: "fabian.ed.romano@gmail.com",
    avatar: "/profile.png",
  },
  navMain: [
    {
      title: "Usuario",
      url: "#",
      items: [
        {
          title: "Home",
          icon: House,
          url: "/",
          isActive: true,
        },
        {
          title: "Categorias",
          icon: Grid2x2,
          url: "/category",
        },
        {
          title: "Perfil",
          icon: UserCog,
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item, index) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={index}>
                      <Link href={item.url}>
                        <SidebarMenuButton isActive={isActive}>
                          {item.icon && <item.icon />}
                          {item.title}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
