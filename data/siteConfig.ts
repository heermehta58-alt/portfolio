export const siteConfig = {
  // Studio / Designer name displayed in the navbar
  name: "HEER MEHTA",

  // Landing page creative statement
  // Each line renders as a separate line of large editorial typography
  statement: [
    "Industrial Designer",
    "focused on creating thoughtful,",
    "functional objects that",
    "simplify everyday life.",
  ],

  // Navigation
  nav: {
    home: "HOME",
    work: "WORK",
    about: "ABOUT",
  },

  // About overlay content
  about: {
    title: "About",
    bio: "Bio coming soon.",
    location: "",
    email: "heermehta58@gmail.com",
  },

  // Contact & social links
  contact: {
    email: "heermehta58@gmail.com",
    instagram: "https://www.instagram.com/heermehta____?stkn=OGhod2I1N3E0Z2Q%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/heer-mehta-34aa6a271?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    behance: "https://www.behance.net/heermehta8",
  },

  // Footer
  footer: {
    cta: "LET'S CONNECT",
    copyright: `© ${new Date().getFullYear()}`,
    backToTop: "BACK TO TOP",
  },
} as const;

export type SiteConfig = typeof siteConfig;
