import { ITodo } from './todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
// tslint:disable-next-line:semicolon
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            // tslint:disable-next-line:semicolon
            })

        case TOGGLE_TODO:
            const todo = state.todos.find(t => t.id === action.id);
            const index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    // tslint:disable-next-line:whitespace
                    ...state.todos.slice(index+1)
                ],
                lastUpdate: new Date()
            // tslint:disable-next-line:semicolon
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            // tslint:disable-next-line:semicolon
            })

        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todo: [],
                lastUpdate: new Date()
            // tslint:disable-next-line:semicolon
            })
    }
    return state;
}
