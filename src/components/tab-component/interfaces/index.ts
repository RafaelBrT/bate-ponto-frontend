import { ReactElement  } from 'react'

export interface TabProps {
  active?: boolean
}

interface Tabs {
  title: string
  content: ReactElement 
}

export interface TabComponentProps {
  tabs: Tabs[]
}