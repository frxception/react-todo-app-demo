import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store/index'


import './index.css';
import App from './App';


ReactDOM.render(
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
