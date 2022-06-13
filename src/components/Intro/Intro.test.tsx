import Intro from './Intro'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<Intro />)
})

describe('<Intro />', async () => {
    test('test something', () => {
        expect(screen.getByText(/Intro/)).toBeInTheDocument()
    })
})