import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/phonebook-react">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
