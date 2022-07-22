import '../category-preview/categorypreview.scss'
import React from 'react'
import Productscard from '../productscard/Productscard'
import { Link } from 'react-router-dom'
export default function CategoryPreview({title,products}) {
  return (
    
    <div className='category-preview-container'>
      <h2 className='link-box'>
        <Link to={title} className='category-preview-title'>{title.toUpperCase()}<span className='extratitle'>{`(click for more)`}</span></Link>
        
      </h2> 
      <div className='preview'>
        {
            products.slice(0,4).map((element)=>{
              return   <Productscard key={element.id} product={element}/>
            }) 
        }
      </div>
    </div>
  )
}
