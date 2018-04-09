import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions';
import { ITodo } from '../../todo';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    // tslint:disable-next-line:quotemark
    description: "",
    // tslint:disable-next-line:quotemark
    responsible: "",
    // tslint:disable-next-line:quotemark
    priority: "low",
    isCompleted: false
  };

  @ViewChild('todoForm') form: any;

  constructor(private ngRedux: NgRedux<IAppState>, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  obSubmit({value, valid}: {value: ITodo, valid: boolean}) {
    // tslint:disable-next-line:whitespace
    if(!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add new todo
      this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
        // Show message
      this.flashMessage.show('New todo added', {
        cssClass: 'alert-success', timeout: 4000
      });
    }
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
    this.flashMessage.show('Removed todo added', {
      cssClass: 'alert-danger', timeout: 4000
    });
  }

}
