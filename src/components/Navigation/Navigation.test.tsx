import Navigation from './Navigation'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<Navigation />)
})

describe('<Navigation />', async () => {
    test('test something', () => {
        expect(screen.getByText(/Navigation/)).toBeInTheDocument()
    })
})