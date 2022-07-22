import '../categorylist/categorylist.scss'
import {useParams,Route,Routes} from  'react-router-dom'
import React from 'react'
import { useContext ,useState,useEffect } from 'react';
import { Categoriescontext } from '../../contexts/categoriescontext';
import Productscard from '../../components/productscard/Productscard';
import Productpreview from '../../components/product-preview/Productpreview'

export default function Categorylist() {


    const {category}=useParams();
     const {categorymap}=useContext(Categoriescontext);
     const [products,setproducts]=useState(categorymap[category]);


     useEffect(()=>{
        setproducts(categorymap[category]);
        window.scrollTo(0, 0);
    },[category,categorymap]);
    console.log(products);

    const Currentcategory= ()=>{
        return <>
            <h2 className='category-list-title'>{category.toUpperCase()}</h2>
            <div className='category-list-container'>
       {products &&
       products.map((element)=>{
               return <Productscard key={element.id} product={element}/>
           })
       }
           </div>
           </>
    
    }
    return (
        <>
           <Routes>
            <Route index element={<Currentcategory/>}></Route>
            <Route path='productinfo'element={<Productpreview/>}/>
           </Routes>
    </>
  )
}
