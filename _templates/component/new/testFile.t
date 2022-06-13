---
to: ./src/components/<%=Name%>/<%=Name%>.test.tsx
---
import <%=Name%> from './<%-Name%>'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

beforeEach(() => {
    render(<<%-Name%> />)
})

describe('<<%-Name%> />', async () => {
    test('test something', () => {
        expect(screen.getByText(/<%-Name%>/)).toBeInTheDocument()
    })
})