import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  border-radius: 12px;
  box-shadow: 0 8px 30px rgb(255, 255, 255, 0.05);

  width: 628px;
  max-width: 70vw;

  display: flex;
  align-items: center;
  padding: 1.5rem 4rem;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);

  a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ul li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
  }
`
