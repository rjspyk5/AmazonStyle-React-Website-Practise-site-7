import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Products from "./Products";
import Cart from "./cart";
import { Link } from "react-router-dom";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import { Fetchfromdatabase } from "../Fetchfromdatabase/Fetchfromdatabase";


export default function Shop() {

  const [cart, setcart] = useState([]);


  useEffect(() => {
   setcart( Fetchfromdatabase())
  }, [])


  const handleclick = (product) => {
    
    const sameProduct = cart.find((element) => element.key === product.key);
   if (sameProduct) {
    product.quantity=product.quantity+1
    const banglasystem = cart.filter((element) => element.key !== product.key);
  setcart([...banglasystem,product])
   } else {
    product.quantity=1
    setcart([...cart,product])
   }
  
    addToDatabaseCart(product.key, product.quantity);
  

  };
     
 
  

  return (
    <>
      <div className="container d-flex">
        <div style={{ width: "75%", borderRight: "1px solid gray" }}>
          {fakeData.map((d) => (
            <Products
              showaddtocart={true}
              handleclick={handleclick}
              key={d.key}
              product={d}
              cart={cart}
            ></Products>
          ))}
        </div>
        <div className=" ">
         
          <Cart cart={cart}>
          <Link to={"/ordersummery"} >
         <button style={{backgroundColor: "#fcad2d",
                  border: "1px solid black"}} className="btn"> Review Order</button>
           
          </Link>
          </Cart>
        </div>
      </div>
    </>
  );
}
