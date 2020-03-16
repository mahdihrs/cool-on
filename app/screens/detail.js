import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { userDetail, clearDetail, clearUsersFound } from '../store/actions';
import Organizations from '../components/Organizations';

const Detail = ({
  navigation,
  route,
  getUserDetail,
  clearDetail,
  userDetail,
  userOrg,
  clearUsersFound
}) => {
  React.useEffect(() => {
    getUserDetail(route.params.name);
    clearUsersFound();
    
    return () => {
      clearDetail()
    }
  }, []);

  return (
    <SafeAreaView>
      {userDetail.loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      )}
      {!userDetail.loading && (
        <>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{ uri: `${userDetail.detail.avatar_url}` }}
            />
            <View style={styles.userInfo}>
              <Text style={styles.nameAndTitle}>{userDetail.detail.name || userDetail.detail.login}</Text>
              <Text style={styles.desc}>{userDetail.detail.login}</Text>
              <Text style={styles.desc}>Followers: {userDetail.detail.followers}</Text>
              <Text style={styles.desc}>Following: {userDetail.detail.following}</Text>
              <Text style={styles.link}>
                {userDetail.detail.html_url}
              </Text>
            </View>
          </View>
          <Organizations
            orgs={userOrg}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  userDetail: state.githubLib.userDetail,
  userOrg: state.githubLib.userOrg
});

const mapDispatchToProps = (dispatch) => ({
  getUserDetail: (username) => dispatch(userDetail(username)),
  clearDetail: () => dispatch(clearDetail()),
  clearUsersFound: () => dispatch(clearUsersFound())
});

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
});

Detail.propTypes = {
  getUserDetail: PropTypes.func,
  clearUsersFound: PropTypes.func,
  clearDetail: PropTypes.func
  // userDetail: PropTypes.,
  // userOrg: PropTypes.
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
