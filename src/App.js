import React, {useState} from 'react';
import ItemList from './components/item-list'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this); //NOTE: so that we use this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.actionDelete = this.actionDelete.bind(this);
    }

    handleChange(event) {
        event.preventDefault()
        const {value, name} = event.target
        this.setState( {[name]: value}, ()=>{
            console.log('something change...', this.state)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const items = this.state.items
        const item = this.state.item
        items.push(item)
        this.setState({items})
        // this.setState((prevState)=> {
        //     return {
        //         items: prevState.items.concat(prevState.item)
        //     }
        // })
        console.log('submit...',this.state)
    }

    actionDelete(key){
        const filteredItem = this.state.items.filter(
            item => item !== key
        )
        this.setState({items: filteredItem})
        console.log('actionDelete...this.state.items: ',this.state.items)
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TODO APP</h1>
                    <ItemList items={this.state.items} item={this.state.item} actionDelete={this.actionDelete} />
                    <form onSubmit={this.handleSubmit} id='myform'>
                        <input name='item' type='text' className='input' onChange={this.handleChange}/>
                        <button type="submit">submit</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default App;
