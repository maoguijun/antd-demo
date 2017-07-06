import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';    
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import LoginPage from '../src/container/account/LoginPage';


const store = configureStore();
const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>

        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
