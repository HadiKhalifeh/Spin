import * as React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors} from '../../assets/Colors';

import styles from './styles';
const {width} = Dimensions.get('window');
function CustomButton({
  isPrimary,
  text,
  style,
  onPress,
  isReverse,
  backgroundColor,
}) {
  return isReverse ? (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={[
        style,
        styles.Button,
        {alignItems: 'flex-start', justifyContent: 'flex-start', width: 327},
      ]}>
      <View
        style={[
          style,
          styles.Button,
          {alignItems: 'flex-start', justifyContent: 'flex-start'},
          {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: Colors.primary,
          },
        ]}>
        <Text
          style={[
            styles.textButton,
            {
              color: Colors.primary,
              textAlign: 'left',
              padding: 10,
              paddingLeft: 20,
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View
      style={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: 96,
        width: width,
        shadowColor: 'black',
        shadowOffset: {height: -1},
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 100,
      }}>
      <TouchableWithoutFeedback
        onPress={onPress}
        style={[style, styles.Button]}>
        <View
          style={[
            style,
            styles.Button,
            {
              backgroundColor: isPrimary ? Colors.primary : Colors.secondary,
            },
          ]}>
          <Text
            style={[
              styles.textButton,
              {color: isPrimary ? 'white' : Colors.primary},
            ]}>
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default CustomButton;
