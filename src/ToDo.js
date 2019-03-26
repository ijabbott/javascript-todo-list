function ToDo() {
	this.todo = [];
}

ToDo.prototype.addTodo = function(item) {
	this.todo.push(item)
};

ToDo.prototype.getItems = function() {
	return this.todo
};

ToDo.prototype.deleteTodo = function() {
	this.todo.pop()
};
