'use client'
import { useEffect, useState } from 'react'
import HeaderComponent from '@components/header'
import LogoTopComponnet from '@components/logo-top'
import NavbarBottomComponent from '@components/navbar/navbar-bottom'
import { headerHeight } from '@styles/global-vars'

import { FirstHalf, NavbarWrapper, SecondHalf } from './style'

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const stickyStart = headerHeight

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > stickyStart)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavbarWrapper>
      <FirstHalf>
        <LogoTopComponnet />
      </FirstHalf>
      <SecondHalf>
        <HeaderComponent />
        <NavbarBottomComponent sticky={isSticky} />
      </SecondHalf>
    </NavbarWrapper>
  )
}

export default NavbarComponent