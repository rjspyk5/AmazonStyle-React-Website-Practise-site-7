import React from "react";

export default function Cart(props) {
  const cart = props.cart;
  const totalprice =  (cart.reduce((total, curr) => total + (curr.price*curr.quantity), 0));
 

  const totalQuantity=(cart.reduce((total,curr)=> total+curr.quantity,0))


  
  const Shippingcharge = 3 * cart.length;
  const tax = Math.floor(totalprice * 0.03);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Order : {cart.length}</p>
      <p>Total item : {totalQuantity}</p>
      <p>Items price: ${Math.floor(totalprice)}</p>
     
      <p>Shipping Charge : ${Shippingcharge}</p>
      <p>Total Before Tax : ${(totalprice + Shippingcharge).toFixed(0)}</p>
      <p>Estimated Tax: $ {tax}</p>
      <h2 style={{ color: "red" }}>
        Order Total: ${Math.floor(totalprice + Shippingcharge + tax)}
      </h2>

      {props.children}
    </div>
  );
}
