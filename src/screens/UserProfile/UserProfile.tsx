import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import CustomText from 'src/components/CustomText';
import CustomButton from 'src/components/CustomButton';

import useCurrentUser from 'src/hooks/useCurrentUser';

import images from 'src/constants/images';

import { removeTokenFromStorage } from 'src/utils/storage';

import UserProfilesStyles from './UserProfile.styles';

const UserProfile = () => {
  const { user, clearUserData } = useCurrentUser(null);

  const onPressQuit = async () => {
    try {
      await clearUserData();
      await removeTokenFromStorage('token');
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
          source={images.emptyAvatar}
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
