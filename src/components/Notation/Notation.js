import './notation.css'
import star from '../../assets/star.svg'
import fullStar from '../../assets/full-star.svg'

function Notation(props) {
  const { rating } = props

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={fullStar} alt="" />)
    } else {
      stars.push(<img src={star} alt="" />)
    }
  }

  return <section className="notation">{stars}</section>
}

export default Notation
