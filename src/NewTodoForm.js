import React, { Component } from 'react'

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {newTodo: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render(){
        return (
            <form>
                <label htmlFor="newTodo">To do: </label>
                <input 
                    type="text"
                    name="newTodo" 
                    id="nwTodo" 
                    value={this.state.newTodo} 
                    onChange={this.handleChange}>
                </input>
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;