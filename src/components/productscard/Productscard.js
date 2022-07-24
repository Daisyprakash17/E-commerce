import '../productscard/productscard.scss'
import Button from '../button/Button'
import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";
import { useContext } from 'react'
import { PreviewContext } from '../../contexts/Previewcontext'
import { CartContext } from '../../contexts/cartcontext'
import { useNavigate } from 'react-router-dom'
export default function Productscard({product}) {

  // this is for the alert
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");
  
  const {additemtocart}=useContext(CartContext);
    const {setpreproduct}=useContext(PreviewContext);
    const addthisproduct=()=>{  
      additemtocart(product);

      // this for the alert
          setStatus(true);
            setType("success");
            setTitle("Product has been successfully added to cart");
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
    
    <ReactJsAlert // this is for the alert
          status={status} // true or false
          type={type} // success, warning, error, info
          title={title} 
          Close={() => setStatus(false)} 
          autoCloseIn={1000} 
        />
    </div>
  )
}
