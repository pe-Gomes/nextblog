import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  width: 100%;

  padding-top: 1rem;

  svg {
    width: 0;
    height: 0;
  }

  .noise {
    position: absolute;
    top: -25px;
    left: -50px;
    width: calc(100% + 50px);
    height: calc(100% + 25px);
    opacity: 0;
    pointer-events: none;

    background: repeating-linear-gradient(#111, #111 50%, #fff 50%, #fff);
    background-size: 5px 5px;
    filter: url(#noise);

    transition: opacity 500ms;
  }

  &:hover .noise {
    opacity: 0.1;
  }

  h2 {
    ${({ theme }) => theme.FONTS.NUNITO}
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.base_title};
    font-size: clamp(1.5rem, 1rem + 5vw, 2.5rem);
    text-align: left;
    letter-spacing: -0.03;
  }
  h3 {
    ${({ theme }) => theme.FONTS.NUNITO}
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.base_description};
    font-size: clamp(1rem, 1rem + 1vw, 1.25rem);
    text-align: left;
  }

  p {
    ${({ theme }) => theme.FONTS.MONOSPACE}
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.base_text};
    font-size: clamp(0.6rem, 0.6rem + 1vw, 1.15rem);
    text-align: left;
  }

  span {
    color: ${({ theme }) => theme.COLORS.base_description};
    font-size: clamp(0.5rem, 0.5rem + 1vw, 0.8rem);
    text-align: left;
  }
`
