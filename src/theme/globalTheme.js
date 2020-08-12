import { createGlobalStyle } from 'styled-components'
import { ifProp } from 'styled-tools'
import lightTheme from './lightThemeVariables'
import darkTheme from './darkThemeVariables'

export const GlobalTheme = createGlobalStyle`
  html {
    --img-background: url(${ifProp(
      { mode: 'light' },
      lightTheme.backgroundImg,
      darkTheme.backgroundImg
    )});
  }
`

export default GlobalTheme
