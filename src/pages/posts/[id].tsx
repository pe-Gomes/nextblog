import { Layout } from '@/components/Layout'
import { Container } from './styles'
import { IPost } from '@/types/post'
import { getById } from '@/services/requests'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { format } from 'date-fns'
import Link from 'next/link'

import { BsArrowLeft } from 'react-icons/bs'

interface Props {
  post: IPost
}

export default function Post({ post }: Props) {
  const formattedDate = format(
    new Date(post.created_at!),
    'MMMM do yyyy, h:mm:ss a',
  )

  return (
    <Layout>
      <Container>
        <Link href="/">
          <BsArrowLeft
            className="arrow"
            size={32}
            color="#3295f8b4"
          />
        </Link>
        {post && (
          <>
            <h1>{post.title}</h1>
            <span>{formattedDate}</span>
            <h2>{post.description}</h2>
            <p>{post.content}</p>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const post = await getById(context.query['id'])
  return { props: { post } }
}) satisfies GetServerSideProps<{ post: IPost }>
