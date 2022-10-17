
import React from 'react'

function Cardsection2 (props) {
  return (
    <div className='card' id="card2">
      <div className='card-body' id="">
      
        <div className='details1'>
        <img src={props.percent1} id="four" alt=" "/>
             <p>{props.data}<br/>
             {props.data1}</p>
             
        </div>
      

      </div>
    </div>
  )
}

export default Cardsection2;
