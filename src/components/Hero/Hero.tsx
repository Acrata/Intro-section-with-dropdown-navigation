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
      <img src='./images/image-hero-mobile.png' alt='Hero image' />
    </HeroContainer>
  )
}

export default Hero
