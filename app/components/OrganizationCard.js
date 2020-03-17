import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const OrganizationCard = ({
  image,
  orgName,
  orgDesc = ''
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
      />
      <View style={styles.infoCard}>
        <Text style={styles.orgName}>{orgName}</Text>
        {orgDesc.length > 0 ?
          <Text style={styles.description}>{orgDesc}</Text>
          :
          <Text style={styles.description}>No Description</Text>
        }
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

OrganizationCard.propTypes = {
  image: PropTypes.string,
  orgName: PropTypes.string,
  orgDesc: PropTypes.string
}

export default OrganizationCard;
