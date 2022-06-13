import styled from 'styled-components';

const ClientsContainer = styled.section`
  margin-inline: var(--margin-sm);
  margin-block: calc(var(--margin) * 3);
  display: flex;
  gap: var(--margin);
  position: relative;
  z-index: -2;
  .client {
    img {
      width: 90%;
    }
  }
`
const Clients = (): JSX.Element => {
  return (
    <ClientsContainer>
      <div className='client'>
        <img src='./images/client-databiz.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-audiophile.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-meet.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-maker.svg' alt='' />
      </div>
    </ClientsContainer>
  )
}

export default Clients
