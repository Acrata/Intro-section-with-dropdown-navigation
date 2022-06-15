import Header from '../Header'
import Hero from '../Hero'
import HeroCTA from '../HeroCTA'
import Clients from '../Clients'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media only screen and (min-width: 1200px){
    margin-block-start: calc(var(--margin) * 5);
    display: flex;
    gap: 3em; 
    padding-inline: calc(var(--margin) * 3);
  }
  .hero-img, .hero-content {
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

const Intro = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <div className='hero-img'>
          <Hero />
        </div>
        <div className='hero-content'>
          <HeroCTA />
          <Clients />
        </div>
      </Container>
    </>
  )
}

export default Intro
