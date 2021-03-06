
export default (function(){

	var model = {
		todos:[]
	} 

	function addTodo(name){
		model.todos.push({
			name:name,
			completed:false,
			active:true,
			id: uuid(name)
		})
		return model.todos;
	};

	function removeTodo(removeTodo){
		_.remove(model.todos,function(todo){
			return todo.id === removeTodo.id
		})
		return model.todos;
	};

	function update(todo){
		var index = _.indexOf(model.todos, _.find(model.todos, {id: todo.id}));

		model.todos.splice(index, 1, todo);
		return model.todos;
	};

	function todos(name){
		return model.todos;
	};

	function filter(type){
		switch(type){
			case "ALL":{
				return model.todos
				break
			}
			case "ACTIVE":{		
				return _.filter( model.todos,todo => todo.active);
				break
			}
			case "COMPLETE":{
				return _.filter( model.todos,todo => todo.completed);
				break
			}
			default:{
				return model.todos
			}

		}


	}

    function uuid() {
		var i, random;
		var uuid = '';

		for (i = 0; i < 32; i++) {
			random = Math.random() * 16 | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
				.toString(16);
		}

		return uuid;
	}

	return{
		addTodo:addTodo,
		update:update,
		removeTodo:removeTodo,
		todos:todos,
		filter:filter
	}

})()