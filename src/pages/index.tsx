import { GetStaticProps } from 'next'
import { getAll } from '@/services/requests'
import { IPost } from '@/types/post'

import { Container, CardList } from '@/styles/homeStyle'
import { Layout } from '@/components/Layout'
import { Card } from '@/components/Card'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <Container>
        <h1>My Blog</h1>
        <CardList>
          <ul>
            {posts &&
              posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  content={post.content.slice(0, 25).concat('...')}
                  id={post.id}
                  created_at={post.created_at}
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
