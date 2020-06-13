import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addItem, editItem, deleteItem, currentItem } from './store/action'

import ItemList from './components/item-list'
import './App.css';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         item: {
    //             id: '',
    //             text: ''
    //         },
    //         itemList: []
    //     }
    //     this.handleChange = this.handleChange.bind(this); //NOTE: so that we use this
    //     this.actionDelete = this.actionDelete.bind(this);
    //     this.actionAdd = this.actionAdd.bind(this);
    //     this.actionEdit = this.actionEdit.bind(this);
    // }
    
    // constructor(props) {
    //     super(props);
    // }

// const App = ({item, itemList, addItem, editItem, deleteItem, currentItem}) => {
    
    handleChange = (event) => {
        const {currentItem}  = this.props
        const {value} = event.target
        console.log('handleChange value: ', value)
        console.log('handleChange value: ', this.props)
        currentItem(value)
        // const item = {
        //     item: {
        //         id: Date.now(),
        //         text: value
        //     }
        // }
        // this.setState(item,()=>{
        //     console.log('handleChange state: ', this.state)
        // })
        
    }

    actionAdd = event => {
        event.preventDefault()
        const {addItem, item}  = this.props
        addItem(item)

        // const item = this.state.item
        //
        // this.setState({itemList: [...this.state.itemList, item]}, ()=>{
        //     console.log('handleSubmit state: ',this.state.itemList)
        // })
        
        
        // this.setState((prevState)=> {
        //     return {
        //         itemList: prevState.itemList.concat(prevState.item)
        //     }
        // })
    }


    actionEdit = (id, text) => {
        // const itemList = this.state.itemList
        // itemList.map(item=>{
        //     if(item.id===id){
        //         console.log(item.key +"    "+id)
        //         item.text= text;
        //     }
        // })
        // this.setState({itemList})
        console.log('.>>>>>>> ', id, text)
        const {editItem}  = this.props
        editItem({ id, text} )
    }
    
    actionDelete = (id) =>{
        // const filteredItem = this.state.itemList.filter(
        //     item => item.id !== id
        // )
        // this.setState({itemList: filteredItem})
        // console.log('actionDelete state.itemList: ',this.state.itemList)
        const {deleteItem}  = this.props
        deleteItem(id)

    }


    render() {
        console.log('[Render App component]')
        const {itemList} = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TODO APP</h1>
                    <form onSubmit={this.actionAdd} id='myform'>
                        <input name='text' type='text' className='input' onChange={this.handleChange}/>
                        <button type="submit">submit</button>
                    </form>

                    <ItemList itemList={itemList} actionDelete={this.actionDelete} actionEdit={this.actionEdit} />

                </header>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        item: state.item,
        itemList: state.itemList
    }
)

const mapDispatchToProps = dispatch => ({
    currentItem: text => dispatch(currentItem(text)),
    addItem: item => dispatch(addItem(item)),
    deleteItem: id => dispatch(deleteItem(id)),
    editItem: item => dispatch(editItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
