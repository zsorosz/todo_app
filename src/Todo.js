import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(evt){
        evt.preventDefault();
        this.props.removeTodo(this.props.id);
    }
    render(){
        return (
        <div>
            <div>{this.props.task}</div>
            <button onClick={this.handleDelete}>x</button>
        </div>
        )
    }
}

export default Todo;