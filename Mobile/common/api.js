import React from 'react';
import {CONFIG} from './constants';
import store from '../stores/todosStore';
import {setAuthorization, setCurrentView, setTodos} from "../actions/todosActions";
import LoginScreen from "../components/LoginScreen";
import Todos from "../components/Todos";
import LoadingScreen from "../components/LoadingScreen";

export function getTodos(){
  apiGet("/todos", (response) => {
    if(requiresAuth(response)){
      store.dispatch(setCurrentView(<LoginScreen/>));
    }
    else {
      store.dispatch(setTodos(response.json().todos));
      store.dispatch(setCurrentView(<Todos/>));
    }
  });
}

export function login(email, password) {
  apiPost(
    "/users/sign_in",
    { user: {
        email: email,
        password: password
      }
    },
    (response) => {
      if(response.status === 201){
        store.dispatch(setAuthorization(response.headers.get('Authorization')));
        store.dispatch(setCurrentView(<LoadingScreen/>));
        getTodos();
      }
      else {
        console.error("incorrect credentials");
      }
    }
  );
}

function apiGet(uri, callback) {
  fetch(getApiCall(uri), {
    method: 'GET',
    headers: getHeaders()
  }).
  then((response) => callback(response)).
  catch((error) => {
    console.error(error);
  });
}

function apiPost(uri, body, callback) {
  fetch(getApiCall(uri), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body)
  }).
  then((response) => callback(response)).
  catch((error) => {
    console.error(error);
  });
}

function requiresAuth(response) {
  if(response.status === 401){
    store.dispatch(setCurrentView(<LoginScreen/>));
    return true;
  } else {
    return false;
  }
}

function getHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: store.getState().authorization
  };
}

function getApiCall(uri) {
  return CONFIG[process.env.NODE_ENV].API_URL + uri;
};
