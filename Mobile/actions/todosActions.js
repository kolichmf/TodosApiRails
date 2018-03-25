export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';
export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';
export const SET_TODOS = 'SET_TODOS';

export function setAuthorization(authorization) {
  return { type: SET_AUTHORIZATION, authorization };
}

export function setCurrentView(currentView) {
  return { type: SET_CURRENT_VIEW, currentView };
}

export function setTodos(todos) {
  return { type: SET_TODOS, todos };
}