export interface INavbarBottom {
  sticky: boolean
  isMobile: boolean
  menuOptions: MenuOptions[]
}

interface SubMenu {
  title: string
  link?: string
}

export interface MenuOptions {
  title: string
  link?: string
  dropdown?: SubMenu[]
}