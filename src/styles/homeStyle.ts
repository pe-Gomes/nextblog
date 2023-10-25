import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  height: 100vh;

  ${({ theme }) => theme.FONTS.NUNITO}
  color: ${({ theme }) => theme.COLORS.base_text};
`
