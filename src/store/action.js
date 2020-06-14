export const Types = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    EDIT_ITEM: 'EDIT_ITEM',
    CURRENT_ITEM: 'CURRENT_ITEM',
    COMPLETED_ITEM: 'COMPLETED_ITEM'
}

// export const addItem = item => ({
//     type: Types.ADD_ITEM,
//     payload: item
// })

export const addItem = item => {
    //NOTE: this simulates an async call (all posible by using redux thunk)
    return dispatch => {
        setTimeout(()=>{
            dispatch(
                {
                    type: Types.ADD_ITEM,
                    payload: item
                }
            );
        },500);
    }
}

export const editItem = item => ({
    type: Types.EDIT_ITEM,
    payload: item
})

export const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
})

export const currentItem = text => ({
    type: Types.CURRENT_ITEM,
    payload: text
})

export const completedItem = id => ({
    type: Types.COMPLETED_ITEM,
    payload: id
})

export default {
    Types,
    addItem,
    editItem,
    deleteItem,
    currentItem,
    completedItem
}