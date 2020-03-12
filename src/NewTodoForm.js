import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {newTodo: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ""});
    }
    render(){
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="newTodo">To do: </label>
                <input 
                    className="NewTodoForm-input"
                    type="text"
                    name="newTodo" 
                    id="newTodo" 
                    value={this.state.newTodo} 
                    onChange={this.handleChange}>
                </input>
                <button className="NewTodoForm-button">Add</button>
            </form>
        )
    }
}

export default NewTodoForm;