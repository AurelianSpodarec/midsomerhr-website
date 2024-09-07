import Container from '@/components/_layout/Container'
import Article from './_components/Article'
import { getAllArticles } from '@/lib/articles'
import Section from '@/components/_layout/Section'

async function BlogIndex() {
  let articles = await getAllArticles()
  return (
    <Section>
      <Container>

        <header className="flex justify-center items-center mb-28">
          <h1 className="text-5xl font-bold">Blog</h1>
        </header>

        <div className="grid grid-cols-3">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default BlogIndex
