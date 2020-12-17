import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from "./app/App";
import {Provider} from 'react-redux';
import {getStore} from "./redux/store";
import './i18n';

const {store, persistor} = getStore();


ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={false}>
            <App/>
        </Suspense>
    </Provider>,
    document.getElementById('root')
);


