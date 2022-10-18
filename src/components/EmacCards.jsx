import React from "react";


function EmacCards(props){
     return(
    //            <div  id="emca-card">
    //                <div className="card-body">
    //                     <div className="details">
    //                        <p>{props.head1}</p>
    //                        <h1>{props.head2}</h1>
    //                         <small>{props.para}</small>
    //                         <div className="img">
    //                        <img src={props.img} className="img-emca" alt="" />
    //                     </div>
    //                      </div>
                         
    //                 </div>
    //            </div>
     <div className="card  card-emca" >
                <div className="card-body body-emca">
                     <h4>{props.text}</h4>
                     <h2 id="emca-h1">{props.heading}</h2>
                     <small>{props.matter}</small>
                     <img src={props.imgUrl} className="card-img" alt="..."/>
                </div>
            </div>
           
    )
}

export default EmacCards;