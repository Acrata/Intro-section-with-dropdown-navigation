import React from 'react'
import NavigationContainer from './NavigationStyles'
import {
  MenuClose,
  TodoIcon,
  CalendarIcon,
  RemindersIcon,
  PlanningIcon
} from '../../global/iconIndex'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const Navigation = ({ active, menuToggle }: INavigation): JSX.Element => {
  const menuHandlerClose = (): void => {
    menuToggle(!active)
  }
  return (
    <NavigationContainer toggle={active} className={active ? 'is-active' : ''}>
      <NavigationMenu.Root orientation='vertical'>
        <NavigationMenu.List className='nav-nested'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='parent-item'>
              Features
              <img className='icon-down' src='./images/icon-arrow-down.svg' alt='icon' />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <TodoIcon /><a rel='noopener noreferrer' href='#'>Todo list</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <CalendarIcon /><a rel='noopener noreferrer' href='#'>Calendar</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <RemindersIcon /><a rel='noopener noreferrer' href='#'>Reminders</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <PlanningIcon /><a rel='noopener noreferrer' href='#'>Planning</a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='parent-item'>
              Company
              <img className='icon-down' src='./images/icon-arrow-down.svg' alt='icon' />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.List className='nav-nested'>
                <NavigationMenu.Item>
                  <a rel='noopener noreferrer' href='#'>History</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a rel='noopener noreferrer' href='#'>Our Team</a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a rel='noopener noreferrer' href='#'>Blog</a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <a rel='noopener noreferrer' href='#'>Carrers</a>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <a rel='noopener noreferrer' href='#'>Blog</a>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <button className='login-btn'>Login</button>
      <button className='register-btn'>Register</button>
      <button name='close' onClick={menuHandlerClose}>
        <MenuClose />
      </button>
    </NavigationContainer>
  )
}

export default Navigation
