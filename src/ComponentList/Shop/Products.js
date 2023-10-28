import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { CartincreaseDecrease } from "./CartincreaseDecrease";


export default function Products(props) {
  const { name, seller, stock, img, features, price, key } = props.product;


  return (
    <div style={{ borderBottom: "1px solid lightgray", marginRight: "5px" }}>
      <div className="row flex-column flex-lg-row flex-md-row my-3 ">
        <div className="col-lg-4 col-md-4 col-12">
          <img src={img} alt="" />
        </div>

        <div className="col-lg-8 col-md-8 col-12 ps-5">
          <h4 className="mb-2">
            <Link
              className=" text-decoration-none "
              to={`/product/${key}`}
              state={props.product}
            >
              {name}
            </Link>{" "}
          </h4>
          <div className="row flex-lg-row flex-md-row flex-column-reverse ">
            <div className="col-lg-6 col-md-6 col-12  text-lg-start text-xl-center">
              <h6>by:{seller}</h6>
              <p> Price: $ {Math.floor(price)}</p>
              <p>Only {stock} left on stock</p>

              {  (props.showaddtocart && (
                <Button
                  handleclick={props.handleclick}
                  product={props.product}
                />
              ))}

            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <h5>Features</h5>
              <ul>
                {features.map((element, index) => (
                  <li
                    key={index}
                  >{` ${element.description} : ${element.value}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
