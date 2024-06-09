import React from 'react'
import LazyLoad from 'react-lazyload';
import PartnerImg1 from '../../static_data/web_content/indainR2logo.png'
import PartnerImg2 from '../../static_data/web_content/indianRlogo.jpg'
import PartnerImg3 from '../../static_data/web_content/partnerR3logo.png'
import PartnerImg4 from '../../static_data/web_content/partnerR4logo.png'
const Ourpatner = () => {
  return (
    <div>
      <div className='partner'>
                <div className='partner-heading'>
                    Our Partner
                </div>
                <div className='partner-cover'>
                    <div className='partner-card'>
                     <LazyLoad> <img src={PartnerImg1} alt=""  loading="lazy" /></LazyLoad>  
                    </div>

                    <div className='partner-card'>
                      <LazyLoad><img src={PartnerImg3} alt=""  loading="lazy" /></LazyLoad>  
                    </div>
                    <div className='partner-card'>
                     <LazyLoad><img src={PartnerImg4} alt=""  loading="lazy" /></LazyLoad>   
                    </div>
                    <div className='partner-card'>
                    <LazyLoad><img src={PartnerImg2} alt=""  loading="lazy" /></LazyLoad>    
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Ourpatner
