import { GetStaticProps } from 'next'
import { getAll } from '@/services/requests'
import { IPost } from '@/types/post'

import { Container, CardList } from '@/styles/homeStyle'
import { Layout } from '@/components/Layout'
import { Card } from '@/components/Card'
import { format } from 'date-fns'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  const formattedDate = posts.map((post) => {
    const date = new Date(post.created_at!)
    return format(date, 'MMMM do yyyy, h:mm:ss a')
  })
  return (
    <Layout>
      <Container>
        <h1>My Blog</h1>
        <CardList>
          <ul>
            {posts &&
              posts.map((post, i) => (
                <Card
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  content={post.content!.slice(0, 25).concat('...')}
                  id={post.id}
                  formattedDate={formattedDate[i]}
                />
              ))}
          </ul>
        </CardList>
      </Container>
    </Layout>
  )
}
export const getStaticProps = (async () => {
  const posts = await getAll()

  return { props: { posts } }
}) satisfies GetStaticProps<{ posts: IPost[] }>
