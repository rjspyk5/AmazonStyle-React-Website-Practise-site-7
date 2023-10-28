import React from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






export const OrdersummeryInnerCard = ({name,quantity,itemKey,removeFromDatabase,price,handleclickforplusminus}) => {
  return (
 
    <div style={{borderBottom:"1px solid black", marginLeft:"200px" ,marginBottom:"10px"}}>
        <h4>{name}</h4>
        <div className='d-flex'> <p>{`Quantity : ${quantity}`}  </p>   <FontAwesomeIcon icon={faPlus} onClick={()=>handleclickforplusminus("plus",itemKey)}/>
     <FontAwesomeIcon icon={faMinus} onClick={()=>handleclickforplusminus("minus",itemKey)}/></div>
        
        <p>{`Items Price : ${Math.floor(price)}`}</p>
        <button style={{backgroundColor: "#fcad2d",
                  border: "1px solid black"}} className="btn" onClick={()=>removeFromDatabase(itemKey)}>Remove</button>
    </div>
    
   

  )
}
