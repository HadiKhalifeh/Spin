import * as React from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

const DEFAULT_HEIGHT = 300;

function useAnimatedBottom(show, height, login) {
  console.log(show, 'showw');
  const animatedValue = React.useRef(new Animated.Value(0));

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  React.useEffect(() => {
    console.log(show, login, 'loginnn');
    if (show) {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: login ? 1 : 300,
        // Accelerate then decelerate - https://cubic-bezier.com/#.28,0,.63,1
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false, // 'bottom' is not supported by native animated module
      }).start();
    } else {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 250,
        // Accelerate - https://easings.net/#easeInCubic
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  return bottom;
}

interface Props {
  children: React.ReactNode;
  show: boolean;
  height?: number;
  login: Boolean;
  opacity?: number;

  onOuterClick?: () => void;
}

export function BottomContainer({
  children,
  show,
  height = DEFAULT_HEIGHT,
  login,
  opacity,

  onOuterClick,
}: Props) {
  const {height: screenHeight} = useWindowDimensions();

  const bottom = useAnimatedBottom(show, height, login);

  return (
    <>
      {/* Outer semitransparent overlay - remove it if you don't want it */}
      {/* show && (
        <Pressable
          onPress={onOuterClick}
          style={[styles.outerOverlay, {height: screenHeight}]}>
          <View />
        </Pressable>
      ) */}
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            height,
            bottom,
            opacity,
            //  transform: [{translateY: translateY}],
          },
        ]}>
        {children}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    height: 800,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: 'black',
    shadowOffset: {height: 1},
    shadowOpacity: 0.3,
  },
});
