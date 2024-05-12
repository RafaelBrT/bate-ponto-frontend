'use client'
import { useEffect, useState } from 'react'
import HeaderComponent from '@components/header'
import LogoTopComponnet from '@components/logo-top'
import NavbarBottomComponent from '@components/navbar/navbar-bottom'
import { headerHeight } from '@styles/global-vars'

import { MenuOptions } from './navbar-bottom/interfaces/navbar-bottom-interface'
import { FirstHalf, NavbarWrapper, SecondHalf } from './style'

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const stickyStart = headerHeight
  const menuOptions: MenuOptions[] = [
    {
      title: 'Home'
    },
    {
      title: 'Produtos'
    },
    {
      title: 'Acessórios',
      dropdown: [
        {
          title: 'Relógios Informatizados',
        },
        {
          title: 'Relógios Informatizados',
        },
      ]
    },
    {
      title: 'Software'
    },
    {
      title: 'Sobre'
    },
    {
      title: 'Contato'
    }
  ]

  useEffect(() => {
    setIsMobile(window?.innerWidth >= 768 ? false : true)

    const handleScroll = () => {
      setIsSticky(window.scrollY > stickyStart)
    }

    const handleResize = (event: Event) => {
      const target = event.target as Window
      setIsMobile(target.innerWidth >= 768 ? false : true)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <NavbarWrapper>
      {!isMobile && (
        <FirstHalf>
          <LogoTopComponnet />
        </FirstHalf>
      )}
      <SecondHalf>
        {!isMobile && <HeaderComponent />}
        <NavbarBottomComponent
          sticky={isSticky || isMobile}
          isMobile={isMobile}
          menuOptions={menuOptions}
        />
      </SecondHalf>
    </NavbarWrapper>
  )
}

export default NavbarComponent