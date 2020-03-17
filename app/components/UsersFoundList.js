import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Item({
  title,
  navigation
}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('Detail', {
          name: title
        })}
    >
      <Icon name="account" size={25} color="#4F8EF7" />
      <View style={styles.middleItem}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSideItem}>
        <Icon name="arrow-right-circle" size={25} color="#4F8EF7" />
      </View>
    </TouchableOpacity>
  );
}

const UsersFoundList = ({ navigation, users }) => {
  const [usersToShow, setUsersToShow] = React.useState(users.slice(0, 8));
  const [nextUserStartingIndex, setNextStartingIndex] = React.useState(8);
  const [nextUserEndIndex, setNextEndIndex] = React.useState(16);
  const [loading, setLoading] = React.useState(false);

  const configureOffset = () => {
    setLoading(true);
    const nextUsersToShow = [...usersToShow, ...users.slice(nextUserStartingIndex, nextUserEndIndex)];
    if (nextUserStartingIndex < users.length) {
      setTimeout(() => {
        setUsersToShow(nextUsersToShow);

        // set next index
        setNextStartingIndex(nextUserStartingIndex + 8 > users.length ? users.length : nextUserStartingIndex + 8);
        setNextEndIndex(nextUserEndIndex + 8 < users.length  ? nextUserEndIndex + 8 : nextUserEndIndex + (users.length - nextUserEndIndex));
  
        // finish loading
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <FlatList
        data={usersToShow}
        renderItem={({ item }) =>
          <Item
            title={item.login}
            navigation={navigation}
          />
        }
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.1}
        onEndReached={configureOffset}
        style={{height: '85%'}}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2
  },
  item: {
    backgroundColor: 'rgb(207,215,221)',
    padding: 10,
    marginVertical: 2,
    flex: 1,
    flexDirection: 'row'
  },
  leftSideItem: {
    width: '5%',
    paddingRight: 15,
    marginRight: 10
  },
  middleItem: {
    width: '85%',
    marginRight: 10,
    marginLeft: 7
  },
  rightSideItem: {
    marginLeft: -10
  },
  title: {
    // fontSize: 15
  }
});

export default UsersFoundList;
