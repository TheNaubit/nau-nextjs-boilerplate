import Link from "next/link"

export default function TestPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Test succeed!
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          Glad it worked. If you are reached this point manually, try by running{" "}
          <code>nr test:e2e</code>.
        </p>
        <ul>
          <li>
            <Link href="/">Go back to the home page</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
