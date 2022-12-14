import star from '../assets/star.svg'
import fullStar from '../assets/full-star.svg'

function Notation(props) {
  const { rating } = props

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img className="star" src={fullStar} alt="" key={i} />)
    } else {
      stars.push(<img className="star" src={star} alt="" key={i} />)
    }
  }

  return <section className="notation">{stars}</section>
}

export default Notation
