import {Dimensions} from 'react-native';
import {Colors} from '../../assets/Colors';

const {height, width} = Dimensions.get('window');

const styles = {
  phoneImageContainer: {},
  phoneImage: {
    height: height / 1.3453,
    width: width / 1.12275,
    marginBottom: 100,
  },
  tutorialImageList: {
    height: height - width / 20,
    width: width / 1.12275,
  },
  tutorialImageListComponentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  tutorialMessageContainer: {
    width: width / 1.19047,
    // justifyContent: 'center',
    marginTop: height / 90.5,
    marginBottom: height / 90.5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tutorialMessage: {
    fontSize: width / 19,

    // fontWeight: '450',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
  },
  messageButtonContainer: {
    position: 'absolute',
    paddingTop: height / 90.5,
    paddingBottom: height / 90.5,
    width: width,
    height: 320,
    backgroundColor: '#fff',
    borderRadius: height / 45.25,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
    elevation: 3,
    bottom: -25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tutorialMessageList: {
    width: width / 1.19047,
  },
  mainContainer: {
    flex: 1,

    paddingBottom: width / 17,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  innerContainer: {},

  letsGoButton: {
    height: 40,
    width: width / 1.9058,
    borderRadius: 10,
    bottom: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  letsGoText: {
    // fontWeight: '700',

    color: '#fff',
  },
  skipButton: {
    height: height / 22.625,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height / 80,
    marginBottom: height / 90.5,
  },
  skipText: {
    // fontWeight: '700',
    color: 'rgb(155,155,155)',
  },
};

export default styles;
