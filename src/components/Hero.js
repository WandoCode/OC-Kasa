import image from '../assets/heroImg.png'

function Hero() {
  return (
    <section className="hero">
      <img src={image} alt="" />
      <div className="mask"></div>
      <h1>
        <span>Chez vous, &nbsp;</span> <span>partout et ailleurs</span>
      </h1>
    </section>
  )
}

export default Hero
