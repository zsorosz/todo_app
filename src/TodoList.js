import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    addTodo(todo){
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
    }
    updateTodo(todo, id){
        let newTodos = this.state.todos.map(function(item, index){ return index == id ? todo : item});
        this.setState({todos: newTodos});
        this.renderItems();
    }
    removeTodo(todo){
        let newTodos = this.state.todos.filter(function(value, index, arr){ return index !== todo;})
        this.setState({todos: newTodos});
        this.renderItems();
    }
    renderItems(){
        return(
            <div>
                {this.state.todos.map((item, index) => (
                    <Todo key={index} id={index} task={item} removeTodo={this.removeTodo} updateTodo={this.updateTodo}/>
                ))}
            </div>
        )
    }
    render(){
        return (
            <div>
                <h1>My Todo List</h1>
                {this.renderItems()}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;