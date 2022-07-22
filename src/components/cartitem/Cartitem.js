import '../cartitem/cartitem.scss'

import React from 'react'

export default function Cartitem({item}) {
  return (
    <div className='cart-item-container'>
        <img src={item.imageUrl} alt="" />
        <div className="item-details">
        <span className='name'>{item.name}</span>
        <span className='price'>{item.quantity} X ₹{item.price}</span>
        </div>
    </div>
  )
}
