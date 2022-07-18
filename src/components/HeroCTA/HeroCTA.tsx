import HeroCTAContainer from './HeroCTAStyles'
import { addSpan } from '../../utils/addSpan'

const HeroCTA = ({ title, content, buttonText }: IHeroCTA): JSX.Element => {
  addSpan(title)
  return (
    <HeroCTAContainer>
      <h2 dangerouslySetInnerHTML={{ __html: addSpan(title) }} />
      <p>{content}</p>
      <button>{buttonText}</button>
    </HeroCTAContainer>
  )
}

export default HeroCTA
