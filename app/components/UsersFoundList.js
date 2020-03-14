import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      {/* <View style={styles.leftSideItem}>
      </View> */}
      <Icon name="account" size={25} color="#4F8EF7" />
      <View style={{width: '85%', backgroundColor: 'skyblue', marginRight: 10, marginLeft: 7}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSideItem} />
    </View>
  );
}

const UsersFoundList = () => {

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      initialNumToRender={3}
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
    // backgroundColor: 'powderblue',
    marginRight: 10
  },
  rightSideItem: {
    width: '5%',
    backgroundColor: 'steelblue'
  },
  title: {
    // fontSize: 15
  },
});

export default UsersFoundList;
