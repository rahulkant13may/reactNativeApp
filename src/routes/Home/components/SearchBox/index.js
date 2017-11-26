import React from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input } from 'native-base';
import styles from './SearchBoxStyles';
import Icon from "react-native-vector-icons/FontAwesome"

export const SearchBox = ({getInputData}) => {
	function handleInput(key,val) {
		console.log("keyy",key);
		console.log(val);

		getInputData({
			key,
			value:val
		})
	}

    return (
      <View style={styles.searchBox}>
	      <View style={styles.inputWrapper}>
	      	<Text style={styles.label}> PICK UP </Text>
	      	<InputGroup>
	      		<Icon name="search" size={15} color="orange"/>
	      		<Input 
	      			style={styles.inputSearch} 
	      			placeholder= "choose pick-up location"
	      			onChangeText={handleInput.bind(this,"pickUp")}
	      			/>
	      	</InputGroup>
	      </View>
	      <View style={styles.secondInputWrapper}>
	      	<Text style={styles.label}> DROP OFF </Text>
	      	<InputGroup>
	      		<Icon name="search" size={15} color="orange"/>
	      		<Input 
	      			style={styles.inputSearch} 
	      			placeholder= "choose drop-off location"
	      			onChangeText={handleInput.bind(this,"dropOff")}
	      			/>
	      	</InputGroup>
	      </View>
      </View>
    );
};

export default SearchBox;