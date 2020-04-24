import React from 'react';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './Redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;
