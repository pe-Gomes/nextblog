import Link from 'next/link'
import { Container } from './styles'
import { inherits } from 'util'
import { IPost } from '@/types/post'

interface Props extends IPost {}

export function Card({ title, description, content, id, created_at }: Props) {
  return (
    <Container>
      <Link href={`/posts/${id}`}>
        <h2>{title}</h2>
        {description && <h3>{description}</h3>}
        <p>{content}</p>
        <span>{created_at.toString()}</span>
      </Link>
    </Container>
  )
}
