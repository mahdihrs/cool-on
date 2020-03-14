import React from 'react';

import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar
} from 'react-native';

const Detail = ({ navigation, route }) => {
  console.log(route.params.name, 'route')

  return (
    <SafeAreaView>
      <Text>Detail</Text>
    </SafeAreaView>
      
    );
  }
  
  export default Detail;
