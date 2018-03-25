import React from 'react';
import {
  SET_AUTHORIZATION,
  SET_CURRENT_VIEW, SET_TODOS
} from '../actions/todosActions'
import LoadingScreen from "../components/LoadingScreen";

const initialState = {
  authorization: null,
  currentView: <LoadingScreen/>,
  todos: []
};

export function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case SET_AUTHORIZATION:
      return Object.assign({}, state, {
        authorization: action.authorization
      });
    case SET_CURRENT_VIEW:
      return Object.assign({}, state, {
        currentView: action.currentView
      });
    case SET_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state
  }
}