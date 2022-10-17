import React from "react";
import './arc.css';
function Arc(){
    return(

        // <div  id="arc">
        //     <div  id="arc-img">
        //            <img src="Snap\Resources\Arch.png" alt=""  />
        //    </div>
        //     <div className="arc-para" id="arc-para1">
        //              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repudiandae in. Accusamus soluta nihil aliquid quasi placeat facere, exercitationem, magni suscipit rerum distinctio laborum animi odio eaque ipsam quam sapiente corrupti deserunt ab id cupiditate, voluptatibus consectetur eius dignissimos a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui vero exercitationem similique, sit nisi obcaecati porro est ex quaerat nihil.</p>
        //              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui vero exercitationem similique, sit nisi obcaecati porro est ex quaerat nihil, illum blanditiis totam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui vero exercitationem similique.</p>
        //     </div>
            
           
        // </div>
        <div id="arc" >
        {/* style={{'minWidth':"780px"}} */}
                <img src="Snap\Resources\Arch.png" alt="" />
   
            <div className="arc-para">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repudiandae in. Accusamus soluta nihil aliquid quasi placeat facere, exercitationem, magni suscipit rerum distinctio laborum animi odio eaque ipsam quam sapiente corrupti deserunt ab id cupiditate, voluptatibus consectetur eius dignissimos a!Lorem ipsum dolor sit amet .</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui vero exercitationem similique, sit nisi obcaecati porro est ex quaerat nihil, illum blanditiis totam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing .</p>
            </div>
            
        </div>
    )

}

export default Arc;
