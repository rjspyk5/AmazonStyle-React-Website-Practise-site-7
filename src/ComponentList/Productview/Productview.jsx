import React from 'react'
import Products from "../Shop/Products";
import fakeData from '../../fakeData';
import { useLocation, useParams } from 'react-router';



export const Productview = () => {
    const {productkey}=useParams()
    const product=fakeData.find((element)=> element.key===productkey)
 
    

  return (
    <div>
    <Products showaddtocart={false} product={product}/> 
    </div>
  )
}
