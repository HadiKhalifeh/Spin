import * as React from 'react';
import {Text, View} from 'react-native';

export default function AlertMessage({message}) {
  return (
    <View
      style={{
        width: 327,
        height: 81,
        borderRadius: 24,
        backgroundColor: 'rgba(239, 81, 114,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        //  opacity: 0.3,
      }}>
      <Text
        style={{
          color: '#EF5172',

          fontWeight: 'bold',
          fontSize: 14,
        }}>
        {message}
      </Text>
    </View>
  );
}
