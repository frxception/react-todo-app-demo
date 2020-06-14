import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {addItem, editItem, deleteItem, currentItem, completedItem} from './store/action'

import ItemList from './components/item-list'
import './App.css';

class App extends React.Component {
    
    handleChange = (event) => {
        const {currentItem}  = this.props
        const {value} = event.target
        currentItem(value)
    }

    actionAdd = event => {
        event.preventDefault()
        const {addItem, item}  = this.props
        addItem(item)
    }


    actionEdit = (id, text) => {
        const {editItem}  = this.props
        editItem({ id, text} )
    }
    
    actionDelete = (id) =>{
        const {deleteItem}  = this.props
        deleteItem(id)
    }

    actionCompleted = (id) => {
        const {completedItem} = this.props;
        completedItem(id)
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

                    <ItemList itemList={itemList} actionDelete={this.actionDelete} actionEdit={this.actionEdit} actionCompleted={this.actionCompleted}/>

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
    editItem: item => dispatch(editItem(item)),
    completedItem: id => dispatch(completedItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
