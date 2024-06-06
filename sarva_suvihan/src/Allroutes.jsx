import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
const Allroutes = () => {
  return (
    <div>
      <Router>
               <Navbar/>
               <Routes>
                <Route path="/" element={ <Homepage/>}/>
                <Route path="/services" element={ <Services/>}/>
                <Route path="/porfolio" element={ <Porfolio/>}/>
                <Route path="/about-us" element={ <Aboutus/>}/>
                <Route path="/carrier" element={ <Carrier/>}/>
                <Route path="/contact-us" element={ <Contact/>}/>
                <Route path="/portfolio-atul" element={ <Porfolioatul/>}/>
                <Route path="/applyform" element={ <ApplyForm/>}/>
                <Route path="/privacypolicy" element={ <Privacypolicy/>}/>
                <Route path="*" element={<Navigate to="/" />} />

                 
               </Routes>
   
<Fotter/>
      </Router>
 
    </div>
  )
}

export default Allroutes
