import React from 'react'
import ItemHolder from "./item-holder";


const ItemList = ({items, item, actionDelete}) => {
    return (
        <div>
            <ul>
                {
                    items.map((item, index)=>{
                        return(
                            // <li className='item' key={index}>
                            //     {item} <button className='delete' onClick={()=>actionDelete(item)}>X</button>
                            // </li>
                            <ItemHolder key={index} id={index} item={item} actionDelete={actionDelete}></ItemHolder>
                        )
                })
                }
            </ul>
        </div>
    )
}

export default ItemList;