'use client'
import React from 'react'
import ItemCardComponent from '@components/item-card'
import { motion } from 'framer-motion'

import { BestSellersWrapper } from './style'

const BestsellersComponent = () => {
  return (
    <BestSellersWrapper>
      <h2>Mais vendidos</h2>
      <div className="item-grid">
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: [null, 1.0, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <ItemCardComponent />
        </motion.div>
      </div>
    </BestSellersWrapper>
  )
}

export default BestsellersComponent