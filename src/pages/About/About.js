import image from '../../assets/aboutImg.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import text from '../../assets/aboutText.json'
function About() {
  const dropdowns = text.map((item) => {
    return <Dropdown datas={item.datas} title={item.title} key={item.title} />
  })
  return (
    <main className="about">
      <section className="banner">
        <img src={image} alt="" />
        <div className="mask"></div>
      </section>
      <section className="content">{dropdowns}</section>
    </main>
  )
}
// TODO: gérer le changement de photo
export default About
