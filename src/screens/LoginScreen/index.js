import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInputBase,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Keyboard,
} from 'react-native';
import {Colors} from '../../assets/Colors';
import AlertMessage from '../../components/AlertMessage';
import {BottomContainer} from '../../components/BottomContainer';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

export default function LoginScreen() {
  const Languages = ['English', 'Francais', 'العربية'];
  const [selected, setSelected] = React.useState(0);
  const minheight = React.useRef(new Animated.Value(0)).current;
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        hide();
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const coverTranslateY = minheight.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  const handleValidEmail = () => {
    let reg = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/;
    let val = email;
    console.log(val, 'vall');
    if (val.length === 0) {
      setError(true);
    } else if (reg.test(val) === false) {
      console.log(val, 'falsee');
      setError(true);
    } else if (reg.test(val) === true) {
      navigation.navigate('Success');
      setError(false);
    }
  };
  const start = () => {
    Animated.timing(minheight, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  const hide = () => {
    Animated.timing(minheight, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const renderInputs = () => {
    return (
      <ScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <BottomContainer height={error ? 349 : 244} show={true}>
          <View
            style={{
              margin: 24,
              //    bottom: 100,
            }}>
            {error ? (
              <AlertMessage
                message={
                  'This email is invalid. Please use the email address used in your Spin invitation.'
                }
              />
            ) : null}
            <Text
              style={{
                textAlign: 'left',
                marginBottom: 8,
                color: '#707070',
                fontFamily: 'Proxima Nova',
              }}>
              EMAIL ADDRESS
            </Text>
            <TextInput
              style={{
                borderColor: '#E7E7E7',
                borderWidth: 1,
                borderRadius: 12,
                width: 327,
                height: 44,
              }}
              onPressIn={start}
              onChangeText={text => setEmail(text)}
            />
            <Text
              style={{
                paddingTop: 24,
                textAlign: 'center',
                color: '#707070',
                fontWeight: 'bold',
              }}>
              Didn’t receive an invitation?
              <Text
                style={{
                  color: Colors.primary,
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                {' '}
                Request access.
              </Text>
            </Text>
          </View>

          <CustomButton
            isPrimary={true}
            text="Verify invitation"
            onPress={() => {
              handleValidEmail();
            }}
          />
        </BottomContainer>
      </ScrollView>
    );
  };
  return (
    <>
      <Animated.View
        style={[
          styles.main,
          {
            transform: [
              {
                translateY: coverTranslateY,
              },
            ],
          },
        ]}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../assets/Images/spin-logo.png')}
        />

        <Text>Spin is currently by invitation only.</Text>
        <Text style={{textAlign: 'center'}}>
          If you’ve received an invitation, enter you email address below.
        </Text>
      </Animated.View>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        {renderInputs()}
      </KeyboardAvoidingView>
    </>
  );
}
