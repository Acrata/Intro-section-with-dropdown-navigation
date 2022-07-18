
import styled, { keyframes } from 'styled-components/macro'

interface INavigationContainer {
  toggle: boolean
}

const FadeIn = keyframes`
   from {
    opacity: 0;
    transform: translateX(-3%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`
const FadeOut = keyframes`
 from {
    opacity: 1;
    transform: translateY(-10%);
  }
  to {
    opacity: 0;
    transform: translateY(-33%);
  }
`
const NavigationContainer = styled.div<INavigationContainer>`
  display: flex;
  transform: translateX(100%);
  position: absolute;
  top: 0;
  right: calc(var(--margin) * -1);
  width: 70%;
  height: 100vh;
  background-color: var(--white);
  flex-direction: column;
  opacity: 0;
  transition: transform .6s ease-in-out, opacity .6s ease-in .800ms;
  li a {
    text-decoration: none;
    color: inherit;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: var(--margin);
    margin-block-start: calc(var(--margin-sm) * 9);
    font-size: 1.2em;
    margin-inline-start: var(--margin);
  }
  nav ul ul {
    display: flex;
    flex-direction: column;
    gap: var(--margin);
    margin-inline-start: calc(var(--margin) * 2);
    margin-block: var(--margin);
    li {
      display: flex;
      gap: var(--margin-sm);
      &:hover {
        color: var(--black);
      }
    }
  }
    button{
      background-color: transparent;
      border: none;
      color: inherit;
      padding: 0;
    }
  
  button[name='close'] {
    position: absolute;
    top:var(--margin);
    right:var(--margin);
    cursor: pointer;
  }
  
    [data-state='open'] ul{
      animation: ${FadeIn} 300ms ease-out forwards;
    }
    [data-state='close'] ul{
      animation: ${FadeOut} 3s ease-in forwards;
    }
  .parent-item {
    display: flex;
    align-items: center;
    gap: var(--margin);
    position: relative;
    width: 100%;
    max-width: 200px;
    &[data-state='closed']:after {
      background: url('./images/icon-arrow-down.svg');
      background-repeat: no-repeat;
    }
    &[data-state='open']:after {
      background: url('./images/icon-arrow-up.svg');
      background-repeat: no-repeat;
    }
    &:after  {
      content:'';
      position: absolute;
      inset: 35% 0 0 50%;
    }
    &:hover {
      color: var(--black);
    }
  }
  .login-btn {
    margin-block-start: 25%;
  }
  .register-btn {
    border: 2px solid var(--grey);
    padding-block: var(--margin-sm);
    margin-inline: var(--margin);
    border-radius: var(--margin);
    width: 80%;
    margin: var(--margin) auto;
    color: var(--grey);
  }
  &.is-active {
    transform: translateX(0%);
    opacity:1;
    transition: transform .6s ease-in-out, opacity .6s ease-in .800ms;
  }

  @media only screen and (min-width: 1200px){
      flex:1;
      flex-direction: row;
      background-color: transparent;
      position: relative;
      opacity:1;
      transform: translateX(0%);
      height: 50px;
      width: inherit;
      [data-state='open'] {
        .icon-down {
          display: flex;
          transform: rotate(180deg);
        }
      }
      [data-state='closed'] {
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
          li {
            width: 100%;
          }
        }
      }
    
    li div[data-state='open']{
      background-color: var(--white);
      height: auto;
      margin-top: var(--margin-sm);
      position: absolute;
      right: .3em;
      border-radius: 5px;
      padding-inline: 2em;
      padding-block: .7em;
      width: 100%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      z-index:10;
      animation: ${FadeIn} 300ms ease-out forwards;
    }

    li div[data-state='close']{
      animation: ${FadeOut} 300ms ease-in forwards;
    }
    
    .parent-item {
      overflow: visible;
    }
    .parent-item:after  {
      content:"";
      position: absolute;
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
      padding: 9px 25px;
      width: auto;
      margin: 0 0 0 2em;
      
      align-self: center;
    &:hover {
        color: var(--black);
        border: 2px solid var(--black);
      }
    }
  }
`
export default NavigationContainer
