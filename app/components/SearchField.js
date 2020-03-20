import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const SearchField = ({ submit, keyword }) => {
  const onChange = (word) => {
    submitOnDebounce(word);
  };

  React.useEffect(() => {
    const submitIt = submitOnDebounce;
    return () => submitIt.cancel
  }, [])
  
  const submitOnDebounce = debounce((word) => {
    submit(word);
  }, 1000);

  return (
    <TextInput
      inlineImageLeft='search_icon'
      placeholder='Search ...'
      borderBottomWidth={2}
      returnKeyType='search'
      clearButtonMode='while-editing'
      onChangeText={onChange}
      onSubmitEditing={(event) => submit(event.nativeEvent.text)}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(243,243,243)',
    height: 50
  }
})

SearchField.propTypes = {
  submit: PropTypes.func,
  keyword: PropTypes.string
}

export default SearchField;
