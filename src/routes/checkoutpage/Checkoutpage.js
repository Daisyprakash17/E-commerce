import React from 'react'
import '../checkoutpage/checkoutpage.scss'
import { CartContext } from '../../contexts/cartcontext'
import { useContext } from 'react'
import Checkoutitem from '../../components/checkoutitem/Checkoutitem'
export default function Checkoutpage() {
    const {totalprices,cartitems}=useContext(CartContext);
    return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
            <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Description</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
        </div> 
        {
            cartitems.map(item=>{
                return <Checkoutitem key={item.id} product={item}/>
            })
        }
        <span className='total'>Total: ₹{totalprices}</span>
    </div>
  )
}
