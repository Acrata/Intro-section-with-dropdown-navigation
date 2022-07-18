import Clients from './Clients'
import { render, screen } from '@testing-library/react'
import { test, expect, describe, beforeEach } from 'vitest'

beforeEach(() => {
  render(<Clients />)
})

describe.only('<Clients />', async () => {
  test('test something', () => {
    expect(screen.getByAltText(/logo/)).toBeInTheDocument()
  })
})
