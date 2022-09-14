import './hero.css'
import image from '../../assets/heroImg.png'
function Hero() {
  return (
    <section className="hero">
      <img src={image} alt="" />
      <div className="mask"></div>
      <h1>
        Chez vous, <br /> partout et ailleurs
      </h1>
    </section>
  )
}

export default Hero
