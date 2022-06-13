import styled from 'styled-components'

const HeroCTAContainer = styled.section`
  margin-block: calc(var(--margin) * 2);
  margin-inline: var(--margin);
  position: relative;
  z-index: -2;
  h2 {
    text-align: center;
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
`

const HeroCTA = (): JSX.Element => {
  return (
    <HeroCTAContainer>
      <h2>Make remote work</h2>
      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button>Learn more</button>
    </HeroCTAContainer>
  )
}

export default HeroCTA
