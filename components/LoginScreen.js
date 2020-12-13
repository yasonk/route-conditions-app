// @flow
//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React from 'react';

import {
  TextInput, View, Button, StyleSheet,
} from 'react-native';

export function LoginScreen(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }} >
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => props.onLogin()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})