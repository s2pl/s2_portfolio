import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Fotter = () => {
  return (
    <div>
      <footer className="footer section  px-12 pt-12">
        <div className="container mx-auto px-12 responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "black" }}>Sarva suvidhaen</h4>
                <p>Our integrated platform, comprising a website and mobile app, streamlines employee performance record management.</p>
                <ul className="list-unstyled footer-social leading-5">
                  <li className='fotter-list'><i className="fa-brands fa-whatsapp media"></i></li>
                  <li className='fotter-list'><i className="fa-brands fa-facebook media"></i></li>
                  <li className='fotter-list'><i className="fa-brands fa-linkedin media"></i></li>
                  <li className='fotter-list'><i className="fa-brands fa-instagram media"></i></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "black" }}>Quick Links</h4>
                <ul className="list-unstyled footer-menu leading-5">
                  <li className='fotter-list'><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/">Home</Link></li>
                  <li className='fotter-list' ><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/about-us">About us</Link></li>
                  <li className='fotter-list'><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/services">Services</Link></li>
                  <li className='fotter-list'><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/portfolio">Portfolio</Link></li>
                  <li className='fotter-list'><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to='/privacypolicy'>Privacy&nbsp;policy</Link></li>
                  <li className='fotter-list'><span className="material-symbols-outlined">
                    arrow_circle_right
                  </span><Link to="/termcondition">Terms & conditions</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="widget">
                <h4 className="text-uppercase mb-4" style={{ color: "black" }}>Get in touch </h4>
                <div className="container">
                  <form action="#" className="sub-form">
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" />
                      </div>
                      <div className="col">
                        <label htmlFor="exampleInputOrganization" className="form-label">Organization</label>
                        <input type="text" className="form-control" id="exampleInputOrganization" placeholder="Enter your organization" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">

                        <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="exampleInputPhone" placeholder="Enter your phone number" />
                      </div>
                      <div className="col">
                        <label htmlFor="exampleInputEmail" className="form-label">Email Address</label>

                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
                      </div>
                    </div>
                    <button type="submit" className="sub-btn btn-main btn-small">Submit</button>
                  </form>

                </div>

              </div>
            </div>
          </div>

          <div className="footer-btm p-2 border-2">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <div className="copyright">
                All rights reserved © 2023 suvidhaen.com <Link to='/privacypolicy'  style={{ fontSize:"1rem",color: "#175ef7", marginLeft: "1rem",cursor: "pointer" }}>
                  Privacy&nbsp;policy
</Link>
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
