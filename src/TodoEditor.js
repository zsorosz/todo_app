import React, { Component } from 'react'

class TodoEditor extends Component {
    render(){
        return (
            <form>
                <input value={this.props.task}>
                </input>
            </form>
        )
    }
}
export default TodoEditor;