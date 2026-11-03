import { BookOpen, Crosshair, MessageSquare, Monitor, Play, Swords, Users, type LucideIcon } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Crosshair, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "community", path: "/community", icon: MessageSquare, isContentType: true },
  { key: "media", path: "/media", icon: Play, isContentType: true },
] satisfies readonly { key: string; path: `/${string}`; icon: LucideIcon; isContentType: boolean }[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
