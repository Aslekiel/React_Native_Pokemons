import messaging from '@react-native-firebase/messaging';

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    // eslint-disable-next-line no-console
    console.log(fcmToken);
  }
};

export default checkToken;
