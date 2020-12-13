import { isFetchData, isFetchDataFulfilled, isFetchDataRejected } from '../actions/routeActions';
const initialState = {
    //Have a resports array responsible for getting the data and setting to the array.
    reports: [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
    userToken: '',
}

//Define your reducer that will return the initialState by default
export const reducer = (state = initialState, action) => {
    if (isFetchData(action)){
        return {
            ...state,
            loading: action.payload
        };
    } else if (isFetchDataFulfilled(action)) {
        return {
            ...state,
            reports: action.payload,
            loading: action.loading
        };
    } else if (isFetchDataRejected(action)) {
        return {
            ...state,
            errorMessage: action.payload,
            loading: action.loading
        };
    } else {
        return state;
    }
}