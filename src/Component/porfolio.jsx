import React from 'react'
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import special from '../static_data/web_content/@S2_Portfolio (1).jpg'
import special2 from '../static_data/web_content/@S2_Portfolio.jpg'
import homepage from '../static_data/web_content/@S2_Portfolio (2).jpg'
import servicesImg1 from '../static_data/web_content/trophy1.jpg'
import servicesImg2 from '../static_data/web_content/trophypdl.jpg'
import gpai1 from '../static_data/web_content/certified.jpg'
import gpai2 from '../static_data/web_content/indianRlogo.jpg'
import gpai3 from '../static_data/web_content/iciit.jpeg'
import gpai4 from '../static_data/web_content/side_pic.jpg'
import servicesImg4 from '../static_data/web_content/certificatenitish.jpg'
import patnaaward from '../static_data/web_content/patnaAward.jpg'
import LazyLoad from 'react-lazyload';
const porfolio = () => {
  var settings_services = {
    dots: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
  }
  return (
    <div>
      <section className=" potfoliobg-1">
        <div className=' potfoliobg-cover'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center  mb-4" data-aos="fade-up">
                  <h1 className="text-capitalize  text-white">Portfolio </h1>
                  <span className="text-white ">Latest Work</span>

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
                <span className="h6 text-color">Our works</span>
                <h2 className="mt-3 content-title ">We have done lots of works, lets check some</h2>
              </div>
            </div>
          </div>

          <div className='portfolio-card-container '>
            <div className='portfolio-card'>
              <Slider {...settings_services}>
                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={special2} className="card-img-top" alt="..." loading="lazy" /></LazyLoad> </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">SawachDNR application </h5>
                    <p className="card-text pb-4">Sarva Suvidhan is a recognized leader in developing automation for complex organizational and institutional concerns. Our mission is to bring automation, technology, and innovation to simplify complex problems. We add value by increasing efficiency and driving data and analytics for higher quality standards.

Since our inception, we have worked with large organizations to deploy intelligent automation, which has helped improve turnaround times, enhance service quality, and achieve higher customer satisfaction.

Our team of solution architects, designers, and developers will help you craft a solution tailored to your requirements.

We are a recognized DIPP startup from Bihar and are proud recipients of multiple awards.</p>

                  </div>
                </div>
                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={special} className="card-img-top" alt="..." loading="lazy" /></LazyLoad>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">The certificate offered by entities such as the Bihar Startup Innovation Program and the IIT Patna Incubation Center serves</h5>
                    <p className="card-text pb-4">For startups participating in programs like the Bihar Startup Innovation Program, the certificate signifies their commitment to innovation and entrepreneurship within the region. It acts as a testament to their potential to drive positive change and contribute to economic growth. Moreover, this recognition from established institutions such as IIT Patna adds credibility to their projects and ideas.

                      The certificate obtained through the IIT Patna Incubation Center is a mark of quality and excellence in innovation. It reflects the rigorous evaluation and support provided by one of India's premier academic institutions. Startups receiving this certificate gain access to resources, mentorship, and networking opportunities essential for their growth and success.

                      Furthermore, the certificate obtained from programs like the Bihar Startup Innovation Program and the IIT Patna Incubation Center not only recognizes the efforts of startups but also acts as a catalyst for their growth and success in the dynamic landscape of innovation and entrepreneurship. </p>

                  </div>
                </div>
                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={servicesImg1} className="card-img-top" alt="..." loading="lazy" /></LazyLoad>  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title ">Smart Bihar Hackthon-2023</h5>
                    <p className="card-text pb-4">
                    In the Smart Bihar Hackathon 2023, our team emerged victorious, securing the first prize for our innovative startup idea focused on IT services and IoT software solutions. Our winning concept reflects a commitment to harnessing cutting-edge technology to address real-world challenges in Bihar. By blending expertise in information technology and IoT, our startup envisions transformative solutions that enhance connectivity, efficiency, and sustainability.

This achievement underscores our dedication to driving positive change through innovation. As we forge ahead, we are poised to bring our winning idea to fruition, leveraging our skills and passion to contribute meaningfully to the technological landscape. Our success in the hackathon serves as a testament to the creativity, teamwork, and forward-thinking approach that define our venture.

With this accolade, we are eager to showcase our capabilities and explore opportunities for collaboration and growth. The journey doesn't end here; it marks the beginning of a promising venture that aims to make a lasting impact in the realm of IT services and IoT software development. Join us on this exciting journey as we continue to push boundaries and pioneer advancements in the tech industry.</p>

                  </div>
                </div>
                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img src={servicesImg2} className="card-img-top" alt="..." loading="lazy" /></LazyLoad>  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Bihar Industries Association Award</h5>
                    <p className="card-text pb-4">We are immensely proud to announce that our startup has clinched the prestigious Bihar Industries Association Award, securing the top position in the IT Services and IoT Software category. This recognition reaffirms our commitment to innovation, excellence, and impactful solutions.

At the intersection of cutting-edge Information Technology services and pioneering IoT software, we have consistently pushed boundaries to deliver unparalleled value to our clients. This accolade not only reflects our team's dedication but also underscores the transformative impact of our services on the industry.

As we celebrate this milestone, we look forward to continuing our journey of technological innovation, driving positive change, and delivering exceptional results for our clients. This award serves as a testament to our vision, hard work, and the collective effort of our talented team, motivating us to reach new heights in the dynamic landscape of IT and IoT.
                    </p>

                  </div>
                </div>

                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img src={servicesImg4} className="card-img-top" alt="..." loading="lazy" /></LazyLoad>  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Destination Bihar Expo-2024</h5>
                    <p className="card-text pb-4">Participation in the Destination Bihar Expo-2024 marks a significant milestone for us. Engaging in this prestigious event allows us to showcase our commitment to excellence, innovation, and contributing to the growth of Bihar's economic landscape. By actively participating, we aim to forge valuable connections, explore collaborations, and highlight the unique offerings of our business.

Receiving a certificate from the Destination Bihar Expo-2024 is an esteemed acknowledgment of our presence and contribution. This recognition underscores our dedication to excellence and showcases our alignment with the goals and vision of the expo. The certificate serves as a testament to our commitment to quality, innovation, and the positive impact we aspire to make in the vibrant economic and cultural milieu of Bihar. We are honored to be part of this event, and the certificate symbolizes our dedication to advancing and contributing to the flourishing business ecosystem in Bihar.</p>

                  </div>
                </div>
                <div className="card card-show" style={{ width: "15rem;" }}>
                  <div className='img-slide'>
                    <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img src={homepage} className="card-img-top" alt="..." loading="lazy" /></LazyLoad></div>
                  <div className="card-body text-center">
                    <h5 className="card-title ">Railmadad analytics software is provided by my company, Sarva Suvidhaen Private Limited.</h5>
                    <p className="card-text pb-4">
                      RailMadad Analytics is a cutting-edge software solution provided by Sarva Suvidhean Private Limited, tailored to revolutionize the railway industry. This innovative platform offers comprehensive analytics capabilities designed to enhance operational efficiency, safety, and customer satisfaction within the rail sector. By leveraging advanced data analytics techniques, RailMadad Analytics empowers railway authorities to make informed decisions, optimize resource allocation, and proactively address challenges. From predictive maintenance to route optimization and passenger flow analysis, this software equips railway operators with actionable insights to streamline operations and deliver a seamless travel experience. With RailMadad Analytics, Sarva Suvidhean Private Limited continues to drive innovation and transform the railway ecosystem for the better. </p>

                  </div>
                </div>


              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="section service border-top  pb-5 p-4">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title" data-aos="fade-up">
                <h2 className="mt-3 content-title ">Galary</h2>
              </div>
            </div>
          </div>

          <div className='galary'>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img
                  src={gpai1}
                  className="w-80 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Boat on Calm Water"
                /></LazyLoad>

                <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img
                  src={gpai2}
                  className="w-80 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Wintry Mountain Landscape"
                /></LazyLoad>
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img
                  src={gpai3}
                  className="w-80 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Mountains in the Clouds"
                /></LazyLoad>

                <LazyLoad placeholder={<Skeleton width={240} height={240} />}><img
                  src={gpai4}
                  className="w-100 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Boat on Calm Water"
                /></LazyLoad>
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img
                  src={homepage}
                  className="w-70 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Waves at Sea"
                /></LazyLoad>

                <LazyLoad placeholder={<Skeleton width={240} height={240} />}> <img
                  src={patnaaward}
                  className="w-80 shadow-1-strong rounded mb-4 image-center galary-mg"
                  alt="Yosemite National Park"
                /></LazyLoad>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default porfolio
