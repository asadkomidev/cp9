import {
  Code,
  ImageIcon,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export const TOOLS = [
  {
    id: 1,
    label: "Conversation",
    description: "AI is ready to chat with you. Start a conversation now!",
    href: "/conversation",
    icon: MessageSquare,
  },
  {
    id: 2,
    label: "Images",
    description: "AI generated images. Start exploring now!",
    href: "/images",
    icon: ImageIcon,
  },
  {
    id: 3,
    label: "Video",
    description: "Watch the ai generated videos. Start watching now!",
    href: "/videos",
    icon: VideoIcon,
  },
  {
    id: 4,
    label: "Music",
    description: "AI generated music. Start listening now!",
    href: "/music",
    icon: Music,
  },

  {
    id: 5,
    label: "Code",
    description:
      "Try out our code generator. explain your code in plain english.",
    href: "/code",
    icon: Code,
  },
  {
    id: 6,
    label: "Settings",
    description: "Manage your account settings and billing.",
    href: "/settings",
    icon: Settings,
  },
] as const;

export const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    label: "Images",
    icon: ImageIcon,
    href: "/images",
  },
  {
    label: "Videos",
    icon: VideoIcon,
    href: "/videos",
  },
  {
    label: "Music",
    icon: Music,
    href: "/music",
  },
  {
    label: "Code",
    icon: Code,
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Link 1",
    href: "/",
  },
  {
    label: "Link 2",
    href: "/",
  },
] as const;

export const FOOTER_ITEMS = {
  Items: [
    {
      name: "Item 1",
      href: "#",
    },
    {
      name: "Item 2",
      href: "#",
    },
    {
      name: "Item 3",
      href: "#",
    },
  ],
  Links: [
    { name: "Link 1", href: "/" },
    { name: "Link 2", href: "/" },
    { name: "Link 3", href: "/" },
  ],
};
