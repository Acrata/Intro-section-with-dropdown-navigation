import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../global/Logo'
import MenuIcon from '../../global/MenuIcon'
import Navigation from '../Navigation'

const HeaderContainer = styled.header`
    display: flex;
    margin-inline: var(--margin);
    margin-block-end: var(--margin-sm);
    padding-block-start: var(--margin-sm);
    position: relative;
    .menu-icon {
      appearance: none;
      background-color: transparent;
      border: none;
      margin-inline-start: auto;
      cursor: pointer;
    }
  &.menu-active:after {
    content: "";
    position: absolute;
    /* inset: 0 -30% 0 -100%; */
    left: calc(var(--margin) * -1);
    top: 0;
    width:100vw;
    height: 100vh;
    background-color:rgba(23,23,23,.9);
    z-index:-1;
    pointer-events: none;
  }
`
const Header = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false)
  const menuHandler = (e: Event): void => {
    setToggle(!toggle)
  }
  return (
    <HeaderContainer className={toggle ? 'menu-active' : ''}>
      <Logo />
      <Navigation active={toggle} menuToggle={setToggle} />
      <button className='menu-icon' onClick={menuHandler}>
        <MenuIcon />
      </button>
    </HeaderContainer>
  )
}

export default Header
