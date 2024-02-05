import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-discription">
                <p>Gift to your family and friends in birthday's, 
                    wedding, Anniversary in any special and memorable moment💌</p>
                <p>E-commerce websites typically display products or services along with detailed 
                    descriptions, images, prices, and any available variations (eg, sizes, colors). 
                    Each product usually has its own dedicated pogo with relevant information</p>
            </div>
        </div>
    )
}
export default DescriptionBox