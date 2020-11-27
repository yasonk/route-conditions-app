// @flow
//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React from 'react';
//impo rt your UI from react-native
import {
  StyleSheet,
  Text, View
} from 'react-native';
import { useEffect } from 'react';
import type { Report } from '../redux/store';


export type ReportsListProps = {
  reports: Report[];
  loading: boolean;
  errorMessage: string;
  onRefreshReports: () => void;
}

export const ReportsList: (props: ReportsListProps) => React$Node = (props: ReportsListProps) => {
  useEffect(() => {
    props.onRefreshReports();
  }, [props.onRefreshReports]);

  const { reports, loading, errorMessage } = props;

  if(!loading) {
      return (
      <View style={styles.container}>
          {reports.length ? reports.map((report, i) => <Text key={i}>{report.message}</Text>) : <Text>No Reports</Text>}
      </View>
      );
  } else {
      return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Loading...........</Text>
      </View>
      )
  }
  // return (
  //   <View style={styles.container}>
  //     <Text>{reports.map((report, i) => ) ? "hey" : "yo"}</Text>
  //   </View>
  // );
}

//Define your styles by using StyleSHeet from react-native to cerate a css abstraction
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
