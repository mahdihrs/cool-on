import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SearchField from '../components/SearchField';
import UsersFoundList from '../components/UsersFoundList';

const Main = ({ navigation }) => {

  return (
    <SafeAreaView>
      <SearchField />
      <UsersFoundList />
      <Text
        onPress={() =>
          navigation.navigate('Detail', {
            name: 'minzardillah'
          })}
      >
        123 hehehe 123
      </Text>
    </SafeAreaView>
  );
}

export default Main;
