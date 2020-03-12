import React, { Component } from 'react'
import TodoEditor from './TodoEditor';
import './Todo.css';

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
                <div className="Todo">
                    <div className="Todo-task">{this.props.task}</div>
                    <button className="Todo-button Todo-button__edit" onClick={this.handleEdit}>Edit</button>
                    <button className="Todo-button Todo-button__delete" onClick={this.handleDelete}>X</button>
                </div>
                )
        }
    }
}

export default Todo;