import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    background-color: ${props => props.theme.colors.graySecondary};
    height: 100%;
    overflow-x: hidden;
  }
`

const GlobalStyles = createGlobalStyle`
  ${styles}
`

export default GlobalStyles