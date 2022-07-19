import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {Colors} from '../../assets/Colors';
import {BottomContainer} from '../../components/BottomContainer';
import CustomButton from '../../components/CustomButton';

export default function ChooseLanguage() {
  const Languages = ['English', 'Francais', 'العربية'];
  const [selected, setSelected] = React.useState(0);
  const navigation = useNavigation();
  const renderRow = ({item, index}) => {
    return (
      <View style={{margin: 7}}>
        <CustomButton
          isReverse={true}
          text={item}
          backgroundColor={
            index == selected ? 'rgba(0, 190, 255,0.3)' : 'white'
          }
          onPress={() => {
            setSelected(index);
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 95,
          height: 259,
        }}>
        <Image
          style={{
            width: 120,
            height: 80,
            marginBottom: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain"
          source={require('../../assets/Images/spin-logo.png')}
        />
        <Image
          style={{
            width: 120,
            height: 80,
            marginBottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain"
          source={require('../../assets/Images/spin-word.png')}
        />
        <Text>An online game with real-life prizes!</Text>
      </View>

      <BottomContainer height={364} show={true}>
        <Text
          style={{
            color: Colors.fontPrimary,
            fontSize: 24,
            fontWeight: 'bold',
            paddingLeft: 24,
            marginTop: 36,
            marginBottom: 24,
          }}>
          Choose Language
        </Text>
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          data={Languages}
          renderItem={renderRow}
        />
        <CustomButton
          isPrimary={true}
          text="Confrim Language"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </BottomContainer>
    </View>
  );
}
