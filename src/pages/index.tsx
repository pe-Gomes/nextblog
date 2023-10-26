import { Card } from '@/components/Card'
import { Layout } from '@/components/Layout'
import { getAll } from '@/services/requests'
import { Container, CardList } from '@/styles/homeStyle'
import { IPost } from '@/types/post'
import { GetStaticProps } from 'next'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <Container>
        <CardList>
          <ul>
            {posts &&
              posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  content={post.content}
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
