import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
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
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => 
        <Item
          title={item.login}
          navigation={navigation}
        />
      }
      keyExtractor={item => String(item.id)}
      initialNumToRender={6}
      onEndReachedThreshold={0.7}
    />
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
