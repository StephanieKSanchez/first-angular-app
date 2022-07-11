import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos', //this is how we use this component in oother components
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = '';

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    //use 'this' to get variables from inside classes
    this.todos = [
      {
        content: 'First to do',
        completed: false,
      },
      {
        content: 'Second to do',
        completed: false,
      },
    ];
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }

  toggleDone(id: number) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;

      return value;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }
}
