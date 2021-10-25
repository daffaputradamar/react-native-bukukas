import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, TextField, Button, Image} from 'react-native-ui-lib';
import useAuth from '../../db/auth';
import {AuthType} from '../../types';
import { images } from '../../db/images'

const LoginScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const {auth, setLogin, cekIsLogin} = useAuth();
  const [credentials, setCredentials] = React.useState<AuthType>({
    username: '',
    password: '',
  });

  React.useEffect(() => {
    const cek = async () => {
      const v = await cekIsLogin();
      if (v) {
        navigation.push('Home');
      }
    };
    cek();
  }, []);

  const onSubmit = async () => {
    if (
      credentials.username === 'user' &&
      credentials.password === 'password'
    ) {
      await setLogin(credentials);
      navigation.push('Home');
    }
  };

  return (
    <View flex padding-10 centerV>
      <View centerH>
        <Image
          style={styles.logo}
          source={{
            uri: images.icon
          }}
        />
      </View>
      <TextField
        title="Username"
        onChangeText={(value: string) =>
          setCredentials({...credentials, username: value})
        }
      />
      <TextField
        title="Password"
        secureTextEntry
        onChangeText={(value: string) =>
          setCredentials({...credentials, password: value})
        }
      />
      <Button fullWidth onPress={onSubmit}>
        <Text white> Login </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
});

export default LoginScreen;
