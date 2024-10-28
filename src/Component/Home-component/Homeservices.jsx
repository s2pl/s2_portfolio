import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import servicesImg1 from '../../static_data/web_content/idrail.jpg';
import servicesImg2 from '../../static_data/web_content/awms.jpg';
import servicesImg3 from '../../static_data/web_content/diot.jpg';
import servicesImg4 from '../../static_data/web_content/water.jpg';
import railmadad from '../../static_data/web_content/@S2_Portfolio (2).jpg';
import ACP from '../../static_data/web_content/project2.jpg';
import AWMS from '../../static_data/web_content/side_pic.jpg';
import Automated from '../../static_data/web_content/project5.jpg';
import phone from '../../static_data/web_content/mobilepic.png';
import rightpic from '../../static_data/web_content/@S2_Portfolio.jpg';

const Homeservices = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalFront, setShowModalFront] = useState(false);
  const [showModalPyhton, setShowModalPyhton] = useState(false);
  const [showModalIot, setShowModalIOt] = useState(false);
  const [showModalAwms, setShowModalAwms] = useState(false);

  var settings_services = {
    dots: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div>
      <div className='services'>
        <div className='services-head'>
          <p>Best Service</p>
          <p className='paragraph'>Service We Provide</p>
          <div className='design'>
            <div className='line'></div>
            <div className='circle'>
              <span className="material-symbols-outlined">radio_button_checked</span>
            </div>
            <div className='line'></div>
          </div>
        </div>
      </div>
      <div className='services-card-container'>
        <div className='services-card '>
          <Slider {...settings_services}>
            <div className="card card-show  lg:min-w-[15rem] md:min-h-[28rem]" >
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                <img src={phone} className="card-img-top" alt="..." loading="lazy" />
              </LazyLoad>
              <div className="card-body text-center">
                <h5 className="card-title">SwachDNR station</h5>
                <p className="card-text pb-4">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModal(true)}>Read More</a>
              </div>
            </div>
            <div className="card card-show md:min-w-[15rem] md:min-h-[28rem]" >
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                <img src={servicesImg1} className="card-img-top" alt="..." loading="lazy" />
              </LazyLoad>
              <div className="card-body text-center">
                <h5 className="card-title">RailMadad Analytics</h5>
                <p className="card-text pb-4">Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalFront(true)}>Read More</a>
              </div>
            </div>
            <div className="card card-show md:min-w-[15rem] md:min-h-[28rem]">
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                <img src={servicesImg2} className="card-img-top" alt="..." loading="lazy" />
              </LazyLoad>
              <div className="card-body text-center">
                <h5 className="card-title">Automated Monitoring System</h5>
                <p className="card-text pb-4">This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalPyhton(true)}>Read More</a>
              </div>
            </div>
            <div className="card card-show md:min-w-[15rem] md:min-h-[28rem]" >
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                <img src={servicesImg3} className="card-img-top" alt="..." loading="lazy" />
              </LazyLoad>
              <div className="card-body text-center">
                <h5 className="card-title">ACP Monitoring</h5>
                <p className="card-text pb-4">An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalIOt(true)}>Read More</a>
              </div>
            </div>
            <div className="card card-show md:min-w-[15rem] md:min-h-[28rem]" >
              <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                <img src={servicesImg4} className="card-img-top" alt="..." loading="lazy" />
              </LazyLoad>
              <div className="card-body text-center">
                <h5 className="card-title">AWMS - Automated Water Monitoring System</h5>
                <p className="card-text pb-4">Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations.</p>
                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalAwms(true)}>Read More</a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className='carrier-apply'>
        <div>
          <CModal visible={showModal} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
            onClose={() => setShowModal(false)}>
            <CModalBody className="custom-modal-body">
              <div className='apply-details'>
                <div className='apply-des'>
                  <p className='apply-heading'>Swach station</p>
                  <div className='apply-des-content'>
                    <p>SwachDNR Station is an innovative integrated platform developed to enhance the efficiency and effectiveness of the railway cleaning department within the DNR board of Indian Railways. This comprehensive solution consists of both a website and a mobile application, designed to streamline the management of employee performance records and the rating system for cleanliness across all stations under the jurisdiction of the DNR board.</p>
                    <p>Through SwachDNR Station, railway authorities can effortlessly track and manage the performance of cleaning personnel, ensuring accountability and incentivizing excellence in service delivery. The platform enables seamless recording, monitoring, and evaluation of cleaning activities, allowing for real-time insights into station cleanliness levels.</p>
                    <p>Moreover, SwachDNR Station facilitates the implementation of a standardized rating system across all stations, providing valuable feedback mechanisms for both employees and management to continuously improve cleanliness standards. By leveraging technology, this platform not only simplifies administrative tasks but also fosters a culture of cleanliness and professionalism within the railway cleaning department, ultimately contributing to an enhanced travel experience for passengers and a positive image for the Indian Railways.</p>
                  </div>
                  <div className='visit-link'>
                    visit now :
                    <div className='app-name'><a target="_blank"
                                        href="https://cms.suvidhaen.com/"
                                        className="text-decoration-none">Swach Station website</a></div>
                    <div className='app-name'><a target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.biputri.rsms"
                                        className="text-decoration-none">Swach Station App</a></div>
                    <div className='app-name'><a target="_blank"
                                        href="https://youtube.com/playlist?list=PLPXLxMmLRj-Ia_sqcsx6DGK__88I0SIUc&si=K1el360woew-sYAJ"
                                        className="text-decoration-none">Swach Station More Information... </a></div>
                  </div>
                </div>
              </div>
              <div className='read-modal'>
                <div className='modal-img'>
                  <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                    <img src={rightpic} alt="" loading="lazy" />
                  </LazyLoad>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton className="custom-button" onClick={() => setShowModal(false)}>Ok</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={showModalPyhton} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
            onClose={() => setShowModalPyhton(false)}>
            <CModalBody className="custom-modal-body">
              <div className='apply-details'>
                <div className='apply-des'>
                  <p className='apply-heading'>Automated Monitoring System</p>
                  <div className='apply-des-content'>
                    <p>The Automated Monitoring System, developed by Sarva Suvidhaen, represents a groundbreaking solution that seamlessly integrates embedded systems and software to enable real-time monitoring of solar panel efficiency. This innovative system revolutionizes the way solar energy systems are managed and optimized.</p>
                    <p>By leveraging advanced embedded technology, the Automated Monitoring System continuously collects data on solar panel performance, including parameters such as energy output, temperature, and environmental conditions. This data is then transmitted to a centralized software platform, where it is analyzed and processed in real-time.</p>
                    <p>Through intuitive dashboards and analytics, users gain comprehensive insights into the efficiency and performance of their solar panels. The system provides detailed reports, trend analysis, and alerts for any anomalies or deviations from optimal performance. This proactive approach enables timely maintenance and troubleshooting, maximizing energy generation and minimizing downtime.</p>
                    <p>Moreover, the Automated Monitoring System facilitates remote monitoring and control, allowing users to access and manage their solar energy systems from anywhere, at any time. This level of convenience and flexibility enhances the overall user experience and empowers solar energy system owners to make informed decisions regarding their energy production and consumption.</p>
                    <p>Sarva Suvidhaen's Automated Monitoring System represents a significant advancement in the field of solar energy management, driving efficiency, sustainability, and cost-effectiveness. By harnessing the power of embedded systems and software, this solution empowers users to optimize their solar panel performance and contribute to a greener and more sustainable future.</p>
                  </div>
                  <div className='visit-link'>
                    visit now :
                    <div className='app-name'><a target="_blank"
                                        href=" "
                                        className="text-decoration-none">Automated Monitoring System website</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">Automated Monitoring System App</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">Automated Monitoring System More Information... </a></div>
                  </div>
                </div>
              </div>
              <div className='read-modal'>
                <div className='modal-img'>
                  <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                    <img src={Automated} alt="" loading="lazy" />
                  </LazyLoad>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton className="custom-button" onClick={() => setShowModalPyhton(false)}>Ok</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={showModalFront} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
            onClose={() => setShowModalFront(false)}>
            <CModalBody className="custom-modal-body">
              <div className='apply-details'>
                <div className='apply-des'>
                  <p className='apply-heading'>RailMadad Analytics</p>
                  <div className='apply-des-content'>
                    <p>Sarva Suvidhaen's expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. Their proficiency in analyzing RailMadad data allows organizations to gain meaningful insights and make well-informed decisions based on the information obtained from the platform.</p>
                    <p>Through advanced analytics techniques, Sarva Suvidhaen unlocks the hidden potential of RailMadad data, transforming it into actionable intelligence. By leveraging their expertise, they help organizations identify trends, patterns, and key performance indicators that drive operational efficiency, customer satisfaction, and overall business success.</p>
                    <p>With Sarva Suvidhaen's RailMadad Analytics, organizations can uncover critical insights, optimize processes, and enhance decision-making capabilities, ultimately leading to improved outcomes and a competitive edge in the railway industry.</p>
                  </div>
                  <div className='visit-link'>
                    visit now :
                    <div className='app-name'><a target="_blank"
                                        href=" https://sanchalak.suvidhaen.com/"
                                        className="text-decoration-none">Sanchalak website</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">Sanchalak App</a></div>
                    <div className='app-name'><a target="_blank"
                                        href="https://youtube.com/playlist?list=PLPXLxMmLRj-IuWl-8p4b-oS63m5kw9HQD&si=OZ-Y-2QxqHdSDgMy"
                                        className="text-decoration-none">Sanchalak More Information... </a></div>
                  </div>
                </div>
              </div>
              <div className='read-modal'>
                <div className='modal-img'>
                  <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                    <img src={railmadad} alt="" loading="lazy" />
                  </LazyLoad>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton className="custom-button" onClick={() => setShowModalFront(false)}>Ok</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={showModalIot} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
            onClose={() => setShowModalIOt(false)}>
            <CModalBody className="custom-modal-body">
              <div className='apply-details'>
                <div className='apply-des'>
                  <p className='apply-heading'>ACP Monitoring</p>
                  <div className='apply-des-content'>
                    <p>Introducing the ACP Monitoring Solution, an innovative IoT-driven enhancement system designed to revolutionize railway operations. This advanced solution is specifically developed to record and tally instances of Alarm Chain Pulling (ACP) in real-time, providing comprehensive insights for improved efficiency and safety.</p>
                    <p>Utilizing state-of-the-art IoT technology, the ACP Monitoring Solution captures vital data related to ACP events, including the GPS location, time of the trigger, and the subsequent train delay. By seamlessly integrating these data points into a centralized platform, railway authorities gain a holistic view of ACP incidents, enabling prompt and effective responses.</p>
                    <p>The ACP Monitoring Solution offers an intuitive interface that provides real-time notifications and alerts, ensuring immediate awareness of ACP events. This empowers railway personnel to swiftly address any issues, minimizing disruptions and optimizing operational efficiency.</p>
                    <p>Furthermore, the system's robust analytics capabilities enable in-depth analysis of ACP patterns, helping identify recurring issues and implement proactive measures to prevent future occurrences. By leveraging this data-driven approach, railway authorities can enhance safety protocols, reduce delays, and improve overall passenger experience.</p>
                    <p>Sarva Suvidhaen's ACP Monitoring Solution represents a significant advancement in railway management, combining IoT technology and data analytics to deliver actionable insights and drive operational excellence. With this solution, railways can achieve enhanced safety, efficiency, and reliability in their operations.</p>
                  </div>
                  <div className='visit-link'>
                    visit now :
                    <div className='app-name'><a target="_blank"
                                        href=" "
                                        className="text-decoration-none">ACP Monitoring website</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">ACP Monitoring App</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">ACP Monitoring More Information... </a></div>
                  </div>
                </div>
              </div>
              <div className='read-modal'>
                <div className='modal-img'>
                  <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                    <img src={ACP} alt="" loading="lazy" />
                  </LazyLoad>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton className="custom-button" onClick={() => setShowModalIOt(false)}>Ok</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={showModalAwms} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
            onClose={() => setShowModalAwms(false)}>
            <CModalBody className="custom-modal-body">
              <div className='apply-details'>
                <div className='apply-des'>
                  <p className='apply-heading'>AWMS - Automated Water Monitoring System</p>
                  <div className='apply-des-content'>
                    <p>The Automated Water Monitoring System (AWMS) is an advanced IoT solution designed to revolutionize the management of water storage in trains. This innovative system provides real-time updates on water tank levels to upcoming stations, ensuring efficient and proactive water management throughout the journey.</p>
                    <p>Through the integration of IoT technology, AWMS continuously monitors the water levels in train tanks, collecting data on usage patterns and storage conditions. This information is transmitted to a centralized platform, enabling real-time visibility and control over water resources.</p>
                    <p>With AWMS, railway authorities can optimize water replenishment schedules, ensuring that trains are adequately supplied with water at all times. The system generates alerts and notifications when water levels reach predefined thresholds, allowing proactive measures to be taken to avoid any disruptions in water supply.</p>
                    <p>Furthermore, AWMS provides valuable insights into water consumption patterns, helping identify areas for improvement and efficiency enhancement. By analyzing data trends, railway authorities can implement water-saving measures, reduce wastage, and promote sustainable practices.</p>
                    <p>The Automated Water Monitoring System by Sarva Suvidhaen offers a comprehensive solution for efficient water management in trains, combining IoT technology, real-time monitoring, and data analytics to ensure a seamless and sustainable water supply. This solution enhances operational efficiency, passenger comfort, and environmental sustainability within the railway ecosystem.</p>
                  </div>
                  <div className='visit-link'>
                    visit now :
                    <div className='app-name'><a target="_blank"
                                        href=" https://wrms.suvidhaen.com/"
                                        className="text-decoration-none">WRMS website</a></div>
                    <div className='app-name'><a target="_blank"
                                        href=""
                                        className="text-decoration-none">WRMS App</a></div>
                    <div className='app-name'><a target="_blank"
                                        href="https://www.youtube.com/watch?v=sE0MSpaW8yY&list=PLPXLxMmLRj-IToSMknV0iFVFSEdrpA0v4"
                                        className="text-decoration-none">WRMS More Information... </a></div>
                  </div>
                </div>
              </div>
              <div className='read-modal'>
                <div className='modal-img'>
                  <LazyLoad placeholder={<Skeleton min-width={240} min-height={240} />}>
                    <img src={AWMS} alt="" loading="lazy" />
                  </LazyLoad>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton className="custom-button" onClick={() => setShowModalAwms(false)}>Ok</CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
    </div>
  )
}

export default Homeservices;
