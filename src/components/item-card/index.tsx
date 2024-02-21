'use client'
import React from 'react'

import { ItemCardWrapper } from './style'

const ItemCardComponent = () => {
  return (
    <ItemCardWrapper>
      <div className="header">
      </div>
      <div className="content">
        <div className="content__title">
          <p>Hexa Advanced</p>
        </div>
        <div className="content__description">
          <p>Relógio de ponto eletrônico homologado pelo MTE e certificado pelo Inmetro.</p>
        </div>
      </div>
      <div className="action">
        <button>Detalhes</button>
      </div>
    </ItemCardWrapper>
  )
}

export default ItemCardComponent