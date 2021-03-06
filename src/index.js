import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'


// Layouts
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux Store
import store from './store/configureStore'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={App}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
