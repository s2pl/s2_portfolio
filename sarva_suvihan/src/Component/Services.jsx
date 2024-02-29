import React from 'react'
import phone from '../static_data/web_content/mobilepic.png'
import servicesImg1 from '../static_data/web_content/idrail.jpg'
import servicesImg2 from '../static_data/web_content/awms.jpg'
import servicesImg3 from '../static_data/web_content/diot.jpg'
import servicesImg4 from '../static_data/web_content/water.jpg'
import userInterface from '../static_data/web_content/@S2_Portfolio.jpg'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
      <section className=" servicesbg-1">
        <div className='carrier-top-cover'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center  mb-4" data-aos="fade-up">
                  <h1 className="text-capitalize  text-white">Services </h1>
                  <span className="text-white ">What we do</span>

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section service border-top  pb-5 p-4">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title" data-aos="fade-up">
                <span className="h6 text-color">Our Services</span>
                <h2 className="mt-3 content-title ">We provide the softwere and IOT Product to  their Solve daily life problem </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center p-4">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={servicesImg1} className="card-img-top" alt="..." />
                <h4 className="mb-3">
                  RailMadad Analytics.</h4>
                <p>Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. By analyzing this data, we drive a deeper understanding of rail operations, enhancing efficiency, safety, and overall performance.                  .</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={userInterface} className="card-img-top" alt="..." />
                <h4 className="mb-3">Interface Design.</h4>
                <p><span className='bold'>Our Software: Where Innovation Meets User-Friendly Design</span>Experience the future of technology with an intuitive interface that makes Software accessible to everyone.
                  Our software's user-friendly design puts the power of IOT at your fingertips,
                  simplifying complex tasks and enhancing your workflow.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={phone} className="card-img-top" alt="..." />
                <h4 className="mb-3">SwachhDNR.</h4>
                <p>Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. Currently utilized at Patna and Danapur Junction, it offers a user-friendly and effective solution. Simplifying the process, it ensures efficient tracking and assessment of employee performance records.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg4} className="card-img-top" alt="..." />
                <h4 className="mb-3">AWMS - Automated Water Monitoring System.</h4>
                <p>Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations. Through an attached GSM module, this innovative system ensures timely communication, optimizing water availability and utilization during train journeys.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>  </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg3} className="card-img-top" alt="..." />
                <h4 className="mb-3">Automated Monitoring System.</h4>
                <p>This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency. It records solar cell and battery voltage, facilitating remote device oversight. Presently deployed at IIT Patna for enhanced performance tracking.</p>
                <a href="#" className="service-btn btn-primary">Read More</a></div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg2} className="card-img-top" alt="..." />
                <h4 className="mb-3">ACP Monitoring.</h4>
                <p>An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. Real-time transmission via attached GSM ensures seamless data relay, optimizing operations and safety measures.</p>
                <a href="#" className="service-btn btn-primary mt-3">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" service-contact mb-4">
        <div className='cover-cta-2'>
          <div className="container ">
            <div className="cta-block p-5 rounded">
              <div className="row justify-content-center align-items-center" data-aos="fade-up">
                <div className="col-lg-7 text-center text-lg-left " >
                  <span className=" text-white">For Every type software</span>
                  <h2 className="mt-2 text-white" >Commit Your softwere to Our Skilled and Experienced Professionals</h2>
                </div>
                <div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
                  <Link to="/contact-us" className="btn btn-main btn-round-full float-lg-right ">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
