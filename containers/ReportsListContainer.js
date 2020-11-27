// @flow
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {getReports} from '../actions/routeActions';
import { ReportsList } from "../components/ReportsList";


export function ReportsListContainer() {
    const stateProps = useSelector(state => {
        return {
            reports: state.reports,
            loading: state.loading,
            errorMessage: state.errorMessage,
        };
    });

    const dispatch = useDispatch();

    const boundActionProps = useMemo(() => bindActionCreators(
        {
            onRefreshReports: getReports
        },
        dispatch
    ), [dispatch]);

    return (<ReportsList {...stateProps} {...boundActionProps} />);

}