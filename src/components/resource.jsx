import React from "react";
import './resource.css';
function Resource(){
    return(
        
    <div className="resource">
                <div className="resource-img1">
                    <div className="resource-name">
                        <h1 style={{'color':'#fff'}}>Resources</h1>
                    </div>
                    <img src="Snap\Resources\IMG-20221006-WA0001.jpg" width="100%" id="resource-img"alt="" />
                  
                    <div id="resource-card">
                    <ul>
                        <li><img src="Snap\Resources\IMG-20221006-WA0000.jpg"alt=""/>Our Culture Evolution</li>
                        <li><img src="Snap\Resources\IMG-20221006-WA0000.jpg"alt=""/> ENVU Cultural traits and behaviors</li>
                        <li><img src="Snap\Resources\IMG-20221006-WA0000.jpg"alt=""/>ENVU Transformation Agent community</li>
                        <li><img src="Snap\Resources\IMG-20221006-WA0000.jpg"alt=""/>Digital Kudos Cards</li>
                     </ul>
                  </div>
                </div>
                
            
     </div>
       
    )
}

export default Resource;
