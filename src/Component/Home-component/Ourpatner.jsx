import React from 'react';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import PartnerImg1 from '../../static_data/web_content/indainR2logo.png';
import PartnerImg2 from '../../static_data/web_content/indianRlogo.jpg';
import PartnerImg3 from '../../static_data/web_content/partnerR3logo.webp';
import PartnerImg4 from '../../static_data/web_content/partnerR4logo.webp';

const Ourpatner = () => {
  return (
    <div>
      <div className='partner'>
        <div className='partner-heading'>
          Our Partner
        </div>
        <div className='partner-cover'>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton width={200} height={200} />}>
              <img src={PartnerImg1} alt="Partner 1" loading="lazy" />
            </LazyLoad>
          </div>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton width={200} height={200} />}>
              <img src={PartnerImg3} alt="Partner 3" loading="lazy" />
            </LazyLoad>
          </div>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton width={200} height={200} />}>
              <img src={PartnerImg4} alt="Partner 4" loading="lazy" />
            </LazyLoad>
          </div>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton width={200} height={200} />}>
              <img src={PartnerImg2} alt="Partner 2" loading="lazy" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourpatner;
