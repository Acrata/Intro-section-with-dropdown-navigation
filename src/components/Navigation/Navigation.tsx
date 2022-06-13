import styled from 'styled-components'
import MenuClose from '../../global/MenuClose'
import TodoIcon from '../../global/TodoIcon'
import CalendarIcon from '../../global/CalendarIcon'
import RemindersIcon from '../../global/RemindersIcon'
import PlanningIcon from '../../global/PlanningIcon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

interface INavigationContainer {
  toggle: boolean;
}
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
  nav {
    display: flex;
    flex-direction: column;
    gap: var(--margin);
    margin-block-start: 55%;
    font-size: 1.2em;
    margin-inline-start: var(--margin);
    ul ul {
      display: flex;
      flex-direction: column;
      gap: var(--margin);
      margin-inline-start: calc(var(--margin) * 2);
      margin-block: var(--margin);
      li {
        display: flex;
        gap: var(--margin-sm);
      }
      li a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
    button{
      background-color: transparent;
      border: none;
      color: inherit;
      padding: 0;
    }
  
  .menu-close {
    position: absolute;
    top:var(--margin-sm);
    right:var(--margin);
    cursor: pointer;
  }

  .parent-item {
    display: flex;
    align-items: center;
    gap: var(--margin);
    position: relative;
    width: 100%;
    &[data-state='closed']:after {
      background: url('./images/icon-arrow-down.svg');
      background-repeat: no-repeat;
    }
    &[data-state='open']:after {
      background: url('./images/icon-arrow-up.svg');
      background-repeat: no-repeat;
    }
    &:after  {
      content:"";
      position: absolute;
      inset: 35% 0 0 50%;
    }
  }
  .login-btn {
    margin-block-start: 25%;
  }
  .register-btn {
    margin-block-start: var(--margin);
    margin-block-end: 25%;
    border: 1px solid var(--black);
    padding-block: var(--margin-sm);
    margin-inline: var(--margin);
    border-radius: var(--margin);
  }
  &.is-active {
    transform: translateX(0%);
    opacity:1;
    transition: transform .6s ease-in-out, opacity .6s ease-in .800ms;
  }
`
interface INavigation {
  active: boolean
  menuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({active , menuToggle}:INavigation): JSX.Element => {
  console.log(active, 'nav')
  const menuHandlerClose = (ev: Event): void => {
    // console.log({active.menuToggle(false), 'mh', menuToggle})
    // active.menuToggle(!active.active)
    menuToggle(!active)
  }
  return (
    <NavigationContainer toggle={active} className={active ? 'is-active' : ''}>
      <NavigationMenu.Root orientation='vertical'>
        <NavigationMenu.List className='nav-nested'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='parent-item'>
              Features
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <TodoIcon /><a href='#'>Todo list</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <CalendarIcon /><a href='#'>Calendar</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <RemindersIcon /><a href='#'>Reminders</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <PlanningIcon /><a href='#'>Planning</a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='parent-item'>
              Company
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            Carrers
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            Blog
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <button className='login-btn'>Login</button>
      <button className='register-btn'>Register</button>
      <button onClick={menuHandlerClose} className='menu-close'>
        <MenuClose />
      </button>
    </NavigationContainer >
  )
}

export default Navigation
