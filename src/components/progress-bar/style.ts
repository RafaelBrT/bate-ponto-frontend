import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
  .progress-bar {
    height: 10px;
    background: ${props => props.theme.colors.primary};
    transform-origin: 0%;
  }
`