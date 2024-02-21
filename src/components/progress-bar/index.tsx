'use client'
import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import { ProgressBarWrapper } from './style'

const ProgressBarComponent = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ProgressBarWrapper>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

    </ProgressBarWrapper>
  )
}

export default ProgressBarComponent