import React from 'react'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import profile from '../static_data/web_content/download.png'
import sidepic from '../static_data/web_content/network.jpg'
import cerificate from '../static_data/web_content/certified.jpg';
import director from '../static_data/founders/atul_anand.jpg'
import founder from '../static_data/founders/sanjay_ranjan.jpg'
import cerificate from '../static_data/web_content/certified.jpg'
const Aboutus = () => {
  const [counter, setCounter] = useState(false);
  const [read1, setread1] = useState(false);
  const [read2, setread2] = useState(false);
  const [read3, setread3] = useState(false);
  var settings_client = {
    dots: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div>

      {/* Section content part start */}
      <section className=" bg-1">
        <div className='carrier-top-cover'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center  mb-4" data-aos="fade-up">
                  <h1 className="text-capitalize  text-white">About Us</h1>
                  <span className="text-white "></span>

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section content part end */}

      {/* Section A part start */}
      <section className="section about-2 position-relative  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

              <div className="about-item pr-3 mb-5 mb-lg-0 px-3 " data-aos="fade-up">
                <span className="h5 text-color mb-3">What We Do:</span>
                <h2 className="mt-2 mb-3 position-relative content-title">We work with IOT & provide the softwere to User with their Solve daily life problem</h2>
                <p className="mb-5">In our pursuit of excellence in the realm of Internet of Things (IoT),
                  we specialize in developing and delivering cutting-edge software solutions that directly
                  address and resolve the everyday challenges faced by individuals. Our mission revolves around
                  providing users with tailored software applications designed to streamline and improve their daily
                  lives. By leveraging the transformative capabilities of IoT technology, we aim to deliver innovative
                  solutions that not only enhance user experiences but also contribute significantly to solving prevalent
                  issues encountered in various aspects of daily life. Through our commitment to user-centric design and technological
                  innovation, we aspire to make a meaningful and positive impact on the lives of
                  our users, ultimately making their routines more efficient, connected, and seamlessly integrated with smart solutions.  </p>
                <a href="" target="_blank" className="btn btn-main btn-round-full">Explore</a>

              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="">
                <img loading="lazy" src={sidepic} alt="about-image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section A part End */}

      {/* Section B part start */}
      <div className='ceo-quotes'>
        <div className='cover-ceo'>
          <div className='ceo-photo-bg'>
            <div className='ceo-photo'>

            </div></div>
          <div className='ceo-few p-3'>
            <h3 className="mt-2 mb-1 position-relative content-title text-white">Growth and comfort do not coexist</h3>
            <p className="mb-1">The essence of the profound quote lies in the recognition that life's pursuits may not grant us every desire, yet it emphasizes the significance of prioritizing and attaining what truly holds value to us. It serves as a reminder that while one may not achieve every aspiration, focusing on the core elements
              that genuinely matter in one's life can lead to a sense of fulfillment and contentment. It encourages a
              thoughtful reflection on personal values and priorities,
              suggesting that by aligning our efforts with what holds genuine
              importance, we can cultivate a meaningful and satisfying existence.
            </p>
            <h2 className="mt-2 mb-1 position-relative content-title text-white">Neeta Sinha</h2>
            <p className='text-white'>Founder</p>
           
          </div>
        </div>
      </div>
      <div className='ceo-quotes'>
        <div className='cover-ceo'>
          <div className='ceo-photo-bg'>
            <div className='ceo-photo-1'>

            </div></div>
          <div className='ceo-few p-3'>
            <h3 className="mt-2 mb-1 position-relative content-title text-white">Stay hungry, stay foolish</h3>
            <p className="mb-1">Stay hungry, stay foolish" is a powerful quote by Steve Jobs, encouraging perpetual curiosity and embracing risk in the pursuit of innovation. It advocates maintaining an insatiable appetite for knowledge and being open to unconventional ideas, fostering personal and professional growth through a fearless and inquisitive mindset.
            </p>
            <h3 className="mt-2 mb-1 position-relative content-title text-white">sanjay_ranjan</h3>
            <p className='text-white'>Founder</p>
           
          </div>
        </div>
      </div>
      <div className='ceo-quotes'>
        <div className='cover-ceo'>
          <div className='ceo-photo-bg'>
            <div className='ceo-photo-2'>

            </div></div>
          <div className='ceo-few p-3'>
            <h3 className="mt-2 mb-1 position-relative content-title text-white">Keep going forward because success will come</h3>
            <p className="mb-1">
This quote encourages perseverance and optimism, emphasizing that continuous effort and a positive outlook lead to success. It inspires individuals to remain resilient in the face of challenges, conveying the belief that by persistently moving forward, one will ultimately achieve success in their endeavors.
            </p>
            <h3 className="mt-2 mb-1 position-relative content-title text-white">srishti</h3>
            <p className='text-white'>Founder</p>
           
            <h2 className="mt-2 mb-1 position-relative content-title text-white">Atul Anand</h2>
            <p className='text-white'>CEO</p>
          </div>
        </div>
      </div>
      {/* Section B part End */}

      {/* cerificate */}
      <div className="about-item-img p-5 " data-aos="fade-up">
        <div className=" col-8 ">
          <img loading="lazy" src={cerificate} alt="about-image" className="img-fluid" />
        </div>
      </div>
      {/* cerificate end*/}

      {/* Section C part start */}
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>

        <section className=" about-bg-counter">
          <div className='p-5'>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-check color-one text-md"></i>
                    <h3 className="mt-2 mb-0 "><span className="counter-text font-weight-bold">{counter && <CountUp start={0} end={70} duration={2} delay={0} />}</span> +</h3>
                    <p className="text-gray">Booking Order</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-flag color-one text-md"></i>
                    <h3 className="mt-2 mb-0 "><span className="counter-text font-weight-bold">{counter && <CountUp start={0} end={40} duration={2} delay={0} />} </span>+ </h3>
                    <p className="text-gray">Booking Completed</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-layers color-one text-md"></i>
                    <h3 className="mt-2 mb-0 "><span className="counter-text font-weight-bold">{counter && <CountUp start={0} end={5} duration={2} delay={0} />} </span></h3>
                    <p className="text-gray">Availble States</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center">
                    <i className="ti-medall color-one  text-md"></i>
                    <h3 className="mt-2 mb-0 "><span className="counter-text font-weight-bold">{counter && <CountUp start={0} end={6} duration={2} delay={0} />} </span></h3>
                    <p className="text-gray">Award Winner </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </ScrollTrigger>

      {/* Section C part End */}
      {/* Section vision part start */}
      <section className="about-info section px-8 py-16">
        <div className="container">
          <p>Best Reason</p>
          <h2 className="mt-1 mb-3 position-relative content-title ">Why Choose Us</h2>
          <div className="col justify-content-center">
            <div className="" data-aos="fade-up">
              <div className="about-info-item mb-4 mb-lg-4 vision-detail ">
                <input id="ch1" type='checkbox'></input>
             <label for="ch1" className="vision-h3 " onClick={() => setread1(!read1)}>    <h3 className="vision-h3 "><span class="text-color mr-2 text-md ">01. Our Mission	</span>	</h3>{read1 ? (<span class="material-symbols-outlined">
                  remove
                </span>) : (<span class="material-symbols-outlined">
                  add
                </span>)}	</label>

                <p className={read1 ? 'para-hide' : "align "}>  At <b>Sarva Suvidhaen</b>, our mission is to drive progress through
                  continuous innovations in software development since our
                  inception in 2021. Fueled by a commitment to excellence, we specialize
                  in crafting Python-based analytical tools and real-time monitoring applications
                  that serve as the cornerstones of our technological endeavors. Our core strength lies in providing cutting-edge solutions by harnessing the power of IoT-enabled frameworks and machine learning modeling. We are dedicated to empowering businesses and individuals by delivering sophisticated software solutions that not only meet but exceed expectations, thus contributing to the advancement and efficiency of diverse sectors. With a focus on technological prowess and a passion for creating impactful solutions, our mission is to be at the forefront of transformative advancements, shaping the future through innovation
                  and excellence in software development. </p>


              </div>
            </div>
            <div className="about-info-item mb-4 mb-lg-4 vision-detail">
              <input id="ch2" type='checkbox'></input>
              <label for="ch2" className="vision-h3 " onClick={() => setread2(!read2)}>     <h3 ><span class="text-color mr-2 text-md ">02. Our Vision</span>		</h3>	{read2 ? (<span class="material-symbols-outlined">
                remove
              </span>) : (<span class="material-symbols-outlined">
                add
              </span>)}</label>

              <p className={read2 ? 'para-hide' : "align "}>  At <b>Sarva Suvidhaen</b>our vision is to be a trailblazer in the realm of software development, continuously propelling progress through innovative solutions since our establishment in 2021. Envisioning a future where technology seamlessly integrates with daily life, we aspire to lead with Python-based analytical tools and real-time monitoring applications as our primary catalysts for positive change. We see our company as a beacon of technological excellence, leveraging the power of IoT-enabled frameworks and machine learning modeling to provide visionary solutions that redefine efficiency, connectivity, and problem-solving across diverse domains. Our commitment extends beyond the present, foreseeing a landscape where our cutting-edge software solutions not only meet current needs but also anticipate and address the evolving challenges of tomorrow, ultimately fostering a global impact and contributing to the advancement of society through the transformative potential of technology.

              </p>


            </div>
            <div className="about-info-item mb-4 mb-lg-4 vision-detail">
              <input id="ch3" type='checkbox'></input>
              <label for="ch3" className="vision-h3 " onClick={() => setread3(!read3)}>    <h3 ><span class="text-color mr-2 text-md ">03. Our Approach</span> </h3>{read3 ? (<span class="material-symbols-outlined">
                remove
              </span>) : (<span class="material-symbols-outlined">
                add
              </span>)}		</label>

              <p className={read3 ? 'para-hide' : "align "}>  At <b>Sarva Suvidhaen</b>, our approach is defined by a relentless commitment to fueling progress through continuous innovation in software development since our establishment in 2021. We distinguish ourselves through the strategic utilization of Python-based analytical tools and real-time monitoring applications, considering them as the pivotal keys to unlocking technological advancements. Our approach is further fortified by leveraging the power of IoT-enabled frameworks and machine learning modeling, positioning them as integral components that form the backbone of our solutions. We prioritize staying at the forefront of technological trends, ensuring that our software not only meets the current demands of the industry but also anticipates future needs. By embracing a proactive and forward-thinking stance, we aim to provide our clients and users with solutions that not only address their immediate challenges but also empower them to thrive in an ever-evolving technological landscape.</p>


            </div>
          </div>
        </div>
      </section>
      {/* Section vision part End */}
      {/* Section D part start */}
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our Team</span>
                <h2 className="mt-3 content-title">Expert Team profileber to get best service</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='container '> */}



      <div className='team-detail' >
        <div className='team-intro'>
          <div className='team-mate'> <img src={director} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>team-Atul Anand</div>

          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>Atul Anand</div>


        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>Srishti</div>
          <div className="post">Director</div>
        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>




        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************ </div>
          <div className="post">************</div>



        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>

        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>



        </div>

        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************ </div>
          <div className="post">************</div>


        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>


        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************ </div>
          <div className="post">************</div>


        </div>
        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>

        </div>



        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>


        </div>

        <div className='team-intro'>
          <div className='team-mate'> <img src={profile} alt="portfolio" className='team-mate'></img></div>
          <div className='name'>************</div>
          <div className="post">************</div>


        </div>
      

      </div>



      {/* </div> */}
      {/* Section D part End */}

      {/* Section E part start */}



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


      {/* Section E part End */}


    </div>
  )
}

export default Aboutus
