import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(todo){
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
        console.log(this.state.todos)
    }
    renderItems(){
        return(
            <div>
                {this.state.todos.map((item, index) => (
                    <Todo key={index} id={index} task={item} />
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