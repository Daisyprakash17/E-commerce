import '../cart-dropdown/cartdropdown.scss'
import React from 'react'
import Button from '../button/Button'
import Cartitem from '../cartitem/Cartitem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartcontext'
import { useNavigate } from 'react-router-dom'

export default function Cartdropdown() {
  const {cartitems,iscartopen,setiscartopen}=useContext(CartContext);
  let navigate=useNavigate();
  const gotocheckouthandler=()=>{
      setiscartopen(!iscartopen);
    navigate('checkout')
  }
  return (
    <div className='cart-dropdown-container'> 
      
      <div className='cart-items'>
      {    
          cartitems.map(item=>
         {
          return <Cartitem key={item.id} item={item}></Cartitem>
          }
        )
      }

      </div>
      <Button onClick={gotocheckouthandler}>Go to checkout</Button>
    </div>
  )
}
