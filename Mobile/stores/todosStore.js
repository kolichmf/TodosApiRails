import { createStore } from 'redux'
import { todoApp }from '../reducers/todosReducer'

let store = createStore(todoApp);
export default store;