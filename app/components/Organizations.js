import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text
} from 'react-native';

import OrganizationCard from './OrganizationCard';

const Organizations = ({ orgs }) => {
  return (
    <>
      <Text style={styles.title}>Organizations</Text>
      {orgs.orgs.length < 1 && (
        <Text style={styles.noOrgText}>No Organization to Show</Text>
      )}
      {orgs.orgs.map(org => (
        <OrganizationCard
          key={org.id}
          image={org.avatar_url}
          orgName={org.login}
          orgDesc={org.description}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    margin: 15,
    fontWeight: 'bold'
  },
  noOrgText: {
    paddingLeft: 15,
    color: 'rgb(132,132,132)'
  }
});

Organizations.propTypes = {
  orgs: PropTypes.shape({
    loading: PropTypes.bool,
    orgs: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Organizations;
