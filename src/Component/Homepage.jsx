import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import phone from '../static_data/web_content/mobilepic.png'
import rightpic from '../static_data/web_content/@S2_Portfolio.jpg'
import supportImg1 from '../static_data/web_content/iciit.jpeg'
import supportImg2 from '../static_data/web_content/supporter1.jpeg'
import supportImg3 from '../static_data/web_content/supporter3.jpeg'
import Ourpatner from './Home-component/Ourpatner';
import LazyLoad from 'react-lazyload';
import Homeservices from './Home-component/Homeservices';
const Homepage = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [count, setcount] = useState(false);
   
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
                             <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={phone} loading="lazy"></img></LazyLoad>   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         <Ourpatner/>
            <div className='description'>
                <div className='discription-cover'>
                    <div className='front-intro'>
                        <h3>Who We Are :</h3>
                        <p>Sarva Suvidhaen is a recognized leader in developing process in developing automationfor complex organization and institutional concerns.Our mission is to bring automation, technology
                            and innovation to simplify complex problem. We add value by increasing efficiency and drive data and analytics for higher quality standards.
                        </p>
                        <p>Since our inception, we have worked with large organization to delay inteliigent automation which has helped improve turnarround, improve services quality and bring higher customer satisfaction.</p>
                        <p>Our team of solution architects, designer and developer will help you craft a solution fitted to yur requirements.</p>
                        <p>we are a recoganized DIPP Startup from Bihar and are proud recipients of multiples awards.</p>
                    </div>
                    <div className='front-img'>
                       <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={rightpic} alt=""  loading="lazy" /></LazyLoad> 
                    </div>
                </div>
            </div>
 <Homeservices/>
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
                          <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={supportImg1} alt=""  loading="lazy" /></LazyLoad>  

                        </div><p>IIT Patna Incubation Centre</p>
                    </div>
                    <div className='govern-card'>
                        <div className='support-img'>
                          <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={supportImg2} alt=""  loading="lazy" /></LazyLoad>  
                        </div>
                        <p>Startup Bihar</p>
                    </div>
                    <div className='govern-card'>
                        <div className='support-img'>
                        <LazyLoad placeholder={<Skeleton width={240} height={240} />}>  <img src={supportImg3} alt=""  loading="lazy" /></LazyLoad> 
                        </div>
                        <p>Ministry of Electronics and Information Technology</p>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default Homepage
