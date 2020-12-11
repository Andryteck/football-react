import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from "./app/App";
import {Provider} from 'react-redux';
import {getStore} from "./redux/store";

const { store, persistor } = getStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


