import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Fotter = () => {
  return (
    <div>
      <footer className="footer section bg-gray-800 text-white px-12 pt-12">
        <div className="container mx-auto px-12 responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "white" }}>Company</h4>
                <ul className="list-unstyled footer-menu leading-5">
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/processing">Terms & Conditions</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/processing">Privacy Policy</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/processing">Support</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/processing">FAQ</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "white" }}>Quick Links</h4>
                <ul className="list-unstyled footer-menu leading-5">
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/">Home</Link></li>
                  <li className='fotter-list' ><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/about-us">Abouts us</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/services">Services</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/portfolio">Portfolio</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/carrier">Carrier</Link></li>
                  <li className='fotter-list'><span class="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/contact-us">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "white" }}>Subscribe </h4>
                <p>Subscribe to get the latest news, articles, and resources</p>
                <form action="#" className="sub-form">

                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <Link to="" target="_blank" rel="noopener noreferrer" className="sub-btn btn-main btn-small">Subscribe </Link>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4 ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <div className="copyright">
                  © 2023 suvidhaen.com All rights reserved  <Link to="/" className="cursor-pointer " style={{color:" red", marginLeft:"1.5rem"}}>Sarva Suvidhan PVT.LTD</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Fotter
