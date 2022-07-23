import '../checkoutitem/checkoutitem.scss'
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartcontext';



export default function Checkoutitem(product) {
 
    const {name,imageUrl,price,quantity}=product.product;
    const {additemtocart,removeitemfromcart,deleteitem}=useContext(CartContext); 
    return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt="" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeitemfromcart(product.product)}>
                &#10094;
            </div>
             <span className='value'>   {quantity}</span>
            <div className='arrow' onClick={()=>additemtocart(product.product)}>
                &#10095;
            </div>
        </span>



         <span  className='price'>{price*40}</span>
        <div className='remove-button' onClick={()=>deleteitem(product.product)}>&#10005;</div>
      
    </div>
  )
}
