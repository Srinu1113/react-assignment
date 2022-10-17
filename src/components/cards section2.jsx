
import React from 'react'

function Cardsection2 (props) {
  return (
    <div className='card' id="card2">
      <div className='card-body' id="">
        <div className='details1'>
            <h1>{props.percent}</h1>
             <h3>{props.data}</h3>
             <p>{props.data1}</p>
        </div>
        {/* <div className="img1">
       
               <img src={props.img1} className="img-percent" alt="" />
         </div> */}

      </div>
    </div>
  )
}

export default Cardsection2;
