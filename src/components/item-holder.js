import React from "react";
import './item-holder.css'


const ItemHolder = ({item, actionDelete}) =>{
    console.log('holder: ',item.id)
    console.log('holder: ',item.text)
    return (
            <li className='item' key={item.id}>
                {item.id}-{item.text} <button className='delete' onClick={()=>actionDelete(item.id)}>X</button>
            </li>
    )
}
export default ItemHolder