import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Button = ({handleclick,product}) => {
  
  return (
    <button
                style={{
                  backgroundColor: "#fcad2d",
                  border: "1px solid black",
                }}
                className="btn"
                onClick={() => handleclick(product)}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faCartShopping}
                />
                Add to Cart
              </button>
  )
}
