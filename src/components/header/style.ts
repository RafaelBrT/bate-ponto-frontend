import { headerHeight } from '@styles/global-vars'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: ${`${headerHeight}px`};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 20px;
  }
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
  }
`

export const Polygon = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.gray};
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  width: 55px;
  height: 55px;
`