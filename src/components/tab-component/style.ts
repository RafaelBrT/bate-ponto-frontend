import styled from 'styled-components'

import { TabProps } from './interfaces'

export const TabComponentWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
`

export const Tabs = styled.div`
  display: flex;
  padding: 0.5rem;
`

export const TabContent = styled.div`
  padding: 0.5rem;
`

export const Tab = styled.button<TabProps>`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  background: none;
  border-bottom: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.grayDark};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.grayDark};
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`