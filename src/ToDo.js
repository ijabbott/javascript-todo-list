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
	this.todo.find(item => item.id === itemId).complete = true
};

ToDo.prototype.isItemComplete = function(itemId) {
	return this.todo.find(item => item.id === itemId).complete
};

function DomManipulation() {}

DomManipulation.prototype.init = function() {
	const form = document.createElement('form');
	const input = document.createElement('input');
	const ul = document.createElement('ul');
	input.id = "AddItemInput";
	form.id = "addItemForm";
	form.appendChild(input);
	return {
		form, ul
	}
};

DomManipulation.prototype.displayItem = function (item) {
	const li = document.createElement('li');
	li.innerText = item.title
	return li
}
