import {useNavigation} from '@react-navigation/native';
import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../assets/Colors';

import styles from './styles';

const flatlistAnimated = new Animated.Value(0);
const {height, width} = Dimensions.get('window');
const tutorial = [
  {
    image: require('../../assets/Images/onBoarding1.png'),
    message: 'Spin & win',
    description: 'Spin the wheel to win prizes you’ll love!',
    backgroundColor: '#3C3C50',
  },
  {
    image: require('../../assets/Images/onBoarding3.png'),
    message: 'Answer & spin',
    description: 'Answer daily surveys to level up and get more points!',

    backgroundColor: '#4D48DA',
  },
  {
    image: require('../../assets/Images/onBoarding4.png'),
    message: 'Collect points',
    description: 'The more points you have, the more spins you can get!',

    backgroundColor: '#FFB900',
  },
  {
    image: require('../../assets/Images/onBoarding5.png'),
    message: 'Spin every day',
    description: 'Get a daily new spin to keep playing!',

    backgroundColor: '#00CA47',
  },
];

export default function OnBoardingScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const animatedFlatlistref = useRef(null);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const renderIndicator = index => {
    const countableWidth = width / 1.12275;
    return (
      <View
        style={{
          width: height / 90.5,
          height: height / 90.5,
          borderRadius: width / 93.75,
          marginRight: 3,
          marginLeft: 3,
          margin: height / 60,
          backgroundColor: 'rgb(216, 216, 216)',
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            width: width / 46.875,
            height: width / 46.875,
            borderRadius: width / 93.75,
            opacity: flatlistAnimated.interpolate({
              inputRange: [
                countableWidth * index - countableWidth,
                countableWidth * index,
                countableWidth * index + countableWidth,
              ],
              outputRange: [0, 1, 0],
            }),
            backgroundColor: Colors.primary,
          }}
        />
      </View>
    );
  };

  const renderIndicators = () => {
    let body = [];
    tutorial.forEach((item, index) => body.push(renderIndicator(index)));
    return (
      <View
        style={{
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          // zIndex: 10,
          // height: height / 100,
        }}>
        {body}
      </View>
    );
  };

  const renderPhoneImage = (item, index) => {
    return (
      <View style={{backgroundColor: item.backgroundColor}}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={styles.phoneImage}
        />
      </View>
    );
  };

  const renderMessage = (item, index) => {
    return (
      <View style={styles.tutorialMessageContainer}>
        <Text style={styles.tutorialMessage}>{item.message.toUpperCase()}</Text>
      </View>
    );
  };

  const goToNextScreen = () => {
    //TODO go to next screen
    try {
      animatedFlatlistref.current.scrollToIndex({index: selectedIndex + 1});
    } catch (err) {
      err;
    }
  };

  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: tutorial[selectedIndex].backgroundColor},
      ]}>
      <View style={styles.innerContainer}>
        <Animated.FlatList
          ref={animatedFlatlistref}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tutorialImageListComponentContainer}
          data={tutorial}
          renderItem={({item, index}) => renderPhoneImage(item, index)}
          style={styles.tutorialImageList}
          bounces={false}
          onScroll={Animated.event(
            // Animated.event returns a function that takes an array where the first element...
            [{nativeEvent: {contentOffset: {x: flatlistAnimated}}}],
            {
              listener: event => {
                let value = event.nativeEvent.contentOffset.x;
                setSelectedIndex(
                  Math.round((value + width / 3.7) / (width / 1.12275)),
                );

                try {
                  flatListRef.current.scrollToIndex({
                    index: value / (width / 1.12275),
                    animated: false,
                  });
                } catch (err) {
                  err;
                }
              },
              useNativeDriver: true, // <- Native Driver used for animated events
            },
          )}
        />
        <View style={styles.messageButtonContainer}>
          {renderIndicators()}
          <FlatList
            ref={flatListRef}
            horizontal={true}
            scrollEnabled={false}
            data={tutorial}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => renderMessage(item, index)}
            style={styles.tutorialMessageList}
          />
          <TouchableOpacity
            onPress={() =>
              selectedIndex !== 3
                ? goToNextScreen()
                : navigation.navigate('Wheel')
            }
            style={styles.letsGoButton}>
            <Text style={styles.letsGoText}>
              {selectedIndex < 3 ? 'Next' : `Get started`}
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EnterPhoneScreen')} style={styles.skipButton}>
                            <Text style={styles.skipText}>Skip</Text>
                       </TouchableOpacity>*/}
        </View>
      </View>
    </View>
  );
}
