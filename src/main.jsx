import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'; 
import App from '../src/components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
