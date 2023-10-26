import Link from 'next/link'
import { Container } from './styles'
import { IPost } from '@/types/post'

interface Props extends IPost {}

export function Card({ title, description, content, id, created_at }: Props) {
  return (
    <Container>
      <div className="noise" />
      <svg>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="20s"
              values="0.9 0.9; 0.8 0.8;0.9 0.9;"
              repeatCount="indefinite"></animate>
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            scale="60"></feDisplacementMap>
        </filter>
      </svg>
      <Link href={`/posts/${id}`}>
        <h2>{title}</h2>
        {description && <h3>{description}</h3>}
        <p>{content}</p>
        <span>{created_at.toString()}</span>
      </Link>
    </Container>
  )
}
