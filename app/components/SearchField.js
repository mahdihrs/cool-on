import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const SearchField = () => {

  const submit = () => {
    console.log('submittt 123')
  }

  return (
    <TextInput
      inlineImageLeft='search_icon'
      placeholder='Search ...'
      borderBottomWidth={2}
      returnKeyType='search'
      clearButtonMode='while-editing'
      onSubmitEditing={submit}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(243,243,243)'
  }
})

export default SearchField;
