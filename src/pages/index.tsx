import { CardList } from '@/components/CardList'
import { Layout } from '@/components/Layout'
import { getAll } from '@/services/requests'
import { Container } from '@/styles/homeStyle'
import { IPost } from '@/types/post'
import { GetStaticProps } from 'next'

interface Props {
  posts: IPost[]
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <Layout>
      <Container>
        <CardList />
      </Container>
    </Layout>
  )
}

export const getStaticProps = (async () => {
  const posts = await getAll()

  return { props: { posts } }
}) satisfies GetStaticProps<{ posts: IPost[] }>
