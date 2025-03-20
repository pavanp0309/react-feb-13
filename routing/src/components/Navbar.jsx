import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul style={{display:"flex",listStyleType:"none",justifyContent:"space-between"}}>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>about</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
