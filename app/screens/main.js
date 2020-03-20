import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  ActivityIndicator,
  Text
} from 'react-native';

import SearchField from '../components/SearchField';
import UsersFoundList from '../components/UsersFoundList';

//actions
import { fetchUsers, clearUsersFound } from '../store/actions';

const Main = ({
  navigation,
  getUsers,
  usersFetched,
  loading,
  usersFetchedCalled,
  userKeyword
}) => {
  const [screenLoading, setLoading] = React.useState(false);

  const submit = (word) => {
    getUsers(word);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <SafeAreaView>
      <SearchField
        submit={submit}
        keyword={userKeyword}
      />
      {screenLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      )}
      {usersFetched.length > 0 && !loading && !screenLoading && (
        <>
          <UsersFoundList
            users={usersFetched}
            navigation={navigation}
          />
        </>
      )}
      {usersFetched.length === 0 && usersFetchedCalled && !screenLoading && (
        <Text>User not found</Text>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  usersFetched: state.githubLib.usersFetched,
  loading: state.githubLib.loading,
  usersFetchedCalled: state.githubLib.usersFetchedCalled,
  userKeyword: state.githubLib.keyword,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (q) => dispatch(fetchUsers(q)),
  clearUsersFound: () => dispatch(clearUsersFound())
});

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  getUsers: PropTypes.func,
  loading: PropTypes.bool,
  usersFetchedCalled: PropTypes.bool,
  userKeyword: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
