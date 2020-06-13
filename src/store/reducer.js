import Actions from './action'

const initialState = {
    item: {
        id: '', text: ''
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


        default: return state;
    }
}

export default reducers;