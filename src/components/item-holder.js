import React from "react";
import './item-holder.css'


const ItemHolder = (props) =>{
    return (
            <li className='item' key={props.key}>
                {props.item} <button className='delete' onClick={()=>props.actionDelete(props.item)}>X</button>
            </li>
    )
}
export default ItemHolder