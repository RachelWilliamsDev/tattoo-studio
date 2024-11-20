import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: "Tattoo Studio",
  description:
    "Tattoo studio website built from figma design by Giorgi Matsukatovi",
  icons: {
    icon: [
      {
        url: "/assets/favicon.ico",
        href: "/assets/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Tattoo Studio",
    description:
      "Tattoo studio website built from figma design by Giorgi Matsukatovi",
    images: [
      {
        url: "/assets/company/man-doing-tattoo-tattoo-salon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MeeLuxPhotos",
    title: "Tattoo Studio",
    description:
      "Tattoo studio website built from figma design by Giorgi Matsukatovi",
    images: [
      {
        url: "/assets/company/man-doing-tattoo-tattoo-salon.png",
      },
    ],
  },
  metadataBase: new URL("https://tattoo-studio-swart.vercel.app"),
};
