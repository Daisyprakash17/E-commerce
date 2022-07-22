import React from 'react'
import './categoryitem.scss'
import { useNavigate } from 'react-router-dom'
export default function Categoryitem(props) {
    const {route}=props.element

    const navigate=useNavigate();
    const onNavigateHandler=()=>navigate(route);
  return (
    <div className='category-container' onClick={onNavigateHandler} >
                    <div className='background-image' style={{backgroundImage:`url(${props.element.imageUrl})`}} /> 
                  
              <div className='category-body-container'>
                    <h2>{props.element.title}</h2>
                    <p>Shop Now</p>
              </div>
          </div> 
  )
}
