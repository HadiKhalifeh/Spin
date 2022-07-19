import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default function SuccessScreen() {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('onBoarding');
    }, 2000);
  }, []);
  return (
    <ImageBackground
      style={styles.mainBackground}
      source={require('../../assets/Images/dots.png')}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 80, height: 80, marginBottom: 24}}
          source={require('../../assets/Images/success.png')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 12,
          }}>
          You're on the list!
        </Text>
        <Text style={{marginBottom: 48, textAlign: 'center'}}>
          We’ll send your invite by email the moment you get to the top of the
          list. Stay tuned!
        </Text>
        <Text style={{marginBottom: 12}}>Stay Connected!</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewBtn}>
            <Icon color={'#3C3C50'} size={20} name="facebook" />
          </View>
          <View style={styles.viewBtn}>
            <Icon color={'#3C3C50'} size={20} name="linkedin" />
          </View>
          <View style={styles.viewBtn}>
            <Icon color={'#3C3C50'} size={20} name="instagram" />
          </View>
          <View style={styles.viewBtn}>
            <Icon color={'#3C3C50'} size={20} name="twitter" />
          </View>
          <View style={styles.viewBtn}>
            <Icon color={'#3C3C50'} size={20} name="link" />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
