import Header from './Header'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, describe, expect, beforeEach } from 'vitest'

const user = userEvent.setup()
// const handleClick = jest.fn();
// beforeEach(() => {
// })

describe('<Header />', async () => {
  const { container } = render(<Header />)
  test('Test Menu and logo', async () => {
    expect(screen.getByText(/Company/)).toBeTruthy()
    expect(screen.getByRole(/img/)).toBeTruthy()
    expect(screen.getByText(/Features/)).toBeTruthy()
    // await user.click(screen.getByTestId('menu-icon'))
    // await expect(container.getElementsByClassName('is-active').length).toBe(1)
    // expect(handleClick).toBeCalledTimes(1)
  })
})
