import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setUser } from 'src/store/user';

import CustomText from 'src/components/CustomText';
import CustomButton from 'src/components/CustomButton';

import emptyAvatar from 'src/assets/emptyAvatar.png';

import UserProfilesStyles from './UserProfile.styles';

const UserProfile = () => {
  const user = useAppSelector((state) => state.user.user);

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
        <CustomText style={UserProfilesStyles.mainTitle}>
          My Profile
        </CustomText>

        <Image
          style={UserProfilesStyles.avatar}
          source={emptyAvatar}
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
