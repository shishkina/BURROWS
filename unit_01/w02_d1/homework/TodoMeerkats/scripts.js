
// What is the todo?
class ToDo {
  constructor(task) {
    this.task = task;
    this.createAt = Date.now();
  }
}

// What should a todo look like on the screen?
  // <li class="todo-item">
  //  <button class="remote-todo">Remove</button>
  //  <h3 class="task" >Buy that milk!</h3>
  // </li>
class ToDoView {
  constructor(todo) {
    this.todo = todo;
    this.el = document.createElement('li');
    this.el.className = 'todo-item';
  }
  setRemoveClickHandler() {
    this.el.querySelector('button.remove-todo').addEventListener('click', (e) => {
      const removeEvent = new CustomEvent('remove-todo-clicked', {
        bubbles: true,
        detail: { todo: this.todo },
      });
      this.el.dispatchEvent(removeEvent);
    });
  }
  render() {
    this.el.innerHTML = `
      <button class="remove-todo">Remove</button>
      <h3 class="task" >${this.todo.task}</h3>
    `;
    this.setRemoveClickHandler();
  }
}

// What should a list of todos look like on the screen?
class ToDoListView {
  constructor(todos, el) {
    this.el = el || document.createElement('ul');
    this.todos = todos;
  }
  render() {
    let todoView;
    this.el.innerHTML = '';
    for (let todo of this.todos) {
      todoView = new ToDoView(todo);
      todoView.render();
      this.el.appendChild(todoView.el);
    }
  }
}

// How does it all work together?
class App {
  constructor(listNode) {
    this.todos = [];
    this.listView = new ToDoListView(this.todos, listNode);
    this.setRemoveTodoHandler();
  }
  createTodo(task) {
    const todo = new ToDo(task);
    this.todos.push(todo);
    this.update();
  }
  removeTodo(todo){
    let idx;
    for (let i = 0; i < this.todos.length; i++) {
      if (todo.task === this.todos[i].task) {
        idx = i;
      }
    }
    this.todos.splice(idx, 1);
  }
  update() {
    this.listView.todos = this.todos;
    this.listView.render();
  }
  setRemoveTodoHandler() {
    this.listView.el.addEventListener('remove-todo-clicked', (e) => {
      const todo = e.detail.todo;
      this.removeTodo(todo);
      this.update();
    });
  }
  setTodoCreationHandler(formNode) {
    formNode.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskInputNode = e.target.querySelector('input[name="task"]');
      this.createTodo(taskInputNode.value);
      taskInputNode.value = '';
    });
  }
}


const app = new App(document.querySelector('ul.todo-list'));
app.setTodoCreationHandler(document.querySelector('.todo-creation-machine'));



setInterval(() =>{
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 5000);
