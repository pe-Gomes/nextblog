import { Container } from './styles'
import { Card } from '../Card'

export function CardList() {
  return (
    <Container>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  )
}
