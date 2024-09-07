'use client'

import Container from "@/components/_layout/Container"
import { Prose } from "@/components/atoms/Prose"
import { AppContext } from "@/context/providers"
import { useRouter } from "next/navigation"
import { useContext } from "react"

function WorkLayout({ article, children }: { article, children: React.ReactNode }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  console.log(article)
  return (
    <div className="xl:relative mb-20">
      {/* 
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
              )} */}

      <article>

        <header className="flex flex-col">
          <Container size="3xl">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </time>
          </Container>

          <Container size="5xl">
            <img className="w-full rounded-md" src={article.thumbnail} />
          </Container>
        </header>

        <Container size="3xl">
          <Prose className="mt-8" data-mdx-content>
            {children}
          </Prose>
        </Container>
      </article>

    </div>
  )
}

export default WorkLayout