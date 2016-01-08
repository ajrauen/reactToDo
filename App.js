import React from 'react';
import ReactDOM from 'react-dom'

import ToDoInput from './components/todoInput.js'
import ToDoList from './components/todoList.js'

import ToDoModel from './components/todoModel.js'


export class App extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	newTodo: "",
	    	toDos: []
	    };
	  }

	handleKeyDown(evt){
		if (evt.keyCode !== 13) {
			return;
		}

		evt.preventDefault();

		var val = this.state.newTodo.trim();

		if (val) {
			this.props.model.addTodo(val);
			this.setState({})
			this.setState({newTodo: ''});
		}
	
	}

	onChange(evt){
		this.setState({newTodo:evt.target.value})
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
				 <ToDoList model={this.props.model}/>
			</div>
		  </div>
		)
	}

}

ReactDOM.render(
		<App model={ToDoModel} />,
		document.getElementById('app')	
	)

