import Link from 'next/link'

import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate';

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article>
      <Link href={`/blog/${article.slug}`}>
        <img src={article.thumbnail} />
        <header>
          <div>
            Posted On {formatDate(article.date)}
            {article.readingTime}
          </div>
          <h3 className="text-2xl font-bold">{article.title}</h3>
        </header>
        {/* <p>{article.description}</p> */}
        <div>Read article</div>
      </Link>
    </article>
  )
}

export default Article;
