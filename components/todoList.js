import React from 'react'
import ToDoModel from './todoModel.js'
import TodoItem from './toDoItem.js'


class todoList extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		let listItems  = this.props.todos.map(function (todo) {
				return (
					<TodoItem 
					key={todo.id} 
					todo={todo}
					toggleTodo={this.props.toggleTodo.bind(this)}
					deleteTodo={this.props.deleteTodo.bind(this)}

					/>		
				)
			}.bind(this))
		return(
			<div>
				{listItems}
			</div>
		)
	}

}

export default todoList