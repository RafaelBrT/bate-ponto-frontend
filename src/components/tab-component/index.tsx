'use client'
import { useState } from 'react'

import { TabComponentProps } from './interfaces'
import { Tab, TabComponentWrapper, TabContent,Tabs } from './style'

const TabComponent = ({ tabs }: TabComponentProps) => {

  const [activeTab, setActiveTab] = useState(0)

  const renderContent = (tabIndex: number) => {
    return tabs[tabIndex].content || <></>
  }

  return (
    <TabComponentWrapper>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </Tabs>
      <TabContent>
        {renderContent(activeTab)}
      </TabContent>
    </TabComponentWrapper>
  )
}

export default TabComponent