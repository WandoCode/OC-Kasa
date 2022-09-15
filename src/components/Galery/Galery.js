import { useState, useEffect } from 'react'
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import './galery.css'
function Galery(props) {
  const pictures = props.pictures
  const [currImg, setCurrImg] = useState(0)
  const [image, setImage] = useState()
  useEffect(() => {
    setImage(
      <>
        <img className="galery-img" src={pictures.at(currImg)} alt="" />
      </>
    )
  }, [currImg])

  const handlePrevImg = () => {
    let newImg = currImg - 1
    if (newImg < 0) newImg = pictures.length - 1
    setCurrImg(newImg)
  }

  const handleNextImg = () => {
    let newImg = currImg + 1
    if (newImg >= pictures.length) newImg = 0
    setCurrImg(newImg)
  }

  return (
    <section className="galery">
      <button className="prev-btn" onClick={handlePrevImg}>
        <img className="btn-img" src={prev} alt="" />
      </button>
      {image}
      <button className="next-btn" onClick={handleNextImg}>
        <img className="btn-img" src={next} alt="" />
      </button>
    </section>
  )
}

export default Galery
