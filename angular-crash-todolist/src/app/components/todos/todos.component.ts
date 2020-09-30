import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html' ,
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        completed: false,
        title: 'Move to Italy', 
      },
      {
        id: 2,
        completed: true,
        title: 'Get Better Job', 
      },
      {
        id: 3,
        completed: false,
        title: 'Get me Out', 
      }
    ]
  }

}
