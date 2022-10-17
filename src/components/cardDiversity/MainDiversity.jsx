import React from 'react'
import Carddiv from './Carddiv'

const MainDiversity = () => {
  return (
    
    <div className='row'>
        <div className='col-lg-6' >
            <Carddiv number="01"
            para2="Increasing the diversity of our workforce with specific goals for each dimension."
            styles={{"backgroundColor":"red"}}/>
            </div>
        

         <div className='col-lg-6'>
        <Carddiv number="02"
        para2="Promoting I&D awareness throughout the organization "/>
        </div>
        
      
            <div className='col-lg-6 three'>
            <Carddiv number="03"
               para2="Cultivating a culture of inclusion and belonging. Inclusion and diversity will enrich the lives of our employees and strengthen the performance of our company and make a meaningful contribution to society."
              styles={{"backgroundColor":"red"}}/>
           </div> 
         
      
    </div>
  
  )
}

export default MainDiversity
