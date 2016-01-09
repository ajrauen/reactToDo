import React from 'react'

class Filter extends React.Component{

	getCompleted(){
		var i = this.props.todos.length,
			c = 0;
		while(i>0){
			if(this.props.todos[i-1].completed){
				c++
			}
			i--
		}
		return c
	}
	
	render(){
		
		var c = this.getCompleted();
		return ( 
			<div className="form-control">
				<label className="left">{c} items left</label>
				<div>
					<span>All</span>
					<span>Active</span>
					<span>Complete</span>
				</div>

			</div>
					
		)

	}

}

export default Filter