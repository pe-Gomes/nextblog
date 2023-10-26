import Link from 'next/link'
import { Container } from './styles'

export function Card() {
  return (
    <Container>
      <Link href="#">
        <h2>Title</h2>
        <h3>Description</h3>
        <p>The beginning of the blog text content...</p>
      </Link>
    </Container>
  )
}
