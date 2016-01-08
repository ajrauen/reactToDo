import React from 'react'

class toDoItem extends React.Component{
	constructor(props){
		super(props)
	}


	destroy(){
		this.props.destroy(this.props.todo)
	}

	render(){

		return ( 
	
					<div className="form-control">
						<input
							className="toggle"
							type="checkbox"
		//					checked={this.props.todo.completed}
		//					onChange={this.props.onToggle}
						/>
						<label className="itemLabel" onDoubleClick={this.handleEdit}>
							{this.props.todo.name}
						</label>
						<div  className="fa fa-times destroy" onClick={this.destroy.bind(this)} />
					</div>
					
		)
		
	}


}

export default toDoItem