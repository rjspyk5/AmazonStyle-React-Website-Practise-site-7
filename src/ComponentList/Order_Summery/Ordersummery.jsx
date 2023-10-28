import React, { useEffect, useState } from "react";
import { removeFromDatabaseCart,processOrder, addToDatabaseCart } from '../../utilities/databaseManager'
import { OrdersummeryInnerCard } from "./OrdersummeryInnerCard";
import Cart from "../Shop/cart";
import { Fetchfromdatabase } from "../Fetchfromdatabase/Fetchfromdatabase";




export default function Ordersummery() {
  const [cart, setcart] = useState([])
const [placeordermsz, setplaceordermsz] = useState(false)

const handleclickforplusminus=(button,product)=>{
  const sameProduct = cart.find((element) => element.key === product.key);
  if (sameProduct) {
    if (button==="plus") {
      product.quantity=product.quantity+1
    } 
    if (button==="minus") {
      product.quantity=product.quantity-1 
    }
   const banglasystem = cart.filter((element) => element.key !== product.key);
 setcart([...banglasystem,product])
  } else {
   product.quantity=1
   setcart([...cart,product])
  }
addToDatabaseCart(product.key, product.quantity);


}

  useEffect(() => {
    setcart(Fetchfromdatabase())
   },[])

  const removeFromDatabase=(itemkey)=>{
    removeFromDatabaseCart(itemkey)
    setcart(cart.filter((element)=> element.key!== itemkey  ))
  }

  const handleclick=()=> {
   
     
    processOrder()
    setcart([])
  cart.length>0 && setplaceordermsz(true)
   
      }

 const thankYouMsz=<div style={{position: "relative",top:"200px"}} ><h1 className="text-center"> Your Order has been placed</h1></div>


  return (
   <> 
   {placeordermsz && thankYouMsz}
    <div className="d-flex">
    
<div style={{width: "75%"}}>
    
      {cart.map((pd)=> <   OrdersummeryInnerCard handleclickforplusminus={handleclickforplusminus} price={pd.price} key={pd.key} removeFromDatabase={removeFromDatabase} itemKey={pd.key} name={pd.name} quantity={pd.quantity} /> )}
      </div>
      <Cart cart={cart}>

      <button style={{backgroundColor: "#fcad2d",
                  border: "1px solid black"}} className="btn" onClick={handleclick}> Place Order</button>
      </Cart>
    </div>
    </>
  )}