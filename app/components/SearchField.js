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
  };

  React.useEffect(() => {
    submitOnDebounce();

    return () => submitOnDebounce.cancel
  }, [keyword])

  const submitOnDebounce = debounce(() => {
    submit();
  }, 3000);

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
    backgroundColor: 'rgb(243,243,243)',
    height: 50
  }
})

SearchField.propTypes = {
  submit: PropTypes.func,
  setKeyword: PropTypes.func,
  keyword: PropTypes.string
}

export default SearchField;
