export { default as Sidebar } from "./Sidebar.vue";
export { default as SidebarMenu } from "./SidebarMenu.vue";

export interface SidebarMenuGroup {
  groupLabel: string;
  menus: SidebarMenu[];
}

export interface SidebarMenu {
  href?: string;
  label: string;
  icon: string;
  active: boolean;
  submenus: Pick<SidebarMenu, "href" | "label" | "active">[];
}
