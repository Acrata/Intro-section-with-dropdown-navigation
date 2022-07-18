import styled from 'styled-components/macro'

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: -2;
  @media only screen and (min-width: 1200px){
    margin-block-start: calc(var(--margin) * 5);
    display: flex;
    gap: 3em; 
    padding-inline: calc(var(--margin) * 3);
    position: relative;
    z-index: 9;
  }
  .hero-img, .hero-content { // <Hero className='hero-img />
    flex: 0 50%;
  }
  .hero-content {
    flex:1;
    order: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    margin-block-start: calc(var(--margin)* 3);
  }
  .hero-img {
    flex: 0 1 35%;
    order:1;
  }
`
export default Main
