import Hero from './Hero'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<Hero />)
})

describe('<Hero />', async () => {
    test('test something', () => {
        expect(screen.getByText(/Hero/)).toBeInTheDocument()
    })
})