import React from "react";
import './four column.css';

function Fourcolsec(){
    return(
        <div className="container" id="section" >
            {/* style={{'minWidth': "400px"}} */}
             <div className="hr-row"></div>
             <div className="cardsec2-row" >
                 <div className="hr-div2">  </div>
            
                  <div className="col-lg-3 col-md-6 " id="menu">
                     <div className="header"> 
                          <h6>Discover career & performance goals</h6>
                     </div><br /><br />
                      <div className="matter">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?</p><hr />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?</p><hr />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?consectetur adipisicing elit. Sunt, incidunt</p><hr />
                      </div>
                  </div>
                  {/* <div className="hr-row"></div> */}
                 <div className="col-lg-3 col-md-6 " id="menu">
                    <div className="hr-div2">  </div>

                     <div className="header"> 
                          <h6>Define critical skills requirement with manager</h6>
                     </div><br /><br />
                      <div className="matter">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?</p><hr />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?</p><hr />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt?consectetur adipisicing elit. Sunt, incidunt</p><hr />
                      </div>
                 </div>
                 <div className="col-lg-3 col-md-6  ">
                     <div className="box1">
                         <div className="header1" style={{'backgroundImage': "linear-gradient(red,blue)"}}> 
                              <h5>Learning to fill the skill gaps</h5>
                         </div>
                         <div className="matter">
                              <ul>
                                <li>Leadership skills for the Future</li>
                                <li>Building High-performance Terms</li>
                                <li>Become an Inclusive Leader</li>
                                <li>Women in Leadership</li>
                             </ul>
                             <ul>
                                <li>Leadership skills for the Future</li>
                                <li>Building High-performance Terms</li>
                                <li>Become an Inclusive Leader</li>
                             </ul>
                             {/* <ul>
                            
                               <li>Building High-performance Terms</li>
                               <li>Become an Inclusive Leader</li>
                             </ul> */}
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-3 col-md-6  ">
                     <div className="box2">
                         <div className="header1" style={{'backgroundImage': "linear-gradient(red,blue)"}}> 
                             <h5>Look for projects and opportunities to grow further</h5>
                         </div>
                         <div className="matter">
                            <ul>
                             <li>Leadership skills for the Future</li>
                             <li>Building High-performance Terms</li>
                             <li>Become an Inclusive Leader</li>
                             <li>Women in Leadership</li>
                             <li>Leadership skills for the Future</li>
                             <li>Building High-performance Terms</li>
                           </ul>
                      </div>
                    </div>
                </div>
         </div>
     </div>
   
    )
}


export default Fourcolsec;