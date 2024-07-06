import {
  Braces,
  DatabaseZap,
  Hash,
  Image,
  List,
  MessageSquare,
  SquareTerminal,
  TvMinimalPlay,
} from "lucide-react";

export const CONVERSATION_EMPTY = [
  {
    id: 1,
    prompt: "Help  me pick a name for my new company",
    icon: MessageSquare,
  },
  {
    id: 2,
    prompt: "I need help with my essay",
    icon: SquareTerminal,
  },
  {
    id: 3,
    prompt: "I need help with my homework",
    icon: Image,
  },
  {
    id: 4,
    prompt: "I need help with my project",
    icon: TvMinimalPlay,
  },
];
export const CODE_EMPTY = [
  {
    id: 1,
    prompt: "A function to calculate the factorial of a number",
    icon: Hash,
  },
  {
    id: 2,
    prompt: "Fetch data from an API",
    icon: DatabaseZap,
  },
  {
    id: 3,
    prompt: "A react component to display a list of items",
    icon: List,
  },
  {
    id: 4,
    prompt: "Format a date in a specific timezone use C",
    icon: Braces,
  },
];
