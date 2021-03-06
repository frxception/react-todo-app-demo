import Actions from './action'

const initialState = {
    item: {
        id: '', 
        text: '', 
        completed: false
    },
    itemList: []
}


const reducers = ( state = initialState, action) => {

    switch (action.type){
        case Actions.Types.ADD_ITEM: {
            return {
                ...state,
                itemList: [...state.itemList, action.payload]
            }
        }
        
        case Actions.Types.DELETE_ITEM: {
            return {
                ...state,
                itemList: state.itemList.filter(
                    item => item.id !== action.payload.id
                )
            }
        }
        
        case Actions.Types.EDIT_ITEM: {
            const itemList = state.itemList
            itemList.map(item=>{
                if(item.id === action.payload.id){
                    item.text= action.payload.text;
                }
            })

            return {
                ...state,
                itemList: [...itemList]
            }
        }

        case Actions.Types.CURRENT_ITEM: {
            return {
                ...state,
                item: {
                    id: Date.now(),
                    text: action.payload
                }
            }
        }

        case Actions.Types.COMPLETED_ITEM: {
            return {
                ...state,
                itemList:  state.itemList.map(item=>item.id === action.payload ? {...item, completed: !item.completed} : item)
                
            }
        }
        
        case Actions.Types.MOVE_UP: {
            let items = [...state.itemList]
            const sIdx = items.findIndex((f, idx)=>action.payload.id === f.id)
            const oldUpItem = items[sIdx-1] || null
            if(oldUpItem){
                items[sIdx] = { 
                    id: state.itemList[sIdx].id , 
                    text: oldUpItem.text
                }
                items[sIdx - 1] = { 
                    id: state.itemList[sIdx-1].id,
                    text: state.itemList[sIdx].text
                } 
            }
            return {
                ...state,
                itemList: items
            }
        }

        case Actions.Types.MOVE_DOWN: {
            const items = [...state.itemList]
            const sIdx = items.findIndex((f, idx)=>action.payload.id === f.id)
            const oldDownItem = items[sIdx+1] || null
            if(oldDownItem){
                items[sIdx] = {
                    id: state.itemList[sIdx].id,
                    text: oldDownItem.text
                }
                
                items[sIdx + 1] = {
                    id: state.itemList[sIdx+1].id,
                    text: state.itemList[sIdx].text
                }
            }
            return {
                ...state,
                itemList: items
            }
        }

        default: return state;
    }
}

export default reducers;