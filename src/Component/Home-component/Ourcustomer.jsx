import React from 'react';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import CustomerImg1 from '../../static_data/web_content/indainR2logo.png';
import CustomerImg2 from '../../static_data/web_content/indianRlogo.jpg';
import CustomerImg3 from '../../static_data/web_content/partnerR3logo.webp';
import CustomerImg4 from '../../static_data/web_content/partnerR4logo.webp';

const Ourcustomer = () => {
  return (
    <div>
      <div className='partner'>
        <div className='partner-heading'>
          Our Customers
        </div>
        <div className='partner-cover'>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton min-width={200} min-height={200} />}>
              <img src={CustomerImg1} alt="Partner 1" loading="lazy" />
            </LazyLoad>
          </div>
          {/* <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton min-width={200} min-height={200} />}>
              <img src={CustomerImg3} alt="Partner 3" loading="lazy" />
            </LazyLoad>
          </div> */}
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton min-width={200} min-height={200} />}>
              <img src={CustomerImg4} alt="Partner 4" loading="lazy" />
            </LazyLoad>
          </div>
          <div className='partner-card'>
            <LazyLoad placeholder={<Skeleton min-width={200} min-height={200} />}>
              <img src={CustomerImg2} alt="Partner 2" loading="lazy" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourcustomer;
