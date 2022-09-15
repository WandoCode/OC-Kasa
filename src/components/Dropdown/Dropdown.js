import { useState } from 'react'
import arrow from '../../assets/down.svg'
import './dropdown.css'

function Dropdown(props) {
  const { datas, title } = props
  const [arrowDirection, setArrowDirection] = useState('arrow-down')
  const [showFilling, setShowFilling] = useState(false)
  let filling
  if (Array.isArray(datas)) {
    filling = (
      <ul className="filling">
        {datas.map((data) => {
          return <li key={data}>{data}</li>
        })}
      </ul>
    )
  } else {
    filling = <p className="filling">{datas}</p>
  }
  const handBtnClick = () => {
    const newDirection =
      arrowDirection === 'arrow-down' ? 'arrow-up' : 'arrow-down'
    setArrowDirection(newDirection)
    showFilling ? setShowFilling(false) : setShowFilling(true)
  }
  return (
    <article className="dropdown">
      <button onClick={handBtnClick}>
        {title} <img className={'arrow ' + arrowDirection} src={arrow} alt="" />
      </button>
      {showFilling && <div className="dropdown-show">{filling}</div>}
    </article>
  )
}

export default Dropdown
