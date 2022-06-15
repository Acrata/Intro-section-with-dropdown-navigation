import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../global/Logo'
import MenuIcon from '../../global/MenuIcon'
import Navigation from '../Navigation'

const HeaderContainer = styled.header`
    display: flex;
    align-items: baseline;
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
  .icon-up, .icon-down {
    display: none;
  }

  @media only screen and (min-width: 1200px){
    max-width:1640px;
    margin: 0 auto;
    padding-block-start: var(--margin);
    z-index:10;
    svg {
      transform: scale(1.1);
    }
    div {
      flex:1;
      flex-direction: row;
      background-color: transparent;
      position: relative;
      opacity:1;
      transform: translateX(0%);
      height: 50px;
      width: inherit;
      [data-state='open'] {
        .icon-up {
          display: flex;
        }
        .icon-down {
          display: none;
        }
      }
      [data-state='closed'] {
        .icon-up {
          display: none;
        }
        .icon-down {
          display: flex;
        }
      }
      nav {
        margin:0;
        margin-inline-start: calc(var(--margin) * 3);
        flex-direction: row;
        display: flex;
        align-items: center;
        width: auto;
        div {
          height: inherit;
          padding: 6px;
          flex:1;
          ul {margin:0;}
        }
      }
    }
    
    li div[data-state="open"]{
      background-color: var(--white);
      height: auto;
      transform-origin: 100%;
      margin-top: var(--margin-sm);
      position: absolute;
      border-radius: 3px;
      padding-inline: .5em;
      padding-block: 1em;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    .parent-item {
      overflow: visible;
    }
    .parent-item:after  {
      content:"";
      position: absolute;
      display: none;
    }
    .menu-icon, .menu-close {
      display: none;
    }

    .login-btn, .register-btn, button, a {
      cursor: pointer;
      &:hover {
        color: var(--black);
      }
    }

    .login-btn {
      margin-inline-start: auto;
      margin-block-start:0;
    }
    .register-btn {
      margin-block-start:1em;
      margin-block-end:0;
      padding: 5px 25px;
      width: auto;
      margin: 0 0 0 2em;
      position: relative;
      &:hover {
        color: var(--black);
        border: 2px solid var(--black);
      }
    }
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
