import React from 'react'
import { useState } from 'react';
import phone from '../static_data/web_content/mobilepic.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import servicesImg1 from '../static_data/web_content/idrail.jpg'
import servicesImg2 from '../static_data/web_content/awms.jpg'
import servicesImg3 from '../static_data/web_content/diot.jpg'
import servicesImg4 from '../static_data/web_content/water.jpg'
import userInterface from '../static_data/web_content/@S2_Portfolio.jpg'
import rightpic from '../static_data/web_content/@S2_Portfolio.jpg'
import railmadad from '../static_data/web_content/@S2_Portfolio (2).jpg'
import ACP from '../static_data/web_content/project2.jpg'
import AWMS from '../static_data/web_content/side_pic.jpg'
import Automated from '../static_data/web_content/project5.jpg'
import UI from '../static_data/web_content/project4.jpg'
import LazyLoad from 'react-lazyload';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, } from '@coreui/react';
import { Link } from 'react-router-dom';
const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalFront, setShowModalFront] = useState(false);
  const [showModalPyhton, setShowModalPyhton] = useState(false);
  const [showModalIot, setShowModalIOt] = useState(false);
  const [showModalAwms, setShowModalAwms] = useState(false);
  const [showModalUI, setShowModalUI] = useState(false);
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
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={servicesImg1} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>  
                <h4 className="mb-3">
                  RailMadad Analytics.</h4>
                <p>Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. By analyzing this data, we drive a deeper understanding of rail operations, enhancing efficiency, safety, and overall performance.                  .</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalFront(true)}>Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={userInterface} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>
                <h4 className="mb-3">Interface Design.</h4>
                <p><span className='bold'>Our Software: Where Innovation Meets User-Friendly Design</span>Experience the future of technology with an intuitive interface that makes Software accessible to everyone.
                  Our software's user-friendly design puts the power of IOT at your fingertips,
                  simplifying complex tasks and enhancing your workflow.</p>
                <a href="#" className="service-btn btn-primary"onClick={() => setShowModalUI(true)}>Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={phone} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>  
                <h4 className="mb-3">SwachhDNR.</h4>
                <p>Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. Currently utilized at Patna and Danapur Junction, it offers a user-friendly and effective solution. Simplifying the process, it ensures efficient tracking and assessment of employee performance records.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModal(true)}>Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={servicesImg4} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>  
                <h4 className="mb-3">AWMS - Automated Water Monitoring System.</h4>
                <p>Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations. Through an attached GSM module, this innovative system ensures timely communication, optimizing water availability and utilization during train journeys.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalAwms(true)}>Read More</a>  </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={servicesImg3} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>   
                <h4 className="mb-3">Automated Monitoring System.</h4>
                <p>This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency. It records solar cell and battery voltage, facilitating remote device oversight. Presently deployed at IIT Patna for enhanced performance tracking.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalPyhton(true)}>Read More</a></div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
              <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={servicesImg2} className="card-img-top" alt="..."  loading="lazy" /></LazyLoad>   
                <h4 className="mb-3">ACP Monitoring.</h4>
                <p>An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. Real-time transmission via attached GSM ensures seamless data relay, optimizing operations and safety measures.</p>
                <a href="#" className="service-btn btn-primary mt-3" onClick={() => setShowModalIOt(true)}>Read More</a>
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
        <div className='carrier-apply'>
                <div className=''>
                    <CModal visible={showModal} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal"
                        size="xl"
                        onClose={() => {
                            setShowModal(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>SwachDNR station</p>
                                    <div className='apply-des-content'>
                                        <p> SwachDNR Station is an innovative integrated platform developed to enhance the efficiency and effectiveness of the railway cleaning department within the DNR board of Indian Railways. This comprehensive solution consists of both a website and a mobile application, designed to streamline the management of employee performance records and the rating system for cleanliness across all stations under the jurisdiction of the DNR board.</p>

                                        <p>Through SwachDNR Station, railway authorities can effortlessly track and manage the performance of cleaning personnel, ensuring accountability and incentivizing excellence in service delivery. The platform enables seamless recording, monitoring, and evaluation of cleaning activities, allowing for real-time insights into station cleanliness levels.</p>

                                        <p>Moreover, SwachDNR Station facilitates the implementation of a standardized rating system across all stations, providing valuable feedback mechanisms for both employees and management to continuously improve cleanliness standards. By leveraging technology, this platform not only simplifies administrative tasks but also fosters a culture of cleanliness and professionalism within the railway cleaning department, ultimately contributing to an enhanced travel experience for passengers and a positive image for the Indian Railways.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='read-modal'>
                                <div className='modal-img' >
                                <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={rightpic} alt="" /></LazyLoad>   
                                </div>
                            </div>
                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModal(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={showModalPyhton} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
                        onClose={() => {
                            setShowModalPyhton(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>Automated Monitoring System </p>
                                    <div className='apply-des-content'>
                                        <p>The Automated Monitoring System, developed by Sarva Suvidhaen, represents a groundbreaking solution that seamlessly integrates embedded systems and software to enable real-time monitoring of solar panel efficiency. This innovative software offers a comprehensive suite of tools designed to optimize the performance and productivity of solar energy systems.</p>
                                        <p>At its core, the Automated Monitoring System utilizes embedded sensors and hardware components to collect precise data on various parameters affecting solar panel efficiency, including sunlight intensity, temperature, and voltage output. This data is then transmitted to a centralized software platform, where advanced algorithms analyze and interpret the information in real-time.</p>
                                        <p>
                                            The Automated Monitoring System, developed by Sarva Suvidhaen, represents a groundbreaking solution that seamlessly integrates embedded systems and software to enable real-time monitoring of solar panel efficiency. This innovative software offers a comprehensive suite of tools designed to optimize the performance and productivity of solar energy systems.

                                            At its core, the Automated Monitoring System utilizes embedded sensors and hardware components to collect precise data on various parameters affecting solar panel efficiency, including sunlight intensity, temperature, and voltage output. This data is then transmitted to a centralized software platform, where advanced algorithms analyze and interpret the information in real-time.

                                            Through intuitive dashboards and customizable analytics tools, users gain valuable insights into the performance of their solar energy systems, allowing them to identify potential issues, optimize energy production, and maximize return on investment. The system also incorporates predictive maintenance capabilities, alerting users to potential equipment failures or performance degradation before they occur, thus minimizing downtime and maintenance costs.</p>
                                        <p>Moreover, the Automated Monitoring System is designed to be user-friendly and accessible, with features such as remote monitoring and mobile compatibility, enabling users to monitor and manage their solar panel installations from anywhere, at any time.</p>
                                        <p>Overall, the Automated Monitoring System represents a cutting-edge solution for maximizing the efficiency and reliability of solar energy systems, empowering users to harness the full potential of solar power for a sustainable future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='read-modal'>
                                <div className='modal-img' >
                                <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={Automated} alt="" /></LazyLoad>   
                                </div>
                            </div>
                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModalPyhton(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={showModalFront} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
                        onClose={() => {
                            setShowModalFront(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>RailMadad Analytics </p>
                                    <div className='apply-des-content'>
                                        <p>
                                            RailMadad Analytics is a cutting-edge web application developed by Sarva Suvidhaen, specializing in leveraging the wealth of data generated by RailMadad to provide invaluable insights for stakeholders within the Indian Railways ecosystem. With a focus on data analysis and visualization, RailMadad Analytics empowers decision-makers with the knowledge needed to make informed choices and drive actionable outcomes.</p>
                                        <p>Through sophisticated algorithms and data processing techniques, RailMadad Analytics extracts meaningful patterns, trends, and correlations from the vast repository of RailMadad data. These insights shed light on various aspects of railway operations, including maintenance, safety, efficiency, and customer service.

                                        </p>
                                        <p>The platform equips railway authorities, managers, and other stakeholders with the tools necessary to monitor performance metrics, identify bottlenecks, and optimize resource allocation. By harnessing the power of data-driven decision-making, RailMadad Analytics enables proactive measures to enhance operational efficiency, improve service quality, and ensure passenger satisfaction.</p>
                                        <p>Moreover, the user-friendly interface of RailMadad Analytics makes it accessible to a wide range of users, from frontline staff to top-level executives, facilitating collaboration and alignment towards common goals. In essence, RailMadad Analytics serves as a strategic tool for driving continuous improvement and innovation within the Indian Railways, ultimately leading to a more reliable, safe, and passenger-friendly railway system.</p>
                                    </div>
                                </div>

                            </div>
                            <div className='read-modal'>
                                <div className='modal-img' >
                                <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={railmadad} alt="" /></LazyLoad>
                                </div>
                            </div>
                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModalFront(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={showModalIot} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
                        onClose={() => {
                            setShowModalIOt(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>ACP Monitoring </p>
                                    <div className='apply-des-content'>
                                        <p>ACP Monitoring, developed by Sarva Suvidhaen, is a revolutionary IoT-driven railway enhancement system designed to effectively record and manage instances of Alarm Chain Pulling (ACP) across railway networks. This innovative solution leverages cutting-edge technology to capture crucial data points such as GPS location, trigger time, and resultant train delay associated with each ACP event.</p>
                                        <p>At its core, ACP Monitoring utilizes a network of IoT devices strategically deployed within trains and railway infrastructure to detect and document instances of ACP in real-time. These devices are equipped with advanced sensors and communication capabilities, allowing them to accurately capture and transmit relevant data to a centralized monitoring platform.</p>
                                        <p>Through sophisticated data analytics algorithms, ACP Monitoring provides railway authorities with actionable insights into the frequency, location, and impact of ACP incidents. By systematically tracking and analyzing this data, stakeholders can identify hotspots prone to ACP, implement targeted interventions to mitigate the occurrence of false alarms, and improve overall operational efficiency.</p>
                                        <p>Furthermore, ACP Monitoring facilitates proactive decision-making by enabling authorities to respond swiftly to ACP incidents, minimize train delays, and enhance passenger safety and satisfaction. By harnessing the power of IoT technology, ACP Monitoring represents a significant step forward in the modernization of railway systems, ultimately leading to a more reliable, punctual, and passenger-friendly rail network.</p>
                                        <div className='read-modal'>
                                            <div className='modal-img' >
                                            <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img src={ACP} alt="" /></LazyLoad>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModalIOt(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={showModalAwms} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
                        onClose={() => {
                            setShowModalAwms(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>AWMS - Automated Water Monitoring System</p>
                                    <div className='apply-des-content'>

                                        <p>The Automated Water Monitoring System (AWMS), developed by Sarva Suvidhaen, is a groundbreaking IoT solution aimed at transforming train water management practices. This innovative system revolutionizes the way water resources are monitored and managed on trains by providing real-time updates on water tank storage levels to upcoming stations.</p>
                                        <p>At its core, AWMS utilizes a network of IoT sensors installed within train water tanks to continuously monitor water levels and other relevant parameters. These sensors are equipped with communication capabilities, allowing them to transmit data in real-time to a centralized monitoring platform.</p>
                                        <p>Through sophisticated algorithms and predictive analytics, AWMS generates accurate forecasts of water consumption patterns and tank refill requirements. This enables railway authorities to proactively plan and optimize water refilling schedules, ensuring that trains have an adequate supply of water to meet passenger needs while minimizing wastage and operational costs.</p>
                                        <p>Moreover, AWMS enhances operational efficiency by providing station staff with timely alerts and notifications regarding upcoming train arrivals and water replenishment needs. This facilitates seamless coordination between train operators and station personnel, streamlining the water replenishment process and reducing turnaround times.</p>
                                        <p>
                                            The Automated Water Monitoring System (AWMS), developed by Sarva Suvidhaen, is a groundbreaking IoT solution aimed at transforming train water management practices. This innovative system revolutionizes the way water resources are monitored and managed on trains by providing real-time updates on water tank storage levels to upcoming stations.

                                            At its core, AWMS utilizes a network of IoT sensors installed within train water tanks to continuously monitor water levels and other relevant parameters. These sensors are equipped with communication capabilities, allowing them to transmit data in real-time to a centralized monitoring platform.

                                            Through sophisticated algorithms and predictive analytics, AWMS generates accurate forecasts of water consumption patterns and tank refill requirements. This enables railway authorities to proactively plan and optimize water refilling schedules, ensuring that trains have an adequate supply of water to meet passenger needs while minimizing wastage and operational costs.

                                            Moreover, AWMS enhances operational efficiency by providing station staff with timely alerts and notifications regarding upcoming train arrivals and water replenishment needs. This facilitates seamless coordination between train operators and station personnel, streamlining the water replenishment process and reducing turnaround times.

                                            Overall, AWMS represents a significant advancement in train water management technology, offering railway operators a cost-effective and sustainable solution for ensuring reliable access to water resources while enhancing passenger comfort and satisfaction.</p>
                                        <div className='read-modal'>
                                            <div className='modal-img' >
                                            <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={AWMS} alt="" /></LazyLoad>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModalAwms(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                    <CModal visible={showModalUI} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
                        onClose={() => {
                          setShowModalUI(false);
                        }}  >
                        <CModalBody className="custom-modal-body">
                            <div className='apply-details'>
                                <div className='="apply-des'>
                                    <p className='apply-heading'>User-Friendly Interface Design</p>
                                    <div className='apply-des-content'>

                          <p>The Interface Design developed by Sarva Suvidhaen embodies the essence of user-friendliness, seamlessly blending innovation with accessibility to create an unparalleled user experience. At its core, this design philosophy is centered around making technology intuitive and easily navigable for users of all backgrounds and skill levels.</p>
                               <p>With a focus on simplicity and clarity, the Interface Design ensures that users can effortlessly interact with the software, regardless of their familiarity with IoT or technology in general. By incorporating intuitive layouts, recognizable icons, and straightforward navigation paths, the design empowers users to quickly grasp the functionality of the software and accomplish tasks with ease.</p>
                                  <p>Moreover, the Interface Design prioritizes user feedback and input, continuously evolving and improving based on user interactions and preferences. This iterative approach ensures that the software remains responsive to the needs and expectations of its users, fostering a sense of ownership and engagement among its user base.</p>
                                            <p>By placing the power of IoT technology at users' fingertips in a user-friendly manner, Sarva Suvidhaen's Interface Design enhances workflow efficiency and productivity, enabling users to leverage the full potential of the software without feeling overwhelmed or intimidated. In essence, it represents a harmonious convergence of innovation and usability, shaping the future of technology in a way that is inclusive and accessible to all.
                                      </p>    <div className='read-modal'>
                                            <div className='modal-img' >
                                            <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={UI} alt="" /></LazyLoad>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </CModalBody>
                        <CModalFooter>
                            <CButton className="custom-button" onClick={() => setShowModalUI(false)}>
                                Ok
                            </CButton>
                        </CModalFooter>
                    </CModal>
                </div>
            </div>
      </section>

    </div>
  )
}

export default Services
