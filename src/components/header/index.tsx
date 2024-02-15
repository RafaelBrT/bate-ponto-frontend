'use client'
import React from 'react'

import { HeaderWrapper, Polygon } from './style'

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <Polygon />
      <ul>
        <li>99806-2443</li>
        <li>bateponto@bateponto.com.br</li>
        <li>Solicite um Orçamento</li>
        <li>Suporte Remoto</li>
      </ul>
    </HeaderWrapper>
  )
}

export default HeaderComponent