import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './accordian1.css';

function Accordion1(){
    return(
        <div  style={{'minWidth': "600px"}}>
             
            <div className="accordion" id="some">
               <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 acc">
                        <div  className="card-header accordin-header-1">
                           <a className="card-link" href="#value1" data-toggle="collapse">Reward for Impact on Growth<ArrowDropDownIcon/></a>
                        </div>
                        <div id="value1" className="collapse"    >
                                                             {/* data-parent="#some" */}
                              <div className="card-body accordin-body">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus libero doloribus, dolore quibusdam, explicabo ipsum in quis possimus minima voluptatem! Quos tempora suscipit eum minima. 
                              </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 acc" >
                        <div className="card-header accordin-header-2">
                             <a className="card-link" href="#value2" data-toggle="collapse" >Talent Sustainability<ArrowDropDownIcon/></a>
                        </div>
                        <div id="value2" className="collapse" >
                            <div className="card-body accordin-body">
                               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus libero doloribus, dolore quibusdam, explicabo ipsum in quis possimus minima voluptatem! Quos tempora suscipit eum minima. 
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="row"> */}
                    <div className="col-lg-4 col-md-6 col-sm-12 acc  last-dic">
                        <div className="card-header accordin-header-3">
                             <a className="card-link" href="#value3" data-toggle="collapse" >Culture Supportive<ArrowDropDownIcon/></a>
                        </div>
                        <div id="value3" className="collapse" >
                            <div className="card-body accordin-body">
                               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus libero doloribus, dolore quibusdam, explicabo ipsum in quis possimus minima voluptatem! Quos tempora suscipit eum minima. 
                            </div>
                       </div>
                   </div>
               </div>
             </div>
        </div>
    )
}

export default Accordion1;