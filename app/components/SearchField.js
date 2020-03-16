import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const SearchField = ({ submit, setKeyword, keyword }) => {
  const onChange = (word) => {
    setKeyword(word);
    // setTimeout(() => {
    //   debounce(submit, 500)();
    // }, 500);
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
      value={keyword}
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
