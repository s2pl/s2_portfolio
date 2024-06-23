import React from 'react'
import './component.css'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Looking from '../static_data/web_content/looking.jpg'
import carrierm1 from '../static_data/web_content/carrier-middle-2.jpg'
import carrierm2 from '../static_data/web_content/carrier-middle.jpg'
import carrierm3 from '../static_data/web_content/carrier-miidle-3.jpg'
import { CButton, CModal, CModalBody, CModalFooter } from '@coreui/react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'
const Carrier = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalFront, setShowModalFront] = useState(false);
  const [showModalPyhton, setShowModalPyhton] = useState(false);
  const [showModalIot, setShowModalIOt] = useState(false);

  return (
    <div>
      <div className='carrier'>
        <div className='carrier-top'>
          <div className='carrier-top-cover'>
            <div className='carrier-top-content'>
              <h1>Career</h1>
              <p>Join the Team <span>Let's grow together! </span></p>
            </div>
          </div>
        </div>
        <div className='carrier-req'>
          <div className='carrier-quotes'>
            <div className='left-carrier-quotes'>
              <div className='para'>
                <p className='carrier-para-head'>Who we're looking for</p>
              </div>
              <p>At <span style={{ fontWeight: "700" }}>Sarva Suvidhaen</span> , we believe in building a team of passionate individuals who are eager to make a meaningful impact. We're on the lookout for talented and dedicated professionals who share our commitment to excellence and innovation.</p>

              <p>Qualities We Value:</p>
              <p className='quality'>
                We seek individuals who are driven by a passion for excellence in their work. Whether you're an experienced professional or a recent graduate, if you strive for perfection, you'll find a home here.

                Innovation is at the core of what we do. We welcome creative minds who can think outside the box and bring fresh perspectives to the table.

                Collaboration is key to our success. We value team players who can work seamlessly with colleagues, fostering a positive and collaborative work environment.

                In a dynamic and ever-changing industry, adaptability is crucial. We're looking for individuals who can thrive in a fast-paced environment and embrace challenges with a positive attitude.</p>
            </div>
            <div className='right-carrier-quotes'>
              <div className='carrier-quotesimage'>
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />} ><img src={Looking} alt="logo" loading="lazy"></img></LazyLoad>   
              </div>
            </div>
          </div>
        </div>
        <div className='carrier-picture'>
          <div className='carrier-pic1'>
          <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />} ><img src={carrierm1} alt="logo" loading="lazy"></img></LazyLoad> 
          </div>
          <div className='carrier-pic1'>
          <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />} ><img src={carrierm2} alt="logo" loading="lazy"></img></LazyLoad>   
          </div>
          <div className='carrier-pic1'>
          <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />} ><img src={carrierm3} alt="logo" loading="lazy"></img></LazyLoad> 
          </div>
        </div>
        <div className='employe-req'>

          <div className='employe-req-head'>

          </div>
          <div className='employee-satisfy'>
            <div className='employee-satisfy-part'>
              <span className="material-symbols-outlined">
                timer
              </span>
              <h4>Flexible hours</h4>

            </div>
            <div className='employee-satisfy-part'>
              <span class="material-symbols-outlined">
                filter_alt
              </span>
              <h4>Free Snacks & Drinks</h4>

            </div>
            <div className='employee-satisfy-part'>
              <span className="material-symbols-outlined">
                stadia_controller
              </span>
              <h4>Gaming</h4>

            </div>
            <div className='employee-satisfy-part'>
              <span className="material-symbols-outlined">
                calendar_month
              </span>
              <h4>6 Working Days</h4>

            </div>
          </div>
        </div>
        <div className='carrier-apply'>
          <div className='apply-content-cover pt-3'>
            <p className='apply-heading'>Job Opening </p>
            <div className='apply-content'>

              <div className='domain-content-left'>

                <h4>
                  Android Developement</h4>
                <ul>
                  <li> Position: Android Developer [Fresher/ Intern]
                  </li>
                  <li>Mode of Work: Work from Home</li>
                  <li>Salary/ Stipend: As per industry standards</li>
                </ul>
              </div>
              <div className='btn-apply'>
                <button className='apply-btn' onClick={() => setShowModal(true)}>
                  Veiw details
                </button>
                <button className='apply-btn just-apply ' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>
              </div>
            </div>
            <CModal visible={showModal} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal"
              size="xl"
              onClose={() => {
                setShowModal(false);
              }}  >
              <CModalBody className="custom-modal-body">
                <div className='apply-details'>
                  <div className='="apply-des'>
                    <p className='apply-heading'>Andriod Development </p>
                    <div className='apply-des-content'>
                      <ol className='apply-ollist'>
                        <li className='apply-list'><p><span>Position : </span>Android Developer (Fresher)</p></li>
                        <li className='apply-list'><p><span>Location : </span>Work from Home</p></li>
                        <li className='apply-list'><p><span>Salary : </span>As per industry standards</p></li>
                        <li className='apply-list'><p><span>Job-Types : </span>Full-time/Part-Time</p></li>
                      </ol>
                      <div className='apply-about'>
                        <h4>Abouts-us :</h4>
                        <p>We extend all kinds of services. We're into web and app development primarily and we take all kinds of projects.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Job Description :</h4>
                        <p>As an Android Developer, you will be an integral part of our mobile app development team. This role is designed for talented individuals who are passionate about Android app development and eager to launch their career in the tech industry.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Key Responsibilities :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Working on Android Development</p></li>
                          <li className='apply-list'><p>Write clean, efficient, and maintainable code.</p></li>
                          <li className='apply-list'><p>Debug and troubleshoot issues to ensure app performance.</p></li>
                          <li className='apply-list'><p>Stay updated with the latest Android development trends and technologies.</p></li>
                          <li className='apply-list'><p>Contribute to the entire app development lifecycle, from concept to delivery.e</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Requirement :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Basic understanding of Android app development concepts.</p></li>
                          <li className='apply-list'><p>Knowledge of programming languages such as Java or Kotlin.</p></li>
                          <li className='apply-list'><p>Strong problem-solving skills and attention to detail.</p></li>
                          <li className='apply-list'><p>Eagerness to learn and adapt to new technologies.</p></li>
                          <li className='apply-list'><p>Excellent communication and teamwork abilities.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Benefits :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Flexible work hours.</p></li>
                          <li className='apply-list'><p>Letter of recommendation</p></li>
                          <li className='apply-list'><p>Career growth and advancement prospects.</p></li>
                          <li className='apply-list'><p>
                            A collaborative and innovative work environment.</p></li>
                          <li className='apply-list'><p>Job Offer</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Opening  : </h4>
                        <p>10 openings</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Who can apply:</h4>
                        <p>Only those candidates can apply who:</p>
                        <ol className='apply-ollist'>

                          <li className='apply-list'><p>Are available for the work from home job/internship.</p></li>
                          <li className='apply-list'><p>Are available for a duration of 3 months.</p></li>
                          <li className='apply-list'><p>Have relevant skills and interests.</p></li>
                          <li className='apply-list'><p>
                            Women wanting to start/restart their career can also apply.</p></li>

                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>How to Apply :</h4>
                        <p>If you're enthusiastic about Android development and excited to embark on your career journey with us, please fill up the form in careers page. We look forward to reviewing your application and having you join our team!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='apply-btn' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>

              </CModalBody>
              <CModalFooter>
                <CButton className="custom-button" onClick={() => setShowModal(false)}>
                  Ok
                </CButton>
              </CModalFooter>
            </CModal>
            <div className='apply-content'>
              <div className='domain-content-left'>

                <h4>
                  Python Developement</h4>
                <ul>
                  <li> Position: Android Developer [Fresher/ Intern]
                  </li>
                  <li>Mode of Work: Work from Home</li>
                  <li>Salary/ Stipend: As per industry standards</li>
                </ul>
              </div>
              <div className='btn-apply'>
              <button className='apply-btn' onClick={() => setShowModalPyhton(true)}>
                Veiw details
              </button>
                <button className='apply-btn just-apply ' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>
              </div>
            

            </div>
            <CModal visible={showModalPyhton} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
              onClose={() => {
                setShowModalPyhton(false);
              }}  >
              <CModalBody className="custom-modal-body">
                <div className='apply-details'>
                  <div className='="apply-des'>
                    <p className='apply-heading'>Python Development </p>
                    <div className='apply-des-content'>
                      <ol className='apply-ollist'>
                        <li className='apply-list'><p><span>Position : </span>Python Developer (Fresher)</p></li>
                        <li className='apply-list'><p><span>Location : </span>Work from Home</p></li>
                        <li className='apply-list'><p><span>Salary : </span>As per industry standards</p></li>
                        <li className='apply-list'><p><span>Job-Types : </span>Full-time/Part-Time</p></li>
                      </ol>
                      <div className='apply-about'>
                        <h4>Abouts-us :</h4>
                        <p>
                          We extend all kinds of services. We're into web and app development primarily and we take all kinds of projects.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Job Description :</h4>
                        <p>As a Python Developer, you will be an integral part of our team, focusing on Django or FastAPI development. This role is designed for talented individuals who are passionate about web development and eager to launch or advance their career in the tech industry.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Key Responsibilities :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Working on Django or FastAPI development.</p></li>
                          <li className='apply-list'><p>nderstanding and implementing Rest APIs.</p></li>
                          <li className='apply-list'><p>Coordinating with the team to fulfill project requirements.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Requirements :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Strong knowledge of Python.</p></li>
                          <li className='apply-list'><p>Experience with Django or FastAPI.</p></li>
                          <li className='apply-list'><p>Strong problem-solving skills and attention to detail.</p></li>
                          <li className='apply-list'><p>Eagerness to learn and adapt to new technologies.</p></li>
                          <li className='apply-list'><p>Excellent communication and teamwork abilities.
                          </p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Benefits :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Flexible work hours.</p></li>
                          <li className='apply-list'><p>Letter of recommendation</p></li>
                          <li className='apply-list'><p>Career growth and advancement prospects.</p></li>
                          <li className='apply-list'><p>A collaborative and innovative work environment.</p></li>
                          <li className='apply-list'><p>Job Offer</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Openings :</h4>
                        <p>10 openings</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Who Can Apply :</h4>
                        <p>Only those candidates can apply who:</p>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Are available for the work from home job/internship.</p></li>
                          <li className='apply-list'><p>Are available for a duration of 3 months.</p></li>
                          <li className='apply-list'><p>Have relevant skills and interests.</p></li>
                          <li className='apply-list'><p>Women wanting to start/restart their career can also apply.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>How to Apply :</h4>
                        <p>If you're enthusiastic about Android development and excited to embark on your career journey with us, please fill up the form in careers page. We look forward to reviewing your application and having you join our team!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='apply-btn' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>

              </CModalBody>
              <CModalFooter>
                <CButton className="custom-button" onClick={() => setShowModalPyhton(false)}>
                  Ok
                </CButton>
              </CModalFooter>
            </CModal>
            <div className='apply-content'>
              <div className='domain-content-left'>

                <h4>
                  Front End Developement</h4>
                <ul>
                  <li> Position:   Front End Developer [Fresher/ Intern]
                  </li>
                  <li>Mode of Work: Work from Home</li>
                  <li>Salary/ Stipend: As per industry standards</li>
                </ul>
              </div>
              <div className='btn-apply'>
              <button className='apply-btn' onClick={() => setShowModalFront(true)}>
                Veiw details
              </button>
                <button className='apply-btn just-apply ' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>
              </div>


            </div>
            <CModal visible={showModalFront} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
              onClose={() => {
                setShowModalFront(false);
              }}  >
              <CModalBody className="custom-modal-body">
                <div className='apply-details'>
                  <div className='="apply-des'>
                    <p className='apply-heading'>Front End Development </p>
                    <div className='apply-des-content'>
                      <ol className='apply-ollist'>
                        <li className='apply-list'><p><span>Position : </span>Front End Developer (Fresher)</p></li>
                        <li className='apply-list'><p><span>Location : </span>Work from Home</p></li>
                        <li className='apply-list'><p><span>Salary : </span>As per industry standards</p></li>
                        <li className='apply-list'><p><span>Job-Types : </span>Full-time/Part-Time</p></li>
                      </ol>
                      <div className='apply-about'>
                        <h4>Abouts-us :</h4>
                        <p>
                          We extend all kinds of services. We're into web and app development primarily and we take all kinds of projects.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Job Description :</h4>
                        <p>As an Front End Developer, you will be an integral part of our mobile app development team. This role is designed for talented individuals who are passionate about Front End app development and eager to launch their career in the tech industry.

                        </p>
                      </div>
                      <div className='apply-about'>
                        <h4>Key Responsibilities :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Working on Front End Development
                          </p></li>
                          <li className='apply-list'><p>Write clean, efficient, and maintainable code.</p></li>
                          <li className='apply-list'><p>Debug and troubleshoot issues to ensure app performance.</p></li>
                          <li className='apply-list'><p>Stay updated with the latest Front End development trends and technologies.</p></li>
                          <li className='apply-list'><p>Contribute to the entire app development lifecycle, from concept to delivery.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Requirements :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Basic understanding of Front End app development concepts.</p></li>
                          <li className='apply-list'><p>Knowledge of programming languages such as Java Script(React is preferable), HTML, CSS</p></li>
                          <li className='apply-list'><p>Strong problem-solving skills and attention to detail.</p></li>
                          <li className='apply-list'><p>Eagerness to learn and adapt to new technologies.</p></li>
                          <li className='apply-list'><p>Excellent communication and teamwork abilities.
                          </p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Benefits :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Flexible work hours.</p></li>
                          <li className='apply-list'><p>Letter of recommendation</p></li>
                          <li className='apply-list'><p>Career growth and advancement prospects.</p></li>
                          <li className='apply-list'><p>A collaborative and innovative work environment.</p></li>
                          <li className='apply-list'><p>Job Offer</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Openings :</h4>
                        <p>10 openings</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Who Can Apply :</h4>
                        <p>Only those candidates can apply who:</p>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Are available for the work from home job/internship.</p></li>
                          <li className='apply-list'><p>Are available for a duration of 3 months.</p></li>
                          <li className='apply-list'><p>Have relevant skills and interests.</p></li>
                          <li className='apply-list'><p>Women wanting to start/restart their career can also apply.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>How to Apply :</h4>
                        <p>If you're enthusiastic about Android development and excited to embark on your career journey with us, please fill up the form in careers page. We look forward to reviewing your application and having you join our team!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='apply-btn' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>

              </CModalBody>
              <CModalFooter>
                <CButton className="custom-button" onClick={() => setShowModalFront(false)}>
                  Ok
                </CButton>
              </CModalFooter>
            </CModal>
            <div className='apply-content'>
              <div className='domain-content-left'>

                <h4>
                  IoT hardware Developement</h4>
                <ul>
                  <li> Position:  IoT hardware Developer [Fresher/ Intern]
                  </li>
                  <li>Mode of Work: Work from Home</li>
                  <li>Salary/ Stipend: As per industry standards</li>
                </ul>
              </div>
              <div className='btn-apply'>
              <button className='apply-btn' onClick={() => setShowModalIOt(true)}>
                Veiw details
              </button>
                <button className='apply-btn just-apply ' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>
              </div>
             

            </div>
            <CModal visible={showModalIot} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
              onClose={() => {
                setShowModalIOt(false);
              }}  >
              <CModalBody className="custom-modal-body">
                <div className='apply-details'>
                  <div className='="apply-des'>
                    <p className='apply-heading'>IoT hardware Development </p>
                    <div className='apply-des-content'>
                      <ol className='apply-ollist'>
                        <li className='apply-list'><p><span>Position : </span>IoT hardware Developer (Fresher)</p></li>
                        <li className='apply-list'><p><span>Location : </span>Work from Home</p></li>
                        <li className='apply-list'><p><span>Salary : </span>As per industry standards</p></li>
                        <li className='apply-list'><p><span>Job-Types : </span>Full-time/Part-Time</p></li>
                      </ol>
                      <div className='apply-about'>
                        <h4>Abouts-us :</h4>
                        <p>
                          We extend all kinds of services. We're into web and app development primarily and we take all kinds of projects.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Job Description :</h4>
                        <p>As an IoT hardware Developer, you will be an integral part of our mobile app development team. This role is designed for talented individuals who are passionate about IoT hardware app development and eager to launch their career in the tech industry.</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Key Responsibilities :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Working on IoT hardware Development</p></li>
                          <li className='apply-list'><p>Write clean, efficient, and maintainable code.</p></li>
                          <li className='apply-list'><p>Debug and troubleshoot issues to ensure app performance.</p></li>
                          <li className='apply-list'><p>Stay updated with the latest IoT hardware development trends and technologies.
                          </p></li>
                          <li className='apply-list'><p>Contribute to the entire app development lifecycle, from concept to delivery.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Requirements :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Basic understanding of IoT hardware End app development concepts.
                          </p></li>
                          <li className='apply-list'><p>Knowledge of programming languages such as Java Script(React is preferable), HTML, CSS</p></li>
                          <li className='apply-list'><p>Strong problem-solving skills and attention to detail.
                          </p></li>
                          <li className='apply-list'><p>Eagerness to learn and adapt to new technologies.</p></li>
                          <li className='apply-list'><p>Excellent communication and teamwork abilities.
                          </p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Benefits :</h4>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Flexible work hours.</p></li>
                          <li className='apply-list'><p>Letter of recommendation</p></li>
                          <li className='apply-list'><p>Career growth and advancement prospects.</p></li>
                          <li className='apply-list'><p>A collaborative and innovative work environment.</p></li>
                          <li className='apply-list'><p>Job Offer</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>Openings :</h4>
                        <p>10 openings</p>
                      </div>
                      <div className='apply-about'>
                        <h4>Who Can Apply :</h4>
                        <p>Only those candidates can apply who:</p>
                        <ol className='apply-ollist'>
                          <li className='apply-list'><p>Are available for the work from home job/internship.</p></li>
                          <li className='apply-list'><p>Are available for a duration of 3 months.</p></li>
                          <li className='apply-list'><p>Have relevant skills and interests.</p></li>
                          <li className='apply-list'><p>Women wanting to start/restart their career can also apply.</p></li>
                        </ol>
                      </div>
                      <div className='apply-about'>
                        <h4>How to Apply :</h4>
                        <p>If you're enthusiastic about Android development and excited to embark on your career journey with us, please fill up the form in careers page. We look forward to reviewing your application and having you join our team!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='apply-btn' ><a href="https://docs.google.com/forms/d/1wYJenXrIO8Ia7WIz9ndpskvFmG5H1JJX7W7Aw1STlMM/edit" target="_blank">Apply Now</a></button>

              </CModalBody>
              <CModalFooter>
                <CButton className="custom-button" onClick={() => setShowModalIOt(false)}>
                  Ok
                </CButton>
              </CModalFooter>
            </CModal>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Carrier
