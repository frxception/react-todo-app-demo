import React from 'react'
import './item-list.css'
// import ItemHolder from "./item-holder";


const ItemList = props => {
    console.log('[Render ItemList component] props: ', props)
    
    const itemList = props.itemList
    return (
        <div>
            <ul>{
                    itemList.map(item=>{
                        return <li key={item.id}>
                                <span className='item-id'>{item.id.toString().substring(10,3)} : </span>
                                <input type="text" id={item.id} value={item.text} className="text"
                                       onChange={e=>{props.actionEdit(item.id, e.target.value)}}/>
                                <button className='delete' onClick={()=>props.actionDelete(item)}>X</button>
                            </li>
                     })
                }
                
            </ul>
        </div>
    )
}

export default React.memo(ItemList);