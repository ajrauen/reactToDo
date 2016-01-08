import React from 'react'

class ToDoInput extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<input 
				className="itemInput form-control"
				value={this.props.value}
				onChange={this.props.onChange}
				onKeyDown={this.props.handleKeyDown}
				placeholder="You do You"
			 />
		)
	}

}

export default ToDoInput