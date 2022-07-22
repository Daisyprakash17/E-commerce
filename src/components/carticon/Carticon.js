import '../carticon/carticon.scss'
import {ReactComponent as Shoppingicon} from '../../assets/shoppingbag.svg'
import React from 'react'
import { CartContext } from '../../contexts/cartcontext'
import { useContext } from 'react'
export default function Carticon() {
  const {iscartopen,setiscartopen,totalitems}=useContext(CartContext);
  const toggleicon=()=>{
setiscartopen(!iscartopen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleicon}>
        <Shoppingicon className='shopping-icon'/>
        <span className='item-count'>{totalitems}</span> 
    </div>
  )
}
