describe('ToDo', () => {
	describe('Testing the functionality, this is the checklist', ()=>{
		let todo, item1, item2

		beforeEach(function(){
			todo = new ToDo();
			item1 = {
				id: 1,
				title: "get milk",
				complete: false
			},
			item2 = {
				id:2,
				title: "get eggs",
				complete: false
			}
		});
		it('should add an item', () => {
			todo.addTodo(item1);

			expect(todo.getItems().length).toBe(1);
		});

		it('should delete a specified item', () => {
			todo.addTodo(item1);
			todo.addTodo(item2);
			todo.deleteTodo(1);

			expect(todo.getItems().pop().id).toBe(2);
		});

		it('should not delete an item not in list', () => {
			todo.addTodo(item1);
			todo.deleteTodo(3);

			expect(todo.getItems().length).toBe(1);
		});

		it('should mark an item as complete', () => {
			todo.addTodo(item1);
			todo.completeItem(1);

			expect(todo.isItemComplete(1)).toBe(true);
		});
	});

	describe('Testing DOM manipulation', function() {
		let Dom, item, todo;
		beforeEach(function() {
			todo = new ToDo();
			Dom = new DomManipulation();
			item = {
				complete: false,
				id: 1,
				title: 'Awesome thing to do'
			}
		});

		it('should initialise HTML', function() {
			const form = document.createElement('form');
			const input = document.createElement('input');
			const ul = document.createElement('ul');
			input.id = "AddItemInput";
			form.id = "addItemForm";
			form.appendChild(input);
			expect(Dom.init().form).toEqual(form);
			expect(Dom.init().ul).toEqual(ul);
		});

		it('should create item', function() {
			const element = Dom.displayItem(item);
			const result = document.createElement('li');
			result.innerText = item.title;
			expect(element).toEqual(result);
		})
	})
});
