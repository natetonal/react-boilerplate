export var authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.uid;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

export var imgUrlReducer = (state = "", action) => {
    switch(action.type){
        case 'GET_IMG_URL':
            console.log('Adding to state: ', action.imgUrl);
            return action.imgUrl;
        default:
            return state;
    }
};

export var toggleMenuReducer = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_MENU':
            console.log('Toggling settings menu: ', !state);
            return !state;
        default:
            return state;
    }
};
