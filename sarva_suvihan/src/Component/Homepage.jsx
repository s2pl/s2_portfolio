import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import phone from '../static_data/web_content/mobilepic.png'
import rightpic from '../static_data/web_content/@S2_Portfolio.jpg'
import servicesImg1 from '../static_data/web_content/idrail.jpg'
import servicesImg2 from '../static_data/web_content/awms.jpg'
import servicesImg3 from '../static_data/web_content/diot.jpg'
import servicesImg4 from '../static_data/web_content/water.jpg'
import supportImg1 from '../static_data/web_content/iciit.jpeg'
import supportImg2 from '../static_data/web_content/supporter1.jpeg'
import supportImg3 from '../static_data/web_content/supporter3.jpeg'
import PartnerImg1 from '../static_data/web_content/indainR2logo.png'
import PartnerImg2 from '../static_data/web_content/indianRlogo.jpg'
import PartnerImg3 from '../static_data/web_content/partnerR3logo.png'
import PartnerImg4 from '../static_data/web_content/partnerR4logo.png'
import railmadad from '../static_data/web_content/@S2_Portfolio (2).jpg'
import ACP from '../static_data/web_content/project2.jpg'
import AWMS from '../static_data/web_content/side_pic.jpg'
import Automated from '../static_data/web_content/project5.jpg'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, } from '@coreui/react';
const Homepage = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [count, setcount] = useState(false);
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]

    }
    var settings_client = {
        dots: false,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);

    };
    const buttonClass = (slideIndex) => {

        return activeSlide === slideIndex ? 'active' : ' ';
    };
    return (
        <div>
            {/*  header slider section*/}
            <div className='poster-slider'>
                <div className='poster'>
                    <div className="item" id="item1" >
                        <div className='item-cover'>
                            <div className="content" data-aos="fade-down">
                                <div className="name">
                                    <div className='head-name'>
                                        SwachDNR App                                     </div>
                                </div>
                                <div className="des">
                                    <h5>Accelerate your Growth with our End-to-End Automation Solutions</h5>
                                    <p>We build process automation with seamless integration for optimizing performance
                                        Build with us to realize your full organizational potential </p></div>
                                <div className='link-btn'>
                                    <button className='btn-main'><a target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.cms.android.cleaningmanagementsystem.app"
                                        class="text-decoration-none">DOWNLOAD NOW</a></button>
                                    <button className='btn-main btn-margin'><a target="_blank"
                                        href="https://cms.suvidhaen.com/"
                                        class="text-decoration-none">VISIT NOW</a></button>
                                </div>
                            </div>
                            <div className='img'>
                                <img src={phone} loading="lazy"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='partner'>
                <div className='partner-heading'>
                    Our Partner
                </div>
                <div className='partner-cover'>
                    <div className='partner-card'>
                        <img src={PartnerImg1} alt="" />
                    </div>

                    <div className='partner-card'>
                        <img src={PartnerImg3} alt="" />
                    </div>
                    <div className='partner-card'>
                        <img src={PartnerImg4} alt="" />
                    </div>
                    <div className='partner-card'>
                        <img src={PartnerImg2} alt="" />
                    </div>
                </div>
            </div>
            <div className='description'>
                <div className='discription-cover'>
                    <div className='front-intro'>
                        <h3>Who We Are :</h3>
                        <p>Sarva Suvidhan is a recognized leader in developing process in developing automationfor complex organization and institutional concerns.Our mission is to bring automation, technology
                            and innovation to simplify complex problem. We add value by increasing efficiency and drive data and analytics for higher quality standards.
                        </p>
                        <p>Since our inception, we have worked with large organization to delay inteliigent automation which has helped improve turnarround, improve services quality and bring higher customer satisfaction.</p>
                        <p>Our team of solution architects, designer and developer will help you craft a solution fitted to yur requirements.</p>
                        <p>we are a recoganized DIPP Startup from Bihar and are proud recipients of multiples awards.</p>
                    </div>
                    <div className='front-img'>
                        <img src={rightpic} alt="" />
                    </div>
                </div>
            </div>
            {/*  services  slider section*/}
            <div className='services'>
                <div className='services-head'>
                    <p>Best Service</p>
                    <p className='paragraph'>
                        Service We Provide
                    </p>
                    <div className='design'>
                        <div className='line'>
                        </div>
                        <div className='circle'>
                            <span class="material-symbols-outlined">
                                radio_button_checked
                            </span>
                        </div>
                        <div className='line'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services-card-container '>
                <div className='services-card'>
                    <Slider {...settings_services}>
                        <div className="card card-show " style={{ width: "15rem;" }}>

                            <img src={phone} className="card-img-top" alt="..." loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title">SwachDNR station</h5>
                                <p className="card-text pb-4">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. </p>
                                <a href="#" className="service-btn btn-primary" onClick={() => setShowModal(true)}>Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg1} className="card-img-top" alt="..." loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title ">RailMadad Analytics</h5>
                                <p className="card-text pb-4">
                                    Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. </p>
                                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalFront(true)}>Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg2} className="card-img-top" alt="..." loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Automated Monitoring System</h5>
                                <p className="card-text pb-4">This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency.</p>
                                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalPyhton(true)}>Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg3} className="card-img-top" alt="..." loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title">ACP Monitoring</h5>
                                <p className="card-text pb-4">An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. </p>
                                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalIOt(true)}>Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg4} className="card-img-top" alt="..." loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title">AWMS - Automated Water Monitoring System</h5>
                                <p className="card-text pb-4">Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations.</p>
                                <a href="#" className="service-btn btn-primary" onClick={() => setShowModalAwms(true)}>Read More</a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            {/* counter section */}
            <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                <section className="section counter">
                    <div className="counter-container  py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="counter-item text-center mb-5 sm:mb-0">
                                <h3 className="mb-0"><span className="counter-text">{count && <CountUp start={0} end={70} duration={2} delay={0} />}</span> +</h3>
                                <p className="text-gray-500">Booking Order</p>
                            </div>
                            <div className="counter-item text-center mb-5 sm:mb-0">
                                <h3 className="mb-0"><span className="counter-text">{count && <CountUp start={0} end={40} duration={2} delay={0} />} </span>+ </h3>
                                <p className="text-gray-500">Booking Completed</p>
                            </div>
                            <div className="counter-item text-center mb-5 sm:mb-0">
                                <h3 className="mb-0"><span className="counter-text">{count && <CountUp start={0} end={5} duration={2} delay={0} />}</span></h3>
                                <p className="text-gray-500">Available States</p>
                            </div>
                            <div className="counter-item text-center">
                                <h3 className="mb-0"><span className="counter-text">{count && <CountUp start={0} end={6} duration={2} delay={0} />}</span></h3>
                                <p className="text-gray-500">Award Winner</p>
                            </div>
                        </div>
                    </div>
                </section>

            </ScrollTrigger>
            {/* counter part End */}
            {/* transparent part start */}
            <section className="section cta">
                <div className="container mx-auto who-are">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 comment">
                        <div className="col-span-1 xl:col-span-5 lg:col-span-6">
                            <div className="cta-item bg-white p-5 rounded">
                                <span className="text-sm text-color">Best Service
                                </span>
                                <h2 className="text-2xl mt-2 mb-4">Who We Are?</h2>
                                <p className="text-lg mb-4">Have any software required then? For immediate support:</p>
                                <ul className='service-unlist'>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>RailMadad Analytics</li>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>SwachhDNR</li>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>AWMS - Automated Water Monitoring System</li>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>
                                        Automated Monitoring System</li>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>ACP Monitoring</li>
                                    <li className='service-list'><span class="material-symbols-outlined">
                                        arrow_circle_right
                                    </span>Gyan</li>
                                </ul>
                                <h3>

                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* transparent part end */}
            <div className='clients'>
                <div className='services' style={{ padding: "4.2rem 0rem 0rem 0rem" }}>
                    <div className='services-head'>
                        <p>client</p>
                        <p className='paragraph' style={{ padding: "0.3rem" }}>
                            What client Say
                        </p>
                        <div className='design'>
                            <div className='line'>
                            </div>
                            <div className='circle'>
                                <span class="material-symbols-outlined">
                                    radio_button_checked
                                </span>
                            </div>
                            <div className='line'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feedback'>
                    <div className='feedback-client'>
                        <Slider {...settings_client}>
                            <div className="card feedback-card " style={{ width: "15rem;" }}>
                                <div className="card-body ">
                                    <span class="material-symbols-outlined quote">
                                        format_quote
                                    </span>
                                    <p className="card-text pb-4">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. </p>
                                    <h6 className="card-title">Jay Prakash</h6>
                                    <p>Happy client</p>
                                </div>
                            </div>
                            <div className="card feedback-card" style={{ width: "15rem;" }}>
                                <div className="card-body ">
                                    <span class="material-symbols-outlined quote">
                                        format_quote
                                    </span>

                                    <p className="card-text pb-4">
                                        Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. </p>
                                    <h6 className="card-title ">RailMadad Analytics</h6>
                                    <p>Happy client</p>
                                </div>
                            </div>
                            <div className="card feedback-card" style={{ width: "15rem;" }}>
                                <div className="card-body ">
                                    <span class="material-symbols-outlined quote">
                                        format_quote
                                    </span>

                                    <p className="card-text pb-4">This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency.</p>
                                    <h6 className="card-title">Automated Monitoring System</h6>
                                    <p>Happy client</p>
                                </div>
                            </div>
                            <div className="card feedback-card" style={{ width: "15rem;" }}>
                                <div className="card-body ">
                                    <span class="material-symbols-outlined quote">
                                        format_quote
                                    </span>

                                    <p className="card-text pb-4">An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. </p>
                                    <h6 className="card-title">ACP Monitoring</h6>
                                    <p>Happy client</p>
                                </div>
                            </div>
                            <div className="card feedback-card" style={{ width: "15rem;" }}>
                                <div className="card-body">
                                    <span class="material-symbols-outlined quote">
                                        format_quote
                                    </span>

                                    <p className="card-text pb-4">Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations.</p>
                                    <h6 className="card-title">AWMS - Automated Water Monitoring System</h6>
                                    <p>Happy client</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='government'>
                <h1>Our Supporters</h1>
                <div className='govern'>
                    <div className='govern-card'>
                        <div className='support-img'>
                            <img src={supportImg1} alt="" />

                        </div><p>IIT Patna Incubation Centre</p>
                    </div>
                    <div className='govern-card'>
                        <div className='support-img'>
                            <img src={supportImg2} alt="" />
                        </div>
                        <p>Startup Bihar</p>
                    </div>
                    <div className='govern-card'>
                        <div className='support-img'>
                            <img src={supportImg3} alt="" />
                        </div>
                        <p>Ministry of Electronics and Information Technology</p>
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
                                    <img src={rightpic} alt="" />
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
                                    <img src={Automated} alt="" />
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
                                    <img src={railmadad} alt="" />
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
                                                <img src={ACP} alt="" />
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
                                                <img src={AWMS} alt="" />
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
                </div>
            </div>
        </div>


    )
}

export default Homepage
