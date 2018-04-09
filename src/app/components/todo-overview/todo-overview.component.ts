import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_TODOS } from '../../actions';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
    this.flashMessage.show('Removed todo added', {
      cssClass: 'alert-danger', timeout: 4000
    });
  }

}
