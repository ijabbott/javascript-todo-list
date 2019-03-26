function ToDo() {
	this.todo = [];
}

ToDo.prototype.addTodo = function(item) {
	this.todo.push(item)
};

ToDo.prototype.getItems = function() {
	return this.todo
};

ToDo.prototype.deleteTodo = function(itemId) {
	this.todo = this.todo.filter(item => item.id !== itemId)
};

ToDo.prototype.completeItem = function(itemId) {
	this.todo.filter(item => item.id === itemId)[0].complete = true
};

ToDo.prototype.isItemComplete = function(itemId) {
	return this.todo.filter(item => item.id === itemId)[0].complete
};
