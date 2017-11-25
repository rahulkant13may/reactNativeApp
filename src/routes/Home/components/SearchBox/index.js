import React from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input } from 'native-base';
import styles from './SearchBoxStyles';
import Icon from "react-native-vector-icons/FontAwesome"

export const SearchBox = () => {

    return (
      <View style={styles.searchBox}>
	      <View style={styles.inputWrapper}>
	      	<Text style={styles.label}> PICK UP </Text>
	      	<InputGroup>
	      		<Icon name="search" size={15} color="orange"/>
	      		<Input style={styles.inputSearch} placeholder= "choose pick-up location"/>
	      	</InputGroup>
	      </View>
      </View>
    );
};

export default SearchBox;