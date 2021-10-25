import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Button, Image} from 'react-native-ui-lib';
import useAuth from '../../db/auth';
import { images } from '../../db/images';

const HomeScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const {cekIsLogin} = useAuth();

  React.useEffect(() => {
    const cek = async () => {
      const v = await cekIsLogin();
      if (!v) {
        navigation.push('Login');
      }
    };
    cek();
  }, []);

  return (
    <View flex centerV centerH>
      <Image
          marginB-50
          style={styles.logo}
          source={{
            uri: images.icon
          }}
        />
      <View row spread>
        <Button
          margin-15
          fullWidth
          onPress={() => navigation.push('Pemasukan')}>
          <View>
            <Image
              marginT-10
              marginB-20
              alignSelf="center"
              style={styles.miniLogo}
              source={{
                uri: images.pemasukan
              }}
            />
            <Text white>Tambah Pemasukan</Text>
          </View>
        </Button>
        <Button
          margin-15
          fullWidth
          onPress={() => navigation.push('Pengeluaran')}>
            <View>
            <Image
              marginT-10
              marginB-20
              alignSelf="center"
              style={styles.miniLogo}
              source={{
                uri: images.pengeluaran
              }}
            />
            <Text white>Tambah Pengeluaran</Text>
          </View>
        </Button>
      </View>
      <View row spread>
        <Button margin-15 fullWidth onPress={() => navigation.push('CashFlow')}>
        <View paddingL-30 paddingR-30>
            <Image
              marginT-10
              marginB-20
              alignSelf="center"
              style={styles.miniLogo}
              source={{
                uri: images.accounting
              }}
            />
            <Text white>Cash Flow</Text>
          </View>
        </Button>
        <Button margin-15 fullWidth onPress={() => navigation.push('Setting')}>
        <View paddingL-30 paddingR-30>
            <Image
              marginT-10
              marginB-20
              alignSelf="center"
              style={styles.miniLogo}
              source={{
                uri: images.settings
              }}
            />
            <Text white>Pengaturan</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  },
  miniLogo: {
    width: 50,
    height: 50,
    // marginRight: 50
  }
});


export default HomeScreen;
