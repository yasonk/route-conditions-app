import {combineReducers} from "redux";

export const authTokenReducer = ( authToken = '', action ) => {
    return authToken;
}

export const userReducer = combineReducers( {
    authToken: authTokenReducer,
} );
