import { createContext,useState } from "react";


const addcartitem=(cartitems,producttoadd)=>{
    const exist=cartitems.find(
        (item)=>item.id===producttoadd.id
    );
        // if value exist then add that values
    if(exist)
    {
        return cartitems.map((item)=>
            (item.id===producttoadd.id)
            ?{...item,quantity:item.quantity+1}
            :item
        ) 
    }


    // if that item do not exist then add that item with 
    // quantity one
    return [...cartitems,{...producttoadd,quantity:1}]
}
const removecartitem=(cartitems,prodocttoremove)=>{
    const exist=cartitems.find(
        (item)=>item.id===prodocttoremove.id
    );


    if(exist.quantity===1)
    return cartitems.filter(cartitem=>cartitem.id!==prodocttoremove.id)


    return cartitems.map((item)=>
    (item.id===prodocttoremove.id)
    ?{...item,quantity:item.quantity-1}
    :item
) 


}
        const deletecartitem=(cartitems,producttodelete)=>{
            return cartitems.filter(cartitem=>cartitem.id!==producttodelete.id)

        }
export const CartContext=createContext({
    iscartopen:false, 
    cartitems:[],
    additemtocart:()=>{},
    removeitemfromcart:()=>{},
    deleteitem:()=>{},
    totalitems:0,
    totalprices:0
})

export const Cartprovider=({children})=>{
    const [iscartopen,setiscartopen]=useState(false);
    const [cartitems,setcartitems]=useState([]);
    const [totalitems,settotalitems]=useState(0);
    const [totalprices,settotalprices]=useState(0);
    const additemtocart=  (producttoadd)=>{
          settotalitems(totalitems+1); 
          settotalprices(totalprices+producttoadd.price)
        setcartitems(addcartitem(cartitems,producttoadd));
    }
    const removeitemfromcart=(prodocttoremove)=>{
        settotalitems(totalitems-1);
        settotalprices(totalprices-prodocttoremove.price); 
        setcartitems(removecartitem(cartitems,prodocttoremove));
    }
    const deleteitem=(producttodelete)=>{
        settotalitems(totalitems-producttodelete.quantity);
        settotalprices(totalprices-producttodelete.price*producttodelete.quantity);
        setcartitems(deletecartitem(cartitems,producttodelete));
    }
    const value={iscartopen,setiscartopen,additemtocart,cartitems,totalitems,removeitemfromcart,totalprices,deleteitem};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}