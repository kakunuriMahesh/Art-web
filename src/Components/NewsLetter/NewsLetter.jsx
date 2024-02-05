import React from "react";
import './NewsLetter.css'

const NewsLetter = () =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newletter and stay Updated</p>
            <div>
                <input type="eamil" placeholder="Your Email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter