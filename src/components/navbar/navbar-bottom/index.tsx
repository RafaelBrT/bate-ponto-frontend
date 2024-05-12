'use client'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdArrowRoundBack } from 'react-icons/io'
import ProgressBarComponent from '@components/progress-bar'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { INavbarBottom } from './interfaces/navbar-bottom-interface'
import { Logo, Navbar, NavbarBottomWrapper } from './style'

const NavbarBottomComponent = ({ sticky, isMobile, menuOptions }: INavbarBottom) => {

  const [searchOpen, setSearchOpen] = useState(false)
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const [dropdownIndex, setDropdownIndex] = useState<number|null>()

  useEffect(() => {
    !isMobile && setBurgerMenuOpen(false)
  }, [isMobile])

  return (
    <NavbarBottomWrapper className={sticky ? 'sticky' : ''}>
      <Navbar className="navbar container">
        <Logo href="./index.html">
          {sticky && (
            <motion.img
              src="/images/logo.png"
              width={150}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </Logo>
        <div
          className="burger"
          id="burger"
          onClick={() => setBurgerMenuOpen(true)}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <span
          className={`overlay ${burgerMenuOpen ? 'is-active' : ''}`}
          onClick={() => setBurgerMenuOpen(false)}
        >
        </span>
        <div
          className={`menu ${burgerMenuOpen ? 'is-active' : ''}`}
          id="menu"
        >
          <ul className="menu-inner">
            {menuOptions.map((menu, index) => (
              <div
                key={index}
                style={{ height: '100%', position: 'relative' }}
                onMouseEnter={() => setDropdownIndex(index)}
                onMouseLeave={() => setDropdownIndex(null)}
              >
                <li className="menu-item">
                  <Link
                    className="menu-link"
                    href="#"
                    onClick={() => setBurgerMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
                {dropdownIndex === index && menu.dropdown && (
                  <div className="dropdown">
                    {menu.dropdown.map((dropdown, index) => (
                      <p key={index}>
                        {dropdown.title}
                      </p>
                    ))}
                  </div>
              )}
              </div>
            ))}
          </ul>
        </div>
        <span>
          <CiSearch
            className="search-toggle"
            onClick={() => setSearchOpen(true)}
          />
        </span>
        <div className={`search-block ${searchOpen ? 'is-active' : ''}`}>
          <form className="search-form">
            <span>
              <IoMdArrowRoundBack
                className="search-cancel"
                onClick={() => setSearchOpen(false)}
              />
            </span>
            <input
              type="search"
              name="search"
              className="search-input"
              placeholder="Procure aqui..."
            />
          </form>
        </div>
      </Navbar>
      {sticky && <ProgressBarComponent />}
    </NavbarBottomWrapper>
  )
}

export default NavbarBottomComponent