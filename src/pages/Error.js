import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>Sayfa Bulunamadı</p>
      <Link to='/' className='btn'>
        Anasayfaya Dön
      </Link>
    </section>
  )
}
export default Error
