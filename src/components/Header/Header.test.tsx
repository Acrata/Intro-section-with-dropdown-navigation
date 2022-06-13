import Header from './Header'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<Header />)
})

describe('<Header />', async () => {
    test('test something', () => {
        expect(screen.getByText(/Header/)).toBeInTheDocument()
    })
})