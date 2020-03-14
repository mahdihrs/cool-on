import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Image
} from 'react-native';

import OrganizationCard from './OrganizationCard';

const Organizations = () => {
  return (
    <>
      <Text style={styles.title}>Organizations</Text>
      <OrganizationCard />
      <OrganizationCard />
      <OrganizationCard />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    margin: 15,
    fontWeight: 'bold'
  }
});

export default Organizations;
