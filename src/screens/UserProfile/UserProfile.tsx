/* eslint-disable global-require */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomText from '../../components/CustomText/CustomText';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setUser } from '../../store/user/user';
import UserProfilesStyles from './UserProfile.styles';

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const onPressQuit = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(setUser({ user: null, token: null }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={UserProfilesStyles.container}>
      <View style={UserProfilesStyles.infoWrapper}>
        <CustomText style={UserProfilesStyles.mainTitle}>My Profile</CustomText>
        <Image
          style={UserProfilesStyles.avatar}
          source={require('../../assets/emptyAvatar.png')}
        />
        <CustomText style={UserProfilesStyles.username}>
          {user?.username}
        </CustomText>
        {user?.fullname && (
          <CustomText style={UserProfilesStyles.username}>
            {user?.fullname}
          </CustomText>
        )}
      </View>
      <View style={UserProfilesStyles.buttonContainer}>
        <CustomButton title="Quit" onPress={onPressQuit} />
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
