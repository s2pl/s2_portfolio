import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import logo from '../static_data/web_content/logo.png'
import "./style.css"
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [showMedia, setMedia] = useState(false)
  const [showdrop, setdrop] = useState(false)

  return (
    <div>
      <div className="navigate">

        <ul className='nav'>
          <li className='email'>


            <a href="https://wa.me/9955481699?text=Hello%20from%20your%20website" target="_blank">
              <i className="fa-brands fa-whatsapp what phone "></i>  <button>Contact Us on WhatsApp</button>
            </a>


          </li>
          <li className='email'>

            <span className="material-symbols-outlined  phone gmail">
              mail
            </span>
            <a href="mailto:sarva.suvidhaen@gmail.com" className='pointer'>sarva.suvidhaen@gmail.com</a>

          </li>
          <li className='email'>
            <span className="material-symbols-outlined phone call">
              call
            </span > <a href="tel:99554 81699" className='pointer text-gray-700'>Call Us : +91 9955481699
            </a>
          </li>
        </ul>

        <div id="navbar" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-2">
                  <div className='logo-cover'>
                    <Link to='/' className="navbar-brand  logo" >
                      <img src={logo} alt="logo"></img>
                    </Link>
                    <button className="navbar-toggler collapsed" onClick={() => setMedia(!showMedia)} type="button" data-toggle="collapse" data-target="#navbarsExample09"
                      aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation" >{showMedia ?
                        (<span className="material-symbols-outlined">
                          dangerous
                        </span>) : (<span className="material-symbols-outlined">
                          menu
                        </span>)}
                    </button>
                  </div>
                  <div className='nav-list'>


                    <div className={showMedia ? " nav-animation" : " nav-hide"} id="navbarsExample09">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item @@home " onClick={() => setMedia(!showMedia)} >
                          <Link className="nav-link pointer" to="/" onClick={() => setdrop(false)}>Home</Link>
                        </li>
                        <li className="nav-item @@service" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/about-us" onClick={() => setMedia(!showMedia)} >About us</Link></li>
                        <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/services" onClick={() => setMedia(!showMedia)} >Services</Link></li>

                        <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/porfolio" onClick={() => setMedia(!showMedia)} >Portfolio</Link></li>
                        <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/carrier" onClick={() => setMedia(!showMedia)} >Career</Link></li>

                        <li className="nav-item @@service" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/contact-us" onClick={() => setMedia(!showMedia)} >Contact us</Link></li>
                      </ul>

                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
