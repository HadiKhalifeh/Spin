import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

export default function SplashScreen() {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Language');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{height: 120, width: 76}}
        source={require('../../assets/Images/spin-logo.png')}
      />
    </View>
  );
}
