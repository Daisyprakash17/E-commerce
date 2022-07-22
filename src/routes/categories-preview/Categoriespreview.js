import React, { Fragment } from 'react' 
import { useContext } from 'react'
import { Categoriescontext } from '../../contexts/categoriescontext' 
import CategoryPreview from '../../components/category-preview/CategoryPreview' 




export default function Categoriespreview() {
    const {categorymap}=useContext(Categoriescontext);
  return (

    <Fragment> 
      
      {Object.keys(categorymap).map(title=>{
        const products=categorymap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
        })} 
    </Fragment>
  )
}
