import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store.js';
import NotePad from './components/NotePad.js';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Notepad Application</h1>
        <NotePad />
      </div>
    </Provider>
  );
};

export default App;
