export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Prince Elorm",
  description:
    " Portfolio website",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: 'About',
      href: "/about",
    },
    {
      title: 'Projects',
      href: "/projects",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/Akarikev",

  },
}
