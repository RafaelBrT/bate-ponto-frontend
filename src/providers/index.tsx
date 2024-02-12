'use client'

import StyledComponentsRegistry from '@/lib/registry'
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@styles/GlobalStyles'

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {props.children} 
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers