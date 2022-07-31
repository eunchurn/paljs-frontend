import { MenuItemType } from "@paljs/ui/types";

const items: MenuItemType[] = [
  {
    title: "Home Page",
    icon: { name: "home" },
    link: { href: "/dashboard" },
  },
  {
    title: "Post",
    icon: { name: "archive" },
    link: { href: "/admin/models/Post" },
  },
  {
    title: "User",
    icon: { name: "person" },
    link: { href: "/admin/models/User" },
  },
  {
    title: "Settings",
    icon: { name: "settings" },
    link: { href: "/admin" },
  },
];

export default items;
