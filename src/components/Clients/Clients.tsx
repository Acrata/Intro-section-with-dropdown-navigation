import ClientsContainer from './ClientStyles'

const Clients = (): JSX.Element => {
  return (
    <ClientsContainer>
      <div className='client'>
        <img src='./images/client-databiz.svg' alt='databiz logo' />
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
