describe('ToDo', () => {
	describe('Testing the functionality, this is the checklist', ()=>{
		it('should add an item', () => {
			let todo = new ToDo();
			let item = {
				title: "get milk",
				complete: false
			};

			todo.addTodo(item);

			expect(todo.getItems().length).toBe(1);
		});

		it('should delete an existing item', () => {
			let todo = new ToDo();
			let item = {
				title: "get milk",
				complete: false
			};

			todo.addTodo(item);
			todo.deleteTodo();

			expect(todo.getItems().length).toBe(0);
		});

		it('should delete a specified item', () => {
			let todo = new ToDo();
			let item1 = {
				id: 1,
				title: "get milk",
				complete: false
			};
			let item2 = {
				id: 2,
				title: "get break",
				complete: false
			};

			todo.addTodo(item1);
			todo.addTodo(item2);
			todo.deleteTodo(1);

			expect(todo.getItems().pop().id).toBe(2);
		});
	});
});
