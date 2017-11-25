import React from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input } from 'native-base';
import styles from './SearchBoxStyles';

export const SearchBox = () => {

    return (
      <View style={styles.searchBox}>
      	<Text style={styles.label}> PICK UP </Text>
      	<InputGroup>
      		<Input style={styles.inputSearch} placeholder= "choose pick-up location"/>
      	</InputGroup>

      </View>
    );
};

export default SearchBox;