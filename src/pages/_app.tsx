import type { AppProps } from 'next/app'

import { GlobalStyle } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.variable}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
