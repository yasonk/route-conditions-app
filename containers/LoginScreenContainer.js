// @flow
//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React, {useMemo} from 'react';
import {LoginScreen} from "../components/LoginScreen";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";


export function LoginScreenContainer () {
    const stateProps = useSelector(state => {
        return {
            userToken: state.userToken,
        };
    });

    const dispatch = useDispatch();

    const boundActionProps = useMemo(() => bindActionCreators(
        {
            onLogin: () => (dispatch: Dispatch) => { console.log("Yason testing stuff dog") }
        },
        dispatch
    ), [dispatch]);

    return (<LoginScreen {...stateProps} {...boundActionProps} />);
}
