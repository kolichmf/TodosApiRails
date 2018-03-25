import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {styles} from '../common/styles';
import {login} from '../common/api';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.com',
      password: 'password'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          placeholder='email'
          style={styles.input}
          value='test@test.com'
          onChangeText={ (email) => { this.setState({email}) } }
        />
        <TextInput
          placeholder='password'
          value='password'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={ (password) => { this.setState({password})} }
        />
        <Button
          title='login'
          onPress={this.submit}
        />
      </View>
    );
  }

  submit = () => {
    login(this.state.email, this.state.password);
  }
}

export default LoginScreen;