import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  Text,
  ActivityIndicator
} from 'react-native';

import SearchField from '../components/SearchField';
import UsersFoundList from '../components/UsersFoundList';

//actions
import { fetchUsers, clearUsersFound } from '../store/actions';

const Main = ({
  navigation,
  getUsers,
  gotUser,
  usersFetched,
  loading,
  usersFetchedCalled
}) => {
  const [ keyword, setKeyword ] = React.useState('');

  const submit = () => {
    getUsers(keyword);
  }

  return (
    <SafeAreaView>
      <SearchField
        setKeyword={setKeyword}
        submit={submit}
        keyword={keyword}
      />
      {/* {usersFetchedCalled && loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      )} */}
      {usersFetched.length > 0 && !loading && (
        <UsersFoundList
          users={usersFetched}
          navigation={navigation}
        />
      )}
      {usersFetched.length === 0 && usersFetchedCalled && (
        <Text>User not found</Text>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  gotUser: state.githubLib.userDetail,
  usersFetched: state.githubLib.usersFetched,
  loading: state.githubLib.loading,
  usersFetchedCalled: state.githubLib.usersFetchedCalled
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (q) => dispatch(fetchUsers(q)),
  clearUsersFound: () => dispatch(clearUsersFound())
});

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  getUsers: PropTypes.func,
  loading: PropTypes.bool,
  usersFetchedCalled: PropTypes.bool
  // usersFetched: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
