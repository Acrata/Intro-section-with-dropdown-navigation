import { useState, useEffect, useRef } from 'react'
import Logo from '../../global/Logo'
import MenuIcon from '../../global/MenuIcon'
import Navigation from '../Navigation'
import HeaderContainer from './HeaderStyles'

const Header = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const menuHandler = (): void => {
    setToggle(!toggle)
  }
  return (
    <HeaderContainer className={toggle ? 'menu-active' : ''}>
      <Logo />
      <Navigation active={toggle} menuToggle={setToggle} />
      <button name='menu' data-testid='menu-icon' onClick={menuHandler}>
        <MenuIcon />
      </button>
    </HeaderContainer>
  )
}

export default Header
