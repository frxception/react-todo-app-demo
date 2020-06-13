import React, {useState} from 'react';
import ItemList from './components/item-list'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: '',
                text: ''
            },
            itemList: []
        }
        this.handleChange = this.handleChange.bind(this); //NOTE: so that we use this
        this.actionDelete = this.actionDelete.bind(this);
        this.actionAdd = this.actionAdd.bind(this);
        this.actionEdit = this.actionEdit.bind(this);
    }

    handleChange(event) {
        event.preventDefault()
        const {value} = event.target
        const item = {
            item: {
                id: Date.now(),
                text: value
            }
        }
        this.setState(item,()=>{
            console.log('handleChange state: ', this.state)
        })
    }

    actionAdd(event) {
        event.preventDefault()
        const item = this.state.item
  
        this.setState({itemList: [...this.state.itemList, item]}, ()=>{
            console.log('handleSubmit state: ',this.state.itemList)
        })
        // this.setState((prevState)=> {
        //     return {
        //         itemList: prevState.itemList.concat(prevState.item)
        //     }
        // })
    }


    actionEdit(){
        
    }
    
    actionDelete(id){
        const filteredItem = this.state.itemList.filter(
            item => item.id !== id
        )
        this.setState({itemList: filteredItem})
        console.log('actionDelete state.itemList: ',this.state.itemList)
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TODO APP</h1>
                    <ItemList itemList={this.state.itemList} actionDelete={this.actionDelete} />
                    <form onSubmit={this.actionAdd} id='myform'>
                        <input name='text' type='text' className='input' onChange={this.handleChange}/>
                        <button type="submit">submit</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default App;
