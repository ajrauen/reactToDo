import React from 'react';
import ReactDOM from 'react-dom'

import ToDoInput from './components/todoInput.js'
import ToDoList from './components/todoList.js'

import ToDoModel from './components/todoModel.js'
import Filter from './components/filter.js'


export class App extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	newTodo: "",
	    	todos: []
	    };
	  }

	handleKeyDown(evt){
		if (evt.keyCode !== 13) {
			return;
		}

		evt.preventDefault();

		var val = this.state.newTodo.trim();

		if (val) {
			this.setState({todos: this.props.model.addTodo(val)});
			this.setState({newTodo: ''});
		}
	}

	onChange(evt){
		this.setState({newTodo:evt.target.value})
	}

	deleteTodo(todo){
		this.setState({
			todos: this.props.model.removeTodo(todo)
		})
	}

	toggleTodo(todo){
		todo.completed = !todo.completed
		this.setState({
			todos: this.props.model.update(todo)
		})
	}

	render(){
		return(
		  <div className="text-center">
			<div className="well col-md-5 col-md-offset-3 mainWell">
				<ToDoInput 
					value={this.state.newTodo}
					handleKeyDown={this.handleKeyDown.bind(this)}
					onChange={this.onChange.bind(this)}
				 />
				 <ToDoList 
				 	deleteTodo={this.deleteTodo.bind(this)}
				 	toggleTodo={this.toggleTodo.bind(this)}
				 	todos={this.state.todos}
				 />
				 <Filter todos={this.state.todos}/>
			</div>
		  </div>
		)
	}

}

ReactDOM.render(
		<App model={ToDoModel} />,
		document.getElementById('app')	
	)

