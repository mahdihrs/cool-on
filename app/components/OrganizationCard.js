import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const OrganizationCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{ uri: 'https://pbs.twimg.com/profile_images/378800000139769269/8c07223956186b1cff6566b84df7f079_400x400.jpeg' }}
      />
      <View style={styles.infoCard}>
        <Text style={styles.orgName}>Portfolio</Text>
        <Text style={styles.description}>Description</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    marginHorizontal: 15,
    marginVertical: 8,
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'rgb(220,220,220)',
    borderRadius: 5
  },
  image: {
    width: 50,
    height: 50
  },
  infoCard: {
    paddingLeft: 15
  },
  description: {
    color: 'rgb(132,132,132)'
  },
  orgName: {
    fontWeight: 'bold'
  }
});

export default OrganizationCard;
