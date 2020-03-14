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


const Main = () => {
  return (
    <SafeAreaView>
      <SearchField />
      <UsersFoundList />
      <Text>123 hehehe</Text>
    </SafeAreaView>
  );
}

export default Main;
