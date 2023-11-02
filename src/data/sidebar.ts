import {
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Library,
  Lightbulb,
  Music2,
  Newspaper,
  PlaySquare,
  Radio,
  ShoppingBag,
} from "lucide-react";
import React from "react";
export const subscriptions = [
  {
    channelName: "Fireship",
    id: "Fireship",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Caleb Curry",
    id: "CalebCurry",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Web Dev Simplified",
    id: "WebDevSimplified",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Kevin Powell",
    id: "KevinPowell",
    imgUrl:
      "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Sonny Sangha",
    id: "SonnySangha",
    imgUrl:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    channelName: "Traversy Media",
    id: "TraversyMedia",
    imgUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
];

export const playlists = [
  { id: "1", name: "Frontend & Backend" },
  { id: "2", name: "Favorites" },
  { id: "3", name: "React" },
  { id: "4", name: "Non-Dev" },
  { id: "5", name: "TypeScript" },
];
type IconsSidebarTypes = {
  id: number;
  icon: React.ElementType;
  title: string;
};
export const IconsSidebar: IconsSidebarTypes[] = [
  {
    id: 2,
    icon: Library,
    title: "Library",
  },
  {
    id: 3,
    icon: History,
    title: "History",
  },
  {
    id: 4,
    icon: PlaySquare,
    title: "PlaySquare",
  },
  {
    id: 5,
    icon: Clock,
    title: "Clock",
  },
];
export const IconsSidebarExplore: IconsSidebarTypes[] = [
  {
    id: 6,
    icon: Flame,
    title: "Trending",
  },
  {
    id: 7,
    icon: ShoppingBag,
    title: "Shopping",
  },
  {
    id: 8,
    icon: Music2,
    title: "Music",
  },
  {
    id: 9,
    icon: Film,
    title: "Movies & TV",
  },
  {
    id: 10,
    icon: Radio,
    title: "Live",
  },
  {
    id: 11,
    icon: Gamepad2,
    title: "Gaming",
  },
  {
    id: 12,
    icon: Newspaper,
    title: "News",
  },
  {
    id: 13,
    icon: Lightbulb,
    title: "Learning",
  },
];
