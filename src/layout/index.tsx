import { ReactNode } from 'react'
import { Container, BlurBackgroundLeft, BlurBackgroundRight } from './styles'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Container>
      <div className="content">
        {children}
        <BlurBackgroundLeft />
        <BlurBackgroundRight />
      </div>
    </Container>
  )
}
