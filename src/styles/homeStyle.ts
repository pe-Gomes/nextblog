import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.FONTS.NUNITO}
  color: ${({ theme }) => theme.COLORS.base_text};
`
