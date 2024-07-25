import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Fotter from './Component/Fotter';
import Services from './Component/Services';
import Porfolio from './Component/porfolio'
import Aboutus from './Component/Aboutus'
import Carrier from './Component/Carrier'
import Contact from './Component/Contactus'
import { Navigate } from 'react-router-dom';
import ApplyForm from './Component/ApplyForm';
import Porfolioatul from './Component/Portfolioatul';
import Privacypolicy from './Component/Privacypolicy';
import Term_condition from './Component/Termcondition';
import Sanchalak from './Component/Sanchalak';
import SwatchStation from './Component/SwatchStation'
import Railmadad from './Component/Railmadad';
import PrivacyPolicySanchalak from './Component/PrivacyPolicySanchalak ';
import PrivacyPolicyWRMS from './Component/PrivacyPolicyWRMS ';
const Allroutes = () => {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    return null;
  };
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/porfolio" element={<Porfolio />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/portfolio-atul" element={<Porfolioatul />} />
          <Route path="/applyform" element={<ApplyForm />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termcondition" element={<Term_condition />} />
          <Route path="/sanchalak" element={<Sanchalak/>} />
          <Route path='/swatchstation' element={<SwatchStation/>} />
          <Route path='/railmadad' element={<Railmadad/>} />
          <Route path='/privacypolicy_wrms' element={<PrivacyPolicyWRMS/>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/privacypolicy_sanchalak' element={<PrivacyPolicySanchalak/>} />
        </Routes>

        <Fotter />
      </Router>

    </>
  )
}

export default Allroutes
