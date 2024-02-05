import React, { useContext } from "react";
import './RelatedProducts.css'
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
// import data_products from '../Assets/data'
// import all_product from "../Assets/all_product";

const RelatedProducts = (props) =>{
    const { product } = props;
    const { all_product } = useContext(ShopContext);

    // Filtering the RelatedItem without repeating the same Item
    const relatedItems = all_product.filter((item) =>
    item.category === product.category && item.id !== product.id
    );

    console.log(relatedItems);

    // Filtering the Random RelatedItem without repeating the same Item
    const randomRelatedItems = [];
    while (randomRelatedItems.length < 4 && relatedItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * relatedItems.length);
    randomRelatedItems.push(relatedItems.splice(randomIndex, 1)[0]);
    }

    console.log(randomRelatedItems);


    return(  
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {/* sliceing the Items form top 4 */}
                {randomRelatedItems.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default RelatedProducts
