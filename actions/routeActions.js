// @flow

import {Dispatch} from 'redux';
const superagent = require('superagent');

//Define your action types 
//Initiate the api call
const GET_REPORTS = 'GET_REPORTS';
//Gets the players on api call is fullfilled
const GET_REPORTS_FULFILLED = 'GET_REPORTS_FULFILLED';
//When there is a error return an errror action type. 
const GET_REPORTS_REJECTED = 'GET_REPORTS_REJECTED';

export function isFetchData(action) {
    return action.type === GET_REPORTS;
}

//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_REPORTS,
        payload: bool,
    };
}

export function isFetchDataFulfilled(action) {
    return action.type === GET_REPORTS_FULFILLED;
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_REPORTS_FULFILLED,
        payload: data,
        loading: false,
    };
}

export function isFetchDataRejected(action) {
    return action.type === GET_REPORTS_REJECTED;
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_REPORTS_REJECTED,
        payload: error,
        loading: false,
    };
}

//Define your action creators that will be responsible for asynchronouse operatiosn 
export const getReports = () => {
    return (dispatch: Dispatch) => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then do a get request the get the err, and response callback, if there's an error dispatch the fetchDataRejected.
        superagent.get('http://localhost:3000/reports')
        .set({ 
            "Authorization": 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MDY1OTQ0MzV9.dqFr9Yq1pe9GjTIW8TQC-bD259mwNM72VRcfN9BNNB8',
            "Accept": "application/json"
        }).end((err, res) => {
            //if there is an error use our fetchDataReject
            if(err) dispatch(fetchDataRejected(err));
            //We will set our loading state when fetching data is successful.
            console.log(res)
            if (res) dispatch(fetchDataFulfilled(res.body));
        })
    }
}