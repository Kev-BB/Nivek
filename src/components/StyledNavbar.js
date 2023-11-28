import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='NivekLogo.png' className='logo'/>
      <input type='text'/>
      <IoSearch className="search-icon"/>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  )
}
export default Navbar
