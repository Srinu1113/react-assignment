import React from "react";

function Cardsub (props) {
    return (
      <div className='card' id="card2">
        <div className='card-body' id="">
          
          <div className='details1'>
               <h1>{props.percent}</h1>
               <p>{props.data}<br/>
                  {props.data1}</p>
               
          </div>
        
  
        </div>
      </div>
    )
}
export default Cardsub;