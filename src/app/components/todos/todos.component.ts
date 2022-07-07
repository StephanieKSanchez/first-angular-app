import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos', //this is how we use this component in oother components
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
