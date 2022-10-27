import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {setUser} from '../../store/user/user';
import UserProfilesStyles from './UserProfile.styles';

const UserProfile = () => {
  const {user} = useAppSelector(state => state.user);

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
    <SafeAreaView style={UserProfilesStyles.container}>
      <View style={UserProfilesStyles.infoWrapper}>
        <Text style={UserProfilesStyles.mainTitle}>My Profile</Text>
        <Image
          style={UserProfilesStyles.avatar}
          source={require('../../assets/emptyAvatar.png')}
        />
        <Text style={UserProfilesStyles.username}>{user?.username}</Text>
        {user?.fullname && <Text>{user?.fullname}</Text>}
      </View>
      <View style={UserProfilesStyles.buttonContainer}>
        <CustomButton title="Quit" onPress={onPressQuit} />
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
