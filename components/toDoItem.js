import React from 'react'

class toDoItem extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		return ( 
	
					<div className="form-control">
						<input
							className="left"
							type="checkbox"
							checked={this.props.todo.completed}
							onChange={this.props.completeTodo.bind(null, this.props.todo)}
						/>
						<label 
							className={classNames({
								itemLabel: true,
								completed: this.props.todo.completed,
								active: !this.props.todo.active
							})}
							onDoubleClick={this.handleEdit} 
							onClick={this.props.toggleTodo.bind(null,this.props.todo)}
						>
							{this.props.todo.name}
						</label>
						<div  className="fa fa-times right destroy" onClick={this.props.deleteTodo.bind(null,this.props.todo)} />
					</div>
					
		)
		
	}


}

export default toDoItem