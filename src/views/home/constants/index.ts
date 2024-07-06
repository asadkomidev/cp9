import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

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
    description: "Describe an image and get the ai generated image.",
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
    description: "Turn your prompt to a music and listen to it now",
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
] as const;
