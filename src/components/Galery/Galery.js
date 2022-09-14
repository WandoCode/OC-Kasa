import { useState, useEffect } from 'react'

function Galery(props) {
  const pictures = props.pictures
  const [currImg, setCurrImg] = useState(0)
  const [images, setImages] = useState()
  useEffect(() => {
    setImages(
      <div className="images">
        <img src={pictures.at(currImg - 1)} alt="" />
        <img src={pictures.at(currImg)} alt="" />
        <img src={pictures.at((currImg + 1) % pictures.length)} alt="" />
      </div>
    )
  }, [currImg])

  const handlePrevImg = () => {
    let newImg = currImg - 1
    if (newImg < 0) newImg = pictures.length - 1
    setCurrImg(newImg)
    console.log(newImg)
  }

  const handleNextImg = () => {
    let newImg = currImg + 1
    if (newImg >= pictures.length) newImg = 0
    setCurrImg(newImg)
    console.log(newImg)
  }

  return (
    <section className="galery">
      <button onClick={handlePrevImg}>Prev</button>
      {images}
      <button onClick={handleNextImg}>Next</button>
    </section>
  )
}

export default Galery
