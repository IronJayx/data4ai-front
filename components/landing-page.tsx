/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/BqE2WSqL4Xa
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function landingPage() {
  return (
    <div key="1" className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CloudIcon className="h-6 w-6" />
          <span className="sr-only">SaaS App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Data4gpt
                </h1>
                <p className="max-w-[600px] text-center text-gray-500 md:text-xl dark:text-gray-400">
                  Format your dataset to use OpenAI gpt finetuning capabilities.
                  Currently under beta.
                </p>
              </div>
              <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`} rel="noopener noreferrer" target="_blank">
                <Button variant="default">Launch App</Button>
              </Link>
              <div className="w-full sm:w-3/4 lg:w-2/3 aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                <div />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© SaaS App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}
