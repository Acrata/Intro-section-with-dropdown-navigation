import HeroCTA from './HeroCTA'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<HeroCTA />)
})

describe('<HeroCTA />', async () => {
    test('test something', () => {
        expect(screen.getByText(/HeroCTA/)).toBeInTheDocument()
    })
})