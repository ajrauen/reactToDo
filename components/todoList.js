import React from 'react'
import ToDoModel from './todoModel.js'
import TodoItem from './toDoItem.js'


class todoList extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			todos : this.props.model.todos()
		}
	}

	deleteTodo(todo){
		this.setState({
			todos: this.props.model.removeTodo(todo)
		})
	}


	render(){

		let listItems  = this.state.todos.map(function (todo) {
				return (
					<TodoItem 
					key={todo.id} 
					todo={todo}
					destroy={this.deleteTodo.bind(this)}

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