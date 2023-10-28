import React from 'react'
import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"


export const CartincreaseDecrease = () => {
  return (
    <>
   <div className='d-flex justify-content-center'>
   <AiOutlinePlusSquare size={30} />
   <AiOutlineMinusSquare size={30} />
   </div>
    </>
  )
}
