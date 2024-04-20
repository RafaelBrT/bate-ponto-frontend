'use client'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdArrowRoundBack } from 'react-icons/io'
import ProgressBarComponent from '@components/progress-bar'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { INavbarBottom } from './interfaces/navbar-bottom-interface'
import { Logo, Navbar, NavbarBottomWrapper } from './style'

const NavbarBottomComponent = ({ sticky, isMobile }: INavbarBottom) => {

  const [searchOpen, setSearchOpen] = useState(false)
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

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
            <li className="menu-item">
              <Link
                className="menu-link"
                href="#"
                onClick={() => setBurgerMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <li className="menu-item">
                <Link
                  className="menu-link"
                  href="#"
                  onClick={() => setBurgerMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <div className="dropdown">
                <p>teste1</p>
                <p>teste2</p>
              </div>
            </div>
            <li className="menu-item">
              <Link
                className="menu-link"
                href="#"
                onClick={() => setBurgerMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                href="#"
                onClick={() => setBurgerMenuOpen(false)}
              >
                Project
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                href="#"
                onClick={() => setBurgerMenuOpen(false)}
              >
                Support
              </Link>
            </li>
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