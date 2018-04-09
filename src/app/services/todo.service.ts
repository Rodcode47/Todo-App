import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../store';
import { ITodo } from '../todo';

@Injectable()
export class TodoService {
  todosCollection: AngularFirestoreCollection<ITodo>;
  todoDoc: AngularFirestoreDocument<ITodo>;
  todos: Observable<ITodo[]>;
  todo: Observable<ITodo>;

  constructor(private afs: AngularFirestore) {
    this.todosCollection = this.afs.collection('todos', ref => ref.orderBy('lastName', 'asc'));
  }

  getTodos(): Observable<ITodo[]> {
    // Get clients with the id
    this.todos = this.todosCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ITodo;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.todos;
  }

  newTodo(todo: ITodo) {
    this.todosCollection.add(todo);
  }

  getTodo(id: string): Observable<ITodo> {
    this.todoDoc = this.afs.doc<ITodo>(`todos/${id}`);
    this.todo = this.todoDoc.snapshotChanges().map(action => {
      // tslint:disable-next-line:whitespace
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ITodo;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.todo;
  }

  deleteClient(todo: ITodo) {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    this.todoDoc.delete();
  }

}
