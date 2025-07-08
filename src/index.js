import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
// import Movies from './homework/movies';
// import HotelName from "./homework/hotelClass";
// import ComposingComponent from "./Study/ComposingComponents/ComposingComponent";
// import Demo from "./Study/ComposingComponents/demo";
// import Circket from "./homework/Cricket/cricket";
// import Main from "./homework/Cricket/main";
// import UseContext from "./hooks/useContext";
//import Name from "./higherOrderComponent/name";
// import Count from "./Study/increasingCount/count";
// import DataShare from "./homework/dataShare";
// import RH from "./Study/reducerHook";
import {BrowserRouter}  from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
