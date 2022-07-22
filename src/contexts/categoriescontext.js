import userEvent from "@testing-library/user-event";
import { createContext, useState,useEffect } from "react"; 
import { addCollectionandDocuments ,getcategoriesanddocument} from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from '../assets/shop-data.js'
import { async } from "@firebase/util";

export const Categoriescontext= createContext({
    categorymap:{},
});

console.log('the products are ',SHOP_DATA)
export const  Categoriesprovider=({children})=>{
    const [categorymap,setcategorymap]=useState({})


        useEffect(()=>{
            const getcategories=async()=>{
                const categorymap=await getcategoriesanddocument();
            console.log(categorymap);
            setcategorymap(categorymap);
            }
                getcategories();
        },[])

    const value={categorymap}
    return   (
        <Categoriescontext.Provider value={value}>{children}</Categoriescontext.Provider>
    )
}