import 'styled-components'

interface FONTS {
  NUNITO: {
    'font-family': string
    'line-height': string
  }
  MONOSPACE: {
    'font-family': string
    'line-height': string
  }
}

interface COLORS {
  blue: string
  base_title: string
  base_description: string
  base_text: string
  base_span: string
  base_label: string
  base_border: string
  base_post: string
  base_profile: string
  base_background: string
  base_input: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: COLORS
    FONTS: FONTS
  }
}
