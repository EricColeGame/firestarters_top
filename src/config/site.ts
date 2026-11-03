export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "FIRESTARTERS Wiki",
  shortName: "FIRESTARTERS",
  logoText: "F",
  tagline: "Rocket-Skate Combat, Weapons & Arena Guides",
  description: "Independent FIRESTARTERS wiki covering rocket-skate movement, six weapons, arena combat, Episode One, arcade scoring, and Early Access updates for the PC arena FPS.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://firestarters.top",
  supportEmail: "support@firestarters.top",
  gameUrl: "https://store.steampowered.com/app/3733710/FIRESTARTERS/",
  heroVideoId: "52-dUwYMJ4Y", // FIRESTARTERS - Official Episode One Trailer (Studio Kerosene)
  social: {
    youtube: "https://www.youtube.com/@StudioKerosene",
  },
  locales: ["en", "ja", "ru"],
  defaultLocale: "en",
};
