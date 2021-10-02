// import React from 'react';
// import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import reportWebVitals from './reportWebVitals';

// import {Provider} from 'react-redux';
// import configureStore from './redux/configureStore'
// import {BrowserRouter} from 'react-router-dom';


// export const store = configureStore();


// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </BrowserRouter>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import "./utils/scss/light-bootstrap-dashboard-react.scss?v=2.0.0"

import HttpService from "./redux/services/HttpService"
import UserService from "./redux/services/UserService";

const renderApp = () => ReactDOM.render(<App/>, document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();
