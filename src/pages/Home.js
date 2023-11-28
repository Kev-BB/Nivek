import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ImgCarousel from '../components/Carousel'



const Home = () => {
  return (
    <>
      <section className='section'>
        <h3>Home</h3>
        <ImgCarousel/>
      </section>
    </>
  )
}
export default Home
