import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg p-3 ">
  <div className="container">
    <Link className="navbar-brand" to='/'>Prachar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/users'>Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/services'>services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>contact</Link>
        </li>
      </ul>

      <Link class="btn btn-secondary " role="button"  to={"/login"}>login</Link>

    </div>
  </div>
</nav>
  )
}

export default Navbar
