import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  border-radius: 12px;
  box-shadow: 0 8px 30px rgb(255, 255, 255, 0.05);

  width: 628px;
  max-width: 70vw;

  align-items: center;
  padding: 2rem 4rem;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);

  a {
    transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover svg {
      transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: translateX(-10px);
    }
  }

  h1 {
    ${({ theme }) => theme.FONTS.NUNITO}
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.base_title};
    font-size: clamp(1.5rem, 1rem + 5vw, 2.5rem);
    text-align: left;
    letter-spacing: -0.03;

    margin-bottom: 0.25rem;
  }

  h2 {
    ${({ theme }) => theme.FONTS.NUNITO}
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.base_description};
    font-size: clamp(1rem, 1rem + 1vw, 1.25rem);
    text-align: left;
    margin-bottom: 1rem;
  }

  p {
    ${({ theme }) => theme.FONTS.MONOSPACE}
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.base_text};
    font-size: clamp(0.6rem, 0.6rem + 1vw, 1.15rem);
    text-align: left;
    margin-bottom: 1rem;
  }

  span {
    ${({ theme }) => theme.FONTS.NUNITO}
    color: ${({ theme }) => theme.COLORS.base_description};
    font-size: clamp(0.5rem, 0.5rem + 1vw, 0.8rem);
    text-align: left;
    margin-bottom: 1rem;
  }
`
