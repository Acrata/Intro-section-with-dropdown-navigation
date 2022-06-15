import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  z-index: -2;
  img {
    width:100%;
  }
`

const Hero = (): JSX.Element => {
  return (
    <HeroContainer>
      <img
        srcSet='./images/image-hero-mobile.png 1000w,
      ./images/image-hero-desktop.png 1200w'
        src='./images/image-hero-desktop.png'
        alt='Hero image' />
    </HeroContainer>
  )
}

export default Hero
