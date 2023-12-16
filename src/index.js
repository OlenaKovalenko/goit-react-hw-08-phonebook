import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { persistor, store } from 'redux/store';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename='goit-react-hw-08-phonebook'>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
            <GlobalStyle/>
          </BrowserRouter>
      </PersistGate>
      </HelmetProvider>
      
    </Provider>
  </React.StrictMode>
);
