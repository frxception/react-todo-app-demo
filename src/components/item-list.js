import React from 'react'
import ItemHolder from "./item-holder";


const ItemList = ({itemList, actionDelete}) => {
    console.log("itemList: ", itemList)
    return (
        <div>
            <ul>
                {
                    itemList.map((item, index)=>{
                        return(
                            <ItemHolder key={index} item={item} actionDelete={actionDelete}></ItemHolder>
                        )
                     })
                }
            </ul>
        </div>
    )
}
// <li key={index}>{item.text}-{item.id}</li>

export default ItemList;