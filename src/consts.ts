/** Site-wide constants — single source of truth for values used across components. */

export const SITE_TITLE = "Dynamic Home Creations";
export const SITE_DESCRIPTION =
  "A New Jersey home remodeling studio. Kitchens, baths, and whole-home renovations built with quiet craftsmanship.";
export const SITE_AUTHOR = "Dynamic Home Creations";

export const COMPANY = {
  name: "Dynamic Home Creations",
  shortName: "DHC",
  tagline: "Quiet craft. Honest work. Homes that age well.",
  city: "Plainfield",
  state: "NJ",
  serviceArea: "Central New Jersey",
  phone: "(908) 555-0100",
  email: "hello@dynamichomecreations.com",
  hours: "Mon–Fri · 8 AM – 6 PM",
  founded: 2014,
} as const;

/** Favicon — locally hosted, no external CDN. */
export const CDN_FAVICON_URL = "/favicon.svg";
export const CDN_COVER_IMAGE_URL = "/og-cover.jpg";

/** Social media links. */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dynamichomecreations/",
  facebook: "https://www.facebook.com/dynamichomecreations/",
  email: "mailto:hello@dynamichomecreations.com",
  phone: "tel:+19085550100",
} as const;
