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
      href: "/projects/:id",
    }
  ],
  links: {
    twitter: "https://twitter.com/elorm_elom",
    github: "https://github.com/Akarikev",

  },
}
