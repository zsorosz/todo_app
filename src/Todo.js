import React, { Component } from 'react'
import TodoEditor from './TodoEditor';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {isEditing: false};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    handleDelete(evt){
        evt.preventDefault();
        this.props.removeTodo(this.props.id);
    }
    handleEdit(evt){
        evt.preventDefault();
        this.setState({isEditing: true});
    }
    editTodo(todo){
        this.setState({isEditing: false});
        this.props.updateTodo(todo, this.props.id);
    }
    render(){
        if(this.state.isEditing){
            return (
                <div><TodoEditor task={this.props.task} editTodo={this.editTodo}/></div>
            )
        } else {
            return (
                <div>
                    <div>{this.props.task}</div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>x</button>
                </div>
                )
        }
    }
}

export default Todo;