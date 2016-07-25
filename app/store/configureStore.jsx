import * as redux from 'redux';
import thunk from 'redux-thunk';

import { authReducer, imgUrlReducer, toggleMenuReducer } from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        auth: authReducer,
        imgUrl: imgUrlReducer,
        isOpen: toggleMenuReducer
    });

    // Add middleware here --
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
