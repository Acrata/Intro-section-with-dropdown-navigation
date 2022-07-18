import Navigation from './Navigation'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { test, describe, expect, beforeEach } from 'vitest'

beforeEach(() => {
  render(<Navigation menuToggle={() => { return }} active={false} />)
})

describe('<Navigation />', async () => {
  test('test something', () => {
    expect(screen.getByText(/Features/)).toBeTruthy()
  })
})
