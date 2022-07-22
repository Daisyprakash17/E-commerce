import '../productscard/productscard.scss'
import Button from '../button/Button'
import React from 'react'
import { useContext } from 'react'
import { PreviewContext } from '../../contexts/Previewcontext'
import { CartContext } from '../../contexts/cartcontext'
import { useNavigate } from 'react-router-dom'
export default function Productscard({product}) {
     const {additemtocart}=useContext(CartContext);
    const {setpreproduct}=useContext(PreviewContext);
    const addthisproduct=()=>{  
      additemtocart(product);
    } 
    const navigate=useNavigate();
    const viewproduct=()=> {
      setpreproduct(product)
      navigate('productinfo');
    }
    const num=Math.floor(Math.random() * 1000);
  return (
    <div className='themaincontainer'>
    <div className='product-card-container'>
       <img src={product.imageUrl} alt={product.name} />
       <div className='footer'>
            <span className='name'>{product.name}</span>
            <span className='price'>{`₹ ${product.price*40}`}</span>
       </div>  
       <div className="btn-cnt">
       <Button buttontype='inverted' onClick={viewproduct} >More Info</Button>  
       <Button buttontype='inverted'  onClick={addthisproduct} >Add to cart</Button>   
    </div> 
    </div> 
    <div className='rating'>⭐⭐⭐⭐  {num}</div>
    </div>
  )
}
