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
	});
});
