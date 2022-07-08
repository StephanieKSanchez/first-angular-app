import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos', //this is how we use this component in oother components
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    //use 'this' to get variables from inside classes
    this.todos = [
      {
        content: 'First to do',
        completed: false,
      },
      {
        content: 'Second to do',
        completed: true,
      },
    ];
  }
}
