/**
 * Centralised social media and external links
 * Update these values to maintain links across the entire site
 */

export const SOCIAL_LINKS: { facebook: string; instagram: string | null } = {
  facebook: "https://www.facebook.com/groups/818483553898905",
  // Add the confirmed profile URL when supplied by Cheryl.
  instagram: null,
};

export const CONTACT_INFO = {
  email: "horsforthinbloom@gmail.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sites", label: "Our Sites" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/history", label: "History" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;
