import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}
  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    return ({
      todo: true,
      'is-completed': this.todo.completed,
    })
  }

  onToggle(todo) {
    console.log('toggle')
  }
  onDelete(todo) {
    console.log('delete')
  }

}
