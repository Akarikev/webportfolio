"use client"

import { FC } from "react"
import { useParams } from "next/navigation"

interface pageProps {}

const ProjectPage: FC<pageProps> = ({}) => {
  const id = useParams()
  return <div>Page ID: {JSON.stringify(id)}</div>
}

export default ProjectPage
