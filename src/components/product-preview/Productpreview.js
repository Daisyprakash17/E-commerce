import '../product-preview/productpreview.scss'
import React from 'react'
import { useContext,useState } from 'react'
import { PreviewContext } from '../../contexts/Previewcontext'
import { CartContext } from '../../contexts/cartcontext'
import Button from '../button/Button';
export default function Productpreview() {
  
  const {preproduct}=useContext(PreviewContext);
  const {additemtocart}=useContext(CartContext);
   

  const addthisproduct=async ()=>{  
   
      additemtocart(preproduct);
   
  } 



 
  return (
    <div className='preview-container'>
       <div className='preview-img'>
        <img src={preproduct.imageUrl} alt="Product Image" />
       </div>
       <div className='preview-detail'>
        <h1 className='first'>{preproduct.name}</h1>
        <p className='six'>⭐⭐⭐⭐⭐{"  10,063 Ratings & 1,126 Reviews"}</p>
        <h2 className='second'>{"Special price"}</h2>
        <h3 className='third'>{`₹  ${preproduct.price*40}`}</h3>
        <h2 className='four'>{"Description : "}</h2>
        <p className='five'>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}</p>
        
       <Button buttontype='inverted'  onClick={addthisproduct} >Add to cart</Button>  
       </div>
    </div>
  )
}
