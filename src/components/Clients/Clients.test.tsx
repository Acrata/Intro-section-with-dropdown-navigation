import Clients from './Clients'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<Sponsors />)
})

describe('<Sponsors />', async () => {
    test('test something', () => {
        expect(screen.getByText(/Sponsors/)).toBeInTheDocument()
    })
})