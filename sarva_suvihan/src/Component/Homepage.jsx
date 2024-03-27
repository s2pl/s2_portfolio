import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import phone from '../static_data/web_content/mobilepic.png'
import logo from '../static_data/web_content/logo.png'
import servicesImg1 from '../static_data/web_content/idrail.jpg'
import servicesImg2 from '../static_data/web_content/awms.jpg'
import servicesImg3 from '../static_data/web_content/diot.jpg'
import servicesImg4 from '../static_data/web_content/water.jpg'
import supportImg1 from '../static_data/web_content/iciit.jpeg'
import supportImg2 from '../static_data/web_content/supporter1.jpeg'
import supportImg3 from '../static_data/web_content/supporter3.jpeg'
const Homepage = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [count, setcount] = useState(false);
    var settings = {
        dots: false,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        nextArrow: null,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };
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
                    <Slider ref={sliderRef} {...settings}>

                        <div className="item" id="item1" >
                            <div className='item-cover'>
                                <div className="content" data-aos="fade-down">
                                    <div className="name">
                                        <div className='head-name'>
                                            SwachDNR App                                     </div>
                                    </div>
                                    <div className="des">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management.</div>
                                    <button className='btn'><a target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.cms.android.cleaningmanagementsystem.app"
                                        class="text-decoration-none">DOWNLOAD NOW</a></button>
                                </div>
                                <div className='img'>
                                    <img src={phone}></img>
                                </div>
                            </div>
                        </div>
                        <div className="item" id="item2">
                            <div className='item-cover'>
                                <div className="content">
                                    <div className="name name-margin">
                                        <div className='head-name'>
                                            AWMS - Automated Water Monitoring System                                 </div>
                                    </div>

                                    <button className='btn'><a target="_blank"
                                        href="https://pms.suvidhaen.com/"
                                        class="text-decoration-none">VISITED NOW</a></button>
                                </div>
                                <div className='img'>
                                </div>
                            </div>

                        </div>
                        <div className="item" id="item3">
                            <div className='item-cover'>
                                <div className="content">
                                    <div className="name">
                                        <div className='head-name'>
                                        </div>
                                    </div>
                                    <div className="des  " >
                                    </div>
                                    <button className='btn' style={{ marginTop: "15rem" }}><a target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.suvidhaen.swachhdnr"
                                        class="text-decoration-none">VISITED NOW</a></button>
                                </div>
                                <div className='img'>

                                </div>
                            </div>

                        </div>
                        <div className="item" id="item4">
                            <div className='item-cover'>

                            </div>

                        </div>

                    </Slider>
                </div>
            </div>
            <div className='slider-btn'>

                <button className={`slider-button ${buttonClass(0)}`} onClick={() => goToSlide(0)}><span class="material-symbols-outlined slide-btn " >
                    sdk
                </span> SwachDNR App</button>
                <button className={`slider-button ${buttonClass(1)}`} onClick={() => goToSlide(1)}><span class="material-symbols-outlined slide-btn" >
                    settings_system_daydream
                </span> AWMS </button>
                <button className={`slider-button ${buttonClass(2)}`} onClick={() => goToSlide(2)}><span class="material-symbols-outlined slide-btn" >
                    train
                </span>
                    RailMadad Analytics</button>
                <button className={`slider-button ${buttonClass(3)}`} onClick={() => goToSlide(3)}><span class="material-symbols-outlined slide-btn" >
                    school
                </span>Gyan</button>

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

                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">SwachDNR station</h5>
                                <p className="card-text pb-4">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. </p>
                                <a href="#" className="service-btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg1} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title ">RailMadad Analytics</h5>
                                <p className="card-text pb-4">
                                    Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. </p>
                                <a href="#" className="service-btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg2} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Automated Monitoring System</h5>
                                <p className="card-text pb-4">This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency.</p>
                                <a href="#" className="service-btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg3} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">ACP Monitoring</h5>
                                <p className="card-text pb-4">An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. </p>
                                <a href="#" className="service-btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card card-show" style={{ width: "15rem;" }}>
                            <img src={servicesImg4} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">AWMS - Automated Water Monitoring System</h5>
                                <p className="card-text pb-4">Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations.</p>
                                <a href="#" className="service-btn btn-primary">Read More</a>
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
        </div>


    )
}

export default Homepage
