import styled from 'styled-components'

const HeroCTAContainer = styled.section`
  margin-block: calc(var(--margin) * 2);
  margin-inline: var(--margin);
  position: relative;
  z-index: -2;
  h2 {
    text-align: center;
    font-size: 2.2em;
  }
  p {
    text-align: center;
    margin-block: calc(var(--margin) * 2);
  }
  button {
    display: flex;
    margin-inline: auto;
    appearance: none;
    background-color: var(--black);
    color: var(--white);
    padding: var(--margin) 2em;
    border: none;
    border-radius: 15px;
  }
  @media only screen and (min-width: 1200px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:1em;
    max-height: 40vh;
    z-index:9;
    h2 {
      font-size: 6.2em;
      text-align: left;
      margin-top: 0;
      margin-bottom: 20px;
      line-height: 1;
    }
    h2 span {
      display:block;
    }
    p {
      text-align: left;
      width: max(250px, 450px);
      margin-top: 0;
      line-height: 1.75;
      margin-block-end:calc(var(--margin) * 2);
      font-size: 1.2em;
    }
    button {
      margin-inline: 0;
      margin-top: 1em;
      cursor: pointer;
      &:hover {
        background-color: transparent;
        border: 2px solid var(--black);
        color: var(--black);
        font-weight: 700;
      }
    }
  }
`

const HeroCTA = (): JSX.Element => {
  return (
    <HeroCTAContainer>
      <h2>Make <span>remote work</span></h2>
      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button>Learn more</button>
    </HeroCTAContainer>
  )
}

export default HeroCTA
