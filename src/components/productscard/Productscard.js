import '../productscard/productscard.scss'
import Button from '../button/Button'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartcontext'
export default function Productscard({product}) {
     const {additemtocart}=useContext(CartContext);

    const addthisproduct=()=>{  
      additemtocart(product);
    }
  return (
    <div className='product-card-container'>
       <img src={product.imageUrl} alt={product.name} />
       <div className='footer'>
            <span className='name'>{product.name}</span>
            <span className='price'>{`₹ ${product.price}`}</span>
       </div>  
       <Button buttontype='inverted'  onClick={addthisproduct} >Add to cart</Button>  
    </div>
  )
}
