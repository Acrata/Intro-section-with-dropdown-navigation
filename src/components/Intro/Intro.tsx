import Header from '../Header'
import Hero from '../Hero'
import HeroCTA from '../HeroCTA'
import Clients from '../Clients'
import Main from './Introstyles'

const heroCTAData: IHeroCTA = {
  title: 'Make remote work',
  content: 'Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.',
  buttonText: 'Learn more',
  image: {
    src: './images/image-hero-desktop.png',
    srcSet: ['./images/image-hero-mobile.png', './images/image-hero-desktop.png'],
    alt: 'FrontMentor challenge hero image'
  }
}
const Intro = (): JSX.Element => {
  const { title, content, buttonText, image } = heroCTAData
  return (
    <>
      <Header />
      <Main>
        <Hero imgAttrs={image} />
        <div className='hero-content'>
          <HeroCTA title={title} content={content} buttonText={buttonText} />
          <Clients />
        </div>
      </Main>
    </>
  )
}

export default Intro
