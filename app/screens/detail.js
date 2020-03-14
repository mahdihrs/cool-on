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

import Organizations from '../components/Organizations';

const Detail = ({ navigation, route }) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://pbs.twimg.com/profile_images/378800000139769269/8c07223956186b1cff6566b84df7f079_400x400.jpeg'}}
        />
        <View style={styles.userInfo}>
          <Text style={styles.nameAndTitle}>Minzard</Text>
          <Text style={styles.desc}>minzarddillah</Text>
          <Text style={styles.desc}>Followers: 20</Text>
          <Text style={styles.desc}>Following: 10</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://google.com').catch((err) => console.error('An error occurred', err))}
          >
            https://google.com
          </Text>
        </View>
      </View>
      <Organizations />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  userInfo: {
    width: '50%',
    paddingLeft: 30
  },
  image: {
    width: 120,
    height: 120
  },
  nameAndTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  desc: {
    fontSize: 14,
    color: 'rgb(132,132,132)'
  },
  link: {
    color: 'rgb(64,111,172)',
    marginTop: 20
  }
})
  
export default Detail;
