import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const SearchField = ({ submit, setKeyword }) => {
  const onChange = (word) => {
    setKeyword(word);
  }

  return (
    <TextInput
      inlineImageLeft='search_icon'
      placeholder='Search ...'
      borderBottomWidth={2}
      returnKeyType='search'
      clearButtonMode='while-editing'
      onChangeText={onChange}
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

SearchField.propTypes = {
  submit: PropTypes.func,
  setKeyword: PropTypes.func
}

export default SearchField;
