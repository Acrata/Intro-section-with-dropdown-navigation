import styled from 'styled-components/macro'

const HeroContainer = styled.div`
  position: relative;
  z-index: -2;
  margin-block-start: calc(var(--margin) * 2);
  img {
    width:100%;
  }
`

const Hero = ({ imgAttrs }: IHeroImgAttrs): JSX.Element => {
  const { src, srcSet, alt } = imgAttrs
  // console.log({imgAttrs : {src}} =props, 'PP');
  return (
    <HeroContainer className='hero-img'>
      <img
        srcSet={`${srcSet[0] as string} 1000w,
      ${srcSet[1] as string} 1200w`}
        src={src}
        alt={alt}
      />
    </HeroContainer>
  )
}

export default Hero
