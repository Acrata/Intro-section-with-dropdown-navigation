import HeroCTA from './HeroCTA'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { test, describe, expect, beforeEach } from 'vitest'

beforeEach(() => {
  render(<HeroCTA title='Title test' buttonText='Learn more' />)
})

describe('<HeroCTA />', async () => {
  test('test button', () => {
    expect(screen.getByText(/Learn more/)).toBeTruthy()
  })
})
