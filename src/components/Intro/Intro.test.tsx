import Intro from './Intro'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { test, describe, beforeEach, expect } from 'vitest'

beforeEach(() => {
  render(<Intro />)
})

describe.only('<Intro />', async () => {
  test('test something', () => {
    expect(screen.getByText(/Blog/)).toBeTruthy()
  })
})
