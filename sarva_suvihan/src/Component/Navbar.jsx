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
      <div classNameName="navigate">

        <ul className='nav'>
          <li className='email'>

            <span class="material-symbols-outlined phone">
              phonelink_setup
            </span>
            <a href="https://wa.me/9123183988?text=Hello%20from%20your%20website" target="_blank">
              <button>Contact Us on WhatsApp</button>
            </a>


          </li>
          <li className='email'>

            <span class="material-symbols-outlined phone">
              mail
            </span>
            <a href="mailto:sarvasuvidhan@gmail.com" className='pointer'><i className="fas fa-envelope mr-2"></i><span>SarvaSuvidhan@gmail.com</span></a>

          </li>
          <li className='email'>
            <span class="material-symbols-outlined phone">
              call
            </span > <a href="tel:91231 83988" className='pointer'>Call Us : <span className='pointer text-red-700'>+91 91231 83988</span></a>
          </li>
        </ul>

        <div id="navbar" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-4">
                  <div className='logo-cover'>
                    <Link className="navbar-brand  logo" to="/">
                      <img src={logo} alt="logo"></img>
                    </Link>
                    <button className="navbar-toggler collapsed" onClick={() => setMedia(!showMedia)} type="button" data-toggle="collapse" data-target="#navbarsExample09"
                      aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation" >{showMedia ?
                        (<span class="material-symbols-outlined">
                          dangerous
                        </span>) : (<span class="material-symbols-outlined">
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
                        <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/carrier" onClick={() => setMedia(!showMedia)} >Carrier</Link></li>

                        <li className="nav-item @@service" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/contact-us" onClick={() => setMedia(!showMedia)} >Contect us</Link></li>
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
