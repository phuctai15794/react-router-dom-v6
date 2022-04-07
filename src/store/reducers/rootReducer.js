import * as storage from '../../utils/Storage';

const initState = {
    users: {
        urlAPI: 'https://reqres.in'
    },
    todos: {
        list: storage.get('TODOS-CLASS')
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-TODO': {
            const newTodos = [...state.todos.list, action.payload];
            storage.set('TODOS-CLASS', newTodos);

            return {
                ...state,
                todos: {
                    list: newTodos
                }
            };
        }

        case 'UPDATE-TODO': {
            let newTodos = state.todos.list.map(item => {
                return (item.id === action.payload.id && action.payload) || item;
            });

            newTodos = [...newTodos];
            storage.set('TODOS-CLASS', newTodos);

            return {
                ...state,
                todos: {
                    list: newTodos
                }
            };
        }

        case 'DELETE-TODO': {
            const newTodos = state.todos.list.filter(todo => todo.id !== action.payload.id);
            storage.set('TODOS-CLASS', newTodos);

            return {
                ...state,
                todos: {
                    list: newTodos
                }
            };
        }

        default:
            return state;
    }
}

export default rootReducer;