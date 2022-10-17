import React from "react";
import './card.css';


function Card() {
    return (
    
        <div  id="cardsize" style={{'minWidth':"580px"}}>
            
                <div>
                    <img src="Snap\Resources\VF.jpg" id="one" alt="" />
                </div>
                <div className="content">
                    <h3><i className="material-icons">email</i>Veronique Forgeard</h3>
                    <p>ENVU Transformation & Change Management</p>
                    <p><i className="material-icons">phone</i>33 47285 4039</p>
                </div>
        
       </div>

    )
}


export default Card;