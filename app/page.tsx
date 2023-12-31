import Link from "next/link"

import { siteConfig } from "@/config/site"

export default function IndexPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          {siteConfig.description}
        </p>
        <ul>
          <li>
            <Link href="/test">Go to the test page</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
