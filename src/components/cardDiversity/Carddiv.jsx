// import { PropaneSharp } from '@mui/icons-material';
import React from 'react'

const Carddiv = (props) => {
  return (
   <div>
       
               {/* <div className='diversity-container'styles={{'border-top-color':"red"}}>
                  <div className='inside-div'>
                        <div className='outer-div'>
                            <div className='small-div' style={props.styles}> 
                              <h1 id="div">{props.number}</h1>
                             </div>
                        </div>
                     <p>{props.para2}</p>
                 </div> */}

         <div className='row'>   
            <div className='diversity-container'styles={{'border-top-color':"red"}}>
                     <div className='inside-div'>
                          <div className='outer-div'>
                              <div className='small-div'> 
                                 <h1 id="div1">01</h1>
                              </div>
                          </div>
                              <p>Increasing the diversity of our workforce with specific goals for each dimension.</p>
                     </div> 
              </div>

             <div className='diversity-container con2' styles={{'border-top-color':"blue"}}>
                     <div className='inside-div'>
                          <div className='outer-div'>
                              <div className='small-div'> 
                                 <h1 id="div2">02</h1>
                              </div>
                          </div>
                              <p>Promoting I&D awareness throughout the organization,</p>
                     </div> 
              </div>
           </div> 
           <div className='row'>  
              <div className='diversity-container con3' styles={{'border-top-color':" rgba(66, 66, 227, 0.916)"}}>
                  <div className='inside-div'>
                        <div className='outer-div'>
                             <div className='small-div'> 
                               <h1 id="div3">03</h1>
                             </div>
                        </div>
                            <p>Cultivating a culture of inclusion and belonging. Inclusion and diversity will enrich the lives of our employees and strengthen the performance of our company and make a meaningful contribution to society.</p>
                   </div>
               </div>  
         </div>  
     </div>   

  )
}

export default Carddiv;
