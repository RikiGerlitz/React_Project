import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 

// import { MuiThemeProvider, createMuiTheme } from '@mui';
// const theme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: '#E33E7F'
//     }
//   }
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    {/* <MuiThemeProvider theme={theme}> */}
    <App />
    {/* </MuiThemeProvider> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
