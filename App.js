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

	completeTodo(todo){
		todo.completed = !todo.completed
		this.setState({
			todos: this.props.model.update(todo)
		})	
	}

	toggleTodo(todo){
		todo.active = !todo.active
		this.setState({
			todos: this.props.model.update(todo)
		})
	}

	filter(evt){
		switch(evt.target.id){
			case "f_all":{
				this.setState({todos: this.props.model.filter('ALL')});		
				break
			}
			case "f_active":{
				this.setState({todos: this.props.model.filter('ACTIVE')});		
				break
			}
			case "f_complete":{
				this.setState({todos: this.props.model.filter('COMPLETE')});		
				break
			}

		}
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
					completeTodo={this.completeTodo.bind(this)}
	 				todos={this.state.todos}
				 />
				 <Filter todos={this.state.todos} filter={this.filter.bind(this)}/>
			</div>
		  </div>
		)
	}

}

ReactDOM.render(
		<App model={ToDoModel} />,
		document.getElementById('app')	
	)

