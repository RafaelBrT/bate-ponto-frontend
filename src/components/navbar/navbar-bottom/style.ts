import styled from 'styled-components'

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  &.container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.25rem;
  }
`

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavbarBottomWrapper = styled.header`
  width: 100%;
  height: auto;
  z-index: 10;
  margin: 0 auto;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &.sticky {
    position: fixed;
    left: 0;
    top: 0;
  }

  .menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100%;
    z-index: 10;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.5s ease-in-out;

    &.is-active {
      top: 0;
      left: 0;
    }

    &-inner {
      display: flex;
      flex-direction: column;
      row-gap: 1.25rem;
      margin: 1.25rem;
      list-style-type: none;
    }

    &-link {
      text-decoration: none;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      text-transform: uppercase;
      color: hsl(0, 0%, 10%);
      transition: all 0.3s ease;

      &:hover {
        color: hsl(221, 83%, 55%);
      }
    }

   @media (min-width: ${props => props.theme.media.md}) {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: none;
    display: flex;
    justify-content: center;

    .dropdown {
      z-index: 200;
      background-color: green;
      position: absolute;
      width: fit-content;
      p {
        border-bottom: 1px solid black;
        background-color: white;
        padding: 0.5rem;
        cursor: pointer;
      }
    }

    &-inner {
      display: flex;
      flex-direction: row;
      column-gap: 1.75rem;
      margin-right: 5rem;
      margin: 0;
      height: 100%;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &-item {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }
    
    &-link {
      text-transform: capitalize;
    }

    &-block {
      margin-left: 2rem;
    }
   }
  }

  .burger {
    position: relative;
    display: block;
    cursor: pointer;
    order: -1;
    width: 1.6rem;
    height: auto;
    border: none;
    outline: none;
    visibility: visible;

    &-line {
      display: block;
      cursor: pointer;
      width: 100%;
      height: 2px;
      margin: 6px auto;
      transform: rotate(0deg);
      border-radius: 1rem;
      background: hsl(0, 0%, 10%);
    }

    @media (min-width: ${props => props.theme.media.md}) {
      display: none;
      visibility: hidden;
    }
}

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out;

    &.is-active {
    display: block;
    opacity: 1;
    visibility: visible;
    }
  }

  .search {
    &-toggle,
    &-cancel {
      display: block;
      cursor: pointer;
      font-size: 1.45rem;
      line-height: inherit;
      color: hsl(0, 0%, 10%);
      overflow: hidden;
    }

   &-block {
    position: absolute;
    top: 0;
    right: -100vw;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;
    background-color: hsl(0, 0%, 100%);
    transition: all 0.35s ease-in-out;

    &.is-active {
      top: 0;
      right: 0;
    }
   }

   &-form {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: white;
    span {
      overflow-x: hidden;
    }
   }

   &-input {
    display: block;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 100%;
    height: auto;
    padding: 0.65rem 1.25rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    color: hsl(0, 0%, 10%);
    background-color: hsl(0, 0%, 95%);

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button {
      display: none;
      visibility: hidden;
    }
   }
  }
`