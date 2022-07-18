import Hero from './Hero'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { test, descriibe, expect, beforeEach } from "vitest";

const image = {
  src: './images/image-hero-desktop.png',
  srcSet: ['./images/image-hero-mobile.png', './images/image-hero-desktop.png'],
  alt: 'FrontMentor challenge hero image'
}
beforeEach(() => {
  render(<Hero imgAttrs={image} />)
})

describe('<Hero />', async () => {
  test('test something', () => {
    expect(screen.getByAltText(image.alt)).toBeInTheDocument()
  })
})
