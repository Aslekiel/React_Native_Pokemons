import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/Button';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {setUser} from '../../store/user/user';

const UserProfile = () => {
  const {user} = useAppSelector(state => state.user);
  console.log(user);
  const dispatch = useAppDispatch();

  const onPressQuit = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(setUser({user: null, token: null}));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Profile</Text>
      <CustomButton title="Quit" onPress={onPressQuit} />
    </View>
  );
};

export default UserProfile;
