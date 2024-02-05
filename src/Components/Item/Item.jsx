import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Item = (props) =>{
    return(
        <div className="item">
            {/* Here scaleTo() is used to move to the top of the page after clicking on the related Items  */}
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
    // return(
    //     <div className="item">
    //         <Link to={`/product/${props.id}`}><img src={props.image} alt=""/></Link>
    //         <p>{props.name}</p>
    //         <div className="item-prices">
    //             <div className="item-price-new">
    //                 ${props.new_price}
    //             </div>
    //             <div className="item-price-old">
    //                 ${props.old_price}
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Item