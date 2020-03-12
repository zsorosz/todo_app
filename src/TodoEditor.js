import React, { Component } from 'react'

class TodoEditor extends Component {
    constructor(props){
        super(props);
        this.state = {editTodo: this.props.task};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.editTodo(this.state.editTodo);
        // this.setState({newTodo: ""});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.editTodo}
                    type="text"
                    name="editTodo" 
                    id="editTodo" 
                    onChange={this.handleChange}>
                </input>
                <button>Save</button>
            </form>
        )
    }
}
export default TodoEditor;