import React from 'react'
import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"
import { removeFromDatabaseCart,processOrder, addToDatabaseCart } from '../../utilities/databaseManager'





export const OrdersummeryInnerCard = ({name,quantity,itemKey,removeFromDatabase,price,products,cart,setcart}) => {

const handleclickforplusminus=(button,products)=>{
const indexnumber=cart.indexOf(products)
  const sameProduct=cart.find((el)=> el.key==products.key)
 
  if (button=="plus") {
    sameProduct.quantity=sameProduct.quantity+1
  }
  if (button=="minus") {
    sameProduct.quantity=sameProduct.quantity-1
    if (sameProduct.quantity <= 0) {
      removeFromDatabaseCart(products.key)
    }
   
  }
 const banglasystem=cart.filter((el)=> el.key !== products.key)
 if (sameProduct.quantity>0) {
  banglasystem.splice(indexnumber,0,sameProduct)
  addToDatabaseCart(sameProduct.key,sameProduct.quantity)
 }
 
setcart([...banglasystem])

}



  return (
 
    <div style={{borderBottom:"1px solid black", marginLeft:"200px" ,marginBottom:"10px"}}>
        <h4>{name}</h4>
        <div className='d-flex'> <p>Quantity :  </p>   
        <AiOutlineMinusSquare size={30} onClick={()=>handleclickforplusminus("minus",products)} />
        <p>{`${quantity}`}</p>
        <AiOutlinePlusSquare size={30}  onClick={()=>handleclickforplusminus("plus",products)} />

      </div>
        
        <p>{`Items Price : ${Math.floor(price)}`}</p>
        <button style={{backgroundColor: "#fcad2d",
                  border: "1px solid black"}} className="btn" onClick={()=>removeFromDatabase(itemKey)}>Remove</button>
    </div>
    
   

  )
}
