

import { FC, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

interface pageProps {}

const Homepage: FC<pageProps> = ({}) => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hello, am Prince Elorm 👋 <br className="hidden sm:inline" />I code
          things for the web.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {`I'm a Front-end developer based in Ghana`}
        </p>
      </div>
      <div className="flex gap-4">
        <a
          download="Prince Elorm"
          target="_blank"
          rel="noopener noreferrer"
          href="/public/files/Prince Elorm Resume (1).pdf"
          className={buttonVariants()}
        >
          Resume
        </a>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}

export default Homepage
