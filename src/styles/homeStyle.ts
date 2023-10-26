import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.FONTS.NUNITO}
  color: ${({ theme }) => theme.COLORS.base_text};

  h1 {
    margin-left: 0.5rem;
    ${({ theme }) => theme.FONTS.MONOSPACE}
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.base_span};
    font-size: clamp(2.25rem, 2.25rem + 5vw, 3.25rem);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
`

export const CardList = styled.section`
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
  }
`
