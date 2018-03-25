import React from 'react';
import {Provider} from "react-redux";
import store from "./stores/todosStore";
import CurrentView from "./components/CurrentView";
import {getTodos} from "./common/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getTodos();
  }

  render() {
    return (
      <Provider store={store}>
        <CurrentView/>
      </Provider>
    );
  }
}

export default App;