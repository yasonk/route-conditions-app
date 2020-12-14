/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import provider to connect component to redux store.
import {Provider} from 'react-redux';
//import your store to connect your component.
import {reportsStore} from './redux/store';
import {registerRootComponent} from 'expo';
import {NavContainer} from "./containers/NavContainer";

function App() {
    console.log("NAV CONTAINER");
  return (
    <Provider store={reportsStore}>
      <NavContainer />
    </Provider>
  );
}

registerRootComponent(App);

export default App;
